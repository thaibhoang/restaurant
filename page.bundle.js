/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutPage: () => (/* binding */ aboutPage)
/* harmony export */ });
/* harmony import */ var _about_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.jpeg */ "./src/about.jpeg");


function aboutPage() {
    const aboutLayout = document.createElement('div');
    aboutLayout.classList.add('aboutLayout');
    const aboutText = document.createElement('div');
    const aboutTextTitle = document.createElement('h1');
    aboutTextTitle.textContent = 'A BRUNCH THAT MAKES YOU TRAVEL!'
    const aboutTextContent = document.createElement('div');
    aboutTextContent.textContent = "A few steps from the Grands Boulevards in Paris 9, Bon Bouquet welcomes you into its tropical cocoon to take you on a journey towards Bali without even leaving Paris! Here, you feel like you're on the edge of the beach, under the palm trees, in a warm and colorful atmosphere. If you are looking for abrunch restaurant in Paris, Bon Bouquet is the place 'ideal place. On the plate, we are delighted to discover exotic flavors : pancakes with coconut mascarpone, Benedict eggs with a sauce Hollandaise with coconut curry, pink avocado toast with beet hummus… Generous dishes, homemade, prepared to , !snack or even breakfastbrunch, something to enjoy around a delicious SundayMonday from all day,, for your greatest pleasure! Our coffee shop welcomes youfresh products with every day";
    aboutText.append(aboutTextTitle, aboutTextContent);
    const aboutImgContainer = document.createElement('div');
    const img = document.createElement('img');
    img.setAttribute('src', _about_jpeg__WEBPACK_IMPORTED_MODULE_0__);
    aboutImgContainer.append(img);
    aboutLayout.append(aboutText, aboutImgContainer);

    return aboutLayout;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMenuPage: () => (/* binding */ loadMenuPage)
/* harmony export */ });
/* harmony import */ var _menuimg_item1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuimg/item1.jpg */ "./src/menuimg/item1.jpg");
/* harmony import */ var _menuimg_item2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuimg/item2.jpg */ "./src/menuimg/item2.jpg");
/* harmony import */ var _menuimg_item3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuimg/item3.jpg */ "./src/menuimg/item3.jpg");
/* harmony import */ var _menuimg_item4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuimg/item4.jpg */ "./src/menuimg/item4.jpg");





function loadMenuPage() {
    const menuLayout = document.createElement('div');
    menuLayout.classList.add('menuLayout');
    function createMenuItem(itemName, itemPrice, itemDescription, imgUrl) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menuItem');
        const name = document.createElement('div');
        const price = document.createElement('div');
        const description = document.createElement('div');
        const imgContainer = document.createElement('div');
        const img = document.createElement('img');
        imgContainer.appendChild(img);
        imgContainer.classList.add('imgContainer');
        img.setAttribute('src', imgUrl);
        name.textContent = itemName;
        price.textContent = itemPrice;
        description.textContent = itemDescription;
        const namePrice = document.createElement('div');
        namePrice.classList.add('namePrice')
        namePrice.append(name, price);
        menuItem.append(namePrice, description, imgContainer);
        return menuItem;
    }
    const item1 = createMenuItem('PINK AVOCADO TOAST', '14.00€', 'Farm grain bread, homemade beet hummus, sliced ​​avocado, dukkah, feta, pomegranates & fresh raspberries.', _menuimg_item1_jpg__WEBPACK_IMPORTED_MODULE_0__);
    const item2 = createMenuItem('SWEET & SPICY BAGEL', '14.50€', 'Multi-seed bagel bread, sliced ​​avocado, mango curry sauce, 2 fried eggs & melted cheddar. With protein of your choice: salmon or beef bacon', _menuimg_item2_jpg__WEBPACK_IMPORTED_MODULE_1__);
    const item3 = createMenuItem('EXOTIC BENEDICT EGG', '15.00€', '2 brioche muffins, melted cheddar, sliced ​​avocado, 2 soft-boiled eggs & Coconut curry Dutch sauce. With protein of your choice: salmon or beef bacon', _menuimg_item3_jpg__WEBPACK_IMPORTED_MODULE_2__);
    const item4 = createMenuItem('BREAKFAST PANCAKES', '13.50€', '2 fluffy pancakes, 2 fried eggs, seared beef bacon & maple syrup.', _menuimg_item4_jpg__WEBPACK_IMPORTED_MODULE_3__);
    menuLayout.append(item1,item2,item3,item4);
    return menuLayout;
}

/***/ }),

/***/ "./src/about.jpeg":
/*!************************!*\
  !*** ./src/about.jpeg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6958ce62adbe141c4938.jpeg";

/***/ }),

/***/ "./src/menuimg/item1.jpg":
/*!*******************************!*\
  !*** ./src/menuimg/item1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "25f6b7e543e6b2905f9d.jpg";

/***/ }),

/***/ "./src/menuimg/item2.jpg":
/*!*******************************!*\
  !*** ./src/menuimg/item2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e25f19c2c5762d3284e7.jpg";

/***/ }),

/***/ "./src/menuimg/item3.jpg":
/*!*******************************!*\
  !*** ./src/menuimg/item3.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f8e11f42a7d8ab1ef0ff.jpg";

/***/ }),

/***/ "./src/menuimg/item4.jpg":
/*!*******************************!*\
  !*** ./src/menuimg/item4.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "956a6664b23680de3708.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPage: () => (/* binding */ createPage)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/about.js");



function createPage(parentElement) {
    const header = document.createElement('header');
    const main = document.createElement('main');
    main.classList.add('main');
    parentElement.appendChild(header);
    parentElement.appendChild(main);
    const home = document.createElement('div');
    home.classList.add('home');
    const menu = document.createElement('div');
    menu.classList.add('menu');
    const aboutUs = document.createElement('div');
    aboutUs.classList.add('aboutUs');
    header.append(home, menu, aboutUs);
    home.textContent = 'Home';
    menu.textContent = 'Menu';
    aboutUs.textContent = 'About Us';
    
} 

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW9DOztBQUU3QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHdDQUFRO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEIyQztBQUNBO0FBQ0E7QUFDQTs7QUFFcEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhLQUE4SywrQ0FBUTtBQUN0TCxtTkFBbU4sK0NBQVE7QUFDM04sNE5BQTROLCtDQUFRO0FBQ3BPLHNJQUFzSSwrQ0FBUTtBQUM5STtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJzQztBQUNGOztBQUU3QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9wYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhYm91dEltZyBmcm9tICcuL2Fib3V0LmpwZWcnO1xuXG5leHBvcnQgZnVuY3Rpb24gYWJvdXRQYWdlKCkge1xuICAgIGNvbnN0IGFib3V0TGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXRMYXlvdXQuY2xhc3NMaXN0LmFkZCgnYWJvdXRMYXlvdXQnKTtcbiAgICBjb25zdCBhYm91dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBhYm91dFRleHRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgYWJvdXRUZXh0VGl0bGUudGV4dENvbnRlbnQgPSAnQSBCUlVOQ0ggVEhBVCBNQUtFUyBZT1UgVFJBVkVMISdcbiAgICBjb25zdCBhYm91dFRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXRUZXh0Q29udGVudC50ZXh0Q29udGVudCA9IFwiQSBmZXcgc3RlcHMgZnJvbSB0aGUgR3JhbmRzIEJvdWxldmFyZHMgaW4gUGFyaXMgOSwgQm9uIEJvdXF1ZXQgd2VsY29tZXMgeW91IGludG8gaXRzIHRyb3BpY2FsIGNvY29vbiB0byB0YWtlIHlvdSBvbiBhIGpvdXJuZXkgdG93YXJkcyBCYWxpIHdpdGhvdXQgZXZlbiBsZWF2aW5nIFBhcmlzISBIZXJlLCB5b3UgZmVlbCBsaWtlIHlvdSdyZSBvbiB0aGUgZWRnZSBvZiB0aGUgYmVhY2gsIHVuZGVyIHRoZSBwYWxtIHRyZWVzLCBpbiBhIHdhcm0gYW5kIGNvbG9yZnVsIGF0bW9zcGhlcmUuIElmIHlvdSBhcmUgbG9va2luZyBmb3IgYWJydW5jaCByZXN0YXVyYW50IGluIFBhcmlzLCBCb24gQm91cXVldCBpcyB0aGUgcGxhY2UgJ2lkZWFsIHBsYWNlLiBPbiB0aGUgcGxhdGUsIHdlIGFyZSBkZWxpZ2h0ZWQgdG8gZGlzY292ZXIgZXhvdGljIGZsYXZvcnMgOiBwYW5jYWtlcyB3aXRoIGNvY29udXQgbWFzY2FycG9uZSwgQmVuZWRpY3QgZWdncyB3aXRoIGEgc2F1Y2UgSG9sbGFuZGFpc2Ugd2l0aCBjb2NvbnV0IGN1cnJ5LCBwaW5rIGF2b2NhZG8gdG9hc3Qgd2l0aCBiZWV0IGh1bW11c+KApiBHZW5lcm91cyBkaXNoZXMsIGhvbWVtYWRlLCBwcmVwYXJlZCB0byAsICFzbmFjayBvciBldmVuIGJyZWFrZmFzdGJydW5jaCwgc29tZXRoaW5nIHRvIGVuam95IGFyb3VuZCBhIGRlbGljaW91cyBTdW5kYXlNb25kYXkgZnJvbSBhbGwgZGF5LCwgZm9yIHlvdXIgZ3JlYXRlc3QgcGxlYXN1cmUhIE91ciBjb2ZmZWUgc2hvcCB3ZWxjb21lcyB5b3VmcmVzaCBwcm9kdWN0cyB3aXRoIGV2ZXJ5IGRheVwiO1xuICAgIGFib3V0VGV4dC5hcHBlbmQoYWJvdXRUZXh0VGl0bGUsIGFib3V0VGV4dENvbnRlbnQpO1xuICAgIGNvbnN0IGFib3V0SW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgYWJvdXRJbWcpO1xuICAgIGFib3V0SW1nQ29udGFpbmVyLmFwcGVuZChpbWcpO1xuICAgIGFib3V0TGF5b3V0LmFwcGVuZChhYm91dFRleHQsIGFib3V0SW1nQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBhYm91dExheW91dDtcbn0iLCJpbXBvcnQgaXRlbTFpbWcgZnJvbSAnLi9tZW51aW1nL2l0ZW0xLmpwZyc7XG5pbXBvcnQgaXRlbTJpbWcgZnJvbSAnLi9tZW51aW1nL2l0ZW0yLmpwZyc7XG5pbXBvcnQgaXRlbTNpbWcgZnJvbSAnLi9tZW51aW1nL2l0ZW0zLmpwZyc7XG5pbXBvcnQgaXRlbTRpbWcgZnJvbSAnLi9tZW51aW1nL2l0ZW00LmpwZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTWVudVBhZ2UoKSB7XG4gICAgY29uc3QgbWVudUxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVMYXlvdXQuY2xhc3NMaXN0LmFkZCgnbWVudUxheW91dCcpO1xuICAgIGZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKGl0ZW1OYW1lLCBpdGVtUHJpY2UsIGl0ZW1EZXNjcmlwdGlvbiwgaW1nVXJsKSB7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtJyk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgaW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ltZ0NvbnRhaW5lcicpO1xuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWdVcmwpO1xuICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gaXRlbU5hbWU7XG4gICAgICAgIHByaWNlLnRleHRDb250ZW50ID0gaXRlbVByaWNlO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW1EZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc3QgbmFtZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5hbWVQcmljZS5jbGFzc0xpc3QuYWRkKCduYW1lUHJpY2UnKVxuICAgICAgICBuYW1lUHJpY2UuYXBwZW5kKG5hbWUsIHByaWNlKTtcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kKG5hbWVQcmljZSwgZGVzY3JpcHRpb24sIGltZ0NvbnRhaW5lcik7XG4gICAgICAgIHJldHVybiBtZW51SXRlbTtcbiAgICB9XG4gICAgY29uc3QgaXRlbTEgPSBjcmVhdGVNZW51SXRlbSgnUElOSyBBVk9DQURPIFRPQVNUJywgJzE0LjAw4oKsJywgJ0Zhcm0gZ3JhaW4gYnJlYWQsIGhvbWVtYWRlIGJlZXQgaHVtbXVzLCBzbGljZWQg4oCL4oCLYXZvY2FkbywgZHVra2FoLCBmZXRhLCBwb21lZ3JhbmF0ZXMgJiBmcmVzaCByYXNwYmVycmllcy4nLCBpdGVtMWltZyk7XG4gICAgY29uc3QgaXRlbTIgPSBjcmVhdGVNZW51SXRlbSgnU1dFRVQgJiBTUElDWSBCQUdFTCcsICcxNC41MOKCrCcsICdNdWx0aS1zZWVkIGJhZ2VsIGJyZWFkLCBzbGljZWQg4oCL4oCLYXZvY2FkbywgbWFuZ28gY3Vycnkgc2F1Y2UsIDIgZnJpZWQgZWdncyAmIG1lbHRlZCBjaGVkZGFyLiBXaXRoIHByb3RlaW4gb2YgeW91ciBjaG9pY2U6IHNhbG1vbiBvciBiZWVmIGJhY29uJywgaXRlbTJpbWcpO1xuICAgIGNvbnN0IGl0ZW0zID0gY3JlYXRlTWVudUl0ZW0oJ0VYT1RJQyBCRU5FRElDVCBFR0cnLCAnMTUuMDDigqwnLCAnMiBicmlvY2hlIG11ZmZpbnMsIG1lbHRlZCBjaGVkZGFyLCBzbGljZWQg4oCL4oCLYXZvY2FkbywgMiBzb2Z0LWJvaWxlZCBlZ2dzICYgQ29jb251dCBjdXJyeSBEdXRjaCBzYXVjZS4gV2l0aCBwcm90ZWluIG9mIHlvdXIgY2hvaWNlOiBzYWxtb24gb3IgYmVlZiBiYWNvbicsIGl0ZW0zaW1nKTtcbiAgICBjb25zdCBpdGVtNCA9IGNyZWF0ZU1lbnVJdGVtKCdCUkVBS0ZBU1QgUEFOQ0FLRVMnLCAnMTMuNTDigqwnLCAnMiBmbHVmZnkgcGFuY2FrZXMsIDIgZnJpZWQgZWdncywgc2VhcmVkIGJlZWYgYmFjb24gJiBtYXBsZSBzeXJ1cC4nLCBpdGVtNGltZyk7XG4gICAgbWVudUxheW91dC5hcHBlbmQoaXRlbTEsaXRlbTIsaXRlbTMsaXRlbTQpO1xuICAgIHJldHVybiBtZW51TGF5b3V0O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBsb2FkTWVudVBhZ2UgfSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHsgYWJvdXRQYWdlIH0gZnJvbSAnLi9hYm91dCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYWdlKHBhcmVudEVsZW1lbnQpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gICAgY29uc3QgYWJvdXRVcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0VXMuY2xhc3NMaXN0LmFkZCgnYWJvdXRVcycpO1xuICAgIGhlYWRlci5hcHBlbmQoaG9tZSwgbWVudSwgYWJvdXRVcyk7XG4gICAgaG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBtZW51LnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIGFib3V0VXMudGV4dENvbnRlbnQgPSAnQWJvdXQgVXMnO1xuICAgIFxufSBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==