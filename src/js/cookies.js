export const initCookies = (settings = {}) => {
    const containerEl = document.querySelector(settings.container || 'body');
    const title = settings.title || "This website uses cookies";
    const description = settings.description || "We use cookies and other tracking technologies to improve your browsing experience on our website, to show you personalized content and targeted ads, to analyze our website traffic, and to understand where our visitors are coming from. By browsing our website, you consent to our use of cookies and other tracking technologies.";
    const buttonApprove = settings?.buttons?.approve || "Accept";
    const buttonManage = settings?.buttons?.manage || "Preferences";
    const buttonSave = settings?.buttons?.save || "Save";
    const subtitle = settings.subtitle || "Manage your cookie preferences";

    const categories = settings.categories || [
        {
            name: 'necessary',
            checked: true,
            disabled: true,
            title: 'Necessary cookies',
            description: ''
        },
        {
            name: 'statistics',
            checked: false,
            disabled: false,
            title: 'Analytical cookies',
            description: ''
        },
        {
            name: 'marketings',
            checked: false,
            disabled: false,
            title: 'Marketing cookies',
            description: ''
        }
    ];

    const createCategory = (name, checked, disabled, title, description) => {
        disabled = disabled ? 'DISABLED' : '';
        checked = cookiesEnabled(name) || checked ? 'CHECKED' : '';
        return `
        <div class="cookies__category cookies__category--${name}">
            <h3>
                <label class="switch">
                    <input class="switch__input" type="checkbox" id="${name}_cookies" name="${name}_cookies" value="1" ${checked} ${disabled}>
                    <span class="switch__slide switch__slide--round"></span>
                </label>
                ${title}
            </h3>
            <div>${description}</div>
        </div>`
    }

    let categoriesHtml = '';
    if (categories.length > 0){
        for (let i = 0; i < categories.length; i++){
            categoriesHtml += createCategory(categories[i].name, categories[i].checked, categories[i].disabled, categories[i].title, categories[i].description);
        }
    }

    const template = `
    <div class="cookies">
        <h2 class="cookies__title">${title}</h2>
        <div class="cookies__message">${description}</div>
        
        <div class="cookies__actions">
            <a class="cookies__action cookies__action--approve btn" id="cookies-approve" href="#">${buttonApprove}</a><br/>
            <a class="cookies__action cookies__action--manage" id="cookies-manage" href="#">${buttonManage}</a>
        </div>

        <div class="cookies__preferences">
            <h2 class="cookies__title">${subtitle}</h2>

            <div class="cookies__categories">${categoriesHtml}</div>		

            <div class="cookies__actions">
                <a class="cookies__action cookies__action--save btn" id="cookies-save" href="#">${buttonSave}</a><br/>
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
        const cookiesPrefsEl = cookiesEl.querySelector('.cookies__preferences');
        if (cookiesPrefsEl)
            cookiesPrefsEl.style.display = cookiesPrefsEl.style.display == 'block' ? 'none' : 'block';
    });

    //approve cookies
    const cookiesApproveBtn = document.getElementById('cookies-approve');
    cookiesApproveBtn && cookiesApproveBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const cookieArr = {};
        if (categories.length > 0){
            for (let i = 0; i < categories.length; i++){
                cookieArr[categories[i].name] = true;
            }
        }
        
        document.cookie = 'cookies='+JSON.stringify(cookieArr)+';max-age=31536000;path=/';

        cookiesEl.remove();
    });

    //save preferences
    const cookiesSaveBtn = document.getElementById('cookies-save');
    cookiesSaveBtn && cookiesSaveBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const cookieArr = {};
        if (categories.length > 0){
            for (let i = 0; i < categories.length; i++){
                cookieArr[categories[i].name] = document.querySelector('#'+categories[i].name+'_cookies').checked;
            }
        }
        
        document.cookie = 'cookies='+JSON.stringify(cookieArr)+';max-age=31536000;path=/';

        cookiesEl.remove();
    });  

}

export const cookiesEnabled = (category) => {
    const cookies = document.cookie;
    const cookiesArr = cookies.split(";");
    let cookiesCategories = {};
    for (let i = 0; i < cookiesArr.length; i++){
        let cookie = cookiesArr[i].split('=');
        if (cookie[0].trim() === 'cookies'){
            cookiesCategories = JSON.parse(cookie[1]);
        }
    }

    if (category in cookiesCategories){
        return cookiesCategories[category];
    }
}