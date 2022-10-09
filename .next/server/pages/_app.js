"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.tsx



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps,
                className: "jsx-d9ae0c13316240d8" + " " + (pageProps && pageProps.className != null && pageProps.className || "")
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "d9ae0c13316240d8",
                children: 'body{font-family:"Montserrat",sans-serif}'
            })
        ]
    });
}


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7692));
module.exports = __webpack_exports__;

})();