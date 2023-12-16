/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/homeimg/home1.jpg":
/*!*******************************!*\
  !*** ./src/homeimg/home1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7180e146e442c9db9f8.jpg";

/***/ }),

/***/ "./src/homeimg/home2.jpg":
/*!*******************************!*\
  !*** ./src/homeimg/home2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9ed1d982574ba3fe234e.jpg";

/***/ }),

/***/ "./src/homeimg/home3.jpg":
/*!*******************************!*\
  !*** ./src/homeimg/home3.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "660f34c6971bbd8558ab.jpg";

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
  !*** ./src/home.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadHome: () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _homeimg_home1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeimg/home1.jpg */ "./src/homeimg/home1.jpg");
/* harmony import */ var _homeimg_home2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeimg/home2.jpg */ "./src/homeimg/home2.jpg");
/* harmony import */ var _homeimg_home3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homeimg/home3.jpg */ "./src/homeimg/home3.jpg");




function loadHome() {
    const homeLayout = document.createElement('div');
    homeLayout.classList.add('homeLayout');

    function createImgDiv(url) {
        const imgBox = document.createElement('div');
        imgBox.classList.add('imgBox');
        const img = document.createElement('img');
        img.setAttribute('src', url);
        imgBox.appendChild(img);
        return imgBox;
    }

    const imgDiv1 = createImgDiv(_homeimg_home1_jpg__WEBPACK_IMPORTED_MODULE_0__);
    const imgDiv2 = createImgDiv(_homeimg_home2_jpg__WEBPACK_IMPORTED_MODULE_1__);
    const imgDiv3 = createImgDiv(_homeimg_home3_jpg__WEBPACK_IMPORTED_MODULE_2__);

    let leftRight = 0;
    function createSection(textDiv, imgDiv) {
        const section = document.createElement('div');
        section.classList.add('section');
        if (leftRight % 2 === 0) {section.append(textDiv, imgDiv);} else {section.append(imgDiv, textDiv);}
        leftRight++;
        return section;
    }
    
    function createTextDiv(arrayContent) {
        const divContent = document.createElement('div');
        divContent.classList.add('divContent');
        for (let content of arrayContent) {
            const childDiv = document.createElement('div');
            childDiv.textContent = content;
            divContent.appendChild(childDiv);
        }
        return divContent
    }
    const textDiv1 = createTextDiv(['The Landing and Office Hours anchor hospitality in the new Penn District which also includes a collection of amenities that redefine how we work, live, and enjoy. As you journey through PENN 1, you will find Office Hours nestled off the lobby with access to 34th Street, or meander up the Social Stairs where you will find The Landing, the full service bar and restaurant.']);
    const textDiv2 = createTextDiv(['The Landing serves as the center of gravity at PENN1 -- ideal for gathering, socializing, dining, cocktailing, entertaining and coworking. Brainstorm over lunch, enjoy a pre-game cocktail, or host a celebratory dinner in one of our two private dining rooms.', 'Curated by iconic hospitality group, DMK, the space features the finest amenities for private and public dining, catered workspaces, and entertaining. Daily menus cater to all tastes and dietary preferences.', "The Landing's private sales team is at your service for booking customized events for any occasion -- work or play."]);
    const textDiv3 = createTextDiv(['Office Hours is a gourmet grab and go experience featuring an abundant selections of coffees, teas, soups, sandwiches, salads, and premium office snacks. Order ahead for pick-up or come explore our offerings in store.  ']);
    const textDiv4 = createTextDiv(["DMK develops, owns and operates a collection of boutique dining and third place experiences in Chicago, New York, Virginia, and Las Vegas.  DMK's mission is embodied in three words - Hospitality, Love and Respect."]);

    const section1 = createSection(textDiv2, imgDiv1);
    const section2 = createSection(textDiv3, imgDiv2);
    textDiv1.classList.add('whiteBG');
    textDiv4.classList.add('whiteBG');
    
    homeLayout.append(imgDiv3, textDiv1, section1, section2, textDiv4);

    return homeLayout;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJ3QztBQUNBO0FBQ0E7O0FBRWpDO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQywrQ0FBSztBQUN0QyxpQ0FBaUMsK0NBQUs7QUFDdEMsaUNBQWlDLCtDQUFLOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxrQ0FBa0MsTUFBTTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBob21lMSBmcm9tICcuL2hvbWVpbWcvaG9tZTEuanBnJztcbmltcG9ydCBob21lMiBmcm9tICcuL2hvbWVpbWcvaG9tZTIuanBnJztcbmltcG9ydCBob21lMyBmcm9tICcuL2hvbWVpbWcvaG9tZTMuanBnJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgIGNvbnN0IGhvbWVMYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lTGF5b3V0LmNsYXNzTGlzdC5hZGQoJ2hvbWVMYXlvdXQnKTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUltZ0Rpdih1cmwpIHtcbiAgICAgICAgY29uc3QgaW1nQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGltZ0JveC5jbGFzc0xpc3QuYWRkKCdpbWdCb3gnKTtcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHVybCk7XG4gICAgICAgIGltZ0JveC5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICByZXR1cm4gaW1nQm94O1xuICAgIH1cblxuICAgIGNvbnN0IGltZ0RpdjEgPSBjcmVhdGVJbWdEaXYoaG9tZTEpO1xuICAgIGNvbnN0IGltZ0RpdjIgPSBjcmVhdGVJbWdEaXYoaG9tZTIpO1xuICAgIGNvbnN0IGltZ0RpdjMgPSBjcmVhdGVJbWdEaXYoaG9tZTMpO1xuXG4gICAgbGV0IGxlZnRSaWdodCA9IDA7XG4gICAgZnVuY3Rpb24gY3JlYXRlU2VjdGlvbih0ZXh0RGl2LCBpbWdEaXYpIHtcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24nKTtcbiAgICAgICAgaWYgKGxlZnRSaWdodCAlIDIgPT09IDApIHtzZWN0aW9uLmFwcGVuZCh0ZXh0RGl2LCBpbWdEaXYpO30gZWxzZSB7c2VjdGlvbi5hcHBlbmQoaW1nRGl2LCB0ZXh0RGl2KTt9XG4gICAgICAgIGxlZnRSaWdodCsrO1xuICAgICAgICByZXR1cm4gc2VjdGlvbjtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlVGV4dERpdihhcnJheUNvbnRlbnQpIHtcbiAgICAgICAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXZDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2RpdkNvbnRlbnQnKTtcbiAgICAgICAgZm9yIChsZXQgY29udGVudCBvZiBhcnJheUNvbnRlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjaGlsZERpdi50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGNoaWxkRGl2KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGl2Q29udGVudFxuICAgIH1cbiAgICBjb25zdCB0ZXh0RGl2MSA9IGNyZWF0ZVRleHREaXYoWydUaGUgTGFuZGluZyBhbmQgT2ZmaWNlIEhvdXJzIGFuY2hvciBob3NwaXRhbGl0eSBpbiB0aGUgbmV3IFBlbm4gRGlzdHJpY3Qgd2hpY2ggYWxzbyBpbmNsdWRlcyBhIGNvbGxlY3Rpb24gb2YgYW1lbml0aWVzIHRoYXQgcmVkZWZpbmUgaG93IHdlIHdvcmssIGxpdmUsIGFuZCBlbmpveS4gQXMgeW91IGpvdXJuZXkgdGhyb3VnaCBQRU5OIDEsIHlvdSB3aWxsIGZpbmQgT2ZmaWNlIEhvdXJzIG5lc3RsZWQgb2ZmIHRoZSBsb2JieSB3aXRoIGFjY2VzcyB0byAzNHRoIFN0cmVldCwgb3IgbWVhbmRlciB1cCB0aGUgU29jaWFsIFN0YWlycyB3aGVyZSB5b3Ugd2lsbCBmaW5kIFRoZSBMYW5kaW5nLCB0aGUgZnVsbCBzZXJ2aWNlIGJhciBhbmQgcmVzdGF1cmFudC4nXSk7XG4gICAgY29uc3QgdGV4dERpdjIgPSBjcmVhdGVUZXh0RGl2KFsnVGhlIExhbmRpbmcgc2VydmVzIGFzIHRoZSBjZW50ZXIgb2YgZ3Jhdml0eSBhdCBQRU5OMSAtLSBpZGVhbCBmb3IgZ2F0aGVyaW5nLCBzb2NpYWxpemluZywgZGluaW5nLCBjb2NrdGFpbGluZywgZW50ZXJ0YWluaW5nIGFuZCBjb3dvcmtpbmcuIEJyYWluc3Rvcm0gb3ZlciBsdW5jaCwgZW5qb3kgYSBwcmUtZ2FtZSBjb2NrdGFpbCwgb3IgaG9zdCBhIGNlbGVicmF0b3J5IGRpbm5lciBpbiBvbmUgb2Ygb3VyIHR3byBwcml2YXRlIGRpbmluZyByb29tcy4nLCAnQ3VyYXRlZCBieSBpY29uaWMgaG9zcGl0YWxpdHkgZ3JvdXAsIERNSywgdGhlIHNwYWNlIGZlYXR1cmVzIHRoZSBmaW5lc3QgYW1lbml0aWVzIGZvciBwcml2YXRlIGFuZCBwdWJsaWMgZGluaW5nLCBjYXRlcmVkIHdvcmtzcGFjZXMsIGFuZCBlbnRlcnRhaW5pbmcuIERhaWx5IG1lbnVzIGNhdGVyIHRvIGFsbCB0YXN0ZXMgYW5kIGRpZXRhcnkgcHJlZmVyZW5jZXMuJywgXCJUaGUgTGFuZGluZydzIHByaXZhdGUgc2FsZXMgdGVhbSBpcyBhdCB5b3VyIHNlcnZpY2UgZm9yIGJvb2tpbmcgY3VzdG9taXplZCBldmVudHMgZm9yIGFueSBvY2Nhc2lvbiAtLSB3b3JrIG9yIHBsYXkuXCJdKTtcbiAgICBjb25zdCB0ZXh0RGl2MyA9IGNyZWF0ZVRleHREaXYoWydPZmZpY2UgSG91cnMgaXMgYSBnb3VybWV0IGdyYWIgYW5kIGdvIGV4cGVyaWVuY2UgZmVhdHVyaW5nIGFuIGFidW5kYW50IHNlbGVjdGlvbnMgb2YgY29mZmVlcywgdGVhcywgc291cHMsIHNhbmR3aWNoZXMsIHNhbGFkcywgYW5kIHByZW1pdW0gb2ZmaWNlIHNuYWNrcy4gT3JkZXIgYWhlYWQgZm9yIHBpY2stdXAgb3IgY29tZSBleHBsb3JlIG91ciBvZmZlcmluZ3MgaW4gc3RvcmUuICAnXSk7XG4gICAgY29uc3QgdGV4dERpdjQgPSBjcmVhdGVUZXh0RGl2KFtcIkRNSyBkZXZlbG9wcywgb3ducyBhbmQgb3BlcmF0ZXMgYSBjb2xsZWN0aW9uIG9mIGJvdXRpcXVlIGRpbmluZyBhbmQgdGhpcmQgcGxhY2UgZXhwZXJpZW5jZXMgaW4gQ2hpY2FnbywgTmV3IFlvcmssIFZpcmdpbmlhLCBhbmQgTGFzIFZlZ2FzLiAgRE1LJ3MgbWlzc2lvbiBpcyBlbWJvZGllZCBpbiB0aHJlZSB3b3JkcyAtIEhvc3BpdGFsaXR5LCBMb3ZlIGFuZCBSZXNwZWN0LlwiXSk7XG5cbiAgICBjb25zdCBzZWN0aW9uMSA9IGNyZWF0ZVNlY3Rpb24odGV4dERpdjIsIGltZ0RpdjEpO1xuICAgIGNvbnN0IHNlY3Rpb24yID0gY3JlYXRlU2VjdGlvbih0ZXh0RGl2MywgaW1nRGl2Mik7XG4gICAgdGV4dERpdjEuY2xhc3NMaXN0LmFkZCgnd2hpdGVCRycpO1xuICAgIHRleHREaXY0LmNsYXNzTGlzdC5hZGQoJ3doaXRlQkcnKTtcbiAgICBcbiAgICBob21lTGF5b3V0LmFwcGVuZChpbWdEaXYzLCB0ZXh0RGl2MSwgc2VjdGlvbjEsIHNlY3Rpb24yLCB0ZXh0RGl2NCk7XG5cbiAgICByZXR1cm4gaG9tZUxheW91dDtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=