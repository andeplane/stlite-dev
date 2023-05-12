"use strict";
(globalThis["webpackChunk_stlite_mountable"] = globalThis["webpackChunk_stlite_mountable"] || []).push([["streamlit_frontend_src_components_elements_Spinner_index_tsx"],{

/***/ "../../streamlit/frontend/src/components/elements/Spinner/Spinner.tsx":
/*!****************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/Spinner/Spinner.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "../../node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js");
/* harmony import */ var src_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/theme */ "../../streamlit/frontend/src/theme/index.ts");
/* harmony import */ var src_components_shared_StreamlitMarkdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/shared/StreamlitMarkdown */ "../../streamlit/frontend/src/components/shared/StreamlitMarkdown/index.tsx");
/* harmony import */ var src_components_core_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/core/AppContext */ "../../streamlit/frontend/src/components/core/AppContext.tsx");
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled-components */ "../../streamlit/frontend/src/components/elements/Spinner/styled-components.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/elements/Spinner/Spinner.tsx",
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








function Spinner(_ref) {
  _s();
  let {
    width,
    element
  } = _ref;
  const theme = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.u)();
  const {
    activeTheme
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(src_components_core_AppContext__WEBPACK_IMPORTED_MODULE_3__.AppContext);
  const usingCustomTheme = !(0,src_theme__WEBPACK_IMPORTED_MODULE_1__.isPresetTheme)(activeTheme);
  const styleProp = {
    width
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "stSpinner",
    style: styleProp,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_4__.StyledSpinnerContainer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_4__.ThemedStyledSpinner, {
        $size: theme.iconSizes.twoXL,
        $usingCustomTheme: usingCustomTheme
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(src_components_shared_StreamlitMarkdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
        source: element.text,
        allowHTML: false
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}
_s(Spinner, "z3HtTnkdZnFuk3su93uKTN+O/lI=", false, function () {
  return [_emotion_react__WEBPACK_IMPORTED_MODULE_6__.u];
});
_c = Spinner;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);
var _c;
__webpack_require__.$Refresh$.register(_c, "Spinner");

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

/***/ "../../streamlit/frontend/src/components/elements/Spinner/index.tsx":
/*!**************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/Spinner/index.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Spinner__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Spinner */ "../../streamlit/frontend/src/components/elements/Spinner/Spinner.tsx");
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

/***/ }),

/***/ "../../streamlit/frontend/src/components/elements/Spinner/styled-components.ts":
/*!*************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/Spinner/styled-components.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledSpinnerContainer": () => (/* binding */ StyledSpinnerContainer),
/* harmony export */   "ThemedStyledSpinner": () => (/* binding */ ThemedStyledSpinner)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "../../node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* harmony import */ var baseui_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! baseui/spinner */ "../../node_modules/baseui/esm/spinner/styled-components.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/is-prop-valid */ "../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js");
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



const ThemedStyledSpinner = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(baseui_spinner__WEBPACK_IMPORTED_MODULE_2__.StyledSpinner,  false ? 0 : {
  shouldForwardProp: _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__["default"],
  target: "e17lx80j1",
  label: "ThemedStyledSpinner"
})(_ref => {
  let {
    theme,
    $usingCustomTheme
  } = _ref;
  return {
    marginTop: theme.spacing.none,
    marginBottom: theme.spacing.none,
    marginRight: theme.spacing.none,
    marginLeft: theme.spacing.none,
    borderColor: theme.colors.fadedText10,
    borderTopColor: $usingCustomTheme ? theme.colors.primary : theme.colors.blue70,
    flexGrow: 0,
    flexShrink: 0
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvU3Bpbm5lci9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQm1DIiwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvU3Bpbm5lci9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMilcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tIFwiYmFzZXVpL3NwaW5uZXJcIlxuaW1wb3J0IGlzUHJvcFZhbGlkIGZyb20gXCJAZW1vdGlvbi9pcy1wcm9wLXZhbGlkXCJcblxuZXhwb3J0IGNvbnN0IFRoZW1lZFN0eWxlZFNwaW5uZXIgPSBzdHlsZWQoU3Bpbm5lciwge1xuICBzaG91bGRGb3J3YXJkUHJvcDogaXNQcm9wVmFsaWQsXG59KSgoeyB0aGVtZSwgJHVzaW5nQ3VzdG9tVGhlbWUgfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy5ub25lLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy5ub25lLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLm5vbmUsXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZy5ub25lLFxuICAgIGJvcmRlckNvbG9yOiB0aGVtZS5jb2xvcnMuZmFkZWRUZXh0MTAsXG4gICAgYm9yZGVyVG9wQ29sb3I6ICR1c2luZ0N1c3RvbVRoZW1lXG4gICAgICA/IHRoZW1lLmNvbG9ycy5wcmltYXJ5XG4gICAgICA6IHRoZW1lLmNvbG9ycy5ibHVlNzAsXG4gICAgZmxleEdyb3c6IDAsXG4gICAgZmxleFNocmluazogMCxcbiAgfVxufSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFNwaW5uZXJDb250YWluZXIgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBnYXA6IHRoZW1lLnNwYWNpbmcubGcsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIHdpZHRoOiBcIjEwMCVcIixcbn0pKVxuIl19 */");
const StyledSpinnerContainer = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e17lx80j0",
  label: "StyledSpinnerContainer"
})(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    display: "flex",
    gap: theme.spacing.lg,
    alignItems: "center",
    width: "100%"
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvU3Bpbm5lci9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ3NDIiwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvU3Bpbm5lci9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMilcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tIFwiYmFzZXVpL3NwaW5uZXJcIlxuaW1wb3J0IGlzUHJvcFZhbGlkIGZyb20gXCJAZW1vdGlvbi9pcy1wcm9wLXZhbGlkXCJcblxuZXhwb3J0IGNvbnN0IFRoZW1lZFN0eWxlZFNwaW5uZXIgPSBzdHlsZWQoU3Bpbm5lciwge1xuICBzaG91bGRGb3J3YXJkUHJvcDogaXNQcm9wVmFsaWQsXG59KSgoeyB0aGVtZSwgJHVzaW5nQ3VzdG9tVGhlbWUgfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy5ub25lLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy5ub25lLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLm5vbmUsXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZy5ub25lLFxuICAgIGJvcmRlckNvbG9yOiB0aGVtZS5jb2xvcnMuZmFkZWRUZXh0MTAsXG4gICAgYm9yZGVyVG9wQ29sb3I6ICR1c2luZ0N1c3RvbVRoZW1lXG4gICAgICA/IHRoZW1lLmNvbG9ycy5wcmltYXJ5XG4gICAgICA6IHRoZW1lLmNvbG9ycy5ibHVlNzAsXG4gICAgZmxleEdyb3c6IDAsXG4gICAgZmxleFNocmluazogMCxcbiAgfVxufSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFNwaW5uZXJDb250YWluZXIgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBnYXA6IHRoZW1lLnNwYWNpbmcubGcsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIHdpZHRoOiBcIjEwMCVcIixcbn0pKVxuIl19 */");

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
//# sourceMappingURL=streamlit_frontend_src_components_elements_Spinner_index_tsx.chunk.js.map