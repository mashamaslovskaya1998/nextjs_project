"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/books/[id]",{

/***/ "./pages/books/[id].tsx":
/*!******************************!*\
  !*** ./pages/books/[id].tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Book; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nvar __N_SSP = true;\n// export default function Book({ result }: IBookPageProps) {\n//   return <h1>{result.title}</h1>;\n// }\n// Book.getInitialProps = async ({ query }: NextPageContext) => {\n//   const response = await fetch(`http://gutendex.com/books/${query.id}`);\n//   const result = await response.json();\n//   return {\n//     props: { result },\n//   };\n// };\nfunction Book(param) {\n    var result = param.result, authors = param.authors;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"my-0 mx-auto max-w-7xl w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold text-center mb-10\",\n                children: [\n                    \"Post \",\n                    router.query.id\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mariamaslovskaa/Documents/GitHub/work/nextjs_project/pages/books/[id].tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mb-3 font-bold text-xl text-center \",\n                children: result.title\n            }, void 0, false, {\n                fileName: \"/Users/mariamaslovskaa/Documents/GitHub/work/nextjs_project/pages/books/[id].tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: result.formats.image,\n                alt: result.title\n            }, void 0, false, {\n                fileName: \"/Users/mariamaslovskaa/Documents/GitHub/work/nextjs_project/pages/books/[id].tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mb-3\",\n                children: result.bookshelves\n            }, void 0, false, {\n                fileName: \"/Users/mariamaslovskaa/Documents/GitHub/work/nextjs_project/pages/books/[id].tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mb-3\",\n                children: result.subjects ? result.subjects : \"No subjects\"\n            }, void 0, false, {\n                fileName: \"/Users/mariamaslovskaa/Documents/GitHub/work/nextjs_project/pages/books/[id].tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mb-3 italic text-gray-100\",\n                children: [\n                    \"Количество загрузок: \",\n                    result.download_count\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mariamaslovskaa/Documents/GitHub/work/nextjs_project/pages/books/[id].tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mariamaslovskaa/Documents/GitHub/work/nextjs_project/pages/books/[id].tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(Book, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Book;\nvar _c;\n$RefreshReg$(_c, \"Book\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ib29rcy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDZ0Q7O0FBbUNoRCw2REFBNkQ7QUFDN0Qsb0NBQW9DO0FBQ3BDLElBQUk7QUFDSixpRUFBaUU7QUFDakUsMkVBQTJFO0FBQzNFLDBDQUEwQztBQUMxQyxhQUFhO0FBQ2IseUJBQXlCO0FBQ3pCLE9BQU87QUFDUCxLQUFLO0FBRVUsU0FBU0MsSUFBSSxDQUFDLEtBQW1DLEVBQUU7UUFBbkNDLE1BQU0sR0FBUixLQUFtQyxDQUFqQ0EsTUFBTSxFQUFFQyxPQUFPLEdBQWpCLEtBQW1DLENBQXpCQSxPQUFPOztJQUM1QyxJQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFDMUIscUJBQ0UsOERBQUNLLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLCtCQUErQjs7MEJBQzVDLDhEQUFDQyxJQUFFO2dCQUFDRCxTQUFTLEVBQUMsc0NBQXNDOztvQkFBQyxPQUM5QztvQkFBQ0YsTUFBTSxDQUFDSSxLQUFLLENBQUNDLEVBQUU7Ozs7OztvQkFDbEI7MEJBRUwsOERBQUNDLEdBQUM7Z0JBQUNKLFNBQVMsRUFBQyxxQ0FBcUM7MEJBQUVKLE1BQU0sQ0FBQ1MsS0FBSzs7Ozs7b0JBQUs7MEJBQ3JFLDhEQUFDQyxLQUFHO2dCQUFDQyxHQUFHLEVBQUVYLE1BQU0sQ0FBQ1ksT0FBTyxDQUFDQyxLQUFLO2dCQUFFQyxHQUFHLEVBQUVkLE1BQU0sQ0FBQ1MsS0FBSzs7Ozs7b0JBQUk7MEJBQ3JELDhEQUFDRCxHQUFDO2dCQUFDSixTQUFTLEVBQUMsTUFBTTswQkFBRUosTUFBTSxDQUFDZSxXQUFXOzs7OztvQkFBSzswQkFDNUMsOERBQUNQLEdBQUM7Z0JBQUNKLFNBQVMsRUFBQyxNQUFNOzBCQUNoQkosTUFBTSxDQUFDZ0IsUUFBUSxHQUFHaEIsTUFBTSxDQUFDZ0IsUUFBUSxHQUFHLGFBQWE7Ozs7O29CQUNoRDswQkFFSiw4REFBQ1IsR0FBQztnQkFBQ0osU0FBUyxFQUFDLDJCQUEyQjs7b0JBQUMsdUJBQ2xCO29CQUFDSixNQUFNLENBQUNpQixjQUFjOzs7Ozs7b0JBQ3pDOzs7Ozs7WUFDQSxDQUNOO0FBQ0osQ0FBQztHQXBCdUJsQixJQUFJOztRQUNYRCxrREFBUzs7O0FBREZDLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9va3MvW2lkXS50c3g/MTI0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZUNvbnRleHQgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHJlc291cmNlTGltaXRzIH0gZnJvbSBcIndvcmtlcl90aHJlYWRzXCI7XG5pbXBvcnQgeyBJQXV0aG9yLCBJQm9va3MgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuLy8gaW50ZXJmYWNlIElCb29rUHJvcHMge1xuLy8gICBjdHg6IGFueTtcbi8vIH1cbi8vIGludGVyZmFjZSBJQm9va1Byb3BzIHtcbi8vICAgcmVzdWx0czogYW55O1xuLy8gfVxuLy8gaW50ZXJmYWNlIElCb29rUGFyYW1zUHJvcHMge1xuLy8gICBwYXJhbXM6IElCb29rc1tdO1xuLy8gfVxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9vayh7IHJlc3VsdHMgfTogSUJvb2tQcm9wcykge1xuLy8gICAvLyBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcbi8vICAgLy8gY29uc29sZS5sb2cocm91dGVyKTtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8PlxuLy8gICAgICAgPGgxPntyZXN1bHRzLnRpdGxlfTwvaDE+XG4vLyAgICAgPC8+XG4vLyAgICk7XG4vLyB9XG4vLyBleHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfTogSUJvb2tQYXJhbXNQcm9wcykgPT4ge1xuLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vZ3V0ZW5kZXguY29tL2Jvb2tzLyR7aWR9YCk7XG4vLyAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczogeyByZXN1bHQgfSxcbi8vICAgfTtcbi8vIH07XG5cbmludGVyZmFjZSBJQm9va1BhZ2VQcm9wcyB7XG4gIHJlc3VsdDogSUJvb2tzO1xuICBhdXRob3JzOiBJQXV0aG9yO1xufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb29rKHsgcmVzdWx0IH06IElCb29rUGFnZVByb3BzKSB7XG4vLyAgIHJldHVybiA8aDE+e3Jlc3VsdC50aXRsZX08L2gxPjtcbi8vIH1cbi8vIEJvb2suZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnkgfTogTmV4dFBhZ2VDb250ZXh0KSA9PiB7XG4vLyAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9ndXRlbmRleC5jb20vYm9va3MvJHtxdWVyeS5pZH1gKTtcbi8vICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7IHJlc3VsdCB9LFxuLy8gICB9O1xuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9vayh7IHJlc3VsdCwgYXV0aG9ycyB9OiBJQm9va1BhZ2VQcm9wcykge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTAgbXgtYXV0byBtYXgtdy03eGwgdy1mdWxsXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtY2VudGVyIG1iLTEwXCI+XG4gICAgICAgIFBvc3Qge3JvdXRlci5xdWVyeS5pZH1cbiAgICAgIDwvaDE+XG5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTMgZm9udC1ib2xkIHRleHQteGwgdGV4dC1jZW50ZXIgXCI+e3Jlc3VsdC50aXRsZX08L3A+XG4gICAgICA8aW1nIHNyYz17cmVzdWx0LmZvcm1hdHMuaW1hZ2V9IGFsdD17cmVzdWx0LnRpdGxlfSAvPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItM1wiPntyZXN1bHQuYm9va3NoZWx2ZXN9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICB7cmVzdWx0LnN1YmplY3RzID8gcmVzdWx0LnN1YmplY3RzIDogXCJObyBzdWJqZWN0c1wifVxuICAgICAgPC9wPlxuXG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi0zIGl0YWxpYyB0ZXh0LWdyYXktMTAwXCI+XG4gICAgICAgINCa0L7Qu9C40YfQtdGB0YLQstC+INC30LDQs9GA0YPQt9C+0Lo6IHtyZXN1bHQuZG93bmxvYWRfY291bnR9XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcXVlcnkgfTogTmV4dFBhZ2VDb250ZXh0KSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQVBJX0tFWX0vJHtxdWVyeS5pZH1gKTtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHJlc3VsdCB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkJvb2siLCJyZXN1bHQiLCJhdXRob3JzIiwicm91dGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJxdWVyeSIsImlkIiwicCIsInRpdGxlIiwiaW1nIiwic3JjIiwiZm9ybWF0cyIsImltYWdlIiwiYWx0IiwiYm9va3NoZWx2ZXMiLCJzdWJqZWN0cyIsImRvd25sb2FkX2NvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/books/[id].tsx\n"));

/***/ })

});