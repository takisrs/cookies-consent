export const cookieName = "cookies";
export const rootClass = "cookies";
export const cookieDuration = 60 * 60 * 24 * 365;

export const containerEl = "body";
export const title = "This website uses cookies";
export const description = "We use cookies and other tracking technologies to improve your browsing experience on our website, to show you personalized content and targeted ads, to analyze our website traffic, and to understand where our visitors are coming from. By browsing our website, you consent to our use of cookies and other tracking technologies.";
export const buttonApprove = "Accept";
export const buttonManage = "Preferences";
export const buttonSave = "Save";
export const subtitle = "Manage your cookie preferences";
export const categories = [
    {
        name: 'necessary',
        checked: true,
        disabled: true,
        title: 'Necessary cookies',
        description: 'Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.'
    },
    {
        name: 'statistics',
        checked: false,
        disabled: false,
        title: 'Statistic cookies',
        description: 'Statistic cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.'
    },
    {
        name: 'marketing',
        checked: false,
        disabled: false,
        title: 'Marketing cookies',
        description: 'Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.'
    }
];