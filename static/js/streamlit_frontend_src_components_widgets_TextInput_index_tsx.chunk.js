"use strict";
(globalThis["webpackChunk_stlite_mountable"] = globalThis["webpackChunk_stlite_mountable"] || []).push([["streamlit_frontend_src_components_widgets_TextInput_index_tsx"],{

/***/ "../../streamlit/frontend/src/components/shared/InputInstructions/InputInstructions.tsx":
/*!**********************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/shared/InputInstructions/InputInstructions.tsx ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/lib/utils */ "../../streamlit/frontend/src/lib/utils.ts");
/* harmony import */ var src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/widgets/BaseWidget */ "../../streamlit/frontend/src/components/widgets/BaseWidget/index.tsx");
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled-components */ "../../streamlit/frontend/src/components/shared/InputInstructions/styled-components.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/shared/InputInstructions/InputInstructions.tsx",
  _this = undefined;
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






const InputInstructions = _ref => {
  let {
    dirty,
    value,
    maxLength,
    className,
    type = "single"
  } = _ref;
  const messages = [];
  const addMessage = function (text) {
    let shouldBlink = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    messages.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_3__.StyledMessage, {
      includeDot: messages.length > 0,
      shouldBlink: shouldBlink,
      children: text
    }, messages.length, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this));
  };
  if (dirty) {
    if (type === "multiline") {
      if ((0,src_lib_utils__WEBPACK_IMPORTED_MODULE_1__.isFromMac)()) {
        addMessage("Press ⌘+Enter to apply");
      } else {
        addMessage("Press Ctrl+Enter to apply");
      }
    } else {
      addMessage("Press Enter to apply");
    }
  }
  if (maxLength) {
    addMessage(`${value.length}/${maxLength}`, dirty && value.length >= maxLength);
  }
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_2__.StyledWidgetInstructions, {
    className: className,
    children: messages
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, undefined);
};
_c = InputInstructions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputInstructions);
var _c;
__webpack_require__.$Refresh$.register(_c, "InputInstructions");

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

/***/ "../../streamlit/frontend/src/components/shared/InputInstructions/styled-components.ts":
/*!*********************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/shared/InputInstructions/styled-components.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledMessage": () => (/* binding */ StyledMessage)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "../../node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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


const blink = _emotion_react__WEBPACK_IMPORTED_MODULE_1__.keyframes`
  50% {
    color: rgba(0, 0, 0, 0);
  }
`;
const StyledMessage = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span",  false ? 0 : {
  target: "e1m4n6jn0",
  label: "StyledMessage"
})(_ref => {
  let {
    includeDot,
    shouldBlink,
    theme
  } = _ref;
  return {
    ...(includeDot ? {
      "&::before": {
        opacity: 1,
        content: '"•"',
        animation: "none",
        color: theme.colors.gray,
        margin: "0 5px"
      }
    } : {}),
    ...(shouldBlink ? {
      color: theme.colors.red,
      animationName: `${blink}`,
      animationDuration: "0.5s",
      animationIterationCount: 5
    } : {})
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvc2hhcmVkL0lucHV0SW5zdHJ1Y3Rpb25zL3N0eWxlZC1jb21wb25lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCNkIiLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmsvc3RsaXRlLWRldi9zdGxpdGUtZGV2L3N0cmVhbWxpdC9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9zaGFyZWQvSW5wdXRJbnN0cnVjdGlvbnMvc3R5bGVkLWNvbXBvbmVudHMudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgU3RyZWFtbGl0IEluYy4gKDIwMTgtMjAyMikgU25vd2ZsYWtlIEluYy4gKDIwMjIpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIlxuXG5jb25zdCBibGluayA9IGtleWZyYW1lc2BcbiAgNTAlIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgfVxuYFxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlZE1lc3NhZ2VQcm9wcyB7XG4gIGluY2x1ZGVEb3Q6IGJvb2xlYW5cbiAgc2hvdWxkQmxpbms6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IFN0eWxlZE1lc3NhZ2UgPSBzdHlsZWQuc3BhbjxTdHlsZWRNZXNzYWdlUHJvcHM+KFxuICAoeyBpbmNsdWRlRG90LCBzaG91bGRCbGluaywgdGhlbWUgfSkgPT4gKHtcbiAgICAuLi4oaW5jbHVkZURvdFxuICAgICAgPyB7XG4gICAgICAgICAgXCImOjpiZWZvcmVcIjoge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdcIuKAolwiJyxcbiAgICAgICAgICAgIGFuaW1hdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyYXksXG4gICAgICAgICAgICBtYXJnaW46IFwiMCA1cHhcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICA6IHt9KSxcbiAgICAuLi4oc2hvdWxkQmxpbmtcbiAgICAgID8ge1xuICAgICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMucmVkLFxuICAgICAgICAgIGFuaW1hdGlvbk5hbWU6IGAke2JsaW5rfWAsXG4gICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246IFwiMC41c1wiLFxuICAgICAgICAgIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiA1LFxuICAgICAgICB9XG4gICAgICA6IHt9KSxcbiAgfSlcbilcbiJdfQ== */");

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

/***/ "../../streamlit/frontend/src/components/widgets/TextInput/TextInput.tsx":
/*!*******************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/TextInput/TextInput.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var baseui_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! baseui/input */ "../../node_modules/baseui/esm/input/input.js");
/* harmony import */ var src_autogen_proto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/autogen/proto */ "../../streamlit/frontend/src/autogen/proto.js");
/* harmony import */ var src_components_widgets_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/widgets/Form */ "../../streamlit/frontend/src/components/widgets/Form/index.tsx");
/* harmony import */ var src_components_shared_InputInstructions_InputInstructions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/shared/InputInstructions/InputInstructions */ "../../streamlit/frontend/src/components/shared/InputInstructions/InputInstructions.tsx");
/* harmony import */ var src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/widgets/BaseWidget */ "../../streamlit/frontend/src/components/widgets/BaseWidget/index.tsx");
/* harmony import */ var src_components_shared_TooltipIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/shared/TooltipIcon */ "../../streamlit/frontend/src/components/shared/TooltipIcon/index.tsx");
/* harmony import */ var src_components_shared_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/shared/Tooltip */ "../../streamlit/frontend/src/components/shared/Tooltip/index.tsx");
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/lib/utils */ "../../streamlit/frontend/src/lib/utils.ts");
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styled-components */ "../../streamlit/frontend/src/components/widgets/TextInput/styled-components.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/widgets/TextInput/TextInput.tsx";
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












class TextInput extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor() {
    super(...arguments);
    this.formClearHelper = new src_components_widgets_Form__WEBPACK_IMPORTED_MODULE_2__.FormClearHelper();
    this.state = {
      dirty: false,
      value: this.initialValue
    };
    this.commitWidgetValue = source => {
      this.props.widgetMgr.setStringValue(this.props.element, this.state.value, source);
      this.setState({
        dirty: false
      });
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
    this.onBlur = () => {
      if (this.state.dirty) {
        this.commitWidgetValue({
          fromUi: true
        });
      }
    };
    this.onChange = e => {
      const {
        value
      } = e.target;
      const {
        element
      } = this.props;
      const {
        maxChars
      } = element;
      if (maxChars !== 0 && value.length > maxChars) {
        return;
      }

      // If the TextInput is *not* part of a form, we mark it dirty but don't
      // update its value in the WidgetMgr. This means that individual keypresses
      // won't trigger a script re-run.
      if (!(0,src_lib_utils__WEBPACK_IMPORTED_MODULE_7__.isInForm)(this.props.element)) {
        this.setState({
          dirty: true,
          value
        });
        return;
      }

      // If TextInput *is* part of a form, we immediately update its widgetValue
      // on text changes. The widgetValue won't be passed to the Python
      // script until the form is submitted, so this won't cause the script
      // to re-run. (This also means that we won't show the "Press Enter
      // to Apply" prompt because the TextInput will never be "dirty").
      this.setState({
        dirty: false,
        value
      }, () => this.commitWidgetValue({
        fromUi: true
      }));
    };
    this.onKeyPress = e => {
      if (e.key === "Enter" && this.state.dirty) {
        this.commitWidgetValue({
          fromUi: true
        });
      }
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

  getTypeString() {
    return this.props.element.type === src_autogen_proto__WEBPACK_IMPORTED_MODULE_1__.TextInput.Type.PASSWORD ? "password" : "text";
  }
  render() {
    var _element$labelVisibil;
    const {
      dirty,
      value
    } = this.state;
    const {
      element,
      width,
      disabled,
      widgetMgr
    } = this.props;
    const {
      placeholder
    } = element;

    // Manage our form-clear event handler.
    this.formClearHelper.manageFormClearListener(widgetMgr, element.formId, this.onFormCleared);
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_8__.StyledTextInput, {
      className: "row-widget stTextInput",
      width: width,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_4__.WidgetLabel, {
        label: element.label,
        disabled: disabled,
        labelVisibility: (0,src_lib_utils__WEBPACK_IMPORTED_MODULE_7__.labelVisibilityProtoValueToEnum)((_element$labelVisibil = element.labelVisibility) === null || _element$labelVisibil === void 0 ? void 0 : _element$labelVisibil.value),
        children: element.help && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_4__.StyledWidgetLabelHelp, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(src_components_shared_TooltipIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
            content: element.help,
            placement: src_components_shared_Tooltip__WEBPACK_IMPORTED_MODULE_6__.Placement.TOP_RIGHT
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(baseui_input__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: value,
        placeholder: placeholder,
        onBlur: this.onBlur,
        onChange: this.onChange,
        onKeyPress: this.onKeyPress,
        "aria-label": element.label,
        disabled: disabled,
        type: this.getTypeString(),
        autoComplete: element.autocomplete,
        overrides: {
          Input: {
            style: {
              // Issue: https://github.com/streamlit/streamlit/issues/2495
              // The input won't shrink in Firefox,
              // unless the line below is provided.
              // See https://stackoverflow.com/a/33811151
              minWidth: 0,
              "::placeholder": {
                opacity: "0.7"
              },
              lineHeight: "1.4",
              // Baseweb requires long-hand props, short-hand leads to weird bugs & warnings.
              paddingRight: ".5rem",
              paddingLeft: ".5rem",
              paddingBottom: ".5rem",
              paddingTop: ".5rem"
            }
          },
          Root: {
            style: {
              // Baseweb requires long-hand props, short-hand leads to weird bugs & warnings.
              borderLeftWidth: "1px",
              borderRightWidth: "1px",
              borderTopWidth: "1px",
              borderBottomWidth: "1px"
            }
          }
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(src_components_shared_InputInstructions_InputInstructions__WEBPACK_IMPORTED_MODULE_3__["default"], {
        dirty: dirty,
        value: value,
        maxLength: element.maxChars
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }, this);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextInput);

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

/***/ "../../streamlit/frontend/src/components/widgets/TextInput/index.tsx":
/*!***************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/TextInput/index.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _TextInput__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextInput */ "../../streamlit/frontend/src/components/widgets/TextInput/TextInput.tsx");
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

/***/ "../../streamlit/frontend/src/components/widgets/TextInput/styled-components.ts":
/*!**************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/TextInput/styled-components.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledTextInput": () => (/* binding */ StyledTextInput)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "../../node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");


const StyledTextInput = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "edfmue0",
  label: "StyledTextInput"
})(_ref => {
  let {
    width
  } = _ref;
  return {
    position: "relative",
    width
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9UZXh0SW5wdXQvc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0IrQiIsImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9zdGxpdGUtZGV2L3N0bGl0ZS1kZXYvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3dpZGdldHMvVGV4dElucHV0L3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlZFRleHRJbnB1dFByb3BzIHtcbiAgd2lkdGg6IG51bWJlclxufVxuXG5leHBvcnQgY29uc3QgU3R5bGVkVGV4dElucHV0ID0gc3R5bGVkLmRpdjxTdHlsZWRUZXh0SW5wdXRQcm9wcz4oXG4gICh7IHdpZHRoIH0pID0+ICh7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICB3aWR0aCxcbiAgfSlcbilcbiJdfQ== */");

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
//# sourceMappingURL=streamlit_frontend_src_components_widgets_TextInput_index_tsx.chunk.js.map