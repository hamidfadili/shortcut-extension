/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _components_AppComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/** @jsx createElement */


document.getElementById("container").appendChild((0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)(_components_AppComponent__WEBPACK_IMPORTED_MODULE_1__.default, null));

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _ShortcutListComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/** @jsx createElement */



var activeLinkClass = "active";
var hiddenComponentClass = "hidden";
var activeComponent = "page";
var activeLink = "page-link";
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {
  return (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("div", null, (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("header", null, (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("img", {
    src: "../../images/icone-banner.png",
    alt: "icone"
  })), (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("ul", {
    "class": "nav nav-tabs"
  }, (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("li", {
    "class": "nav-item"
  }, (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("a", {
    id: "page-link",
    "class": "nav-link active",
    onClick: _goto("page")
  }, "Page")), (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("li", {
    "class": "nav-item"
  }, (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("a", {
    id: "site-link",
    "class": "nav-link",
    onClick: _goto("site")
  }, "Site")), (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("li", {
    "class": "nav-item"
  }, (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("a", {
    id: "global-link",
    "class": "nav-link",
    onClick: _goto("global")
  }, "Global"))), (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("div", {
    id: "site",
    "class": "hidden"
  }, (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("div", {
    "class": "site-data"
  }, (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("span", {
    "class": "key"
  }, "current website : "), (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("span", {
    "class": "value",
    id: "website"
  }, "Youtube.com")), (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("div", {
    "class": "shortcuts-space"
  }, (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)(_ShortcutListComponent__WEBPACK_IMPORTED_MODULE_1__.default, {
    shortcuts: (0,_data_store__WEBPACK_IMPORTED_MODULE_2__.default)()
  }))), (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("div", {
    id: "page"
  }, (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("div", {
    "class": "site-data"
  }, (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("span", {
    "class": "key"
  }, "current page : "), (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("span", {
    "class": "value",
    id: "website"
  }, "/watch")), (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("div", {
    "class": "shortcuts-space"
  }, (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)(_ShortcutListComponent__WEBPACK_IMPORTED_MODULE_1__.default, {
    shortcuts: (0,_data_store__WEBPACK_IMPORTED_MODULE_2__.default)("youtube.com", "/watch")
  }))), (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("div", {
    id: "global",
    "class": "hidden"
  }, (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("div", {
    "class": "site-data"
  }, (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("span", {
    "class": "key"
  }, "Global")), (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("div", {
    "class": "shortcuts-space"
  }, (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)(_ShortcutListComponent__WEBPACK_IMPORTED_MODULE_1__.default, {
    shortcuts: (0,_data_store__WEBPACK_IMPORTED_MODULE_2__.default)("youtube.com")
  }))));
}

var _goto = function _goto(componenet) {
  return function (e) {
    if (activeComponent == componenet) return;
    document.getElementById(componenet).classList.remove(hiddenComponentClass);
    document.getElementById(activeComponent).classList.add(hiddenComponentClass);
    activeComponent = componenet;
    document.getElementById(activeLink).classList.remove(activeLinkClass);
    document.getElementById(e.target.id).classList.add(activeLinkClass);
    activeLink = e.target.id;
  };
};

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var createElement = function createElement(name, props) {
  var element = null;

  if (typeof name === "function") {
    element = name(props);
  } else {
    element = document.createElement(name);
    Object.keys(props || {}).forEach(function (key) {
      if (key === "style") {
        Object.keys(props[key]).forEach(function (styleKey) {
          element.style[styleKey] = props[key][styleKey];
        });
      } else if (key === "class") {
        props[key].split(" ").forEach(function (cls) {
          return element.classList.add(cls);
        });
      } else if (key.startsWith("on")) {
        element.addEventListener(key.substr(2).toLowerCase(), props[key]);
      } else {
        element[key] = props[key];
      }
    });
  }

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  if (Array.isArray(children)) {
    children.forEach(function (child) {
      return addChild(element, child);
    });
  } else {
    addChild(element, children);
  }

  return element;
};

var addChild = function addChild(element, child) {
  if (Array.isArray(child)) {
    child.forEach(function (c) {
      return addChild(element, c);
    });
  } else if (child instanceof HTMLElement) {
    element.appendChild(child);
  } else if (typeof child === "string") {
    element.textContent = child;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _ShortcutComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/** @jsx createElement */


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (!props.shortcuts.length) {
    return (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("p", null, "No shortcuts found!");
  }

  return (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("table", null, props.shortcuts.map(function (shortcut) {
    return (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)(_ShortcutComponent__WEBPACK_IMPORTED_MODULE_1__.default, {
      shortcut: shortcut
    });
  }));
}

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/** @jsx createElement */

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _props$shortcut = props.shortcut,
      shortcut = _props$shortcut === void 0 ? {} : _props$shortcut;
  return (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("tr", null, (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("td", null, (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("input", {
    value: shortcut.keys,
    type: "text"
  })), (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("td", null, (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("select", {
    name: "type"
  }, (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("option", {
    selected: shortcut.actionType == "click",
    value: "click"
  }, "Click"), (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("option", {
    selected: shortcut.actionType == "focus",
    value: "focus"
  }, "Focus"), (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("option", {
    selected: shortcut.actionType == "open-link",
    value: "open-link"
  }, "Open link"))), (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("td", null, shortcut.actionType == "open-link" ? (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("input", {
    type: "text",
    value: shortcut.target
  }) : (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.default)("span", null, shortcut.target)));
}

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var store = {
  global: {
    shortcuts: [{
      keys: "alt+Y",
      actionType: "open-link",
      target: "https://youtube.com"
    }]
  },
  "youtube.com": {
    shortcuts: [{
      keys: "alt+S",
      actionType: "click",
      target: "#search"
    }, {
      keys: "alt+A",
      actionType: "click",
      target: "#logo"
    }],
    pages: {
      "/": {
        shortcuts: []
      },
      "/watch": {
        shortcuts: []
      }
    }
  }
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(site, page) {
  if (page) {
    var currentSite = store[site];
    if (!currentSite) return [];
    var currentPage = currentSite.pages[page];
    if (!page) return [];
    return currentPage.shortcuts;
  }

  if (site) {
    var _currentSite = store[site];
    if (!_currentSite) return [];
    return _currentSite.shortcuts;
  }

  return store.global.shortcuts;
}

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__(0);
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;