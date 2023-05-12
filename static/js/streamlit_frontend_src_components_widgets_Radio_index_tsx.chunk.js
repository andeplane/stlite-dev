"use strict";
(globalThis["webpackChunk_stlite_mountable"] = globalThis["webpackChunk_stlite_mountable"] || []).push([["streamlit_frontend_src_components_widgets_Radio_index_tsx"],{

/***/ "../../streamlit/frontend/src/components/shared/Radio/Radio.tsx":
/*!**********************************************************************!*\
  !*** ../../streamlit/frontend/src/components/shared/Radio/Radio.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react */ "../../node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js");
/* harmony import */ var baseui_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! baseui/radio */ "../../node_modules/baseui/esm/radio/radiogroup.js");
/* harmony import */ var baseui_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! baseui/radio */ "../../node_modules/baseui/esm/radio/constants.js");
/* harmony import */ var baseui_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! baseui/radio */ "../../node_modules/baseui/esm/radio/radio.js");
/* harmony import */ var src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/widgets/BaseWidget */ "../../streamlit/frontend/src/components/widgets/BaseWidget/index.tsx");
/* harmony import */ var src_components_shared_TooltipIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/shared/TooltipIcon */ "../../streamlit/frontend/src/components/shared/TooltipIcon/index.tsx");
/* harmony import */ var src_components_shared_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/shared/Tooltip */ "../../streamlit/frontend/src/components/shared/Tooltip/index.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/shared/Radio/Radio.tsx";
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








class Radio extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      value: this.props.value
    };
    this.onChange = e => {
      const selectedIndex = parseInt(e.target.value, 10);
      this.setState({
        value: selectedIndex
      }, () => this.props.onChange(selectedIndex));
    };
  }
  componentDidUpdate(prevProps) {
    // If props.value has changed, re-initialize state.value.
    if (prevProps.value !== this.props.value && this.props.value !== this.state.value) {
      this.setState((_, prevProps) => {
        return {
          value: prevProps.value
        };
      });
    }
  }
  render() {
    const {
      theme,
      width,
      help,
      label,
      horizontal,
      labelVisibility
    } = this.props;
    let {
      disabled
    } = this.props;
    const {
      colors,
      radii
    } = theme;
    const style = {
      width
    };
    const options = [...this.props.options];
    if (options.length === 0) {
      options.push("No options to select.");
      disabled = true;
    }
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "row-widget stRadio",
      style: style,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_1__.WidgetLabel, {
        label: label,
        disabled: disabled,
        labelVisibility: labelVisibility,
        children: help && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_1__.StyledWidgetLabelHelpInline, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(src_components_shared_TooltipIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
            content: help,
            placement: src_components_shared_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Placement.TOP_RIGHT
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(baseui_radio__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onChange: this.onChange,
        value: this.state.value.toString(),
        disabled: disabled,
        align: horizontal ? baseui_radio__WEBPACK_IMPORTED_MODULE_6__.ALIGN.horizontal : baseui_radio__WEBPACK_IMPORTED_MODULE_6__.ALIGN.vertical,
        "aria-label": label,
        children: options.map((option, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(baseui_radio__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: index.toString(),
          overrides: {
            Root: {
              style: _ref => {
                let {
                  $isFocusVisible
                } = _ref;
                return {
                  marginBottom: 0,
                  marginTop: 0,
                  marginRight: "1rem",
                  // Make left and right padding look the same visually.
                  paddingLeft: 0,
                  alignItems: "start",
                  paddingRight: "2px",
                  backgroundColor: $isFocusVisible ? colors.darkenedBgMix25 : "",
                  borderTopLeftRadius: radii.md,
                  borderTopRightRadius: radii.md,
                  borderBottomLeftRadius: radii.md,
                  borderBottomRightRadius: radii.md
                };
              }
            },
            RadioMarkOuter: {
              style: _ref2 => {
                let {
                  $checked
                } = _ref2;
                return {
                  width: "1rem",
                  height: "1rem",
                  marginTop: "0.35rem",
                  marginRight: "0",
                  backgroundColor: $checked && !disabled ? colors.primary : colors.fadedText40
                };
              }
            },
            RadioMarkInner: {
              style: _ref3 => {
                let {
                  $checked
                } = _ref3;
                return {
                  height: $checked ? "6px" : ".75rem",
                  width: $checked ? "6px" : ".75rem"
                };
              }
            },
            Label: {
              style: {
                color: disabled ? colors.fadedText40 : colors.bodyText,
                position: "relative",
                top: "1px"
              }
            }
          },
          children: option
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, this);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.b)(Radio));
var _c;
__webpack_require__.$Refresh$.register(_c, "%default%");

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

/***/ "../../streamlit/frontend/src/components/shared/Radio/index.tsx":
/*!**********************************************************************!*\
  !*** ../../streamlit/frontend/src/components/shared/Radio/index.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Radio__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Radio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Radio */ "../../streamlit/frontend/src/components/shared/Radio/Radio.tsx");
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

/***/ "../../streamlit/frontend/src/components/widgets/Radio/Radio.tsx":
/*!***********************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/Radio/Radio.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var src_components_shared_Radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/shared/Radio */ "../../streamlit/frontend/src/components/shared/Radio/index.tsx");
/* harmony import */ var src_components_widgets_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/widgets/Form */ "../../streamlit/frontend/src/components/widgets/Form/index.tsx");
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/lib/utils */ "../../streamlit/frontend/src/lib/utils.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/widgets/Radio/Radio.tsx";
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






class Radio extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor() {
    super(...arguments);
    this.formClearHelper = new src_components_widgets_Form__WEBPACK_IMPORTED_MODULE_2__.FormClearHelper();
    this.state = {
      value: this.initialValue
    };
    this.commitWidgetValue = source => {
      this.props.widgetMgr.setIntValue(this.props.element, this.state.value, source);
    };
    this.onFormCleared = () => {
      this.setState((_, prevProps) => {
        return {
          value: prevProps.element.default
        };
      }, () => this.commitWidgetValue({
        fromUi: true
      }));
    };
    this.onChange = selectedIndex => {
      this.setState({
        value: selectedIndex
      }, () => this.commitWidgetValue({
        fromUi: true
      }));
    };
  }
  get initialValue() {
    // If WidgetStateManager knew a value for this widget, initialize to that.
    // Otherwise, use the default value from the widget protobuf.
    const storedValue = this.props.widgetMgr.getIntValue(this.props.element);
    return storedValue !== undefined ? storedValue : this.props.element.default;
  }
  componentDidMount() {
    if (this.props.element.setValue) {
      this.updateFromProtobuf();
    } else {
      this.commitWidgetValue({
        fromUi: false
      });
    }
  }
  componentDidUpdate() {
    this.maybeUpdateFromProtobuf();
  }
  componentWillUnmount() {
    this.formClearHelper.disconnect();
  }
  maybeUpdateFromProtobuf() {
    const {
      setValue
    } = this.props.element;
    if (setValue) {
      this.updateFromProtobuf();
    }
  }
  updateFromProtobuf() {
    const {
      value
    } = this.props.element;
    this.props.element.setValue = false;
    this.setState({
      value
    }, () => {
      this.commitWidgetValue({
        fromUi: false
      });
    });
  }

  /** Commit state.value to the WidgetStateManager. */

  render() {
    const {
      disabled,
      element,
      width,
      widgetMgr
    } = this.props;
    const {
      horizontal,
      options,
      label,
      labelVisibility,
      help
    } = element;

    // Manage our form-clear event handler.
    this.formClearHelper.manageFormClearListener(widgetMgr, element.formId, this.onFormCleared);
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(src_components_shared_Radio__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: label,
      onChange: this.onChange,
      options: options,
      width: width,
      disabled: disabled,
      horizontal: horizontal,
      labelVisibility: (0,src_lib_utils__WEBPACK_IMPORTED_MODULE_3__.labelVisibilityProtoValueToEnum)(labelVisibility === null || labelVisibility === void 0 ? void 0 : labelVisibility.value),
      value: this.state.value,
      help: help
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, this);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Radio);

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

/***/ "../../streamlit/frontend/src/components/widgets/Radio/index.tsx":
/*!***********************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/Radio/index.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Radio__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Radio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Radio */ "../../streamlit/frontend/src/components/widgets/Radio/Radio.tsx");
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
//# sourceMappingURL=streamlit_frontend_src_components_widgets_Radio_index_tsx.chunk.js.map