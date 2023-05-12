"use strict";
(globalThis["webpackChunk_stlite_mountable"] = globalThis["webpackChunk_stlite_mountable"] || []).push([["streamlit_frontend_src_components_widgets_DownloadButton_index_tsx"],{

/***/ "../../streamlit/frontend/src/components/widgets/DownloadButton/DownloadButton.tsx":
/*!*****************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/DownloadButton/DownloadButton.tsx ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var src_components_shared_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/shared/Button */ "../../streamlit/frontend/src/components/shared/Button/index.tsx");
/* harmony import */ var src_components_shared_StreamlitMarkdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/shared/StreamlitMarkdown */ "../../streamlit/frontend/src/components/shared/StreamlitMarkdown/index.tsx");
/* harmony import */ var _stlite_kernel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stlite/kernel */ "../kernel/dist/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/widgets/DownloadButton/DownloadButton.tsx",
  _s = __webpack_require__.$Refresh$.signature();
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






function DownloadButton(props) {
  _s();
  const {
    disabled,
    element,
    widgetMgr,
    width,
    endpoints
  } = props;
  const style = {
    width
  };
  const stliteKernel = (0,_stlite_kernel__WEBPACK_IMPORTED_MODULE_3__.useStliteKernel)();
  const handleDownloadClick = () => {
    // Downloads are only done on links, so create a hidden one and click it
    // for the user.
    widgetMgr.setTriggerValue(element, {
      fromUi: true
    });
    if (element.url.startsWith("/media")) {
      (0,_stlite_kernel__WEBPACK_IMPORTED_MODULE_3__.downloadFileFromStlite)(stliteKernel, element.url);
      return;
    }
    const link = document.createElement("a");
    const uri = `${endpoints.buildMediaURL(element.url)}?title=${encodeURIComponent(document.title)}`;
    link.setAttribute("href", uri);
    link.setAttribute("target", "_blank");
    link.click();
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "row-widget stDownloadButton",
    style: style,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(src_components_shared_Button__WEBPACK_IMPORTED_MODULE_1__.ButtonTooltip, {
      help: element.help,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(src_components_shared_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        kind: src_components_shared_Button__WEBPACK_IMPORTED_MODULE_1__.Kind.SECONDARY,
        size: src_components_shared_Button__WEBPACK_IMPORTED_MODULE_1__.Size.SMALL,
        disabled: disabled,
        onClick: handleDownloadClick,
        fluidWidth: element.useContainerWidth || false,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(src_components_shared_StreamlitMarkdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
          source: element.label,
          allowHTML: false,
          isLabel: true,
          isButton: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, this);
}
_s(DownloadButton, "L83SMqBFkwlY9eHPq4dnj5km5+o=", false, function () {
  return [_stlite_kernel__WEBPACK_IMPORTED_MODULE_3__.useStliteKernel];
});
_c = DownloadButton;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DownloadButton);
var _c;
__webpack_require__.$Refresh$.register(_c, "DownloadButton");

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

/***/ "../../streamlit/frontend/src/components/widgets/DownloadButton/index.tsx":
/*!********************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/DownloadButton/index.tsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _DownloadButton__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _DownloadButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DownloadButton */ "../../streamlit/frontend/src/components/widgets/DownloadButton/DownloadButton.tsx");
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
//# sourceMappingURL=streamlit_frontend_src_components_widgets_DownloadButton_index_tsx.chunk.js.map