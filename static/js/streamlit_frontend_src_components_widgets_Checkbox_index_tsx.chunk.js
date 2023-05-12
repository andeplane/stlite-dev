"use strict";
(globalThis["webpackChunk_stlite_mountable"] = globalThis["webpackChunk_stlite_mountable"] || []).push([["streamlit_frontend_src_components_widgets_Checkbox_index_tsx"],{

/***/ "../../streamlit/frontend/src/components/widgets/Checkbox/Checkbox.tsx":
/*!*****************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/Checkbox/Checkbox.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/react */ "../../node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js");
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/lib/utils */ "../../streamlit/frontend/src/lib/utils.ts");
/* harmony import */ var baseui_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! baseui/checkbox */ "../../node_modules/baseui/esm/checkbox/checkbox.js");
/* harmony import */ var color2k__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! color2k */ "../../node_modules/color2k/dist/index.exports.import.es.mjs");
/* harmony import */ var src_components_widgets_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/widgets/Form */ "../../streamlit/frontend/src/components/widgets/Form/index.tsx");
/* harmony import */ var src_components_shared_TooltipIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/shared/TooltipIcon */ "../../streamlit/frontend/src/components/shared/TooltipIcon/index.tsx");
/* harmony import */ var src_components_shared_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/shared/Tooltip */ "../../streamlit/frontend/src/components/shared/Tooltip/index.tsx");
/* harmony import */ var src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/widgets/BaseWidget */ "../../streamlit/frontend/src/components/widgets/BaseWidget/index.tsx");
/* harmony import */ var src_components_shared_StreamlitMarkdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/shared/StreamlitMarkdown */ "../../streamlit/frontend/src/components/shared/StreamlitMarkdown/index.tsx");
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styled-components */ "../../streamlit/frontend/src/components/widgets/Checkbox/styled-components.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/widgets/Checkbox/Checkbox.tsx";
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













class Checkbox extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor() {
    super(...arguments);
    this.formClearHelper = new src_components_widgets_Form__WEBPACK_IMPORTED_MODULE_2__.FormClearHelper();
    this.state = {
      value: this.initialValue
    };
    this.commitWidgetValue = source => {
      this.props.widgetMgr.setBoolValue(this.props.element, this.state.value, source);
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
    this.onChange = e => {
      const value = e.target.checked;
      this.setState({
        value
      }, () => this.commitWidgetValue({
        fromUi: true
      }));
    };
  }
  get initialValue() {
    // If WidgetStateManager knew a value for this widget, initialize to that.
    // Otherwise, use the default value from the widget protobuf.
    const storedValue = this.props.widgetMgr.getBoolValue(this.props.element);
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
      theme,
      width,
      element,
      disabled,
      widgetMgr
    } = this.props;
    const {
      colors,
      spacing
    } = theme;
    const style = {
      width
    };
    const color = disabled ? colors.fadedText40 : colors.bodyText;

    // Manage our form-clear event handler.
    this.formClearHelper.manageFormClearListener(widgetMgr, element.formId, this.onFormCleared);

    // TODO Check the Widget usage
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "row-widget stCheckbox",
      style: style,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(baseui_checkbox__WEBPACK_IMPORTED_MODULE_9__["default"], {
        checked: this.state.value,
        disabled: disabled,
        onChange: this.onChange,
        "aria-label": element.label,
        overrides: {
          Root: {
            style: _ref => {
              let {
                $isFocusVisible
              } = _ref;
              return {
                marginBottom: 0,
                marginTop: 0,
                paddingRight: spacing.twoThirdsSmFont,
                backgroundColor: $isFocusVisible ? colors.darkenedBgMix25 : "",
                display: "flex",
                alignItems: "start"
              };
            }
          },
          Checkmark: {
            style: _ref2 => {
              let {
                $isFocusVisible,
                $checked
              } = _ref2;
              const borderColor = $checked && !disabled ? colors.primary : colors.fadedText40;
              return {
                outline: 0,
                width: "1rem",
                height: "1rem",
                marginTop: "0.30rem",
                boxShadow: $isFocusVisible && $checked ? `0 0 0 0.2rem ${(0,color2k__WEBPACK_IMPORTED_MODULE_10__.transparentize)(colors.primary, 0.5)}` : "",
                // This is painfully verbose, but baseweb seems to internally
                // use the long-hand version, which means we can't use the
                // shorthand names here as if we do we'll end up with warn
                // logs spamming us every time a checkbox is rendered.
                borderLeftWidth: "2px",
                borderRightWidth: "2px",
                borderTopWidth: "2px",
                borderBottomWidth: "2px",
                borderLeftColor: borderColor,
                borderRightColor: borderColor,
                borderTopColor: borderColor,
                borderBottomColor: borderColor
              };
            }
          },
          Label: {
            style: {
              color
            }
          }
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_7__.StyledContent, {
          visibility: (0,src_lib_utils__WEBPACK_IMPORTED_MODULE_1__.labelVisibilityProtoValueToEnum)((_element$labelVisibil = element.labelVisibility) === null || _element$labelVisibil === void 0 ? void 0 : _element$labelVisibil.value),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(src_components_shared_StreamlitMarkdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
            source: element.label,
            allowHTML: false,
            isLabel: true,
            isCheckbox: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 13
          }, this), element.help && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_5__.StyledWidgetLabelHelpInline, {
            color: color,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(src_components_shared_TooltipIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
              content: element.help,
              placement: src_components_shared_Tooltip__WEBPACK_IMPORTED_MODULE_4__.Placement.TOP_RIGHT
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }, this);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.b)(Checkbox));
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

/***/ "../../streamlit/frontend/src/components/widgets/Checkbox/index.tsx":
/*!**************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/Checkbox/index.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Checkbox__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkbox */ "../../streamlit/frontend/src/components/widgets/Checkbox/Checkbox.tsx");
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

/***/ "../../streamlit/frontend/src/components/widgets/Checkbox/styled-components.tsx":
/*!**************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/Checkbox/styled-components.tsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledContent": () => (/* binding */ StyledContent)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "../../node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/lib/utils */ "../../streamlit/frontend/src/lib/utils.ts");
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


const StyledContent = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "ek41t0m0",
  label: "StyledContent"
})(_ref => {
  let {
    visibility
  } = _ref;
  return {
    display: visibility === src_lib_utils__WEBPACK_IMPORTED_MODULE_1__.LabelVisibilityOptions.Collapsed ? "none" : "flex",
    visibility: visibility === src_lib_utils__WEBPACK_IMPORTED_MODULE_1__.LabelVisibilityOptions.Hidden ? "hidden" : "visible",
    verticalAlign: "middle",
    flexDirection: "row",
    alignItems: "center"
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9DaGVja2JveC9zdHlsZWQtY29tcG9uZW50cy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0I2QiIsImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9zdGxpdGUtZGV2L3N0bGl0ZS1kZXYvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3dpZGdldHMvQ2hlY2tib3gvc3R5bGVkLWNvbXBvbmVudHMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuXG5pbXBvcnQgeyBMYWJlbFZpc2liaWxpdHlPcHRpb25zIH0gZnJvbSBcInNyYy9saWIvdXRpbHNcIlxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlZENvbnRlbnRQcm9wcyB7XG4gIHZpc2liaWxpdHk/OiBMYWJlbFZpc2liaWxpdHlPcHRpb25zXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRDb250ZW50ID0gc3R5bGVkLmRpdjxTdHlsZWRDb250ZW50UHJvcHM+KFxuICAoeyB2aXNpYmlsaXR5IH0pID0+ICh7XG4gICAgZGlzcGxheTogdmlzaWJpbGl0eSA9PT0gTGFiZWxWaXNpYmlsaXR5T3B0aW9ucy5Db2xsYXBzZWQgPyBcIm5vbmVcIiA6IFwiZmxleFwiLFxuICAgIHZpc2liaWxpdHk6XG4gICAgICB2aXNpYmlsaXR5ID09PSBMYWJlbFZpc2liaWxpdHlPcHRpb25zLkhpZGRlbiA/IFwiaGlkZGVuXCIgOiBcInZpc2libGVcIixcbiAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgfSlcbilcbiJdfQ== */");

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
//# sourceMappingURL=streamlit_frontend_src_components_widgets_Checkbox_index_tsx.chunk.js.map