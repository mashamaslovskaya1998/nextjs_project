"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/books/[id]";
exports.ids = ["pages/books/[id]"];
exports.modules = {

/***/ "./pages/books/[id].tsx":
/*!******************************!*\
  !*** ./pages/books/[id].tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Book),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Book({ result , authors  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"my-0 mx-auto max-w-7xl w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold text-center mb-10\",\n                children: [\n                    \"Post \",\n                    router.query.id\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mariamaslovskaa/Documents/GitHub/work/nextjs_project/pages/books/[id].tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mb-3 font-bold text-xl text-center \",\n                children: result.title\n            }, void 0, false, {\n                fileName: \"/Users/mariamaslovskaa/Documents/GitHub/work/nextjs_project/pages/books/[id].tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: result.formats.image,\n                alt: result.title\n            }, void 0, false, {\n                fileName: \"/Users/mariamaslovskaa/Documents/GitHub/work/nextjs_project/pages/books/[id].tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mb-3\",\n                children: result.bookshelves\n            }, void 0, false, {\n                fileName: \"/Users/mariamaslovskaa/Documents/GitHub/work/nextjs_project/pages/books/[id].tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mb-3\",\n                children: result.subjects ? result.subjects : \"No subjects\"\n            }, void 0, false, {\n                fileName: \"/Users/mariamaslovskaa/Documents/GitHub/work/nextjs_project/pages/books/[id].tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mb-3 italic text-gray-500\",\n                children: [\n                    \"Количество загрузок: \",\n                    result.download_count\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mariamaslovskaa/Documents/GitHub/work/nextjs_project/pages/books/[id].tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mariamaslovskaa/Documents/GitHub/work/nextjs_project/pages/books/[id].tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\nasync function getServerSideProps({ query  }) {\n    const response = await fetch(`${process.env.API_KEY}/${query.id}`);\n    const result = await response.json();\n    return {\n        props: {\n            result\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ib29rcy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNnRDtBQVNqQyxTQUFTQyxJQUFJLENBQUMsRUFBRUMsTUFBTSxHQUFFQyxPQUFPLEdBQWtCLEVBQUU7SUFDaEUsTUFBTUMsTUFBTSxHQUFHSixzREFBUyxFQUFFO0lBQzFCLHFCQUNFLDhEQUFDSyxLQUFHO1FBQUNDLFNBQVMsRUFBQywrQkFBK0I7OzBCQUM1Qyw4REFBQ0MsSUFBRTtnQkFBQ0QsU0FBUyxFQUFDLHNDQUFzQzs7b0JBQUMsT0FDOUM7b0JBQUNGLE1BQU0sQ0FBQ0ksS0FBSyxDQUFDQyxFQUFFOzs7Ozs7b0JBQ2xCOzBCQUVMLDhEQUFDQyxHQUFDO2dCQUFDSixTQUFTLEVBQUMscUNBQXFDOzBCQUFFSixNQUFNLENBQUNTLEtBQUs7Ozs7O29CQUFLOzBCQUNyRSw4REFBQ0MsS0FBRztnQkFBQ0MsR0FBRyxFQUFFWCxNQUFNLENBQUNZLE9BQU8sQ0FBQ0MsS0FBSztnQkFBRUMsR0FBRyxFQUFFZCxNQUFNLENBQUNTLEtBQUs7Ozs7O29CQUFJOzBCQUNyRCw4REFBQ0QsR0FBQztnQkFBQ0osU0FBUyxFQUFDLE1BQU07MEJBQUVKLE1BQU0sQ0FBQ2UsV0FBVzs7Ozs7b0JBQUs7MEJBQzVDLDhEQUFDUCxHQUFDO2dCQUFDSixTQUFTLEVBQUMsTUFBTTswQkFDaEJKLE1BQU0sQ0FBQ2dCLFFBQVEsR0FBR2hCLE1BQU0sQ0FBQ2dCLFFBQVEsR0FBRyxhQUFhOzs7OztvQkFDaEQ7MEJBRUosOERBQUNSLEdBQUM7Z0JBQUNKLFNBQVMsRUFBQywyQkFBMkI7O29CQUFDLHVCQUNsQjtvQkFBQ0osTUFBTSxDQUFDaUIsY0FBYzs7Ozs7O29CQUN6Qzs7Ozs7O1lBQ0EsQ0FDTjtBQUNKLENBQUM7QUFDTSxlQUFlQyxrQkFBa0IsQ0FBQyxFQUFFWixLQUFLLEdBQW1CLEVBQUU7SUFDbkUsTUFBTWEsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxPQUFPLENBQUMsQ0FBQyxFQUFFakIsS0FBSyxDQUFDQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLE1BQU1QLE1BQU0sR0FBRyxNQUFNbUIsUUFBUSxDQUFDSyxJQUFJLEVBQUU7SUFDcEMsT0FBTztRQUNMQyxLQUFLLEVBQUU7WUFBRXpCLE1BQU07U0FBRTtLQUNsQixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqc19wcm9qZWN0Ly4vcGFnZXMvYm9va3MvW2lkXS50c3g/MTI0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZUNvbnRleHQgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHJlc291cmNlTGltaXRzIH0gZnJvbSBcIndvcmtlcl90aHJlYWRzXCI7XG5pbXBvcnQgeyBJQXV0aG9yLCBJQm9va3MgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuaW50ZXJmYWNlIElCb29rUGFnZVByb3BzIHtcbiAgcmVzdWx0OiBJQm9va3M7XG4gIGF1dGhvcnM6IElBdXRob3I7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvb2soeyByZXN1bHQsIGF1dGhvcnMgfTogSUJvb2tQYWdlUHJvcHMpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJteS0wIG14LWF1dG8gbWF4LXctN3hsIHctZnVsbFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBtYi0xMFwiPlxuICAgICAgICBQb3N0IHtyb3V0ZXIucXVlcnkuaWR9XG4gICAgICA8L2gxPlxuXG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi0zIGZvbnQtYm9sZCB0ZXh0LXhsIHRleHQtY2VudGVyIFwiPntyZXN1bHQudGl0bGV9PC9wPlxuICAgICAgPGltZyBzcmM9e3Jlc3VsdC5mb3JtYXRzLmltYWdlfSBhbHQ9e3Jlc3VsdC50aXRsZX0gLz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTNcIj57cmVzdWx0LmJvb2tzaGVsdmVzfTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAge3Jlc3VsdC5zdWJqZWN0cyA/IHJlc3VsdC5zdWJqZWN0cyA6IFwiTm8gc3ViamVjdHNcIn1cbiAgICAgIDwvcD5cblxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItMyBpdGFsaWMgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICDQmtC+0LvQuNGH0LXRgdGC0LLQviDQt9Cw0LPRgNGD0LfQvtC6OiB7cmVzdWx0LmRvd25sb2FkX2NvdW50fVxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHF1ZXJ5IH06IE5leHRQYWdlQ29udGV4dCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LkFQSV9LRVl9LyR7cXVlcnkuaWR9YCk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyByZXN1bHQgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJCb29rIiwicmVzdWx0IiwiYXV0aG9ycyIsInJvdXRlciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicXVlcnkiLCJpZCIsInAiLCJ0aXRsZSIsImltZyIsInNyYyIsImZvcm1hdHMiLCJpbWFnZSIsImFsdCIsImJvb2tzaGVsdmVzIiwic3ViamVjdHMiLCJkb3dubG9hZF9jb3VudCIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiQVBJX0tFWSIsImpzb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/books/[id].tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/books/[id].tsx"));
module.exports = __webpack_exports__;

})();