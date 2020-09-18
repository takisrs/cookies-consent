(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cookiesConsent"] = factory();
	else
		root["cookiesConsent"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "init", function() { return /* reexport */ cookies_init; });
__webpack_require__.d(__webpack_exports__, "isEnabled", function() { return /* reexport */ isEnabled; });
__webpack_require__.d(__webpack_exports__, "hasConsentCookie", function() { return /* reexport */ hasConsentCookie; });

// EXTERNAL MODULE: ./src/sass/main.scss
var main = __webpack_require__(0);

// CONCATENATED MODULE: ./src/js/defaults.js
var cookieName = "cookies";
var rootClass = "cookies";
var cookieDuration = 60 * 60 * 24 * 365;
var defaults_containerEl = "body";
var defaults_title = "This website uses cookies";
var defaults_description = "We use cookies and other tracking technologies to improve your browsing experience on our website, to show you personalized content and targeted ads, to analyze our website traffic, and to understand where our visitors are coming from. By browsing our website, you consent to our use of cookies and other tracking technologies.";
var defaults_buttonApprove = "Accept";
var defaults_buttonManage = "Preferences";
var defaults_buttonSave = "Save";
var defaults_subtitle = "Manage your cookie preferences";
var defaults_categories = [{
  name: 'necessary',
  checked: true,
  disabled: true,
  title: 'Necessary cookies',
  description: 'Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.'
}, {
  name: 'statistics',
  checked: false,
  disabled: false,
  title: 'Statistic cookies',
  description: 'Statistic cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.'
}, {
  name: 'marketing',
  checked: false,
  disabled: false,
  title: 'Marketing cookies',
  description: 'Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.'
}];
// CONCATENATED MODULE: ./src/js/cookies.js

var cookies_cookieName = cookieName;
var cookies_rootClass = rootClass;
var cookies_cookieDuration = cookieDuration;
var cookies_init = function init() {
  var _settings$buttons, _settings$buttons2, _settings$buttons3;

  var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  cookies_cookieName = settings.cookieName || cookies_cookieName;
  cookies_rootClass = settings.rootClass || cookies_rootClass;
  cookies_cookieDuration = settings.cookieDuration || cookies_cookieDuration;
  var containerEl = document.querySelector(settings.container || defaults_containerEl);
  var title = settings.title || defaults_title;
  var description = settings.description || defaults_description;
  var buttonApprove = (settings === null || settings === void 0 ? void 0 : (_settings$buttons = settings.buttons) === null || _settings$buttons === void 0 ? void 0 : _settings$buttons.approve) || defaults_buttonApprove;
  var buttonManage = (settings === null || settings === void 0 ? void 0 : (_settings$buttons2 = settings.buttons) === null || _settings$buttons2 === void 0 ? void 0 : _settings$buttons2.manage) || defaults_buttonManage;
  var buttonSave = (settings === null || settings === void 0 ? void 0 : (_settings$buttons3 = settings.buttons) === null || _settings$buttons3 === void 0 ? void 0 : _settings$buttons3.save) || defaults_buttonSave;
  var subtitle = settings.subtitle || defaults_subtitle;
  var categories = settings.categories || defaults_categories;
  var categoriesHtml = '';

  if (categories.length > 0) {
    for (var i = 0; i < categories.length; i++) {
      categoriesHtml += renderCategory(categories[i]);
    }
  }

  var template = "\n    <div class=\"".concat(cookies_rootClass, "\">\n        <h2 class=\"").concat(cookies_rootClass, "__title ").concat(cookies_rootClass, "__title--primary\">").concat(title, "</h2>\n        <div class=\"").concat(cookies_rootClass, "__message\">").concat(description, "</div>\n        \n        <div class=\"").concat(cookies_rootClass, "__actions\">\n            <a class=\"").concat(cookies_rootClass, "__action ").concat(cookies_rootClass, "__action--approve btn\" id=\"cookies-approve\" href=\"#\">").concat(buttonApprove, "</a><br/>\n            <a class=\"").concat(cookies_rootClass, "__action ").concat(cookies_rootClass, "__action--manage\" id=\"cookies-manage\" href=\"#\">").concat(buttonManage, "</a>\n        </div>\n\n        <div class=\"").concat(cookies_rootClass, "__preferences\">\n            <h2 class=\"").concat(cookies_rootClass, "__title ").concat(cookies_rootClass, "__title--secondary\">").concat(subtitle, "</h2>\n\n            <div class=\"").concat(cookies_rootClass, "__categories\">").concat(categoriesHtml, "</div>\t\t\n\n            <div class=\"").concat(cookies_rootClass, "__actions\">\n                <a class=\"").concat(cookies_rootClass, "__action ").concat(cookies_rootClass, "__action--save btn\" id=\"cookies-save\" href=\"#\">").concat(buttonSave, "</a><br/>\n            </div>\n        </div>\n    </div>");
  var cookiesEl = document.createElement('div');
  cookiesEl.innerHTML = template;
  containerEl.appendChild(cookiesEl); //manage cookies toggle

  var cookiesManageBtn = document.getElementById('cookies-manage');
  cookiesManageBtn && cookiesManageBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.target.classList.toggle(cookies_rootClass + '__action--active');
    var cookiesPrefsEl = cookiesEl.querySelector('.' + cookies_rootClass + '__preferences');
    if (cookiesPrefsEl) cookiesPrefsEl.style.display = cookiesPrefsEl.style.display == 'block' ? 'none' : 'block';
  }); //approve cookies

  var cookiesApproveBtn = document.getElementById('cookies-approve');
  cookiesApproveBtn && cookiesApproveBtn.addEventListener('click', function (e) {
    e.preventDefault();
    updatePrefs(categories, true);
    cookiesEl.remove();
  }); //save preferences

  var cookiesSaveBtn = document.getElementById('cookies-save');
  cookiesSaveBtn && cookiesSaveBtn.addEventListener('click', function (e) {
    e.preventDefault();
    updatePrefs(categories);
    cookiesEl.remove();
  });
};

var renderCategory = function renderCategory(category) {
  var disabled = category.disabled ? 'DISABLED' : '';
  var checked = isEnabled(category.name) || category.checked ? 'CHECKED' : '';
  return "\n    <div class=\"".concat(cookies_rootClass, "__category ").concat(cookies_rootClass, "__category--").concat(category.name, "\">\n        <h3>\n            <label class=\"switch\">\n                <input class=\"switch__input\" type=\"checkbox\" id=\"").concat(category.name, "_cookies\" name=\"").concat(category.name, "_cookies\" value=\"1\" ").concat(checked, " ").concat(disabled, ">\n                <span class=\"switch__slide switch__slide--round\"></span>\n            </label>\n            ").concat(category.title, "\n        </h3>\n        <div>").concat(category.description, "</div>\n    </div>");
};

var updatePrefs = function updatePrefs(categories) {
  var enableAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var cookieArr = {};

  if (categories.length > 0) {
    for (var i = 0; i < categories.length; i++) {
      cookieArr[categories[i].name] = enableAll ? true : document.querySelector('#' + categories[i].name + '_cookies').checked;
    }
  }

  document.cookie = cookies_cookieName + '=' + JSON.stringify(cookieArr) + ';max-age=' + cookies_cookieDuration + ';path=/';
};

var getConsentCookie = function getConsentCookie() {
  var cookies = document.cookie;
  var cookiesArr = cookies.split(";");

  for (var i = 0; i < cookiesArr.length; i++) {
    var cookie = cookiesArr[i].split('=');

    if (cookie[0].trim() === cookies_cookieName) {
      return JSON.parse(cookie[1]);
    }
  }
};

var hasConsentCookie = function hasConsentCookie() {
  return getConsentCookie() ? true : false;
};
var isEnabled = function isEnabled() {
  var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var cookiesCategories = getConsentCookie() || {};

  if (category && category in cookiesCategories) {
    return cookiesCategories[category];
  }

  return false;
};
// CONCATENATED MODULE: ./src/index.js




/***/ })
/******/ ]);
});
//# sourceMappingURL=cookies-consent.js.map