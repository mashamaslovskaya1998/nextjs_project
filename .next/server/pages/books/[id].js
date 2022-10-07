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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Book),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// export default function Book({ result }: IBookPageProps) {\n//   return <h1>{result.title}</h1>;\n// }\n// Book.getInitialProps = async ({ query }: NextPageContext) => {\n//   const response = await fetch(`http://gutendex.com/books/${query.id}`);\n//   const result = await response.json();\n//   return {\n//     props: { result },\n//   };\n// };\nfunction Book({ result , authors  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Post \",\n                    router.query.id\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mariamaslovskaa/Documents/GitHub/work/nextjs_project/pages/books/[id].tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: result.title\n            }, void 0, false, {\n                fileName: \"/Users/mariamaslovskaa/Documents/GitHub/work/nextjs_project/pages/books/[id].tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: result.bookshelves\n            }, void 0, false, {\n                fileName: \"/Users/mariamaslovskaa/Documents/GitHub/work/nextjs_project/pages/books/[id].tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Количество загрузок: \",\n                    result.download_count\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mariamaslovskaa/Documents/GitHub/work/nextjs_project/pages/books/[id].tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\nasync function getServerSideProps({ query  }) {\n    const response = await fetch(`http://gutendex.com/books/${query.id}`);\n    const result = await response.json();\n    return {\n        props: {\n            result\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ib29rcy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNnRDtBQW1DaEQsNkRBQTZEO0FBQzdELG9DQUFvQztBQUNwQyxJQUFJO0FBQ0osaUVBQWlFO0FBQ2pFLDJFQUEyRTtBQUMzRSwwQ0FBMEM7QUFDMUMsYUFBYTtBQUNiLHlCQUF5QjtBQUN6QixPQUFPO0FBQ1AsS0FBSztBQUVVLFNBQVNDLElBQUksQ0FBQyxFQUFFQyxNQUFNLEdBQUVDLE9BQU8sR0FBa0IsRUFBRTtJQUNoRSxNQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFDMUIscUJBQ0U7OzBCQUNFLDhEQUFDSyxJQUFFOztvQkFBQyxPQUFLO29CQUFDRCxNQUFNLENBQUNFLEtBQUssQ0FBQ0MsRUFBRTs7Ozs7O29CQUFNOzBCQUMvQiw4REFBQ0MsR0FBQzswQkFBRU4sTUFBTSxDQUFDTyxLQUFLOzs7OztvQkFBSzswQkFDckIsOERBQUNELEdBQUM7MEJBQUVOLE1BQU0sQ0FBQ1EsV0FBVzs7Ozs7b0JBQUs7MEJBQzNCLDhEQUFDRixHQUFDOztvQkFBQyx1QkFBcUI7b0JBQUNOLE1BQU0sQ0FBQ1MsY0FBYzs7Ozs7O29CQUFLOztvQkFDbEQsQ0FDSDtBQUNKLENBQUM7QUFDTSxlQUFlQyxrQkFBa0IsQ0FBQyxFQUFFTixLQUFLLEdBQW1CLEVBQUU7SUFDbkUsTUFBTU8sUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLDBCQUEwQixFQUFFUixLQUFLLENBQUNDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckUsTUFBTUwsTUFBTSxHQUFHLE1BQU1XLFFBQVEsQ0FBQ0UsSUFBSSxFQUFFO0lBQ3BDLE9BQU87UUFDTEMsS0FBSyxFQUFFO1lBQUVkLE1BQU07U0FBRTtLQUNsQixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqc19wcm9qZWN0Ly4vcGFnZXMvYm9va3MvW2lkXS50c3g/MTI0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZUNvbnRleHQgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHJlc291cmNlTGltaXRzIH0gZnJvbSBcIndvcmtlcl90aHJlYWRzXCI7XG5pbXBvcnQgeyBJQXV0aG9yLCBJQm9va3MgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuLy8gaW50ZXJmYWNlIElCb29rUHJvcHMge1xuLy8gICBjdHg6IGFueTtcbi8vIH1cbi8vIGludGVyZmFjZSBJQm9va1Byb3BzIHtcbi8vICAgcmVzdWx0czogYW55O1xuLy8gfVxuLy8gaW50ZXJmYWNlIElCb29rUGFyYW1zUHJvcHMge1xuLy8gICBwYXJhbXM6IElCb29rc1tdO1xuLy8gfVxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9vayh7IHJlc3VsdHMgfTogSUJvb2tQcm9wcykge1xuLy8gICAvLyBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcbi8vICAgLy8gY29uc29sZS5sb2cocm91dGVyKTtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8PlxuLy8gICAgICAgPGgxPntyZXN1bHRzLnRpdGxlfTwvaDE+XG4vLyAgICAgPC8+XG4vLyAgICk7XG4vLyB9XG4vLyBleHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfTogSUJvb2tQYXJhbXNQcm9wcykgPT4ge1xuLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vZ3V0ZW5kZXguY29tL2Jvb2tzLyR7aWR9YCk7XG4vLyAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczogeyByZXN1bHQgfSxcbi8vICAgfTtcbi8vIH07XG5cbmludGVyZmFjZSBJQm9va1BhZ2VQcm9wcyB7XG4gIHJlc3VsdDogSUJvb2tzO1xuICBhdXRob3JzOiBJQXV0aG9yO1xufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb29rKHsgcmVzdWx0IH06IElCb29rUGFnZVByb3BzKSB7XG4vLyAgIHJldHVybiA8aDE+e3Jlc3VsdC50aXRsZX08L2gxPjtcbi8vIH1cbi8vIEJvb2suZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnkgfTogTmV4dFBhZ2VDb250ZXh0KSA9PiB7XG4vLyAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9ndXRlbmRleC5jb20vYm9va3MvJHtxdWVyeS5pZH1gKTtcbi8vICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7IHJlc3VsdCB9LFxuLy8gICB9O1xuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9vayh7IHJlc3VsdCwgYXV0aG9ycyB9OiBJQm9va1BhZ2VQcm9wcykge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPlBvc3Qge3JvdXRlci5xdWVyeS5pZH08L2gxPlxuICAgICAgPHA+e3Jlc3VsdC50aXRsZX08L3A+XG4gICAgICA8cD57cmVzdWx0LmJvb2tzaGVsdmVzfTwvcD5cbiAgICAgIDxwPtCa0L7Qu9C40YfQtdGB0YLQstC+INC30LDQs9GA0YPQt9C+0Lo6IHtyZXN1bHQuZG93bmxvYWRfY291bnR9PC9wPlxuICAgIDwvPlxuICApO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHF1ZXJ5IH06IE5leHRQYWdlQ29udGV4dCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vZ3V0ZW5kZXguY29tL2Jvb2tzLyR7cXVlcnkuaWR9YCk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyByZXN1bHQgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJCb29rIiwicmVzdWx0IiwiYXV0aG9ycyIsInJvdXRlciIsImgxIiwicXVlcnkiLCJpZCIsInAiLCJ0aXRsZSIsImJvb2tzaGVsdmVzIiwiZG93bmxvYWRfY291bnQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/books/[id].tsx\n");

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