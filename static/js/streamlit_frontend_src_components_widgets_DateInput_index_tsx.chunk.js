"use strict";
(globalThis["webpackChunk_stlite_mountable"] = globalThis["webpackChunk_stlite_mountable"] || []).push([["streamlit_frontend_src_components_widgets_DateInput_index_tsx"],{

/***/ "../../streamlit/frontend/src/components/widgets/DateInput/DateInput.tsx":
/*!*******************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/DateInput/DateInput.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "../../streamlit/frontend/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/react */ "../../node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js");
/* harmony import */ var baseui_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! baseui/datepicker */ "../../node_modules/baseui/esm/datepicker/datepicker.js");
/* harmony import */ var baseui_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! baseui/datepicker */ "../../node_modules/baseui/esm/datepicker/constants.js");
/* harmony import */ var baseui_popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! baseui/popover */ "../../node_modules/baseui/esm/popover/constants.js");
/* harmony import */ var src_components_widgets_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/widgets/Form */ "../../streamlit/frontend/src/components/widgets/Form/index.tsx");
/* harmony import */ var src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/widgets/BaseWidget */ "../../streamlit/frontend/src/components/widgets/BaseWidget/index.tsx");
/* harmony import */ var src_components_shared_TooltipIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/shared/TooltipIcon */ "../../streamlit/frontend/src/components/shared/TooltipIcon/index.tsx");
/* harmony import */ var src_components_shared_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/shared/Tooltip */ "../../streamlit/frontend/src/components/shared/Tooltip/index.tsx");
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/lib/utils */ "../../streamlit/frontend/src/lib/utils.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/widgets/DateInput/DateInput.tsx";
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












// Date format for communication (protobuf) support
const DATE_FORMAT = "YYYY/MM/DD";

/** Convert an array of strings to an array of dates. */
function stringsToDates(strings) {
  return strings.map(val => new Date(val));
}

/** Convert an array of dates to an array of strings. */
function datesToStrings(dates) {
  return dates.map(value => moment__WEBPACK_IMPORTED_MODULE_1___default()(value).format(DATE_FORMAT));
}
class DateInput extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor() {
    super(...arguments);
    this.formClearHelper = new src_components_widgets_Form__WEBPACK_IMPORTED_MODULE_2__.FormClearHelper();
    this.state = {
      values: this.initialValue,
      isRange: this.props.element.isRange,
      isEmpty: false
    };
    this.commitWidgetValue = source => {
      this.props.widgetMgr.setStringArrayValue(this.props.element, datesToStrings(this.state.values), source);
    };
    this.onFormCleared = () => {
      const defaultValue = stringsToDates(this.props.element.default);
      this.setState({
        values: defaultValue
      }, () => this.commitWidgetValue({
        fromUi: true
      }));
    };
    this.handleChange = _ref => {
      let {
        date
      } = _ref;
      if (date === null || date === undefined) {
        this.setState({
          values: [],
          isEmpty: true
        });
        return;
      }
      const values = [];
      if (Array.isArray(date)) {
        date.forEach(dt => {
          if (dt) {
            values.push(dt);
          }
        });
      } else {
        values.push(date);
      }
      this.setState({
        values,
        isEmpty: !values
      }, () => {
        if (!this.state.isEmpty) this.commitWidgetValue({
          fromUi: true
        });
      });
    };
    this.handleClose = () => {
      const {
        isEmpty
      } = this.state;
      if (isEmpty) {
        this.setState((_, prevProps) => {
          return {
            values: stringsToDates(prevProps.element.default),
            isEmpty: !stringsToDates(prevProps.element.default)
          };
        }, () => {
          this.commitWidgetValue({
            fromUi: true
          });
        });
      }
    };
    this.getMaxDate = () => {
      const {
        element
      } = this.props;
      const maxDate = element.max;
      return maxDate && maxDate.length > 0 ? moment__WEBPACK_IMPORTED_MODULE_1___default()(maxDate, DATE_FORMAT).toDate() : undefined;
    };
  }
  get initialValue() {
    // If WidgetStateManager knew a value for this widget, initialize to that.
    // Otherwise, use the default value from the widget protobuf.
    const storedValue = this.props.widgetMgr.getStringArrayValue(this.props.element);
    const stringArray = storedValue !== undefined ? storedValue : this.props.element.default;
    return stringsToDates(stringArray);
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
      value: values
    } = this.props.element;
    this.props.element.setValue = false;
    this.setState({
      values: values.map(v => new Date(v))
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
      width,
      element,
      disabled,
      theme,
      widgetMgr
    } = this.props;
    const {
      values,
      isRange
    } = this.state;
    const {
      colors,
      fontSizes,
      lineHeights
    } = theme;
    const style = {
      width
    };
    const minDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(element.min, DATE_FORMAT).toDate();
    const maxDate = this.getMaxDate();

    // Manage our form-clear event handler.
    this.formClearHelper.manageFormClearListener(widgetMgr, element.formId, this.onFormCleared);
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "stDateInput",
      style: style,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_3__.WidgetLabel, {
        label: element.label,
        disabled: disabled,
        labelVisibility: (0,src_lib_utils__WEBPACK_IMPORTED_MODULE_6__.labelVisibilityProtoValueToEnum)((_element$labelVisibil = element.labelVisibility) === null || _element$labelVisibil === void 0 ? void 0 : _element$labelVisibil.value),
        children: element.help && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_3__.StyledWidgetLabelHelp, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(src_components_shared_TooltipIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
            content: element.help,
            placement: src_components_shared_Tooltip__WEBPACK_IMPORTED_MODULE_5__.Placement.TOP_RIGHT
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(baseui_datepicker__WEBPACK_IMPORTED_MODULE_8__["default"], {
        density: baseui_datepicker__WEBPACK_IMPORTED_MODULE_9__.DENSITY.high,
        formatString: "yyyy/MM/dd",
        disabled: disabled,
        onChange: this.handleChange,
        onClose: this.handleClose,
        overrides: {
          Popover: {
            props: {
              placement: baseui_popover__WEBPACK_IMPORTED_MODULE_10__.PLACEMENT.bottomLeft,
              overrides: {
                Body: {
                  style: {
                    border: `1px solid ${colors.fadedText10}`
                  }
                }
              }
            }
          },
          CalendarContainer: {
            style: {
              fontSize: fontSizes.sm,
              paddingRight: theme.spacing.sm,
              paddingLeft: theme.spacing.sm,
              paddingBottom: theme.spacing.sm,
              paddingTop: theme.spacing.sm
            }
          },
          Week: {
            style: {
              fontSize: fontSizes.sm
            }
          },
          Day: {
            style: {
              fontSize: fontSizes.sm,
              lineHeight: lineHeights.base,
              "::after": {
                borderColor: colors.transparent
              }
            }
          },
          PrevButton: {
            style: () => ({
              // Align icon to the center of the button.
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // Remove primary-color click effect.
              ":active": {
                backgroundColor: colors.transparent
              },
              ":focus": {
                backgroundColor: colors.transparent,
                outline: 0
              }
            })
          },
          NextButton: {
            style: {
              // Align icon to the center of the button.
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // Remove primary-color click effect.
              ":active": {
                backgroundColor: colors.transparent
              },
              ":focus": {
                backgroundColor: colors.transparent,
                outline: 0
              }
            }
          },
          Input: {
            props: {
              // The default maskChar ` ` causes empty dates to display as ` / / `
              // Clearing the maskChar so empty dates will not display
              maskChar: null,
              overrides: {
                Root: {
                  style: {
                    // Baseweb requires long-hand props, short-hand leads to weird bugs & warnings.
                    borderLeftWidth: "1px",
                    borderRightWidth: "1px",
                    borderTopWidth: "1px",
                    borderBottomWidth: "1px"
                  }
                },
                Input: {
                  style: {
                    // Baseweb requires long-hand props, short-hand leads to weird bugs & warnings.
                    paddingRight: ".5rem",
                    paddingLeft: ".5rem",
                    paddingBottom: ".5rem",
                    paddingTop: ".5rem"
                  }
                }
              }
            }
          }
        },
        value: values,
        minDate: minDate,
        maxDate: maxDate,
        range: isRange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 7
    }, this);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.b)(DateInput));
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

/***/ "../../streamlit/frontend/src/components/widgets/DateInput/index.tsx":
/*!***************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/DateInput/index.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _DateInput__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _DateInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateInput */ "../../streamlit/frontend/src/components/widgets/DateInput/DateInput.tsx");
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
//# sourceMappingURL=streamlit_frontend_src_components_widgets_DateInput_index_tsx.chunk.js.map