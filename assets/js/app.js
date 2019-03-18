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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_resources/js/app.js":
/*!******************************!*\
  !*** ./_resources/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  // Get all the <h3> headings
  var headings = document.querySelectorAll('.section--home-faqs h3');
  Array.prototype.forEach.call(headings, function (heading) {
    // Give each <h3> a toggle button child
    // with the SVG plus/minus icon
    heading.innerHTML = "\n      <button aria-expanded=\"false\">\n        ".concat(heading.textContent, "\n        <svg width=\"46\" height=\"46\" viewBox=\"0 0 46 46\">\n          <path fill=\"#83D6C1\" stroke=\"#0D1D48\" stroke-width=\"4\" stroke-miterlimit=\"10\" d=\"M32.1 23.1v16.2l-14-8.1L4 23.1l14.1-8.2 14-8.1z\"/>\n        </svg>\n\n      </button>\n    "); // Function to create a node list
    // of the content between this <h3> and the next

    var getContent = function getContent(elem) {
      var elems = [];

      while (elem.nextElementSibling && elem.nextElementSibling.tagName !== 'H3') {
        elems.push(elem.nextElementSibling);
        elem = elem.nextElementSibling;
      } // Delete the old versions of the content nodes


      elems.forEach(function (node) {
        node.parentNode.removeChild(node);
      });
      return elems;
    }; // Assign the contents to be expanded/collapsed (array)


    var contents = getContent(heading); // Create a wrapper element for `contents` and hide it

    var wrapper = document.createElement('div');
    wrapper.hidden = true; // Add each element of `contents` to `wrapper`

    contents.forEach(function (node) {
      wrapper.appendChild(node);
    }); // Add the wrapped content back into the DOM
    // after the heading

    heading.parentNode.insertBefore(wrapper, heading.nextElementSibling); // Assign the button

    var btn = heading.querySelector('button');

    btn.onclick = function () {
      // Cast the state as a boolean
      var expanded = btn.getAttribute('aria-expanded') === 'true' || false; // Close all others if this one isn't open

      if (!expanded) {
        wrapper.parentNode.querySelectorAll('div').forEach(function (node) {
          node.hidden = true;
        });
        wrapper.parentNode.querySelectorAll('button').forEach(function (btn) {
          btn.setAttribute('aria-expanded', false);
        });
      } // Switch the state


      btn.setAttribute('aria-expanded', !expanded); // Switch the content's visibility

      wrapper.hidden = expanded;
    };
  });
})();

/***/ }),

/***/ "./_resources/scss/app.scss":
/*!**********************************!*\
  !*** ./_resources/scss/app.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***************************************************************!*\
  !*** multi ./_resources/scss/app.scss ./_resources/js/app.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/johnpuddephatt/Sites/yorspace/_resources/scss/app.scss */"./_resources/scss/app.scss");
module.exports = __webpack_require__(/*! /Users/johnpuddephatt/Sites/yorspace/_resources/js/app.js */"./_resources/js/app.js");


/***/ })

/******/ });