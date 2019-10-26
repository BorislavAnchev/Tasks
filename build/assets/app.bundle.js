/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contactlist.js":
/*!****************************!*\
  !*** ./src/contactlist.js ***!
  \****************************/
/*! exports provided: contact, indexIterator, prevContact, nextContact, addContact, deleteContact, updateContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contact\", function() { return contact; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"indexIterator\", function() { return indexIterator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prevContact\", function() { return prevContact; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nextContact\", function() { return nextContact; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addContact\", function() { return addContact; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteContact\", function() { return deleteContact; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateContact\", function() { return updateContact; });\nlet contact = [{\n  firstName: 'Borislav',\n  lastName: 'Anchev',\n  email: 'bobianchev@outlook.com',\n  phoneNumber: '0876080100'\n}, {\n  firstName: 'Anton',\n  lastName: 'Anchev',\n  email: 'antonanchev@outlook.com',\n  phoneNumber: '0876080101'\n}];\nlet indexIterator = 0;\nconst prevContact = () => {\n  if (contact.length === 0) {\n    alert('There are no contacts!');\n  } else if (indexIterator > 0) {\n    indexIterator -= 1;\n    document.getElementById(\"inputFirstName\").value = contact[indexIterator].firstName;\n    document.getElementById(\"inputLastName\").value = contact[indexIterator].lastName;\n    document.getElementById(\"inputEmail\").value = contact[indexIterator].email;\n    document.getElementById(\"inputPhoneNumber\").value = contact[indexIterator].phoneNumber;\n  } else {\n    alert('You are at the first contact!');\n  }\n};\nconst nextContact = () => {\n  if (contact.length === 0) {\n    alert('There are no contacts!');\n  } else if (indexIterator < contact.length - 1) {\n    indexIterator += 1;\n    document.getElementById(\"inputFirstName\").value = contact[indexIterator].firstName;\n    document.getElementById(\"inputLastName\").value = contact[indexIterator].lastName;\n    document.getElementById(\"inputEmail\").value = contact[indexIterator].email;\n    document.getElementById(\"inputPhoneNumber\").value = contact[indexIterator].phoneNumber;\n  } else {\n    alert('You are at the last contact!');\n  }\n};\nconst addContact = () => {\n  let formNotEmpty = document.getElementById(\"inputFirstName\").value != '' && document.getElementById(\"inputLastName\").value != '' && document.getElementById(\"inputEmail\").value != '' && document.getElementById(\"inputPhoneNumber\").value != '';\n  let contactIsDifferent = document.getElementById(\"inputFirstName\").value != contact[indexIterator].firstName || document.getElementById(\"inputLastName\").value != contact[indexIterator].lastName || document.getElementById(\"inputEmail\").value != contact[indexIterator].email || document.getElementById(\"inputPhoneNumber\").value != contact[indexIterator].phoneNumber;\n\n  if (!formNotEmpty) {\n    alert('Please fill some of the fields!');\n  } else if (!contactIsDifferent) {\n    alert('This contact already exists!');\n  } else {\n    let newContact = {\n      firstName: document.getElementById(\"inputFirstName\").value,\n      lastName: document.getElementById(\"inputLastName\").value,\n      email: document.getElementById(\"inputEmail\").value,\n      phoneNumber: document.getElementById(\"inputPhoneNumber\").value\n    };\n    contact.push(newContact);\n    indexIterator = contact.length - 1;\n  }\n};\nconst deleteContact = () => {\n  if (contact.length > 0) {\n    contact.splice(indexIterator, 1);\n\n    if (contact.length === 0) {\n      document.getElementById(\"inputFirstName\").value = '';\n      document.getElementById(\"inputFirstName\").placeholder = 'Enter first name';\n      document.getElementById(\"inputLastName\").value = '';\n      document.getElementById(\"inputLastName\").placeholder = 'Enter last name';\n      document.getElementById(\"inputEmail\").value = '';\n      document.getElementById(\"inputEmail\").placeholder = 'Enter email';\n      document.getElementById(\"inputPhoneNumber\").value = '';\n      document.getElementById(\"inputPhoneNumber\").placeholder = 'Enter phone number';\n    } else {\n      if (indexIterator === contact.length && indexIterator !== 0) {\n        indexIterator -= 1;\n      }\n\n      document.getElementById(\"inputFirstName\").value = contact[indexIterator].firstName;\n      document.getElementById(\"inputLastName\").value = contact[indexIterator].lastName;\n      document.getElementById(\"inputEmail\").value = contact[indexIterator].email;\n      document.getElementById(\"inputPhoneNumber\").value = contact[indexIterator].phoneNumber;\n    }\n  } else {\n    alert('There are no contacts to delete!');\n  }\n};\nconst updateContact = () => {\n  contact[indexIterator].firstName = document.getElementById(\"inputFirstName\").value;\n  contact[indexIterator].lastName = document.getElementById(\"inputLastName\").value;\n  contact[indexIterator].email = document.getElementById(\"inputEmail\").value;\n  contact[indexIterator].phoneNumber = document.getElementById(\"inputPhoneNumber\").value;\n};\n\n//# sourceURL=webpack:///./src/contactlist.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contactlist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactlist.js */ \"./src/contactlist.js\");\n\n\nconst prevButton = document.getElementById(\"prevButton\");\nconst addButton = document.getElementById(\"addButton\");\nconst updateButton = document.getElementById(\"updateButton\");\nconst delButton = document.getElementById(\"delButton\");\nconst nextButton = document.getElementById(\"nextButton\");\nprevButton.addEventListener(\"click\", _contactlist_js__WEBPACK_IMPORTED_MODULE_1__[\"prevContact\"]);\naddButton.addEventListener(\"click\", _contactlist_js__WEBPACK_IMPORTED_MODULE_1__[\"addContact\"]);\nupdateButton.addEventListener(\"click\", _contactlist_js__WEBPACK_IMPORTED_MODULE_1__[\"updateContact\"]);\ndelButton.addEventListener(\"click\", _contactlist_js__WEBPACK_IMPORTED_MODULE_1__[\"deleteContact\"]);\nnextButton.addEventListener(\"click\", _contactlist_js__WEBPACK_IMPORTED_MODULE_1__[\"nextContact\"]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/main.scss?");

/***/ })

/******/ });