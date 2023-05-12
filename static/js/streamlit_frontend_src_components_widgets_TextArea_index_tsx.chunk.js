"use strict";
(globalThis["webpackChunk_stlite_mountable"] = globalThis["webpackChunk_stlite_mountable"] || []).push([["streamlit_frontend_src_components_widgets_TextArea_index_tsx"],{

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

/***/ "../../streamlit/frontend/src/components/widgets/TextArea/TextArea.tsx":
/*!*****************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/TextArea/TextArea.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var src_components_widgets_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/widgets/Form */ "../../streamlit/frontend/src/components/widgets/Form/index.tsx");
/* harmony import */ var baseui_textarea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! baseui/textarea */ "../../node_modules/baseui/esm/textarea/textarea.js");
/* harmony import */ var src_components_shared_InputInstructions_InputInstructions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/shared/InputInstructions/InputInstructions */ "../../streamlit/frontend/src/components/shared/InputInstructions/InputInstructions.tsx");
/* harmony import */ var src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/widgets/BaseWidget */ "../../streamlit/frontend/src/components/widgets/BaseWidget/index.tsx");
/* harmony import */ var src_components_shared_TooltipIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/shared/TooltipIcon */ "../../streamlit/frontend/src/components/shared/TooltipIcon/index.tsx");
/* harmony import */ var src_components_shared_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/shared/Tooltip */ "../../streamlit/frontend/src/components/shared/Tooltip/index.tsx");
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/lib/utils */ "../../streamlit/frontend/src/lib/utils.ts");
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styled-components */ "../../streamlit/frontend/src/components/widgets/TextArea/styled-components.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/widgets/TextArea/TextArea.tsx";
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











class TextArea extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor() {
    super(...arguments);
    this.formClearHelper = new src_components_widgets_Form__WEBPACK_IMPORTED_MODULE_1__.FormClearHelper();
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

      // If the TextArea is *not* part of a form, we mark it dirty but don't
      // update its value in the WidgetMgr. This means that individual keypresses
      // won't trigger a script re-run.
      if (!(0,src_lib_utils__WEBPACK_IMPORTED_MODULE_6__.isInForm)(this.props.element)) {
        this.setState({
          dirty: true,
          value
        });
        return;
      }

      // If TextArea *is* part of a form, we immediately update its widgetValue
      // on text changes. The widgetValue won't be passed to the Python
      // script until the form is submitted, so this won't cause the script
      // to re-run. (This also means that we won't show the "Press Enter
      // to Apply" prompt because the TextArea will never be "dirty").
      this.setState({
        dirty: false,
        value
      }, () => this.commitWidgetValue({
        fromUi: true
      }));
    };
    this.isEnterKeyPressed = event => {
      const {
        keyCode,
        key
      } = event;

      // Using keyCode as well due to some different behaviors on Windows
      // https://bugs.chromium.org/p/chromium/issues/detail?id=79407
      return key === "Enter" || keyCode === 13 || keyCode === 10;
    };
    this.onKeyDown = e => {
      const {
        metaKey,
        ctrlKey
      } = e;
      const {
        dirty
      } = this.state;
      if (this.isEnterKeyPressed(e) && (ctrlKey || metaKey) && dirty) {
        e.preventDefault();
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

  render() {
    var _element$labelVisibil;
    const {
      element,
      disabled,
      width,
      widgetMgr
    } = this.props;
    const {
      value,
      dirty
    } = this.state;
    const style = {
      width
    };
    const {
      height,
      placeholder
    } = element;

    // Manage our form-clear event handler.
    this.formClearHelper.manageFormClearListener(widgetMgr, element.formId, this.onFormCleared);
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "stTextArea",
      style: style,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_3__.WidgetLabel, {
        label: element.label,
        disabled: disabled,
        labelVisibility: (0,src_lib_utils__WEBPACK_IMPORTED_MODULE_6__.labelVisibilityProtoValueToEnum)((_element$labelVisibil = element.labelVisibility) === null || _element$labelVisibil === void 0 ? void 0 : _element$labelVisibil.value),
        children: element.help && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_3__.StyledWidgetLabelHelp, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(src_components_shared_TooltipIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
            content: element.help,
            placement: src_components_shared_Tooltip__WEBPACK_IMPORTED_MODULE_5__.Placement.TOP_RIGHT
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_7__.StyledTextAreaContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(baseui_textarea__WEBPACK_IMPORTED_MODULE_9__["default"], {
          "data-testid": "stTextArea",
          value: value,
          placeholder: placeholder,
          onBlur: this.onBlur,
          onChange: this.onChange,
          onKeyDown: this.onKeyDown,
          "aria-label": element.label,
          disabled: disabled,
          overrides: {
            Input: {
              style: {
                lineHeight: "1.4",
                height: height ? `${height}px` : "",
                minHeight: "95px",
                resize: "vertical",
                "::placeholder": {
                  opacity: "0.7"
                },
                // Baseweb requires long-hand props, short-hand leads to weird bugs & warnings.
                paddingRight: "1rem",
                paddingLeft: "1rem",
                paddingBottom: "1rem",
                paddingTop: "1rem"
              }
            }
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(src_components_shared_InputInstructions_InputInstructions__WEBPACK_IMPORTED_MODULE_2__["default"], {
        dirty: dirty,
        value: value,
        maxLength: element.maxChars,
        type: "multiline"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }, this);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextArea);

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

/***/ "../../streamlit/frontend/src/components/widgets/TextArea/index.tsx":
/*!**************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/TextArea/index.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _TextArea__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextArea */ "../../streamlit/frontend/src/components/widgets/TextArea/TextArea.tsx");
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

/***/ "../../streamlit/frontend/src/components/widgets/TextArea/styled-components.ts":
/*!*************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/TextArea/styled-components.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledTextAreaContainer": () => (/* binding */ StyledTextAreaContainer)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "../../node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
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

const StyledTextAreaContainer = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e1y61itm0",
  label: "StyledTextAreaContainer"
})( false ? 0 : {
  name: "1om1ktf",
  styles: "div{border-width:1px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9UZXh0QXJlYS9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQnVDIiwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9UZXh0QXJlYS9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMilcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFRleHRBcmVhQ29udGFpbmVyID0gc3R5bGVkLmRpdih7XG4gIGRpdjoge1xuICAgIC8vIFRPRE86IG1vdmUgdGhpcyB0byB0aGUgVGV4dEFyZWEgb3ZlcndyaXRlcyBvbmNlIFJvb3QgaXMgc3VwcG9ydGVkOlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS91YmVyL2Jhc2V3ZWIvaXNzdWVzLzQyNjRcbiAgICBib3JkZXJXaWR0aDogXCIxcHhcIixcbiAgfSxcbn0pXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

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
//# sourceMappingURL=streamlit_frontend_src_components_widgets_TextArea_index_tsx.chunk.js.map