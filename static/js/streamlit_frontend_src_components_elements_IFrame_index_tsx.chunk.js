"use strict";
(globalThis["webpackChunk_stlite_mountable"] = globalThis["webpackChunk_stlite_mountable"] || []).push([["streamlit_frontend_src_components_elements_IFrame_index_tsx"],{

/***/ "../../streamlit/frontend/src/components/elements/IFrame/IFrame.tsx":
/*!**************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/IFrame/IFrame.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IFrame)
/* harmony export */ });
/* harmony import */ var src_lib_IFrameUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/lib/IFrameUtil */ "../../streamlit/frontend/src/lib/IFrameUtil.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/elements/IFrame/IFrame.tsx";
/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




function IFrame(_ref) {
  let {
    element,
    width: propWidth
  } = _ref;
  const width = element.hasWidth ? element.width : propWidth;

  // Handle scrollbar visibility. Chrome and other WebKit browsers still
  // seem to use the deprecated "scrolling" attribute, whereas the standard
  // says to use a CSS style.
  let scrolling;
  let style;
  if (element.scrolling) {
    scrolling = "auto";
    style = {};
  } else {
    scrolling = "no";
    style = {
      overflow: "hidden"
    };
  }

  // Either 'src' or 'srcDoc' will be set in our element. If 'src'
  // is set, we're loading a remote URL in the iframe.
  const src = getNonEmptyString(element.src);
  const srcDoc = src != null ? undefined : getNonEmptyString(element.srcdoc);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("iframe", {
    allow: src_lib_IFrameUtil__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_IFRAME_FEATURE_POLICY,
    style: style,
    src: src,
    srcDoc: srcDoc,
    width: width,
    height: element.height,
    scrolling: scrolling,
    sandbox: src_lib_IFrameUtil__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_IFRAME_SANDBOX_POLICY,
    title: "st.iframe"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

/**
 * Return a string property from an element. If the string is
 * null or empty, return undefined instead.
 */
_c = IFrame;
function getNonEmptyString(value) {
  return value == null || value === "" ? undefined : value;
}
var _c;
__webpack_require__.$Refresh$.register(_c, "IFrame");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "../../streamlit/frontend/src/components/elements/IFrame/index.tsx":
/*!*************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/IFrame/index.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ src_components_elements_IFrame_IFrame__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var src_components_elements_IFrame_IFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/components/elements/IFrame/IFrame */ "../../streamlit/frontend/src/components/elements/IFrame/IFrame.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=streamlit_frontend_src_components_elements_IFrame_index_tsx.chunk.js.map