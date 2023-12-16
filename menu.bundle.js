/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  !*** ./src/menu.js ***!
  \*********************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQjJDO0FBQ0E7QUFDQTtBQUNBOztBQUVwQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEtBQThLLCtDQUFRO0FBQ3RMLG1OQUFtTiwrQ0FBUTtBQUMzTiw0TkFBNE4sK0NBQVE7QUFDcE8sc0lBQXNJLCtDQUFRO0FBQzlJO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGl0ZW0xaW1nIGZyb20gJy4vbWVudWltZy9pdGVtMS5qcGcnO1xuaW1wb3J0IGl0ZW0yaW1nIGZyb20gJy4vbWVudWltZy9pdGVtMi5qcGcnO1xuaW1wb3J0IGl0ZW0zaW1nIGZyb20gJy4vbWVudWltZy9pdGVtMy5qcGcnO1xuaW1wb3J0IGl0ZW00aW1nIGZyb20gJy4vbWVudWltZy9pdGVtNC5qcGcnO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZE1lbnVQYWdlKCkge1xuICAgIGNvbnN0IG1lbnVMYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51TGF5b3V0LmNsYXNzTGlzdC5hZGQoJ21lbnVMYXlvdXQnKTtcbiAgICBmdW5jdGlvbiBjcmVhdGVNZW51SXRlbShpdGVtTmFtZSwgaXRlbVByaWNlLCBpdGVtRGVzY3JpcHRpb24sIGltZ1VybCkge1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbScpO1xuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIGltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbWdDb250YWluZXInKTtcbiAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1nVXJsKTtcbiAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGl0ZW1OYW1lO1xuICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9IGl0ZW1QcmljZTtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpdGVtRGVzY3JpcHRpb247XG4gICAgICAgIGNvbnN0IG5hbWVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuYW1lUHJpY2UuY2xhc3NMaXN0LmFkZCgnbmFtZVByaWNlJylcbiAgICAgICAgbmFtZVByaWNlLmFwcGVuZChuYW1lLCBwcmljZSk7XG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZChuYW1lUHJpY2UsIGRlc2NyaXB0aW9uLCBpbWdDb250YWluZXIpO1xuICAgICAgICByZXR1cm4gbWVudUl0ZW07XG4gICAgfVxuICAgIGNvbnN0IGl0ZW0xID0gY3JlYXRlTWVudUl0ZW0oJ1BJTksgQVZPQ0FETyBUT0FTVCcsICcxNC4wMOKCrCcsICdGYXJtIGdyYWluIGJyZWFkLCBob21lbWFkZSBiZWV0IGh1bW11cywgc2xpY2VkIOKAi+KAi2F2b2NhZG8sIGR1a2thaCwgZmV0YSwgcG9tZWdyYW5hdGVzICYgZnJlc2ggcmFzcGJlcnJpZXMuJywgaXRlbTFpbWcpO1xuICAgIGNvbnN0IGl0ZW0yID0gY3JlYXRlTWVudUl0ZW0oJ1NXRUVUICYgU1BJQ1kgQkFHRUwnLCAnMTQuNTDigqwnLCAnTXVsdGktc2VlZCBiYWdlbCBicmVhZCwgc2xpY2VkIOKAi+KAi2F2b2NhZG8sIG1hbmdvIGN1cnJ5IHNhdWNlLCAyIGZyaWVkIGVnZ3MgJiBtZWx0ZWQgY2hlZGRhci4gV2l0aCBwcm90ZWluIG9mIHlvdXIgY2hvaWNlOiBzYWxtb24gb3IgYmVlZiBiYWNvbicsIGl0ZW0yaW1nKTtcbiAgICBjb25zdCBpdGVtMyA9IGNyZWF0ZU1lbnVJdGVtKCdFWE9USUMgQkVORURJQ1QgRUdHJywgJzE1LjAw4oKsJywgJzIgYnJpb2NoZSBtdWZmaW5zLCBtZWx0ZWQgY2hlZGRhciwgc2xpY2VkIOKAi+KAi2F2b2NhZG8sIDIgc29mdC1ib2lsZWQgZWdncyAmIENvY29udXQgY3VycnkgRHV0Y2ggc2F1Y2UuIFdpdGggcHJvdGVpbiBvZiB5b3VyIGNob2ljZTogc2FsbW9uIG9yIGJlZWYgYmFjb24nLCBpdGVtM2ltZyk7XG4gICAgY29uc3QgaXRlbTQgPSBjcmVhdGVNZW51SXRlbSgnQlJFQUtGQVNUIFBBTkNBS0VTJywgJzEzLjUw4oKsJywgJzIgZmx1ZmZ5IHBhbmNha2VzLCAyIGZyaWVkIGVnZ3MsIHNlYXJlZCBiZWVmIGJhY29uICYgbWFwbGUgc3lydXAuJywgaXRlbTRpbWcpO1xuICAgIG1lbnVMYXlvdXQuYXBwZW5kKGl0ZW0xLGl0ZW0yLGl0ZW0zLGl0ZW00KTtcbiAgICByZXR1cm4gbWVudUxheW91dDtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=