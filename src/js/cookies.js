import * as defaults from './defaults';

let cookieName = defaults.cookieName;
let rootClass = defaults.rootClass;
let cookieDuration = defaults.cookieDuration;

export const init = (settings = {}) => {
    cookieName = settings.cookieName || cookieName;
    rootClass = settings.rootClass || rootClass;
    cookieDuration = settings.cookieDuration || cookieDuration;
    const containerEl = document.querySelector(settings.container || defaults.containerEl);
    const title = settings.title || defaults.title;
    const description = settings.description || defaults.description;
    const buttonApprove = settings?.buttons?.approve || defaults.buttonApprove;
    const buttonManage = settings?.buttons?.manage || defaults.buttonManage;
    const buttonSave = settings?.buttons?.save || defaults.buttonSave;
    const subtitle = settings.subtitle || defaults.subtitle;

    const categories = settings.categories || defaults.categories;

    let categoriesHtml = '';
    if (categories.length > 0){
        for (let i = 0; i < categories.length; i++){
            categoriesHtml += renderCategory(categories[i]);
        }
    }

    const template = `
    <div class="${rootClass}">
        <h2 class="${rootClass}__title ${rootClass}__title--primary">${title}</h2>
        <div class="${rootClass}__message">${description}</div>
        
        <div class="${rootClass}__actions">
            <a class="${rootClass}__action ${rootClass}__action--approve button" id="cookies-approve" href="#">${buttonApprove}</a><br/>
            <a class="${rootClass}__action ${rootClass}__action--manage" id="cookies-manage" href="#">${buttonManage}</a>
        </div>

        <div class="${rootClass}__preferences">
            <h2 class="${rootClass}__title ${rootClass}__title--secondary">${subtitle}</h2>

            <div class="${rootClass}__categories">${categoriesHtml}</div>		

            <div class="${rootClass}__actions">
                <a class="${rootClass}__action ${rootClass}__action--save button" id="cookies-save" href="#">${buttonSave}</a><br/>
            </div>
        </div>
    </div>`;


    const cookiesEl = document.createElement('div');
    cookiesEl.innerHTML = template;
    containerEl.appendChild(cookiesEl);


    //manage cookies toggle
    const cookiesManageBtn = document.getElementById('cookies-manage');
    cookiesManageBtn && cookiesManageBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.target.classList.toggle(rootClass+'__action--active');
        const cookiesPrefsEl = cookiesEl.querySelector('.'+rootClass+'__preferences');
        if (cookiesPrefsEl)
            cookiesPrefsEl.style.display = cookiesPrefsEl.style.display == 'block' ? 'none' : 'block';
    });

    //approve cookies
    const cookiesApproveBtn = document.getElementById('cookies-approve');
    cookiesApproveBtn && cookiesApproveBtn.addEventListener('click', (e) => {
        e.preventDefault();

        updatePrefs(categories, true);

        cookiesEl.remove();
    });

    //save preferences
    const cookiesSaveBtn = document.getElementById('cookies-save');
    cookiesSaveBtn && cookiesSaveBtn.addEventListener('click', (e) => {
        e.preventDefault();
        updatePrefs(categories);

        cookiesEl.remove();
    });  

}

const renderCategory = (category) => {
    const disabled = category.disabled ? 'DISABLED' : '';
    const checked = isEnabled(category.name) || category.checked ? 'CHECKED' : '';
    return `
    <div class="${rootClass}__category ${rootClass}__category--${category.name}">
        <h3>
            <label class="switch">
                <input class="switch__input" type="checkbox" id="${category.name}_cookies" name="${category.name}_cookies" value="1" ${checked} ${disabled}>
                <span class="switch__slide switch__slide--round"></span>
            </label>
            ${category.title}
        </h3>
        <div>${category.description}</div>
    </div>`
}

const updatePrefs = (categories, enableAll = false) => {
    const cookieArr = {};

    if (categories.length > 0){
        for (let i = 0; i < categories.length; i++){
            cookieArr[categories[i].name] = enableAll ? true : document.querySelector('#'+categories[i].name+'_cookies').checked;
        }
    }

    document.cookie = cookieName+'='+JSON.stringify(cookieArr)+';max-age='+cookieDuration+';path=/';
}

const getConsentCookie = () => {
    const cookies = document.cookie;
    const cookiesArr = cookies.split(";");
    for (let i = 0; i < cookiesArr.length; i++){
        let cookie = cookiesArr[i].split('=');
        if (cookie[0].trim() === cookieName){
            return JSON.parse(cookie[1]);
        }
    }
}

export const hasConsentCookie = () => {
    return getConsentCookie() ? true : false; 
}

export const isEnabled = (category = undefined) => {
    const cookiesCategories = getConsentCookie() || {};

    if (category && category in cookiesCategories){
        return cookiesCategories[category];
    }

    return false;
}