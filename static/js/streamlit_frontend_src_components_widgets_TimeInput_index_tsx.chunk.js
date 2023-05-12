"use strict";
(globalThis["webpackChunk_stlite_mountable"] = globalThis["webpackChunk_stlite_mountable"] || []).push([["streamlit_frontend_src_components_widgets_TimeInput_index_tsx"],{

/***/ "../../streamlit/frontend/src/components/widgets/TimeInput/TimeInput.tsx":
/*!*******************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/TimeInput/TimeInput.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var baseui_timepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! baseui/timepicker */ "../../node_modules/baseui/esm/timepicker/timepicker.js");
/* harmony import */ var src_components_widgets_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/widgets/Form */ "../../streamlit/frontend/src/components/widgets/Form/index.tsx");
/* harmony import */ var src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/widgets/BaseWidget */ "../../streamlit/frontend/src/components/widgets/BaseWidget/index.tsx");
/* harmony import */ var src_components_shared_TooltipIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/shared/TooltipIcon */ "../../streamlit/frontend/src/components/shared/TooltipIcon/index.tsx");
/* harmony import */ var src_components_shared_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/shared/Tooltip */ "../../streamlit/frontend/src/components/shared/Tooltip/index.tsx");
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/lib/utils */ "../../streamlit/frontend/src/lib/utils.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/widgets/TimeInput/TimeInput.tsx";
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









class TimeInput extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor() {
    super(...arguments);
    this.formClearHelper = new src_components_widgets_Form__WEBPACK_IMPORTED_MODULE_1__.FormClearHelper();
    this.state = {
      value: this.initialValue
    };
    this.commitWidgetValue = source => {
      this.props.widgetMgr.setStringValue(this.props.element, this.state.value, source);
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
    this.handleChange = newDate => {
      let value;
      if (newDate === null) {
        // This case is not supposed to happen since time picker cannot be cleared.
        value = this.initialValue;
      } else {
        value = this.dateToString(newDate);
      }
      this.setState({
        value
      }, () => this.commitWidgetValue({
        fromUi: true
      }));
    };
    this.stringToDate = value => {
      const [hours, minutes] = value.split(":").map(Number);
      const date = new Date();
      date.setHours(hours);
      date.setMinutes(minutes);
      return date;
    };
    this.dateToString = value => {
      const hours = value.getHours().toString().padStart(2, "0");
      const minutes = value.getMinutes().toString().padStart(2, "0");
      return `${hours}:${minutes}`;
    };
  }
  get initialValue() {
    // If WidgetStateManager knew a value for this widget, initialize to that.
    // Otherwise, use the default value from the widget protobuf.
    const storedValue = this.props.widgetMgr.getStringValue(this.props.element);
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
    var _element$labelVisibil;
    const {
      disabled,
      width,
      element,
      widgetMgr
    } = this.props;
    const style = {
      width
    };
    const selectOverrides = {
      Select: {
        props: {
          disabled,
          overrides: {
            ControlContainer: {
              style: {
                // Baseweb requires long-hand props, short-hand leads to weird bugs & warnings.
                borderLeftWidth: "1px",
                borderRightWidth: "1px",
                borderTopWidth: "1px",
                borderBottomWidth: "1px"
              }
            },
            IconsContainer: {
              style: () => ({
                paddingRight: ".5rem"
              })
            },
            ValueContainer: {
              style: () => ({
                // Baseweb requires long-hand props, short-hand leads to weird bugs & warnings.
                paddingRight: ".5rem",
                paddingLeft: ".5rem",
                paddingBottom: ".5rem",
                paddingTop: ".5rem"
              })
            },
            SingleValue: {
              props: {
                // For easier testing - indicates div that holds the selected time
                className: "stTimeInput-timeDisplay"
              }
            },
            Dropdown: {
              style: () => ({
                paddingTop: 0,
                paddingBottom: 0
              })
            },
            // Nudge the dropdown menu by 1px so the focus state doesn't get cut off
            Popover: {
              props: {
                overrides: {
                  Body: {
                    style: () => ({
                      marginTop: "1px"
                    })
                  }
                }
              }
            }
          }
        }
      }
    };

    // Manage our form-clear event handler.
    this.formClearHelper.manageFormClearListener(widgetMgr, element.formId, this.onFormCleared);
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "stTimeInput",
      style: style,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_2__.WidgetLabel, {
        label: element.label,
        disabled: disabled,
        labelVisibility: (0,src_lib_utils__WEBPACK_IMPORTED_MODULE_5__.labelVisibilityProtoValueToEnum)((_element$labelVisibil = element.labelVisibility) === null || _element$labelVisibil === void 0 ? void 0 : _element$labelVisibil.value),
        children: element.help && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_2__.StyledWidgetLabelHelp, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(src_components_shared_TooltipIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
            content: element.help,
            placement: src_components_shared_Tooltip__WEBPACK_IMPORTED_MODULE_4__.Placement.TOP_RIGHT
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(baseui_timepicker__WEBPACK_IMPORTED_MODULE_7__["default"], {
        format: "24",
        step: element.step ? Number(element.step) : 900 // step in seconds, defaults to 900s (15 minutes)
        ,
        value: this.stringToDate(this.state.value),
        onChange: this.handleChange,
        overrides: selectOverrides,
        creatable: true,
        "aria-label": element.label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 7
    }, this);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimeInput);

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

/***/ "../../streamlit/frontend/src/components/widgets/TimeInput/index.tsx":
/*!***************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/TimeInput/index.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _TimeInput__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _TimeInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimeInput */ "../../streamlit/frontend/src/components/widgets/TimeInput/TimeInput.tsx");
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
//# sourceMappingURL=streamlit_frontend_src_components_widgets_TimeInput_index_tsx.chunk.js.map