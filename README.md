# A simple cookies consent implementation

[Demo](https://takisrs.github.io/cookies-consent/dist/)

## Installation

Include the javascript and css files in your HTML document.

```html
<link href="dist/cookies-consent.css" rel="stylesheet">
<script src="dist/cookies-consent.min.js"></script>
```



## Usage

### Init cookies popup dialog

Check if the user has already give his consent, otherwise init the popup. You may pass an object to overwrite the defaults.

```javascript
if (!cookiesConsent.hasConsentCookie())
    cookiesConsent.init({
        cookieName: "cookies",
        rootClass: "cookies",
        cookieDuration: 60 * 60 * 24 * 365,
        containerEl: "body",
        title: "This website uses cookies",
        description: "We use cookies and other tracking technologies to improve your browsing experience on our website, to show you personalized content and targeted ads, to analyze our website traffic, and to understand where our visitors are coming from. By browsing our website, you consent to our use of cookies and other tracking technologies.",
        buttonApprove: "Accept",
        buttonManage: "Preferences",
        buttonSave: "Save",
        subtitle: "Manage your cookie preferences",
        categories: [
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
    });
```

### Check if cookies are enabled for a specific category

```javascript
if (cookiesConsent.isEnabled('statistics')){
    console.log("Statistic cookies are enabled!");
}
```
