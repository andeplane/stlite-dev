(globalThis["webpackChunk_stlite_mountable"] = globalThis["webpackChunk_stlite_mountable"] || []).push([["streamlit_frontend_src_components_widgets_Multiselect_index_tsx"],{

/***/ "../../streamlit/frontend/src/components/widgets/Multiselect/Multiselect.tsx":
/*!***********************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/Multiselect/Multiselect.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-device-detect */ "../../node_modules/react-device-detect/dist/lib.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/without */ "../../node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @emotion/react */ "../../node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js");
/* harmony import */ var src_components_widgets_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/widgets/Form */ "../../streamlit/frontend/src/components/widgets/Form/index.tsx");
/* harmony import */ var baseui_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! baseui/select */ "../../node_modules/baseui/esm/select/select.js");
/* harmony import */ var baseui_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! baseui/select */ "../../node_modules/baseui/esm/select/constants.js");
/* harmony import */ var src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/widgets/BaseWidget */ "../../streamlit/frontend/src/components/widgets/BaseWidget/index.tsx");
/* harmony import */ var src_components_widgets_Multiselect_styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/widgets/Multiselect/styled-components */ "../../streamlit/frontend/src/components/widgets/Multiselect/styled-components.ts");
/* harmony import */ var src_components_shared_TooltipIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/shared/TooltipIcon */ "../../streamlit/frontend/src/components/shared/TooltipIcon/index.tsx");
/* harmony import */ var src_components_shared_Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/shared/Tooltip */ "../../streamlit/frontend/src/components/shared/Tooltip/index.tsx");
/* harmony import */ var src_components_shared_Dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/shared/Dropdown */ "../../streamlit/frontend/src/components/shared/Dropdown/index.tsx");
/* harmony import */ var src_components_shared_Dropdown_Selectbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/components/shared/Dropdown/Selectbox */ "../../streamlit/frontend/src/components/shared/Dropdown/Selectbox.tsx");
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/lib/utils */ "../../streamlit/frontend/src/lib/utils.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/widgets/Multiselect/Multiselect.tsx";
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















class Multiselect extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor() {
    super(...arguments);
    this.formClearHelper = new src_components_widgets_Form__WEBPACK_IMPORTED_MODULE_3__.FormClearHelper();
    this.state = {
      value: this.initialValue
    };
    this.commitWidgetValue = source => {
      this.props.widgetMgr.setIntArrayValue(this.props.element, this.state.value, source);
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
    this.onChange = params => {
      if (this.props.element.maxSelections && params.type === "select" && this.state.value.length >= this.props.element.maxSelections) {
        return;
      }
      this.setState(this.generateNewState(params), () => {
        this.commitWidgetValue({
          fromUi: true
        });
      });
    };
    this.filterOptions = (options, filterValue) => {
      if (this.overMaxSelections()) {
        return [];
      }
      // We need to manually filter for previously selected options here
      const unselectedOptions = options.filter(option => !this.state.value.includes(Number(option.value)));
      return (0,src_components_shared_Dropdown_Selectbox__WEBPACK_IMPORTED_MODULE_9__.fuzzyFilterSelectOptions)(unselectedOptions, filterValue);
    };
  }
  overMaxSelections() {
    return this.props.element.maxSelections > 0 && this.state.value.length >= this.props.element.maxSelections;
  }
  getNoResultsMsg() {
    if (this.props.element.maxSelections === 0) {
      return "No results";
    }
    const option = this.props.element.maxSelections !== 1 ? "options" : "option";
    return `You can only select up to ${this.props.element.maxSelections} ${option}. Remove an option first.`;
  }
  get initialValue() {
    // If WidgetStateManager knew a value for this widget, initialize to that.
    // Otherwise, use the default value from the widget protobuf.
    const storedValue = this.props.widgetMgr.getIntArrayValue(this.props.element);
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

  get valueFromState() {
    return this.state.value.map(i => {
      const label = this.props.element.options[i];
      return {
        value: i.toString(),
        label
      };
    });
  }
  generateNewState(data) {
    const getIndex = () => {
      var _data$option;
      const valueId = (_data$option = data.option) === null || _data$option === void 0 ? void 0 : _data$option.value;
      return parseInt(valueId, 10);
    };
    switch (data.type) {
      case "remove":
        {
          return {
            value: lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.state.value, getIndex())
          };
        }
      case "clear":
        {
          return {
            value: []
          };
        }
      case "select":
        {
          return {
            value: this.state.value.concat([getIndex()])
          };
        }
      default:
        {
          throw new Error(`State transition is unknown: ${data.type}`);
        }
    }
  }
  render() {
    var _element$labelVisibil;
    const {
      element,
      theme,
      width,
      widgetMgr
    } = this.props;
    const style = {
      width
    };
    const {
      options
    } = element;
    const disabled = options.length === 0 ? true : this.props.disabled;
    const placeholder = options.length === 0 ? "No options to select." : "Choose an option";
    const selectOptions = options.map((option, idx) => {
      return {
        label: option,
        value: idx.toString()
      };
    });

    // Manage our form-clear event handler.
    this.formClearHelper.manageFormClearListener(widgetMgr, element.formId, this.onFormCleared);

    // Check if we have more than 10 options in the selectbox.
    // If that's true, we show the keyboard on mobile. If not, we hide it.
    const showKeyboardOnMobile = options.length > 10;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
      className: "row-widget stMultiSelect",
      style: style,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_4__.WidgetLabel, {
        label: element.label,
        disabled: disabled,
        labelVisibility: (0,src_lib_utils__WEBPACK_IMPORTED_MODULE_10__.labelVisibilityProtoValueToEnum)((_element$labelVisibil = element.labelVisibility) === null || _element$labelVisibil === void 0 ? void 0 : _element$labelVisibil.value),
        children: element.help && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_4__.StyledWidgetLabelHelp, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(src_components_shared_TooltipIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
            content: element.help,
            placement: src_components_shared_Tooltip__WEBPACK_IMPORTED_MODULE_7__.Placement.TOP_RIGHT
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(src_components_widgets_Multiselect_styled_components__WEBPACK_IMPORTED_MODULE_5__.StyledUISelect, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(baseui_select__WEBPACK_IMPORTED_MODULE_12__["default"], {
          options: selectOptions,
          labelKey: "label",
          valueKey: "value",
          "aria-label": element.label,
          placeholder: placeholder,
          type: baseui_select__WEBPACK_IMPORTED_MODULE_13__.TYPE.select,
          multi: true,
          onChange: this.onChange,
          value: this.valueFromState,
          disabled: disabled,
          size: "compact",
          noResultsMsg: this.getNoResultsMsg(),
          filterOptions: this.filterOptions,
          closeOnSelect: false,
          overrides: {
            IconsContainer: {
              style: () => ({
                paddingRight: ".5rem"
              })
            },
            ControlContainer: {
              style: {
                // Baseweb requires long-hand props, short-hand leads to weird bugs & warnings.
                borderLeftWidth: "1px",
                borderRightWidth: "1px",
                borderTopWidth: "1px",
                borderBottomWidth: "1px"
              }
            },
            Placeholder: {
              style: () => ({
                flex: "inherit"
              })
            },
            ValueContainer: {
              style: () => ({
                /*
                  This minHeight is needed to fix a bug from BaseWeb in which the
                  div that contains the options changes their height from 40px to 44px.
                   You could check this behavior in their documentation as well:
                  https://v8-17-1.baseweb.design/components/select/#select-as-multi-pick-search
                   Issue related: https://github.com/streamlit/streamlit/issues/590
                */
                minHeight: "38.4px",
                paddingLeft: ".5rem",
                paddingTop: 0,
                paddingBottom: 0,
                paddingRight: 0
              })
            },
            ClearIcon: {
              props: {
                overrides: {
                  Svg: {
                    style: {
                      color: theme.colors.darkGray
                    }
                  }
                }
              }
            },
            SearchIcon: {
              style: {
                color: theme.colors.darkGray
              }
            },
            Tag: {
              props: {
                overrides: {
                  Root: {
                    style: {
                      borderTopLeftRadius: theme.radii.md,
                      borderTopRightRadius: theme.radii.md,
                      borderBottomRightRadius: theme.radii.md,
                      borderBottomLeftRadius: theme.radii.md,
                      fontSize: theme.fontSizes.sm,
                      paddingLeft: theme.spacing.sm,
                      marginLeft: 0,
                      marginRight: theme.spacing.sm,
                      height: "28px"
                    }
                  },
                  Action: {
                    style: {
                      paddingLeft: 0
                    }
                  },
                  ActionIcon: {
                    props: {
                      overrides: {
                        Svg: {
                          style: {
                            width: "10px",
                            height: "10px"
                          }
                        }
                      }
                    }
                  },
                  Text: {
                    style: {
                      fontSize: theme.fontSizes.md
                    }
                  }
                }
              }
            },
            MultiValue: {
              props: {
                overrides: {
                  Root: {
                    style: {
                      fontSize: theme.fontSizes.sm
                    }
                  }
                }
              }
            },
            Input: {
              props: {
                // Change the 'readonly' prop to hide the mobile keyboard if options < 10
                readOnly: react_device_detect__WEBPACK_IMPORTED_MODULE_1__.isMobile && showKeyboardOnMobile === false ? "readonly" : null
              }
            },
            Dropdown: {
              component: src_components_shared_Dropdown__WEBPACK_IMPORTED_MODULE_8__.VirtualDropdown
            }
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 7
    }, this);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.b)(Multiselect));
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

/***/ "../../streamlit/frontend/src/components/widgets/Multiselect/index.tsx":
/*!*****************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/Multiselect/index.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Multiselect__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Multiselect */ "../../streamlit/frontend/src/components/widgets/Multiselect/Multiselect.tsx");
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

/***/ "../../streamlit/frontend/src/components/widgets/Multiselect/styled-components.ts":
/*!****************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/Multiselect/styled-components.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledUISelect": () => (/* binding */ StyledUISelect)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "../../node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
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

const StyledUISelect = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "ede6r8z0",
  label: "StyledUISelect"
})(_ref => {
  let {
    theme
  } = _ref;
  return {
    "span[aria-disabled='true']": {
      background: theme.colors.fadedText05
    }
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9NdWx0aXNlbGVjdC9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQjhCIiwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9NdWx0aXNlbGVjdC9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMilcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVJU2VsZWN0ID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBcInNwYW5bYXJpYS1kaXNhYmxlZD0ndHJ1ZSddXCI6IHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMuZmFkZWRUZXh0MDUsXG4gIH0sXG59KSlcbiJdfQ== */");

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

/***/ "../../node_modules/lodash/_arrayIncludes.js":
/*!***************************************************!*\
  !*** ../../node_modules/lodash/_arrayIncludes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "../../node_modules/lodash/_baseIndexOf.js");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}
module.exports = arrayIncludes;

/***/ }),

/***/ "../../node_modules/lodash/_arrayIncludesWith.js":
/*!*******************************************************!*\
  !*** ../../node_modules/lodash/_arrayIncludesWith.js ***!
  \*******************************************************/
/***/ ((module) => {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
    length = array == null ? 0 : array.length;
  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}
module.exports = arrayIncludesWith;

/***/ }),

/***/ "../../node_modules/lodash/_baseDifference.js":
/*!****************************************************!*\
  !*** ../../node_modules/lodash/_baseDifference.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(/*! ./_SetCache */ "../../node_modules/lodash/_SetCache.js"),
  arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ "../../node_modules/lodash/_arrayIncludes.js"),
  arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ "../../node_modules/lodash/_arrayIncludesWith.js"),
  arrayMap = __webpack_require__(/*! ./_arrayMap */ "../../node_modules/lodash/_arrayMap.js"),
  baseUnary = __webpack_require__(/*! ./_baseUnary */ "../../node_modules/lodash/_baseUnary.js"),
  cacheHas = __webpack_require__(/*! ./_cacheHas */ "../../node_modules/lodash/_cacheHas.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
    includes = arrayIncludes,
    isCommon = true,
    length = array.length,
    result = [],
    valuesLength = values.length;
  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  } else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer: while (++index < length) {
    var value = array[index],
      computed = iteratee == null ? value : iteratee(value);
    value = comparator || value !== 0 ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    } else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}
module.exports = baseDifference;

/***/ }),

/***/ "../../node_modules/lodash/_baseFindIndex.js":
/*!***************************************************!*\
  !*** ../../node_modules/lodash/_baseFindIndex.js ***!
  \***************************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
    index = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
module.exports = baseFindIndex;

/***/ }),

/***/ "../../node_modules/lodash/_baseIndexOf.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/_baseIndexOf.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "../../node_modules/lodash/_baseFindIndex.js"),
  baseIsNaN = __webpack_require__(/*! ./_baseIsNaN */ "../../node_modules/lodash/_baseIsNaN.js"),
  strictIndexOf = __webpack_require__(/*! ./_strictIndexOf */ "../../node_modules/lodash/_strictIndexOf.js");

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
}
module.exports = baseIndexOf;

/***/ }),

/***/ "../../node_modules/lodash/_baseIsNaN.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_baseIsNaN.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}
module.exports = baseIsNaN;

/***/ }),

/***/ "../../node_modules/lodash/_strictIndexOf.js":
/*!***************************************************!*\
  !*** ../../node_modules/lodash/_strictIndexOf.js ***!
  \***************************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
    length = array.length;
  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}
module.exports = strictIndexOf;

/***/ }),

/***/ "../../node_modules/lodash/without.js":
/*!********************************************!*\
  !*** ../../node_modules/lodash/without.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseDifference = __webpack_require__(/*! ./_baseDifference */ "../../node_modules/lodash/_baseDifference.js"),
  baseRest = __webpack_require__(/*! ./_baseRest */ "../../node_modules/lodash/_baseRest.js"),
  isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "../../node_modules/lodash/isArrayLikeObject.js");

/**
 * Creates an array excluding all given values using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.pull`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...*} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.xor
 * @example
 *
 * _.without([2, 1, 2, 3], 1, 2);
 * // => [3]
 */
var without = baseRest(function (array, values) {
  return isArrayLikeObject(array) ? baseDifference(array, values) : [];
});
module.exports = without;

/***/ })

}]);
//# sourceMappingURL=streamlit_frontend_src_components_widgets_Multiselect_index_tsx.chunk.js.map