"use strict";
(globalThis["webpackChunk_stlite_mountable"] = globalThis["webpackChunk_stlite_mountable"] || []).push([["streamlit_frontend_src_components_widgets_FileUploader_index_tsx"],{

/***/ "../../streamlit/frontend/src/components/shared/ProgressBar/ProgressBar.tsx":
/*!**********************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/shared/ProgressBar/ProgressBar.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Size": () => (/* binding */ Size),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "../../node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js");
/* harmony import */ var src_components_core_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/core/AppContext */ "../../streamlit/frontend/src/components/core/AppContext.tsx");
/* harmony import */ var src_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/theme */ "../../streamlit/frontend/src/theme/index.ts");
/* harmony import */ var baseui_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! baseui/progress-bar */ "../../node_modules/baseui/esm/progress-bar/progressbar.js");
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! baseui */ "../../node_modules/baseui/esm/helpers/overrides.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/shared/ProgressBar/ProgressBar.tsx",
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








let Size;
(function (Size) {
  Size["EXTRASMALL"] = "xs";
  Size["SMALL"] = "sm";
  Size["MEDIUM"] = "md";
  Size["LARGE"] = "lg";
  Size["EXTRALARGE"] = "xl";
})(Size || (Size = {}));
function ProgressBar(_ref) {
  _s();
  let {
    value,
    width,
    size = Size.SMALL,
    overrides
  } = _ref;
  const theme = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.u)();
  const heightMap = {
    xs: theme.spacing.twoXS,
    sm: theme.spacing.sm,
    md: theme.spacing.lg,
    lg: theme.spacing.xl,
    xl: theme.spacing.twoXL
  };
  const {
    activeTheme
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(src_components_core_AppContext__WEBPACK_IMPORTED_MODULE_1__.AppContext);
  const usingCustomTheme = !(0,src_theme__WEBPACK_IMPORTED_MODULE_2__.isPresetTheme)(activeTheme);
  const defaultOverrides = {
    BarContainer: {
      style: {
        marginTop: theme.spacing.none,
        marginBottom: theme.spacing.none,
        marginRight: theme.spacing.none,
        marginLeft: theme.spacing.none
      }
    },
    Bar: {
      style: _ref2 => {
        let {
          $theme
        } = _ref2;
        return {
          width: width ? width.toString() : undefined,
          marginTop: theme.spacing.none,
          marginBottom: theme.spacing.none,
          marginRight: theme.spacing.none,
          marginLeft: theme.spacing.none,
          height: heightMap[size],
          backgroundColor: $theme.colors.progressbarTrackFill,
          borderTopLeftRadius: theme.spacing.twoXS,
          borderTopRightRadius: theme.spacing.twoXS,
          borderBottomLeftRadius: theme.spacing.twoXS,
          borderBottomRightRadius: theme.spacing.twoXS
        };
      }
    },
    BarProgress: {
      style: () => ({
        backgroundColor: usingCustomTheme ? theme.colors.primary : theme.colors.blue70,
        borderTopLeftRadius: theme.spacing.twoXS,
        borderTopRightRadius: theme.spacing.twoXS,
        borderBottomLeftRadius: theme.spacing.twoXS,
        borderBottomRightRadius: theme.spacing.twoXS
      })
    }
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(baseui_progress_bar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: value,
    overrides: (0,baseui__WEBPACK_IMPORTED_MODULE_6__.mergeOverrides)(defaultOverrides, overrides)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 5
  }, this);
}
_s(ProgressBar, "z3HtTnkdZnFuk3su93uKTN+O/lI=", false, function () {
  return [_emotion_react__WEBPACK_IMPORTED_MODULE_4__.u];
});
_c = ProgressBar;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressBar);
var _c;
__webpack_require__.$Refresh$.register(_c, "ProgressBar");

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

/***/ "../../streamlit/frontend/src/components/shared/ProgressBar/index.tsx":
/*!****************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/shared/ProgressBar/index.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Size": () => (/* reexport safe */ _ProgressBar__WEBPACK_IMPORTED_MODULE_0__.Size),
/* harmony export */   "default": () => (/* reexport safe */ _ProgressBar__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProgressBar */ "../../streamlit/frontend/src/components/shared/ProgressBar/ProgressBar.tsx");
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

/***/ "../../streamlit/frontend/src/components/widgets/FileUploader/FileDropzone.tsx":
/*!*************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/FileUploader/FileDropzone.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dropzone */ "../../node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var src_components_shared_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/shared/Button */ "../../streamlit/frontend/src/components/shared/Button/index.tsx");
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled-components */ "../../streamlit/frontend/src/components/widgets/FileUploader/styled-components.ts");
/* harmony import */ var _FileDropzoneInstructions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FileDropzoneInstructions */ "../../streamlit/frontend/src/components/widgets/FileUploader/FileDropzoneInstructions.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/widgets/FileUploader/FileDropzone.tsx";
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







const FileDropzone = _ref => {
  let {
    onDrop,
    multiple,
    acceptedExtensions,
    maxSizeBytes,
    disabled,
    label
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_dropzone__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onDrop: onDrop,
    multiple: multiple,
    accept: acceptedExtensions.length ? acceptedExtensions : undefined,
    maxSize: maxSizeBytes,
    disabled: disabled
    // react-dropzone v12+ uses the File System Access API by default,
    // causing the bug described in https://github.com/streamlit/streamlit/issues/6176.
    ,
    useFsAccessApi: false,
    children: _ref2 => {
      let {
        getRootProps,
        getInputProps
      } = _ref2;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_2__.StyledFileDropzoneSection, {
        ...getRootProps(),
        "data-testid": "stFileUploadDropzone",
        isDisabled: disabled,
        "aria-label": label,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          ...getInputProps()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_FileDropzoneInstructions__WEBPACK_IMPORTED_MODULE_3__["default"], {
          multiple: multiple,
          acceptedExtensions: acceptedExtensions,
          maxSizeBytes: maxSizeBytes
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(src_components_shared_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
          kind: src_components_shared_Button__WEBPACK_IMPORTED_MODULE_1__.Kind.SECONDARY,
          disabled: disabled,
          size: src_components_shared_Button__WEBPACK_IMPORTED_MODULE_1__.Size.SMALL,
          children: "Browse files"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 7
      }, undefined);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 3
  }, undefined);
};
_c = FileDropzone;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileDropzone);
var _c;
__webpack_require__.$Refresh$.register(_c, "FileDropzone");

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

/***/ "../../streamlit/frontend/src/components/widgets/FileUploader/FileDropzoneInstructions.tsx":
/*!*************************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/FileUploader/FileDropzoneInstructions.tsx ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _emotion_icons_material_outlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion-icons/material-outlined */ "../../node_modules/@emotion-icons/material-outlined/CloudUpload/CloudUpload.esm.js");
/* harmony import */ var src_components_shared_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/shared/Icon */ "../../streamlit/frontend/src/components/shared/Icon/index.tsx");
/* harmony import */ var src_lib_FileHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/lib/FileHelper */ "../../streamlit/frontend/src/lib/FileHelper.ts");
/* harmony import */ var src_components_shared_TextElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/shared/TextElements */ "../../streamlit/frontend/src/components/shared/TextElements/index.tsx");
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled-components */ "../../streamlit/frontend/src/components/widgets/FileUploader/styled-components.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/widgets/FileUploader/FileDropzoneInstructions.tsx";
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








const FileDropzoneInstructions = _ref => {
  let {
    multiple,
    acceptedExtensions,
    maxSizeBytes
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_4__.StyledFileDropzoneInstructions, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_4__.StyledFileDropzoneInstructionsFileUploaderIcon, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(src_components_shared_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
        content: _emotion_icons_material_outlined__WEBPACK_IMPORTED_MODULE_6__.CloudUpload,
        size: "threeXL"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_4__.StyledFileDropzoneInstructionsColumn, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_4__.StyledFileDropzoneInstructionsStyledSpan, {
        children: ["Drag and drop file", multiple ? "s" : "", " here"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(src_components_shared_TextElements__WEBPACK_IMPORTED_MODULE_3__.Small, {
        children: [`Limit ${(0,src_lib_FileHelper__WEBPACK_IMPORTED_MODULE_2__.getSizeDisplay)(maxSizeBytes, src_lib_FileHelper__WEBPACK_IMPORTED_MODULE_2__.FileSize.Byte, 0)} per file`, acceptedExtensions.length ? ` • ${acceptedExtensions.join(", ").replace(/\./g, "").toUpperCase()}` : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 3
  }, undefined);
};
_c = FileDropzoneInstructions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileDropzoneInstructions);
var _c;
__webpack_require__.$Refresh$.register(_c, "FileDropzoneInstructions");

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

/***/ "../../streamlit/frontend/src/components/widgets/FileUploader/FileUploader.tsx":
/*!*************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/FileUploader/FileUploader.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var src_autogen_proto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/autogen/proto */ "../../streamlit/frontend/src/autogen/proto.js");
/* harmony import */ var src_components_widgets_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/widgets/Form */ "../../streamlit/frontend/src/components/widgets/Form/index.tsx");
/* harmony import */ var src_lib_FileHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/lib/FileHelper */ "../../streamlit/frontend/src/lib/FileHelper.ts");
/* harmony import */ var src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/widgets/BaseWidget */ "../../streamlit/frontend/src/components/widgets/BaseWidget/index.tsx");
/* harmony import */ var src_components_shared_TooltipIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/shared/TooltipIcon */ "../../streamlit/frontend/src/components/shared/TooltipIcon/index.tsx");
/* harmony import */ var src_components_shared_Tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/shared/Tooltip */ "../../streamlit/frontend/src/components/shared/Tooltip/index.tsx");
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/lib/utils */ "../../streamlit/frontend/src/lib/utils.ts");
/* harmony import */ var _FileDropzone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FileDropzone */ "../../streamlit/frontend/src/components/widgets/FileUploader/FileDropzone.tsx");
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styled-components */ "../../streamlit/frontend/src/components/widgets/FileUploader/styled-components.ts");
/* harmony import */ var _UploadedFiles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./UploadedFiles */ "../../streamlit/frontend/src/components/widgets/FileUploader/UploadedFiles.tsx");
/* harmony import */ var _UploadFileInfo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./UploadFileInfo */ "../../streamlit/frontend/src/components/widgets/FileUploader/UploadFileInfo.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/widgets/FileUploader/FileUploader.tsx";
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
















class FileUploader extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
  /**
   * A counter for assigning unique internal IDs to each file tracked
   * by the uploader. These IDs are used to update file state internally,
   * and are separate from the serverFileIds that are returned by the server.
   */

  constructor(props) {
    super(props);
    this.formClearHelper = new src_components_widgets_Form__WEBPACK_IMPORTED_MODULE_4__.FormClearHelper();
    this.localFileIdCounter = 1;
    this.componentDidUpdate = prevProps => {
      const {
        element,
        widgetMgr
      } = this.props;

      // TODO(vdonato): Rework this now that there's a short window where the app
      // may reconnect to the server without losing its uploaded files. Just
      // removing the if statement below (to avoid resetting widget state on a
      // disconnect) seemed to work, but I'm not entirely sure if it's a complete
      // fix.
      //
      // Widgets are disabled if the app is not connected anymore.
      // If the app disconnects from the server, a new session is created and users
      // will lose access to the files they uploaded in their previous session.
      // If we are reconnecting, reset the file uploader so that the widget is
      // in sync with the new session.
      if (prevProps.disabled !== this.props.disabled && this.props.disabled) {
        this.reset();
        widgetMgr.setFileUploaderStateValue(element, new src_autogen_proto__WEBPACK_IMPORTED_MODULE_3__.FileUploaderState(), {
          fromUi: false
        });
        return;
      }

      // Maybe send a widgetValue update to the widgetStateManager.

      // If our status is not "ready", then we have uploads in progress.
      // We won't submit a new widgetValue until all uploads have resolved.
      if (this.status !== "ready") {
        return;
      }

      // If we have had no completed uploads, our widgetValue will be
      // undefined, and we can early-out of the state update.
      const newWidgetValue = this.createWidgetValue();
      if (newWidgetValue === undefined) {
        return;
      }
      const prevWidgetValue = widgetMgr.getFileUploaderStateValue(element);
      if (!lodash__WEBPACK_IMPORTED_MODULE_1___default().isEqual(newWidgetValue, prevWidgetValue)) {
        widgetMgr.setFileUploaderStateValue(element, newWidgetValue, {
          fromUi: true
        });
      }
    };
    this.reset = () => {
      this.setState({
        files: []
      });
    };
    this.dropHandler = (acceptedFiles, rejectedFiles) => {
      const {
        element
      } = this.props;
      const {
        multipleFiles
      } = element;

      // If this is a single-file uploader and multiple files were dropped,
      // all the files will be rejected. In this case, we pull out the first
      // valid file into acceptedFiles, and reject the rest.
      if (!multipleFiles && acceptedFiles.length === 0 && rejectedFiles.length > 1) {
        const firstFileIndex = rejectedFiles.findIndex(file => file.errors.length === 1 && file.errors[0].code === "too-many-files");
        if (firstFileIndex >= 0) {
          acceptedFiles.push(rejectedFiles[firstFileIndex].file);
          rejectedFiles.splice(firstFileIndex, 1);
        }
      }

      // If this is a single-file uploader that already has a file,
      // remove that file so that it can be replaced with our new one.
      if (!multipleFiles && acceptedFiles.length > 0 && this.state.files.length > 0) {
        this.removeFile(this.state.files[0].id);
      }

      // Upload each accepted file.
      acceptedFiles.forEach(this.uploadFile);

      // Create an UploadFileInfo for each of our rejected files, and add them to
      // our state.
      if (rejectedFiles.length > 0) {
        const rejectedInfos = rejectedFiles.map(rejected => {
          const {
            file
          } = rejected;
          return new _UploadFileInfo__WEBPACK_IMPORTED_MODULE_13__.UploadFileInfo(file.name, file.size, this.nextLocalFileId(), {
            type: "error",
            errorMessage: this.getErrorMessage(rejected.errors[0].code, rejected.file)
          });
        });
        this.addFiles(rejectedInfos);
      }
    };
    this.uploadFile = file => {
      // Create an UploadFileInfo for this file and add it to our state.
      const cancelToken = axios__WEBPACK_IMPORTED_MODULE_0___default().CancelToken.source();
      const uploadingFileInfo = new _UploadFileInfo__WEBPACK_IMPORTED_MODULE_13__.UploadFileInfo(file.name, file.size, this.nextLocalFileId(), {
        type: "uploading",
        cancelToken,
        progress: 1
      });
      this.addFile(uploadingFileInfo);
      this.props.uploadClient.uploadFile(this.props.element, file, e => this.onUploadProgress(e, uploadingFileInfo.id), cancelToken.token).then(newFileId => this.onUploadComplete(uploadingFileInfo.id, newFileId)).catch(err => {
        // If this was a cancel error, we don't show the user an error -
        // the cancellation was in response to an action they took.
        if (!axios__WEBPACK_IMPORTED_MODULE_0___default().isCancel(err)) {
          this.updateFile(uploadingFileInfo.id, uploadingFileInfo.setStatus({
            type: "error",
            errorMessage: err ? err.toString() : "Unknown error"
          }));
        }
      });
    };
    this.onUploadComplete = (localFileId, serverFileId) => {
      // "state.newestServerFileId" must always hold the max fileID
      // returned from the server.
      this.setState(state => ({
        newestServerFileId: Math.max(state.newestServerFileId, serverFileId)
      }));
      const curFile = this.getFile(localFileId);
      if (curFile == null || curFile.status.type !== "uploading") {
        // The file may have been canceled right before the upload
        // completed. In this case, we just bail.
        return;
      }
      this.updateFile(curFile.id, curFile.setStatus({
        type: "uploaded",
        serverFileId
      }));
    };
    this.getErrorMessage = (errorCode, file) => {
      switch (errorCode) {
        case "file-too-large":
          return `File must be ${(0,src_lib_FileHelper__WEBPACK_IMPORTED_MODULE_5__.getSizeDisplay)(this.maxUploadSizeInBytes, src_lib_FileHelper__WEBPACK_IMPORTED_MODULE_5__.FileSize.Byte)} or smaller.`;
        case "file-invalid-type":
          return `${file.type} files are not allowed.`;
        case "file-too-small":
          // This should not fire.
          return `File size is too small.`;
        case "too-many-files":
          return "Only one file is allowed.";
        default:
          return "Unexpected error. Please try again.";
      }
    };
    this.deleteFile = fileId => {
      const file = this.getFile(fileId);
      if (file == null) {
        return;
      }
      if (file.status.type === "uploading") {
        // The file hasn't been uploaded. Let's cancel the request.
        // However, it may have been received by the server so we'll still
        // send out a request to delete.
        file.status.cancelToken.cancel();
      }
      this.removeFile(fileId);
    };
    this.addFile = file => {
      this.setState(state => ({
        files: [...state.files, file]
      }));
    };
    this.addFiles = files => {
      this.setState(state => ({
        files: [...state.files, ...files]
      }));
    };
    this.removeFile = idToRemove => {
      this.setState(state => ({
        files: state.files.filter(file => file.id !== idToRemove)
      }));
    };
    this.getFile = fileId => {
      return this.state.files.find(file => file.id === fileId);
    };
    this.updateFile = (curFileId, newFile) => {
      this.setState(curState => {
        return {
          files: curState.files.map(file => file.id === curFileId ? newFile : file)
        };
      });
    };
    this.onUploadProgress = (event, fileId) => {
      const file = this.getFile(fileId);
      if (file == null || file.status.type !== "uploading") {
        return;
      }
      const newProgress = Math.round(event.loaded * 100 / event.total);
      if (file.status.progress === newProgress) {
        return;
      }

      // Update file.progress
      this.updateFile(fileId, file.setStatus({
        type: "uploading",
        cancelToken: file.status.cancelToken,
        progress: newProgress
      }));
    };
    this.onFormCleared = () => {
      this.setState({
        files: []
      }, () => {
        const newWidgetValue = this.createWidgetValue();
        if (newWidgetValue == null) {
          return;
        }
        this.props.widgetMgr.setFileUploaderStateValue(this.props.element, newWidgetValue, {
          fromUi: true
        });
      });
    };
    this.state = this.initialValue;
  }
  get initialValue() {
    const emptyState = {
      files: [],
      newestServerFileId: 0
    };
    const {
      widgetMgr,
      element
    } = this.props;
    const widgetValue = widgetMgr.getFileUploaderStateValue(element);
    if (widgetValue == null) {
      return emptyState;
    }
    const {
      maxFileId,
      uploadedFileInfo
    } = widgetValue;
    if (maxFileId == null || maxFileId === 0 || uploadedFileInfo == null) {
      return emptyState;
    }
    return {
      files: uploadedFileInfo.map(f => {
        const name = f.name;
        const size = f.size;
        const serverFileId = f.id;
        return new _UploadFileInfo__WEBPACK_IMPORTED_MODULE_13__.UploadFileInfo(name, size, this.nextLocalFileId(), {
          type: "uploaded",
          serverFileId
        });
      }),
      newestServerFileId: Number(maxFileId)
    };
  }
  componentWillUnmount() {
    this.formClearHelper.disconnect();
  }

  /**
   * Return this.props.element.maxUploadSizeMb, converted to bytes.
   */
  get maxUploadSizeInBytes() {
    const maxMbs = this.props.element.maxUploadSizeMb;
    return (0,src_lib_FileHelper__WEBPACK_IMPORTED_MODULE_5__.sizeConverter)(maxMbs, src_lib_FileHelper__WEBPACK_IMPORTED_MODULE_5__.FileSize.Megabyte, src_lib_FileHelper__WEBPACK_IMPORTED_MODULE_5__.FileSize.Byte);
  }

  /**
   * Return the FileUploader's current status, which is derived from
   * its state.
   */
  get status() {
    const isFileUpdating = file => file.status.type === "uploading";

    // If any of our files is Uploading or Deleting, then we're currently
    // updating.
    if (this.state.files.some(isFileUpdating)) {
      return "updating";
    }
    return "ready";
  }
  /**
   * When the server receives the widget value, it deletes "orphaned" uploaded
   * files. An orphaned file is any file, associated with this uploader,
   * whose file ID is not in the file ID list, and whose
   * ID is <= `newestServerFileId`. This logic ensures that a FileUploader
   * within a form doesn't have any of its "unsubmitted" uploads prematurely
   * deleted when the script is re-run.
   */
  createWidgetValue() {
    if (this.state.newestServerFileId === 0) {
      // If newestServerFileId is 0, we've had no transaction with the server,
      // and therefore no widget value.
      return undefined;
    }
    const uploadedFileInfo = this.state.files.filter(f => f.status.type === "uploaded").map(f => {
      const {
        name,
        size,
        status
      } = f;
      return new src_autogen_proto__WEBPACK_IMPORTED_MODULE_3__.UploadedFileInfo({
        id: status.serverFileId,
        name,
        size
      });
    });
    return new src_autogen_proto__WEBPACK_IMPORTED_MODULE_3__.FileUploaderState({
      maxFileId: this.state.newestServerFileId,
      uploadedFileInfo
    });
  }

  /**
   * Clear files and errors, and reset the widget to its READY state.
   */

  render() {
    var _element$labelVisibil;
    const {
      files
    } = this.state;
    const {
      element,
      disabled,
      widgetMgr
    } = this.props;
    const acceptedExtensions = element.type;

    // Manage our form-clear event handler.
    this.formClearHelper.manageFormClearListener(widgetMgr, element.formId, this.onFormCleared);

    // We display files in the reverse order they were added.
    // This way, if you have multiple pages of uploaded files and then drop
    // another one, you'll see that newest file at the top of the first page.
    const newestToOldestFiles = files.slice().reverse();
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_11__.StyledFileUploader, {
      "data-testid": "stFileUploader",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_6__.WidgetLabel, {
        label: element.label,
        disabled: disabled,
        labelVisibility: (0,src_lib_utils__WEBPACK_IMPORTED_MODULE_9__.labelVisibilityProtoValueToEnum)((_element$labelVisibil = element.labelVisibility) === null || _element$labelVisibil === void 0 ? void 0 : _element$labelVisibil.value),
        children: element.help && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_6__.StyledWidgetLabelHelp, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(src_components_shared_TooltipIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
            content: element.help,
            placement: src_components_shared_Tooltip__WEBPACK_IMPORTED_MODULE_8__.Placement.TOP_RIGHT
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 520,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 519,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 511,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_FileDropzone__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onDrop: this.dropHandler,
        multiple: element.multipleFiles,
        acceptedExtensions: acceptedExtensions,
        maxSizeBytes: this.maxUploadSizeInBytes,
        label: element.label,
        disabled: disabled
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 527,
        columnNumber: 9
      }, this), newestToOldestFiles.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_UploadedFiles__WEBPACK_IMPORTED_MODULE_12__["default"], {
        items: newestToOldestFiles,
        pageSize: 3,
        onDelete: this.deleteFile,
        resetOnAdd: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 536,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 7
    }, this);
  }
  nextLocalFileId() {
    return this.localFileIdCounter++;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileUploader);

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

/***/ "../../streamlit/frontend/src/components/widgets/FileUploader/UploadFileInfo.ts":
/*!**************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/FileUploader/UploadFileInfo.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadFileInfo": () => (/* binding */ UploadFileInfo)
/* harmony export */ });
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

/** The various statuses that an UploadedFileInfo can have. */

/**
 * Wraps a File object with additional data used by FileUploader.
 * This class is immutable because it's used in within FileUploader.state.
 */
class UploadFileInfo {
  /**
   * ID used to refer to the file locally, for update operations.
   * If the file is uploaded, it will also have a serverID, which is
   * used to refer to the file on the server.
   */

  /**
   * Create a clone of this UploadFileInfo with the given status.
   */
  setStatus(status) {
    return new UploadFileInfo(this.name, this.size, this.id, status);
  }
  constructor(name, size, id, status) {
    this.name = void 0;
    this.size = void 0;
    this.status = void 0;
    this.id = void 0;
    this.name = name;
    this.size = size;
    this.id = id;
    this.status = status;
  }
}

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

/***/ "../../streamlit/frontend/src/components/widgets/FileUploader/UploadedFile.tsx":
/*!*************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/FileUploader/UploadedFile.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadedFileStatus": () => (/* binding */ UploadedFileStatus),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _emotion_icons_material_outlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion-icons/material-outlined */ "../../node_modules/@emotion-icons/material-outlined/Error/Error.esm.js");
/* harmony import */ var _emotion_icons_material_outlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion-icons/material-outlined */ "../../node_modules/@emotion-icons/material-outlined/InsertDriveFile/InsertDriveFile.esm.js");
/* harmony import */ var _emotion_icons_material_outlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion-icons/material-outlined */ "../../node_modules/@emotion-icons/material-outlined/Clear/Clear.esm.js");
/* harmony import */ var src_components_shared_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/shared/Button */ "../../streamlit/frontend/src/components/shared/Button/index.tsx");
/* harmony import */ var src_components_shared_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/shared/Icon */ "../../streamlit/frontend/src/components/shared/Icon/index.tsx");
/* harmony import */ var src_components_shared_ProgressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/shared/ProgressBar */ "../../streamlit/frontend/src/components/shared/ProgressBar/index.tsx");
/* harmony import */ var src_components_shared_TextElements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/shared/TextElements */ "../../streamlit/frontend/src/components/shared/TextElements/index.tsx");
/* harmony import */ var src_lib_FileHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/lib/FileHelper */ "../../streamlit/frontend/src/lib/FileHelper.ts");
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styled-components */ "../../streamlit/frontend/src/components/widgets/FileUploader/styled-components.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/widgets/FileUploader/UploadedFile.tsx";
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










const UploadedFileStatus = _ref => {
  let {
    fileInfo
  } = _ref;
  if (fileInfo.status.type === "uploading") {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(src_components_shared_ProgressBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: fileInfo.status.progress,
      size: src_components_shared_ProgressBar__WEBPACK_IMPORTED_MODULE_3__.Size.SMALL,
      overrides: {
        Bar: {
          style: {
            marginLeft: 0,
            marginTop: "4px"
          }
        }
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined);
  }
  if (fileInfo.status.type === "error") {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_6__.StyledFileError, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_6__.StyledErrorMessage, {
        "data-testid": "stUploadedFileErrorMessage",
        children: fileInfo.status.errorMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_6__.StyledFileErrorIcon, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(src_components_shared_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
          content: _emotion_icons_material_outlined__WEBPACK_IMPORTED_MODULE_8__.Error,
          size: "lg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, undefined);
  }
  if (fileInfo.status.type === "uploaded") {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(src_components_shared_TextElements__WEBPACK_IMPORTED_MODULE_4__.Small, {
      children: (0,src_lib_FileHelper__WEBPACK_IMPORTED_MODULE_5__.getSizeDisplay)(fileInfo.size, src_lib_FileHelper__WEBPACK_IMPORTED_MODULE_5__.FileSize.Byte)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 12
    }, undefined);
  }
  return null;
};
_c = UploadedFileStatus;
const UploadedFile = _ref2 => {
  let {
    fileInfo,
    onDelete
  } = _ref2;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_6__.StyledUploadedFile, {
    className: "uploadedFile",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_6__.StyledFileIcon, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(src_components_shared_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        content: _emotion_icons_material_outlined__WEBPACK_IMPORTED_MODULE_9__.InsertDriveFile,
        size: "twoXL"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_6__.StyledUploadedFileData, {
      className: "uploadedFileData",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_6__.StyledUploadedFileName, {
        className: "uploadedFileName",
        title: fileInfo.name,
        children: fileInfo.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(UploadedFileStatus, {
        fileInfo: fileInfo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      "data-testid": "fileDeleteBtn",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(src_components_shared_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onClick: () => onDelete(fileInfo.id),
        kind: src_components_shared_Button__WEBPACK_IMPORTED_MODULE_1__.Kind.MINIMAL,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(src_components_shared_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
          content: _emotion_icons_material_outlined__WEBPACK_IMPORTED_MODULE_10__.Clear,
          size: "lg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 5
  }, undefined);
};
_c2 = UploadedFile;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadedFile);
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "UploadedFileStatus");
__webpack_require__.$Refresh$.register(_c2, "UploadedFile");

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

/***/ "../../streamlit/frontend/src/components/widgets/FileUploader/UploadedFiles.tsx":
/*!**************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/FileUploader/UploadedFiles.tsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginatedFiles": () => (/* binding */ PaginatedFiles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var src_hocs_withPagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/hocs/withPagination */ "../../streamlit/frontend/src/hocs/withPagination/index.tsx");
/* harmony import */ var _UploadedFile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UploadedFile */ "../../streamlit/frontend/src/components/widgets/FileUploader/UploadedFile.tsx");
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled-components */ "../../streamlit/frontend/src/components/widgets/FileUploader/styled-components.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/widgets/FileUploader/UploadedFiles.tsx";
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






const UploadedFileList = _ref => {
  let {
    items,
    onDelete
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_3__.StyledUploadedFilesList, {
    children: items.map(file => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_3__.StyledUploadedFilesListItem, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_UploadedFile__WEBPACK_IMPORTED_MODULE_2__["default"], {
        fileInfo: file,
        onDelete: onDelete
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, undefined)
    }, file.id, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, undefined);
};
_c = UploadedFileList;
const PaginatedFiles = (0,src_hocs_withPagination__WEBPACK_IMPORTED_MODULE_1__["default"])(UploadedFileList);
_c2 = PaginatedFiles;
const UploadedFiles = props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_3__.StyledUploadedFiles, {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(PaginatedFiles, {
    ...props
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 48,
  columnNumber: 3
}, undefined);
_c3 = UploadedFiles;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadedFiles);
var _c, _c2, _c3;
__webpack_require__.$Refresh$.register(_c, "UploadedFileList");
__webpack_require__.$Refresh$.register(_c2, "PaginatedFiles");
__webpack_require__.$Refresh$.register(_c3, "UploadedFiles");

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

/***/ "../../streamlit/frontend/src/components/widgets/FileUploader/index.tsx":
/*!******************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/FileUploader/index.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _FileUploader__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _FileUploader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileUploader */ "../../streamlit/frontend/src/components/widgets/FileUploader/FileUploader.tsx");
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

/***/ "../../streamlit/frontend/src/components/widgets/FileUploader/styled-components.ts":
/*!*****************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/FileUploader/styled-components.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledErrorMessage": () => (/* binding */ StyledErrorMessage),
/* harmony export */   "StyledFileDropzoneInstructions": () => (/* binding */ StyledFileDropzoneInstructions),
/* harmony export */   "StyledFileDropzoneInstructionsColumn": () => (/* binding */ StyledFileDropzoneInstructionsColumn),
/* harmony export */   "StyledFileDropzoneInstructionsFileUploaderIcon": () => (/* binding */ StyledFileDropzoneInstructionsFileUploaderIcon),
/* harmony export */   "StyledFileDropzoneInstructionsStyledSpan": () => (/* binding */ StyledFileDropzoneInstructionsStyledSpan),
/* harmony export */   "StyledFileDropzoneSection": () => (/* binding */ StyledFileDropzoneSection),
/* harmony export */   "StyledFileError": () => (/* binding */ StyledFileError),
/* harmony export */   "StyledFileErrorIcon": () => (/* binding */ StyledFileErrorIcon),
/* harmony export */   "StyledFileIcon": () => (/* binding */ StyledFileIcon),
/* harmony export */   "StyledFileUploader": () => (/* binding */ StyledFileUploader),
/* harmony export */   "StyledUploadedFile": () => (/* binding */ StyledUploadedFile),
/* harmony export */   "StyledUploadedFileData": () => (/* binding */ StyledUploadedFileData),
/* harmony export */   "StyledUploadedFileName": () => (/* binding */ StyledUploadedFileName),
/* harmony export */   "StyledUploadedFiles": () => (/* binding */ StyledUploadedFiles),
/* harmony export */   "StyledUploadedFilesList": () => (/* binding */ StyledUploadedFilesList),
/* harmony export */   "StyledUploadedFilesListItem": () => (/* binding */ StyledUploadedFilesListItem)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "../../node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
const StyledFileDropzoneSection = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("section",  false ? 0 : {
  target: "exg6vvm15",
  label: "StyledFileDropzoneSection"
})(_ref => {
  let {
    isDisabled,
    theme
  } = _ref;
  return {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.secondaryBg,
    borderRadius: theme.radii.md,
    ":focus": {
      outline: "none",
      boxShadow: `0 0 0 1px ${theme.colors.primary}`
    },
    color: isDisabled ? theme.colors.gray : theme.colors.bodyText
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9GaWxlVXBsb2FkZXIvc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJ5QyIsImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9zdGxpdGUtZGV2L3N0bGl0ZS1kZXYvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3dpZGdldHMvRmlsZVVwbG9hZGVyL3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkLCB7IENTU09iamVjdCB9IGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwic3JjL3RoZW1lXCJcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZWRGaWxlRHJvcHpvbmUge1xuICBpc0Rpc2FibGVkOiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb248U3R5bGVkRmlsZURyb3B6b25lPihcbiAgKHsgaXNEaXNhYmxlZCwgdGhlbWUgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcubGcsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5QmcsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpaS5tZCxcbiAgICBcIjpmb2N1c1wiOiB7XG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDFweCAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fWAsXG4gICAgfSxcbiAgICBjb2xvcjogaXNEaXNhYmxlZCA/IHRoZW1lLmNvbG9ycy5ncmF5IDogdGhlbWUuY29sb3JzLmJvZHlUZXh0LFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnNGaWxlVXBsb2FkZXJJY29uID0gc3R5bGVkLnNwYW4oXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5kYXJrZW5lZEJnTWl4MTAwLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zU3R5bGVkU3BhbiA9IHN0eWxlZC5zcGFuKFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy50d29YUyxcbiAgfSlcbilcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0NvbHVtbiA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbn0pXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVzID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBsZWZ0OiAwLFxuICByaWdodDogMCxcbiAgbGluZUhlaWdodDogdGhlbWUubGluZUhlaWdodHMudGlnaHQsXG4gIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcubWQsXG4gIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcubGcsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0ID0gc3R5bGVkLnVsKCgpID0+ICh7XG4gIGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLFxuICBtYXJnaW5Cb3R0b206IDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSA9IHN0eWxlZC5saSgoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW46IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVEYXRhID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJiYXNlbGluZVwiLFxuICBmbGV4OiAxLFxuICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZy5sZyxcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZU5hbWUgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnNtLFxuICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcudHdvWFMsXG4gIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIixcbiAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkVXBsb2FkZWRGaWxlID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRFcnJvck1lc3NhZ2UgPSBzdHlsZWQuc3BhbigoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy50d29YUyxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZUljb24gPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhcmtlbmVkQmdNaXgxMDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvciA9IHN0eWxlZC5zbWFsbCgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhbmdlcixcbiAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgaGVpZ2h0OiB0aGVtZS5mb250U2l6ZXMuc20sXG4gIGxpbmVIZWlnaHQ6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvckljb24gPSBzdHlsZWQuc3Bhbih7fSlcblxuY29uc3QgY29tcGFjdEZpbGVVcGxvYWRlciA9ICh0aGVtZTogVGhlbWUpOiBDU1NPYmplY3QgPT4gKHtcbiAgW1N0eWxlZEZpbGVEcm9wem9uZVNlY3Rpb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnMgYXMgYW55XToge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy5sZyxcbiAgfSxcbiAgW1N0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0ZpbGVVcGxvYWRlckljb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlcyBhcyBhbnldOiB7XG4gICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlIGFzIGFueV06IHtcbiAgICBtYXhXaWR0aDogXCJpbmhlcml0XCIsXG4gICAgZmxleDogMSxcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcuc20sXG4gIH0sXG4gIFtTdHlsZWRVcGxvYWRlZEZpbGVOYW1lIGFzIGFueV06IHtcbiAgICB3aWR0aDogdGhlbWUuc2l6ZXMuZnVsbCxcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZURhdGEgYXMgYW55XToge1xuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3IgYXMgYW55XToge1xuICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgd2hpdGVTcGFjZTogXCJpbml0aWFsXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3JJY29uIGFzIGFueV06IHtcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSBhcyBhbnldOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nLm5vbmUsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVVcGxvYWRlciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4ge1xuICBpZiAodGhlbWUuaW5TaWRlYmFyKSB7XG4gICAgcmV0dXJuIGNvbXBhY3RGaWxlVXBsb2FkZXIodGhlbWUpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIFtgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMuc219KWBdOlxuICAgICAgY29tcGFjdEZpbGVVcGxvYWRlcih0aGVtZSksXG4gIH1cbn0pXG4iXX0= */");
const StyledFileDropzoneInstructions = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "exg6vvm14",
  label: "StyledFileDropzoneInstructions"
})(() => ({
  marginRight: "auto",
  alignItems: "center",
  display: "flex"
}),  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9GaWxlVXBsb2FkZXIvc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0M4QyIsImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9zdGxpdGUtZGV2L3N0bGl0ZS1kZXYvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3dpZGdldHMvRmlsZVVwbG9hZGVyL3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkLCB7IENTU09iamVjdCB9IGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwic3JjL3RoZW1lXCJcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZWRGaWxlRHJvcHpvbmUge1xuICBpc0Rpc2FibGVkOiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb248U3R5bGVkRmlsZURyb3B6b25lPihcbiAgKHsgaXNEaXNhYmxlZCwgdGhlbWUgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcubGcsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5QmcsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpaS5tZCxcbiAgICBcIjpmb2N1c1wiOiB7XG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDFweCAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fWAsXG4gICAgfSxcbiAgICBjb2xvcjogaXNEaXNhYmxlZCA/IHRoZW1lLmNvbG9ycy5ncmF5IDogdGhlbWUuY29sb3JzLmJvZHlUZXh0LFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnNGaWxlVXBsb2FkZXJJY29uID0gc3R5bGVkLnNwYW4oXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5kYXJrZW5lZEJnTWl4MTAwLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zU3R5bGVkU3BhbiA9IHN0eWxlZC5zcGFuKFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy50d29YUyxcbiAgfSlcbilcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0NvbHVtbiA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbn0pXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVzID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBsZWZ0OiAwLFxuICByaWdodDogMCxcbiAgbGluZUhlaWdodDogdGhlbWUubGluZUhlaWdodHMudGlnaHQsXG4gIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcubWQsXG4gIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcubGcsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0ID0gc3R5bGVkLnVsKCgpID0+ICh7XG4gIGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLFxuICBtYXJnaW5Cb3R0b206IDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSA9IHN0eWxlZC5saSgoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW46IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVEYXRhID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJiYXNlbGluZVwiLFxuICBmbGV4OiAxLFxuICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZy5sZyxcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZU5hbWUgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnNtLFxuICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcudHdvWFMsXG4gIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIixcbiAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkVXBsb2FkZWRGaWxlID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRFcnJvck1lc3NhZ2UgPSBzdHlsZWQuc3BhbigoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy50d29YUyxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZUljb24gPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhcmtlbmVkQmdNaXgxMDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvciA9IHN0eWxlZC5zbWFsbCgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhbmdlcixcbiAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgaGVpZ2h0OiB0aGVtZS5mb250U2l6ZXMuc20sXG4gIGxpbmVIZWlnaHQ6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvckljb24gPSBzdHlsZWQuc3Bhbih7fSlcblxuY29uc3QgY29tcGFjdEZpbGVVcGxvYWRlciA9ICh0aGVtZTogVGhlbWUpOiBDU1NPYmplY3QgPT4gKHtcbiAgW1N0eWxlZEZpbGVEcm9wem9uZVNlY3Rpb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnMgYXMgYW55XToge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy5sZyxcbiAgfSxcbiAgW1N0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0ZpbGVVcGxvYWRlckljb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlcyBhcyBhbnldOiB7XG4gICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlIGFzIGFueV06IHtcbiAgICBtYXhXaWR0aDogXCJpbmhlcml0XCIsXG4gICAgZmxleDogMSxcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcuc20sXG4gIH0sXG4gIFtTdHlsZWRVcGxvYWRlZEZpbGVOYW1lIGFzIGFueV06IHtcbiAgICB3aWR0aDogdGhlbWUuc2l6ZXMuZnVsbCxcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZURhdGEgYXMgYW55XToge1xuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3IgYXMgYW55XToge1xuICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgd2hpdGVTcGFjZTogXCJpbml0aWFsXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3JJY29uIGFzIGFueV06IHtcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSBhcyBhbnldOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nLm5vbmUsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVVcGxvYWRlciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4ge1xuICBpZiAodGhlbWUuaW5TaWRlYmFyKSB7XG4gICAgcmV0dXJuIGNvbXBhY3RGaWxlVXBsb2FkZXIodGhlbWUpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIFtgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMuc219KWBdOlxuICAgICAgY29tcGFjdEZpbGVVcGxvYWRlcih0aGVtZSksXG4gIH1cbn0pXG4iXX0= */");
const StyledFileDropzoneInstructionsFileUploaderIcon = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span",  false ? 0 : {
  target: "exg6vvm13",
  label: "StyledFileDropzoneInstructionsFileUploaderIcon"
})(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    color: theme.colors.darkenedBgMix100,
    marginRight: theme.spacing.lg
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9GaWxlVXBsb2FkZXIvc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEM4RCIsImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9zdGxpdGUtZGV2L3N0bGl0ZS1kZXYvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3dpZGdldHMvRmlsZVVwbG9hZGVyL3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkLCB7IENTU09iamVjdCB9IGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwic3JjL3RoZW1lXCJcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZWRGaWxlRHJvcHpvbmUge1xuICBpc0Rpc2FibGVkOiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb248U3R5bGVkRmlsZURyb3B6b25lPihcbiAgKHsgaXNEaXNhYmxlZCwgdGhlbWUgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcubGcsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5QmcsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpaS5tZCxcbiAgICBcIjpmb2N1c1wiOiB7XG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDFweCAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fWAsXG4gICAgfSxcbiAgICBjb2xvcjogaXNEaXNhYmxlZCA/IHRoZW1lLmNvbG9ycy5ncmF5IDogdGhlbWUuY29sb3JzLmJvZHlUZXh0LFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnNGaWxlVXBsb2FkZXJJY29uID0gc3R5bGVkLnNwYW4oXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5kYXJrZW5lZEJnTWl4MTAwLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zU3R5bGVkU3BhbiA9IHN0eWxlZC5zcGFuKFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy50d29YUyxcbiAgfSlcbilcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0NvbHVtbiA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbn0pXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVzID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBsZWZ0OiAwLFxuICByaWdodDogMCxcbiAgbGluZUhlaWdodDogdGhlbWUubGluZUhlaWdodHMudGlnaHQsXG4gIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcubWQsXG4gIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcubGcsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0ID0gc3R5bGVkLnVsKCgpID0+ICh7XG4gIGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLFxuICBtYXJnaW5Cb3R0b206IDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSA9IHN0eWxlZC5saSgoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW46IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVEYXRhID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJiYXNlbGluZVwiLFxuICBmbGV4OiAxLFxuICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZy5sZyxcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZU5hbWUgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnNtLFxuICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcudHdvWFMsXG4gIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIixcbiAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkVXBsb2FkZWRGaWxlID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRFcnJvck1lc3NhZ2UgPSBzdHlsZWQuc3BhbigoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy50d29YUyxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZUljb24gPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhcmtlbmVkQmdNaXgxMDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvciA9IHN0eWxlZC5zbWFsbCgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhbmdlcixcbiAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgaGVpZ2h0OiB0aGVtZS5mb250U2l6ZXMuc20sXG4gIGxpbmVIZWlnaHQ6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvckljb24gPSBzdHlsZWQuc3Bhbih7fSlcblxuY29uc3QgY29tcGFjdEZpbGVVcGxvYWRlciA9ICh0aGVtZTogVGhlbWUpOiBDU1NPYmplY3QgPT4gKHtcbiAgW1N0eWxlZEZpbGVEcm9wem9uZVNlY3Rpb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnMgYXMgYW55XToge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy5sZyxcbiAgfSxcbiAgW1N0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0ZpbGVVcGxvYWRlckljb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlcyBhcyBhbnldOiB7XG4gICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlIGFzIGFueV06IHtcbiAgICBtYXhXaWR0aDogXCJpbmhlcml0XCIsXG4gICAgZmxleDogMSxcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcuc20sXG4gIH0sXG4gIFtTdHlsZWRVcGxvYWRlZEZpbGVOYW1lIGFzIGFueV06IHtcbiAgICB3aWR0aDogdGhlbWUuc2l6ZXMuZnVsbCxcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZURhdGEgYXMgYW55XToge1xuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3IgYXMgYW55XToge1xuICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgd2hpdGVTcGFjZTogXCJpbml0aWFsXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3JJY29uIGFzIGFueV06IHtcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSBhcyBhbnldOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nLm5vbmUsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVVcGxvYWRlciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4ge1xuICBpZiAodGhlbWUuaW5TaWRlYmFyKSB7XG4gICAgcmV0dXJuIGNvbXBhY3RGaWxlVXBsb2FkZXIodGhlbWUpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIFtgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMuc219KWBdOlxuICAgICAgY29tcGFjdEZpbGVVcGxvYWRlcih0aGVtZSksXG4gIH1cbn0pXG4iXX0= */");
const StyledFileDropzoneInstructionsStyledSpan = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span",  false ? 0 : {
  target: "exg6vvm12",
  label: "StyledFileDropzoneInstructionsStyledSpan"
})(_ref3 => {
  let {
    theme
  } = _ref3;
  return {
    marginBottom: theme.spacing.twoXS
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9GaWxlVXBsb2FkZXIvc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUR3RCIsImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9zdGxpdGUtZGV2L3N0bGl0ZS1kZXYvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3dpZGdldHMvRmlsZVVwbG9hZGVyL3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkLCB7IENTU09iamVjdCB9IGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwic3JjL3RoZW1lXCJcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZWRGaWxlRHJvcHpvbmUge1xuICBpc0Rpc2FibGVkOiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb248U3R5bGVkRmlsZURyb3B6b25lPihcbiAgKHsgaXNEaXNhYmxlZCwgdGhlbWUgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcubGcsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5QmcsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpaS5tZCxcbiAgICBcIjpmb2N1c1wiOiB7XG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDFweCAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fWAsXG4gICAgfSxcbiAgICBjb2xvcjogaXNEaXNhYmxlZCA/IHRoZW1lLmNvbG9ycy5ncmF5IDogdGhlbWUuY29sb3JzLmJvZHlUZXh0LFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnNGaWxlVXBsb2FkZXJJY29uID0gc3R5bGVkLnNwYW4oXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5kYXJrZW5lZEJnTWl4MTAwLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zU3R5bGVkU3BhbiA9IHN0eWxlZC5zcGFuKFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy50d29YUyxcbiAgfSlcbilcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0NvbHVtbiA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbn0pXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVzID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBsZWZ0OiAwLFxuICByaWdodDogMCxcbiAgbGluZUhlaWdodDogdGhlbWUubGluZUhlaWdodHMudGlnaHQsXG4gIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcubWQsXG4gIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcubGcsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0ID0gc3R5bGVkLnVsKCgpID0+ICh7XG4gIGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLFxuICBtYXJnaW5Cb3R0b206IDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSA9IHN0eWxlZC5saSgoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW46IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVEYXRhID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJiYXNlbGluZVwiLFxuICBmbGV4OiAxLFxuICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZy5sZyxcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZU5hbWUgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnNtLFxuICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcudHdvWFMsXG4gIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIixcbiAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkVXBsb2FkZWRGaWxlID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRFcnJvck1lc3NhZ2UgPSBzdHlsZWQuc3BhbigoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy50d29YUyxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZUljb24gPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhcmtlbmVkQmdNaXgxMDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvciA9IHN0eWxlZC5zbWFsbCgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhbmdlcixcbiAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgaGVpZ2h0OiB0aGVtZS5mb250U2l6ZXMuc20sXG4gIGxpbmVIZWlnaHQ6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvckljb24gPSBzdHlsZWQuc3Bhbih7fSlcblxuY29uc3QgY29tcGFjdEZpbGVVcGxvYWRlciA9ICh0aGVtZTogVGhlbWUpOiBDU1NPYmplY3QgPT4gKHtcbiAgW1N0eWxlZEZpbGVEcm9wem9uZVNlY3Rpb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnMgYXMgYW55XToge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy5sZyxcbiAgfSxcbiAgW1N0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0ZpbGVVcGxvYWRlckljb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlcyBhcyBhbnldOiB7XG4gICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlIGFzIGFueV06IHtcbiAgICBtYXhXaWR0aDogXCJpbmhlcml0XCIsXG4gICAgZmxleDogMSxcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcuc20sXG4gIH0sXG4gIFtTdHlsZWRVcGxvYWRlZEZpbGVOYW1lIGFzIGFueV06IHtcbiAgICB3aWR0aDogdGhlbWUuc2l6ZXMuZnVsbCxcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZURhdGEgYXMgYW55XToge1xuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3IgYXMgYW55XToge1xuICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgd2hpdGVTcGFjZTogXCJpbml0aWFsXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3JJY29uIGFzIGFueV06IHtcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSBhcyBhbnldOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nLm5vbmUsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVVcGxvYWRlciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4ge1xuICBpZiAodGhlbWUuaW5TaWRlYmFyKSB7XG4gICAgcmV0dXJuIGNvbXBhY3RGaWxlVXBsb2FkZXIodGhlbWUpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIFtgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMuc219KWBdOlxuICAgICAgY29tcGFjdEZpbGVVcGxvYWRlcih0aGVtZSksXG4gIH1cbn0pXG4iXX0= */");
const StyledFileDropzoneInstructionsColumn = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "exg6vvm11",
  label: "StyledFileDropzoneInstructionsColumn"
})( false ? 0 : {
  name: "1fttcpj",
  styles: "display:flex;flex-direction:column",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9GaWxlVXBsb2FkZXIvc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURvRCIsImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9zdGxpdGUtZGV2L3N0bGl0ZS1kZXYvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3dpZGdldHMvRmlsZVVwbG9hZGVyL3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkLCB7IENTU09iamVjdCB9IGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwic3JjL3RoZW1lXCJcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZWRGaWxlRHJvcHpvbmUge1xuICBpc0Rpc2FibGVkOiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb248U3R5bGVkRmlsZURyb3B6b25lPihcbiAgKHsgaXNEaXNhYmxlZCwgdGhlbWUgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcubGcsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5QmcsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpaS5tZCxcbiAgICBcIjpmb2N1c1wiOiB7XG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDFweCAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fWAsXG4gICAgfSxcbiAgICBjb2xvcjogaXNEaXNhYmxlZCA/IHRoZW1lLmNvbG9ycy5ncmF5IDogdGhlbWUuY29sb3JzLmJvZHlUZXh0LFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnNGaWxlVXBsb2FkZXJJY29uID0gc3R5bGVkLnNwYW4oXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5kYXJrZW5lZEJnTWl4MTAwLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zU3R5bGVkU3BhbiA9IHN0eWxlZC5zcGFuKFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy50d29YUyxcbiAgfSlcbilcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0NvbHVtbiA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbn0pXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVzID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBsZWZ0OiAwLFxuICByaWdodDogMCxcbiAgbGluZUhlaWdodDogdGhlbWUubGluZUhlaWdodHMudGlnaHQsXG4gIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcubWQsXG4gIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcubGcsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0ID0gc3R5bGVkLnVsKCgpID0+ICh7XG4gIGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLFxuICBtYXJnaW5Cb3R0b206IDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSA9IHN0eWxlZC5saSgoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW46IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVEYXRhID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJiYXNlbGluZVwiLFxuICBmbGV4OiAxLFxuICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZy5sZyxcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZU5hbWUgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnNtLFxuICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcudHdvWFMsXG4gIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIixcbiAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkVXBsb2FkZWRGaWxlID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRFcnJvck1lc3NhZ2UgPSBzdHlsZWQuc3BhbigoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy50d29YUyxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZUljb24gPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhcmtlbmVkQmdNaXgxMDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvciA9IHN0eWxlZC5zbWFsbCgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhbmdlcixcbiAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgaGVpZ2h0OiB0aGVtZS5mb250U2l6ZXMuc20sXG4gIGxpbmVIZWlnaHQ6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvckljb24gPSBzdHlsZWQuc3Bhbih7fSlcblxuY29uc3QgY29tcGFjdEZpbGVVcGxvYWRlciA9ICh0aGVtZTogVGhlbWUpOiBDU1NPYmplY3QgPT4gKHtcbiAgW1N0eWxlZEZpbGVEcm9wem9uZVNlY3Rpb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnMgYXMgYW55XToge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy5sZyxcbiAgfSxcbiAgW1N0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0ZpbGVVcGxvYWRlckljb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlcyBhcyBhbnldOiB7XG4gICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlIGFzIGFueV06IHtcbiAgICBtYXhXaWR0aDogXCJpbmhlcml0XCIsXG4gICAgZmxleDogMSxcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcuc20sXG4gIH0sXG4gIFtTdHlsZWRVcGxvYWRlZEZpbGVOYW1lIGFzIGFueV06IHtcbiAgICB3aWR0aDogdGhlbWUuc2l6ZXMuZnVsbCxcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZURhdGEgYXMgYW55XToge1xuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3IgYXMgYW55XToge1xuICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgd2hpdGVTcGFjZTogXCJpbml0aWFsXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3JJY29uIGFzIGFueV06IHtcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSBhcyBhbnldOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nLm5vbmUsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVVcGxvYWRlciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4ge1xuICBpZiAodGhlbWUuaW5TaWRlYmFyKSB7XG4gICAgcmV0dXJuIGNvbXBhY3RGaWxlVXBsb2FkZXIodGhlbWUpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIFtgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMuc219KWBdOlxuICAgICAgY29tcGFjdEZpbGVVcGxvYWRlcih0aGVtZSksXG4gIH1cbn0pXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const StyledUploadedFiles = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "exg6vvm10",
  label: "StyledUploadedFiles"
})(_ref4 => {
  let {
    theme
  } = _ref4;
  return {
    left: 0,
    right: 0,
    lineHeight: theme.lineHeights.tight,
    paddingTop: theme.spacing.md,
    paddingLeft: theme.spacing.lg,
    paddingRight: theme.spacing.lg
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9GaWxlVXBsb2FkZXIvc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOERtQyIsImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9zdGxpdGUtZGV2L3N0bGl0ZS1kZXYvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3dpZGdldHMvRmlsZVVwbG9hZGVyL3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkLCB7IENTU09iamVjdCB9IGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwic3JjL3RoZW1lXCJcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZWRGaWxlRHJvcHpvbmUge1xuICBpc0Rpc2FibGVkOiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb248U3R5bGVkRmlsZURyb3B6b25lPihcbiAgKHsgaXNEaXNhYmxlZCwgdGhlbWUgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcubGcsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5QmcsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpaS5tZCxcbiAgICBcIjpmb2N1c1wiOiB7XG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDFweCAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fWAsXG4gICAgfSxcbiAgICBjb2xvcjogaXNEaXNhYmxlZCA/IHRoZW1lLmNvbG9ycy5ncmF5IDogdGhlbWUuY29sb3JzLmJvZHlUZXh0LFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnNGaWxlVXBsb2FkZXJJY29uID0gc3R5bGVkLnNwYW4oXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5kYXJrZW5lZEJnTWl4MTAwLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zU3R5bGVkU3BhbiA9IHN0eWxlZC5zcGFuKFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy50d29YUyxcbiAgfSlcbilcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0NvbHVtbiA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbn0pXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVzID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBsZWZ0OiAwLFxuICByaWdodDogMCxcbiAgbGluZUhlaWdodDogdGhlbWUubGluZUhlaWdodHMudGlnaHQsXG4gIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcubWQsXG4gIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcubGcsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0ID0gc3R5bGVkLnVsKCgpID0+ICh7XG4gIGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLFxuICBtYXJnaW5Cb3R0b206IDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSA9IHN0eWxlZC5saSgoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW46IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVEYXRhID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJiYXNlbGluZVwiLFxuICBmbGV4OiAxLFxuICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZy5sZyxcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZU5hbWUgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnNtLFxuICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcudHdvWFMsXG4gIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIixcbiAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkVXBsb2FkZWRGaWxlID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRFcnJvck1lc3NhZ2UgPSBzdHlsZWQuc3BhbigoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy50d29YUyxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZUljb24gPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhcmtlbmVkQmdNaXgxMDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvciA9IHN0eWxlZC5zbWFsbCgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhbmdlcixcbiAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgaGVpZ2h0OiB0aGVtZS5mb250U2l6ZXMuc20sXG4gIGxpbmVIZWlnaHQ6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvckljb24gPSBzdHlsZWQuc3Bhbih7fSlcblxuY29uc3QgY29tcGFjdEZpbGVVcGxvYWRlciA9ICh0aGVtZTogVGhlbWUpOiBDU1NPYmplY3QgPT4gKHtcbiAgW1N0eWxlZEZpbGVEcm9wem9uZVNlY3Rpb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnMgYXMgYW55XToge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy5sZyxcbiAgfSxcbiAgW1N0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0ZpbGVVcGxvYWRlckljb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlcyBhcyBhbnldOiB7XG4gICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlIGFzIGFueV06IHtcbiAgICBtYXhXaWR0aDogXCJpbmhlcml0XCIsXG4gICAgZmxleDogMSxcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcuc20sXG4gIH0sXG4gIFtTdHlsZWRVcGxvYWRlZEZpbGVOYW1lIGFzIGFueV06IHtcbiAgICB3aWR0aDogdGhlbWUuc2l6ZXMuZnVsbCxcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZURhdGEgYXMgYW55XToge1xuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3IgYXMgYW55XToge1xuICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgd2hpdGVTcGFjZTogXCJpbml0aWFsXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3JJY29uIGFzIGFueV06IHtcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSBhcyBhbnldOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nLm5vbmUsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVVcGxvYWRlciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4ge1xuICBpZiAodGhlbWUuaW5TaWRlYmFyKSB7XG4gICAgcmV0dXJuIGNvbXBhY3RGaWxlVXBsb2FkZXIodGhlbWUpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIFtgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMuc219KWBdOlxuICAgICAgY29tcGFjdEZpbGVVcGxvYWRlcih0aGVtZSksXG4gIH1cbn0pXG4iXX0= */");
const StyledUploadedFilesList = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("ul",  false ? 0 : {
  target: "exg6vvm9",
  label: "StyledUploadedFilesList"
})(() => ({
  listStyleType: "none",
  marginBottom: 0
}),  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9GaWxlVXBsb2FkZXIvc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUV1QyIsImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9zdGxpdGUtZGV2L3N0bGl0ZS1kZXYvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3dpZGdldHMvRmlsZVVwbG9hZGVyL3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkLCB7IENTU09iamVjdCB9IGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwic3JjL3RoZW1lXCJcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZWRGaWxlRHJvcHpvbmUge1xuICBpc0Rpc2FibGVkOiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb248U3R5bGVkRmlsZURyb3B6b25lPihcbiAgKHsgaXNEaXNhYmxlZCwgdGhlbWUgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcubGcsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5QmcsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpaS5tZCxcbiAgICBcIjpmb2N1c1wiOiB7XG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDFweCAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fWAsXG4gICAgfSxcbiAgICBjb2xvcjogaXNEaXNhYmxlZCA/IHRoZW1lLmNvbG9ycy5ncmF5IDogdGhlbWUuY29sb3JzLmJvZHlUZXh0LFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnNGaWxlVXBsb2FkZXJJY29uID0gc3R5bGVkLnNwYW4oXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5kYXJrZW5lZEJnTWl4MTAwLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zU3R5bGVkU3BhbiA9IHN0eWxlZC5zcGFuKFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy50d29YUyxcbiAgfSlcbilcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0NvbHVtbiA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbn0pXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVzID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBsZWZ0OiAwLFxuICByaWdodDogMCxcbiAgbGluZUhlaWdodDogdGhlbWUubGluZUhlaWdodHMudGlnaHQsXG4gIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcubWQsXG4gIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcubGcsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0ID0gc3R5bGVkLnVsKCgpID0+ICh7XG4gIGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLFxuICBtYXJnaW5Cb3R0b206IDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSA9IHN0eWxlZC5saSgoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW46IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVEYXRhID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJiYXNlbGluZVwiLFxuICBmbGV4OiAxLFxuICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZy5sZyxcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZU5hbWUgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnNtLFxuICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcudHdvWFMsXG4gIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIixcbiAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkVXBsb2FkZWRGaWxlID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRFcnJvck1lc3NhZ2UgPSBzdHlsZWQuc3BhbigoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy50d29YUyxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZUljb24gPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhcmtlbmVkQmdNaXgxMDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvciA9IHN0eWxlZC5zbWFsbCgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhbmdlcixcbiAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgaGVpZ2h0OiB0aGVtZS5mb250U2l6ZXMuc20sXG4gIGxpbmVIZWlnaHQ6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvckljb24gPSBzdHlsZWQuc3Bhbih7fSlcblxuY29uc3QgY29tcGFjdEZpbGVVcGxvYWRlciA9ICh0aGVtZTogVGhlbWUpOiBDU1NPYmplY3QgPT4gKHtcbiAgW1N0eWxlZEZpbGVEcm9wem9uZVNlY3Rpb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnMgYXMgYW55XToge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy5sZyxcbiAgfSxcbiAgW1N0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0ZpbGVVcGxvYWRlckljb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlcyBhcyBhbnldOiB7XG4gICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlIGFzIGFueV06IHtcbiAgICBtYXhXaWR0aDogXCJpbmhlcml0XCIsXG4gICAgZmxleDogMSxcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcuc20sXG4gIH0sXG4gIFtTdHlsZWRVcGxvYWRlZEZpbGVOYW1lIGFzIGFueV06IHtcbiAgICB3aWR0aDogdGhlbWUuc2l6ZXMuZnVsbCxcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZURhdGEgYXMgYW55XToge1xuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3IgYXMgYW55XToge1xuICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgd2hpdGVTcGFjZTogXCJpbml0aWFsXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3JJY29uIGFzIGFueV06IHtcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSBhcyBhbnldOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nLm5vbmUsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVVcGxvYWRlciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4ge1xuICBpZiAodGhlbWUuaW5TaWRlYmFyKSB7XG4gICAgcmV0dXJuIGNvbXBhY3RGaWxlVXBsb2FkZXIodGhlbWUpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIFtgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMuc219KWBdOlxuICAgICAgY29tcGFjdEZpbGVVcGxvYWRlcih0aGVtZSksXG4gIH1cbn0pXG4iXX0= */");
const StyledUploadedFilesListItem = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("li",  false ? 0 : {
  target: "exg6vvm8",
  label: "StyledUploadedFilesListItem"
})(_ref5 => {
  let {
    theme
  } = _ref5;
  return {
    margin: theme.spacing.none,
    padding: theme.spacing.none
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9GaWxlVXBsb2FkZXIvc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEUyQyIsImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9zdGxpdGUtZGV2L3N0bGl0ZS1kZXYvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3dpZGdldHMvRmlsZVVwbG9hZGVyL3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkLCB7IENTU09iamVjdCB9IGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwic3JjL3RoZW1lXCJcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZWRGaWxlRHJvcHpvbmUge1xuICBpc0Rpc2FibGVkOiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb248U3R5bGVkRmlsZURyb3B6b25lPihcbiAgKHsgaXNEaXNhYmxlZCwgdGhlbWUgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcubGcsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5QmcsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpaS5tZCxcbiAgICBcIjpmb2N1c1wiOiB7XG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDFweCAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fWAsXG4gICAgfSxcbiAgICBjb2xvcjogaXNEaXNhYmxlZCA/IHRoZW1lLmNvbG9ycy5ncmF5IDogdGhlbWUuY29sb3JzLmJvZHlUZXh0LFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnNGaWxlVXBsb2FkZXJJY29uID0gc3R5bGVkLnNwYW4oXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5kYXJrZW5lZEJnTWl4MTAwLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zU3R5bGVkU3BhbiA9IHN0eWxlZC5zcGFuKFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy50d29YUyxcbiAgfSlcbilcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0NvbHVtbiA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbn0pXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVzID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBsZWZ0OiAwLFxuICByaWdodDogMCxcbiAgbGluZUhlaWdodDogdGhlbWUubGluZUhlaWdodHMudGlnaHQsXG4gIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcubWQsXG4gIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcubGcsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0ID0gc3R5bGVkLnVsKCgpID0+ICh7XG4gIGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLFxuICBtYXJnaW5Cb3R0b206IDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSA9IHN0eWxlZC5saSgoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW46IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVEYXRhID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJiYXNlbGluZVwiLFxuICBmbGV4OiAxLFxuICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZy5sZyxcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZU5hbWUgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnNtLFxuICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcudHdvWFMsXG4gIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIixcbiAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkVXBsb2FkZWRGaWxlID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRFcnJvck1lc3NhZ2UgPSBzdHlsZWQuc3BhbigoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy50d29YUyxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZUljb24gPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhcmtlbmVkQmdNaXgxMDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvciA9IHN0eWxlZC5zbWFsbCgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhbmdlcixcbiAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgaGVpZ2h0OiB0aGVtZS5mb250U2l6ZXMuc20sXG4gIGxpbmVIZWlnaHQ6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvckljb24gPSBzdHlsZWQuc3Bhbih7fSlcblxuY29uc3QgY29tcGFjdEZpbGVVcGxvYWRlciA9ICh0aGVtZTogVGhlbWUpOiBDU1NPYmplY3QgPT4gKHtcbiAgW1N0eWxlZEZpbGVEcm9wem9uZVNlY3Rpb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnMgYXMgYW55XToge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy5sZyxcbiAgfSxcbiAgW1N0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0ZpbGVVcGxvYWRlckljb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlcyBhcyBhbnldOiB7XG4gICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlIGFzIGFueV06IHtcbiAgICBtYXhXaWR0aDogXCJpbmhlcml0XCIsXG4gICAgZmxleDogMSxcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcuc20sXG4gIH0sXG4gIFtTdHlsZWRVcGxvYWRlZEZpbGVOYW1lIGFzIGFueV06IHtcbiAgICB3aWR0aDogdGhlbWUuc2l6ZXMuZnVsbCxcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZURhdGEgYXMgYW55XToge1xuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3IgYXMgYW55XToge1xuICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgd2hpdGVTcGFjZTogXCJpbml0aWFsXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3JJY29uIGFzIGFueV06IHtcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSBhcyBhbnldOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nLm5vbmUsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVVcGxvYWRlciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4ge1xuICBpZiAodGhlbWUuaW5TaWRlYmFyKSB7XG4gICAgcmV0dXJuIGNvbXBhY3RGaWxlVXBsb2FkZXIodGhlbWUpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIFtgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMuc219KWBdOlxuICAgICAgY29tcGFjdEZpbGVVcGxvYWRlcih0aGVtZSksXG4gIH1cbn0pXG4iXX0= */");
const StyledUploadedFileData = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "exg6vvm7",
  label: "StyledUploadedFileData"
})(_ref6 => {
  let {
    theme
  } = _ref6;
  return {
    display: "flex",
    alignItems: "baseline",
    flex: 1,
    paddingLeft: theme.spacing.lg,
    overflow: "hidden"
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9GaWxlVXBsb2FkZXIvc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUZzQyIsImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9zdGxpdGUtZGV2L3N0bGl0ZS1kZXYvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3dpZGdldHMvRmlsZVVwbG9hZGVyL3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkLCB7IENTU09iamVjdCB9IGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwic3JjL3RoZW1lXCJcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZWRGaWxlRHJvcHpvbmUge1xuICBpc0Rpc2FibGVkOiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb248U3R5bGVkRmlsZURyb3B6b25lPihcbiAgKHsgaXNEaXNhYmxlZCwgdGhlbWUgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcubGcsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5QmcsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpaS5tZCxcbiAgICBcIjpmb2N1c1wiOiB7XG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDFweCAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fWAsXG4gICAgfSxcbiAgICBjb2xvcjogaXNEaXNhYmxlZCA/IHRoZW1lLmNvbG9ycy5ncmF5IDogdGhlbWUuY29sb3JzLmJvZHlUZXh0LFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnNGaWxlVXBsb2FkZXJJY29uID0gc3R5bGVkLnNwYW4oXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5kYXJrZW5lZEJnTWl4MTAwLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zU3R5bGVkU3BhbiA9IHN0eWxlZC5zcGFuKFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy50d29YUyxcbiAgfSlcbilcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0NvbHVtbiA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbn0pXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVzID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBsZWZ0OiAwLFxuICByaWdodDogMCxcbiAgbGluZUhlaWdodDogdGhlbWUubGluZUhlaWdodHMudGlnaHQsXG4gIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcubWQsXG4gIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcubGcsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0ID0gc3R5bGVkLnVsKCgpID0+ICh7XG4gIGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLFxuICBtYXJnaW5Cb3R0b206IDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSA9IHN0eWxlZC5saSgoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW46IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVEYXRhID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJiYXNlbGluZVwiLFxuICBmbGV4OiAxLFxuICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZy5sZyxcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZU5hbWUgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnNtLFxuICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcudHdvWFMsXG4gIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIixcbiAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkVXBsb2FkZWRGaWxlID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRFcnJvck1lc3NhZ2UgPSBzdHlsZWQuc3BhbigoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy50d29YUyxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZUljb24gPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhcmtlbmVkQmdNaXgxMDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvciA9IHN0eWxlZC5zbWFsbCgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhbmdlcixcbiAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgaGVpZ2h0OiB0aGVtZS5mb250U2l6ZXMuc20sXG4gIGxpbmVIZWlnaHQ6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvckljb24gPSBzdHlsZWQuc3Bhbih7fSlcblxuY29uc3QgY29tcGFjdEZpbGVVcGxvYWRlciA9ICh0aGVtZTogVGhlbWUpOiBDU1NPYmplY3QgPT4gKHtcbiAgW1N0eWxlZEZpbGVEcm9wem9uZVNlY3Rpb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnMgYXMgYW55XToge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy5sZyxcbiAgfSxcbiAgW1N0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0ZpbGVVcGxvYWRlckljb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlcyBhcyBhbnldOiB7XG4gICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlIGFzIGFueV06IHtcbiAgICBtYXhXaWR0aDogXCJpbmhlcml0XCIsXG4gICAgZmxleDogMSxcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcuc20sXG4gIH0sXG4gIFtTdHlsZWRVcGxvYWRlZEZpbGVOYW1lIGFzIGFueV06IHtcbiAgICB3aWR0aDogdGhlbWUuc2l6ZXMuZnVsbCxcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZURhdGEgYXMgYW55XToge1xuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3IgYXMgYW55XToge1xuICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgd2hpdGVTcGFjZTogXCJpbml0aWFsXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3JJY29uIGFzIGFueV06IHtcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSBhcyBhbnldOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nLm5vbmUsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVVcGxvYWRlciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4ge1xuICBpZiAodGhlbWUuaW5TaWRlYmFyKSB7XG4gICAgcmV0dXJuIGNvbXBhY3RGaWxlVXBsb2FkZXIodGhlbWUpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIFtgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMuc219KWBdOlxuICAgICAgY29tcGFjdEZpbGVVcGxvYWRlcih0aGVtZSksXG4gIH1cbn0pXG4iXX0= */");
const StyledUploadedFileName = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "exg6vvm6",
  label: "StyledUploadedFileName"
})(_ref7 => {
  let {
    theme
  } = _ref7;
  return {
    marginRight: theme.spacing.sm,
    marginBottom: theme.spacing.twoXS,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9GaWxlVXBsb2FkZXIvc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUZzQyIsImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9zdGxpdGUtZGV2L3N0bGl0ZS1kZXYvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3dpZGdldHMvRmlsZVVwbG9hZGVyL3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkLCB7IENTU09iamVjdCB9IGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwic3JjL3RoZW1lXCJcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZWRGaWxlRHJvcHpvbmUge1xuICBpc0Rpc2FibGVkOiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb248U3R5bGVkRmlsZURyb3B6b25lPihcbiAgKHsgaXNEaXNhYmxlZCwgdGhlbWUgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcubGcsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5QmcsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpaS5tZCxcbiAgICBcIjpmb2N1c1wiOiB7XG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDFweCAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fWAsXG4gICAgfSxcbiAgICBjb2xvcjogaXNEaXNhYmxlZCA/IHRoZW1lLmNvbG9ycy5ncmF5IDogdGhlbWUuY29sb3JzLmJvZHlUZXh0LFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnNGaWxlVXBsb2FkZXJJY29uID0gc3R5bGVkLnNwYW4oXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5kYXJrZW5lZEJnTWl4MTAwLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zU3R5bGVkU3BhbiA9IHN0eWxlZC5zcGFuKFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy50d29YUyxcbiAgfSlcbilcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0NvbHVtbiA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbn0pXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVzID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBsZWZ0OiAwLFxuICByaWdodDogMCxcbiAgbGluZUhlaWdodDogdGhlbWUubGluZUhlaWdodHMudGlnaHQsXG4gIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcubWQsXG4gIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcubGcsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0ID0gc3R5bGVkLnVsKCgpID0+ICh7XG4gIGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLFxuICBtYXJnaW5Cb3R0b206IDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSA9IHN0eWxlZC5saSgoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW46IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVEYXRhID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJiYXNlbGluZVwiLFxuICBmbGV4OiAxLFxuICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZy5sZyxcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZU5hbWUgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnNtLFxuICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcudHdvWFMsXG4gIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIixcbiAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkVXBsb2FkZWRGaWxlID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRFcnJvck1lc3NhZ2UgPSBzdHlsZWQuc3BhbigoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy50d29YUyxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZUljb24gPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhcmtlbmVkQmdNaXgxMDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvciA9IHN0eWxlZC5zbWFsbCgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhbmdlcixcbiAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgaGVpZ2h0OiB0aGVtZS5mb250U2l6ZXMuc20sXG4gIGxpbmVIZWlnaHQ6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvckljb24gPSBzdHlsZWQuc3Bhbih7fSlcblxuY29uc3QgY29tcGFjdEZpbGVVcGxvYWRlciA9ICh0aGVtZTogVGhlbWUpOiBDU1NPYmplY3QgPT4gKHtcbiAgW1N0eWxlZEZpbGVEcm9wem9uZVNlY3Rpb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnMgYXMgYW55XToge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy5sZyxcbiAgfSxcbiAgW1N0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0ZpbGVVcGxvYWRlckljb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlcyBhcyBhbnldOiB7XG4gICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlIGFzIGFueV06IHtcbiAgICBtYXhXaWR0aDogXCJpbmhlcml0XCIsXG4gICAgZmxleDogMSxcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcuc20sXG4gIH0sXG4gIFtTdHlsZWRVcGxvYWRlZEZpbGVOYW1lIGFzIGFueV06IHtcbiAgICB3aWR0aDogdGhlbWUuc2l6ZXMuZnVsbCxcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZURhdGEgYXMgYW55XToge1xuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3IgYXMgYW55XToge1xuICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgd2hpdGVTcGFjZTogXCJpbml0aWFsXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3JJY29uIGFzIGFueV06IHtcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSBhcyBhbnldOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nLm5vbmUsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVVcGxvYWRlciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4ge1xuICBpZiAodGhlbWUuaW5TaWRlYmFyKSB7XG4gICAgcmV0dXJuIGNvbXBhY3RGaWxlVXBsb2FkZXIodGhlbWUpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIFtgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMuc219KWBdOlxuICAgICAgY29tcGFjdEZpbGVVcGxvYWRlcih0aGVtZSksXG4gIH1cbn0pXG4iXX0= */");
const StyledUploadedFile = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "exg6vvm5",
  label: "StyledUploadedFile"
})(_ref8 => {
  let {
    theme
  } = _ref8;
  return {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing.twoXS
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9GaWxlVXBsb2FkZXIvc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUdrQyIsImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9zdGxpdGUtZGV2L3N0bGl0ZS1kZXYvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3dpZGdldHMvRmlsZVVwbG9hZGVyL3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkLCB7IENTU09iamVjdCB9IGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwic3JjL3RoZW1lXCJcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZWRGaWxlRHJvcHpvbmUge1xuICBpc0Rpc2FibGVkOiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb248U3R5bGVkRmlsZURyb3B6b25lPihcbiAgKHsgaXNEaXNhYmxlZCwgdGhlbWUgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcubGcsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5QmcsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpaS5tZCxcbiAgICBcIjpmb2N1c1wiOiB7XG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDFweCAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fWAsXG4gICAgfSxcbiAgICBjb2xvcjogaXNEaXNhYmxlZCA/IHRoZW1lLmNvbG9ycy5ncmF5IDogdGhlbWUuY29sb3JzLmJvZHlUZXh0LFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnNGaWxlVXBsb2FkZXJJY29uID0gc3R5bGVkLnNwYW4oXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5kYXJrZW5lZEJnTWl4MTAwLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zU3R5bGVkU3BhbiA9IHN0eWxlZC5zcGFuKFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy50d29YUyxcbiAgfSlcbilcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0NvbHVtbiA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbn0pXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVzID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBsZWZ0OiAwLFxuICByaWdodDogMCxcbiAgbGluZUhlaWdodDogdGhlbWUubGluZUhlaWdodHMudGlnaHQsXG4gIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcubWQsXG4gIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcubGcsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0ID0gc3R5bGVkLnVsKCgpID0+ICh7XG4gIGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLFxuICBtYXJnaW5Cb3R0b206IDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSA9IHN0eWxlZC5saSgoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW46IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVEYXRhID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJiYXNlbGluZVwiLFxuICBmbGV4OiAxLFxuICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZy5sZyxcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZU5hbWUgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnNtLFxuICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcudHdvWFMsXG4gIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIixcbiAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkVXBsb2FkZWRGaWxlID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRFcnJvck1lc3NhZ2UgPSBzdHlsZWQuc3BhbigoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy50d29YUyxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZUljb24gPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhcmtlbmVkQmdNaXgxMDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvciA9IHN0eWxlZC5zbWFsbCgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhbmdlcixcbiAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgaGVpZ2h0OiB0aGVtZS5mb250U2l6ZXMuc20sXG4gIGxpbmVIZWlnaHQ6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvckljb24gPSBzdHlsZWQuc3Bhbih7fSlcblxuY29uc3QgY29tcGFjdEZpbGVVcGxvYWRlciA9ICh0aGVtZTogVGhlbWUpOiBDU1NPYmplY3QgPT4gKHtcbiAgW1N0eWxlZEZpbGVEcm9wem9uZVNlY3Rpb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnMgYXMgYW55XToge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy5sZyxcbiAgfSxcbiAgW1N0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0ZpbGVVcGxvYWRlckljb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlcyBhcyBhbnldOiB7XG4gICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlIGFzIGFueV06IHtcbiAgICBtYXhXaWR0aDogXCJpbmhlcml0XCIsXG4gICAgZmxleDogMSxcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcuc20sXG4gIH0sXG4gIFtTdHlsZWRVcGxvYWRlZEZpbGVOYW1lIGFzIGFueV06IHtcbiAgICB3aWR0aDogdGhlbWUuc2l6ZXMuZnVsbCxcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZURhdGEgYXMgYW55XToge1xuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3IgYXMgYW55XToge1xuICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgd2hpdGVTcGFjZTogXCJpbml0aWFsXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3JJY29uIGFzIGFueV06IHtcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSBhcyBhbnldOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nLm5vbmUsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVVcGxvYWRlciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4ge1xuICBpZiAodGhlbWUuaW5TaWRlYmFyKSB7XG4gICAgcmV0dXJuIGNvbXBhY3RGaWxlVXBsb2FkZXIodGhlbWUpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIFtgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMuc219KWBdOlxuICAgICAgY29tcGFjdEZpbGVVcGxvYWRlcih0aGVtZSksXG4gIH1cbn0pXG4iXX0= */");
const StyledErrorMessage = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span",  false ? 0 : {
  target: "exg6vvm4",
  label: "StyledErrorMessage"
})(_ref9 => {
  let {
    theme
  } = _ref9;
  return {
    marginRight: theme.spacing.twoXS
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9GaWxlVXBsb2FkZXIvc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUdrQyIsImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9zdGxpdGUtZGV2L3N0bGl0ZS1kZXYvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3dpZGdldHMvRmlsZVVwbG9hZGVyL3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkLCB7IENTU09iamVjdCB9IGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwic3JjL3RoZW1lXCJcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZWRGaWxlRHJvcHpvbmUge1xuICBpc0Rpc2FibGVkOiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb248U3R5bGVkRmlsZURyb3B6b25lPihcbiAgKHsgaXNEaXNhYmxlZCwgdGhlbWUgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcubGcsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5QmcsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpaS5tZCxcbiAgICBcIjpmb2N1c1wiOiB7XG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDFweCAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fWAsXG4gICAgfSxcbiAgICBjb2xvcjogaXNEaXNhYmxlZCA/IHRoZW1lLmNvbG9ycy5ncmF5IDogdGhlbWUuY29sb3JzLmJvZHlUZXh0LFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnNGaWxlVXBsb2FkZXJJY29uID0gc3R5bGVkLnNwYW4oXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5kYXJrZW5lZEJnTWl4MTAwLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zU3R5bGVkU3BhbiA9IHN0eWxlZC5zcGFuKFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy50d29YUyxcbiAgfSlcbilcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0NvbHVtbiA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbn0pXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVzID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBsZWZ0OiAwLFxuICByaWdodDogMCxcbiAgbGluZUhlaWdodDogdGhlbWUubGluZUhlaWdodHMudGlnaHQsXG4gIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcubWQsXG4gIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcubGcsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0ID0gc3R5bGVkLnVsKCgpID0+ICh7XG4gIGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLFxuICBtYXJnaW5Cb3R0b206IDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSA9IHN0eWxlZC5saSgoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW46IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVEYXRhID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJiYXNlbGluZVwiLFxuICBmbGV4OiAxLFxuICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZy5sZyxcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZU5hbWUgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnNtLFxuICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcudHdvWFMsXG4gIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIixcbiAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkVXBsb2FkZWRGaWxlID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRFcnJvck1lc3NhZ2UgPSBzdHlsZWQuc3BhbigoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy50d29YUyxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZUljb24gPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhcmtlbmVkQmdNaXgxMDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvciA9IHN0eWxlZC5zbWFsbCgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhbmdlcixcbiAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgaGVpZ2h0OiB0aGVtZS5mb250U2l6ZXMuc20sXG4gIGxpbmVIZWlnaHQ6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvckljb24gPSBzdHlsZWQuc3Bhbih7fSlcblxuY29uc3QgY29tcGFjdEZpbGVVcGxvYWRlciA9ICh0aGVtZTogVGhlbWUpOiBDU1NPYmplY3QgPT4gKHtcbiAgW1N0eWxlZEZpbGVEcm9wem9uZVNlY3Rpb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnMgYXMgYW55XToge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy5sZyxcbiAgfSxcbiAgW1N0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0ZpbGVVcGxvYWRlckljb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlcyBhcyBhbnldOiB7XG4gICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlIGFzIGFueV06IHtcbiAgICBtYXhXaWR0aDogXCJpbmhlcml0XCIsXG4gICAgZmxleDogMSxcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcuc20sXG4gIH0sXG4gIFtTdHlsZWRVcGxvYWRlZEZpbGVOYW1lIGFzIGFueV06IHtcbiAgICB3aWR0aDogdGhlbWUuc2l6ZXMuZnVsbCxcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZURhdGEgYXMgYW55XToge1xuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3IgYXMgYW55XToge1xuICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgd2hpdGVTcGFjZTogXCJpbml0aWFsXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3JJY29uIGFzIGFueV06IHtcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSBhcyBhbnldOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nLm5vbmUsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVVcGxvYWRlciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4ge1xuICBpZiAodGhlbWUuaW5TaWRlYmFyKSB7XG4gICAgcmV0dXJuIGNvbXBhY3RGaWxlVXBsb2FkZXIodGhlbWUpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIFtgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMuc219KWBdOlxuICAgICAgY29tcGFjdEZpbGVVcGxvYWRlcih0aGVtZSksXG4gIH1cbn0pXG4iXX0= */");
const StyledFileIcon = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "exg6vvm3",
  label: "StyledFileIcon"
})(_ref10 => {
  let {
    theme
  } = _ref10;
  return {
    display: "flex",
    padding: theme.spacing.twoXS,
    color: theme.colors.darkenedBgMix100
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9GaWxlVXBsb2FkZXIvc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkc4QiIsImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9zdGxpdGUtZGV2L3N0bGl0ZS1kZXYvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3dpZGdldHMvRmlsZVVwbG9hZGVyL3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkLCB7IENTU09iamVjdCB9IGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwic3JjL3RoZW1lXCJcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZWRGaWxlRHJvcHpvbmUge1xuICBpc0Rpc2FibGVkOiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb248U3R5bGVkRmlsZURyb3B6b25lPihcbiAgKHsgaXNEaXNhYmxlZCwgdGhlbWUgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcubGcsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5QmcsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpaS5tZCxcbiAgICBcIjpmb2N1c1wiOiB7XG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDFweCAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fWAsXG4gICAgfSxcbiAgICBjb2xvcjogaXNEaXNhYmxlZCA/IHRoZW1lLmNvbG9ycy5ncmF5IDogdGhlbWUuY29sb3JzLmJvZHlUZXh0LFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnNGaWxlVXBsb2FkZXJJY29uID0gc3R5bGVkLnNwYW4oXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5kYXJrZW5lZEJnTWl4MTAwLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zU3R5bGVkU3BhbiA9IHN0eWxlZC5zcGFuKFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy50d29YUyxcbiAgfSlcbilcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0NvbHVtbiA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbn0pXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVzID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBsZWZ0OiAwLFxuICByaWdodDogMCxcbiAgbGluZUhlaWdodDogdGhlbWUubGluZUhlaWdodHMudGlnaHQsXG4gIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcubWQsXG4gIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcubGcsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0ID0gc3R5bGVkLnVsKCgpID0+ICh7XG4gIGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLFxuICBtYXJnaW5Cb3R0b206IDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSA9IHN0eWxlZC5saSgoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW46IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVEYXRhID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJiYXNlbGluZVwiLFxuICBmbGV4OiAxLFxuICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZy5sZyxcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZU5hbWUgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnNtLFxuICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcudHdvWFMsXG4gIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIixcbiAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkVXBsb2FkZWRGaWxlID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRFcnJvck1lc3NhZ2UgPSBzdHlsZWQuc3BhbigoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy50d29YUyxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZUljb24gPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhcmtlbmVkQmdNaXgxMDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvciA9IHN0eWxlZC5zbWFsbCgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhbmdlcixcbiAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgaGVpZ2h0OiB0aGVtZS5mb250U2l6ZXMuc20sXG4gIGxpbmVIZWlnaHQ6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvckljb24gPSBzdHlsZWQuc3Bhbih7fSlcblxuY29uc3QgY29tcGFjdEZpbGVVcGxvYWRlciA9ICh0aGVtZTogVGhlbWUpOiBDU1NPYmplY3QgPT4gKHtcbiAgW1N0eWxlZEZpbGVEcm9wem9uZVNlY3Rpb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnMgYXMgYW55XToge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy5sZyxcbiAgfSxcbiAgW1N0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0ZpbGVVcGxvYWRlckljb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlcyBhcyBhbnldOiB7XG4gICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlIGFzIGFueV06IHtcbiAgICBtYXhXaWR0aDogXCJpbmhlcml0XCIsXG4gICAgZmxleDogMSxcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcuc20sXG4gIH0sXG4gIFtTdHlsZWRVcGxvYWRlZEZpbGVOYW1lIGFzIGFueV06IHtcbiAgICB3aWR0aDogdGhlbWUuc2l6ZXMuZnVsbCxcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZURhdGEgYXMgYW55XToge1xuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3IgYXMgYW55XToge1xuICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgd2hpdGVTcGFjZTogXCJpbml0aWFsXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3JJY29uIGFzIGFueV06IHtcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSBhcyBhbnldOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nLm5vbmUsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVVcGxvYWRlciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4ge1xuICBpZiAodGhlbWUuaW5TaWRlYmFyKSB7XG4gICAgcmV0dXJuIGNvbXBhY3RGaWxlVXBsb2FkZXIodGhlbWUpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIFtgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMuc219KWBdOlxuICAgICAgY29tcGFjdEZpbGVVcGxvYWRlcih0aGVtZSksXG4gIH1cbn0pXG4iXX0= */");
const StyledFileError = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("small",  false ? 0 : {
  target: "exg6vvm2",
  label: "StyledFileError"
})(_ref11 => {
  let {
    theme
  } = _ref11;
  return {
    color: theme.colors.danger,
    fontSize: theme.fontSizes.sm,
    height: theme.fontSizes.sm,
    lineHeight: theme.fontSizes.sm,
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap"
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9GaWxlVXBsb2FkZXIvc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUgrQiIsImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9zdGxpdGUtZGV2L3N0bGl0ZS1kZXYvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3dpZGdldHMvRmlsZVVwbG9hZGVyL3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkLCB7IENTU09iamVjdCB9IGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwic3JjL3RoZW1lXCJcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZWRGaWxlRHJvcHpvbmUge1xuICBpc0Rpc2FibGVkOiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb248U3R5bGVkRmlsZURyb3B6b25lPihcbiAgKHsgaXNEaXNhYmxlZCwgdGhlbWUgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcubGcsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5QmcsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpaS5tZCxcbiAgICBcIjpmb2N1c1wiOiB7XG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDFweCAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fWAsXG4gICAgfSxcbiAgICBjb2xvcjogaXNEaXNhYmxlZCA/IHRoZW1lLmNvbG9ycy5ncmF5IDogdGhlbWUuY29sb3JzLmJvZHlUZXh0LFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnNGaWxlVXBsb2FkZXJJY29uID0gc3R5bGVkLnNwYW4oXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5kYXJrZW5lZEJnTWl4MTAwLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zU3R5bGVkU3BhbiA9IHN0eWxlZC5zcGFuKFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy50d29YUyxcbiAgfSlcbilcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0NvbHVtbiA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbn0pXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVzID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBsZWZ0OiAwLFxuICByaWdodDogMCxcbiAgbGluZUhlaWdodDogdGhlbWUubGluZUhlaWdodHMudGlnaHQsXG4gIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcubWQsXG4gIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcubGcsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0ID0gc3R5bGVkLnVsKCgpID0+ICh7XG4gIGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLFxuICBtYXJnaW5Cb3R0b206IDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSA9IHN0eWxlZC5saSgoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW46IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVEYXRhID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJiYXNlbGluZVwiLFxuICBmbGV4OiAxLFxuICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZy5sZyxcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZU5hbWUgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnNtLFxuICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcudHdvWFMsXG4gIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIixcbiAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkVXBsb2FkZWRGaWxlID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRFcnJvck1lc3NhZ2UgPSBzdHlsZWQuc3BhbigoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy50d29YUyxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZUljb24gPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhcmtlbmVkQmdNaXgxMDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvciA9IHN0eWxlZC5zbWFsbCgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhbmdlcixcbiAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgaGVpZ2h0OiB0aGVtZS5mb250U2l6ZXMuc20sXG4gIGxpbmVIZWlnaHQ6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvckljb24gPSBzdHlsZWQuc3Bhbih7fSlcblxuY29uc3QgY29tcGFjdEZpbGVVcGxvYWRlciA9ICh0aGVtZTogVGhlbWUpOiBDU1NPYmplY3QgPT4gKHtcbiAgW1N0eWxlZEZpbGVEcm9wem9uZVNlY3Rpb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnMgYXMgYW55XToge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy5sZyxcbiAgfSxcbiAgW1N0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0ZpbGVVcGxvYWRlckljb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlcyBhcyBhbnldOiB7XG4gICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlIGFzIGFueV06IHtcbiAgICBtYXhXaWR0aDogXCJpbmhlcml0XCIsXG4gICAgZmxleDogMSxcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcuc20sXG4gIH0sXG4gIFtTdHlsZWRVcGxvYWRlZEZpbGVOYW1lIGFzIGFueV06IHtcbiAgICB3aWR0aDogdGhlbWUuc2l6ZXMuZnVsbCxcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZURhdGEgYXMgYW55XToge1xuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3IgYXMgYW55XToge1xuICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgd2hpdGVTcGFjZTogXCJpbml0aWFsXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3JJY29uIGFzIGFueV06IHtcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSBhcyBhbnldOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nLm5vbmUsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVVcGxvYWRlciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4ge1xuICBpZiAodGhlbWUuaW5TaWRlYmFyKSB7XG4gICAgcmV0dXJuIGNvbXBhY3RGaWxlVXBsb2FkZXIodGhlbWUpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIFtgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMuc219KWBdOlxuICAgICAgY29tcGFjdEZpbGVVcGxvYWRlcih0aGVtZSksXG4gIH1cbn0pXG4iXX0= */");
const StyledFileErrorIcon = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span",  false ? 0 : {
  target: "exg6vvm1",
  label: "StyledFileErrorIcon"
})( false ? 0 : {
  name: "0",
  styles: "",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9GaWxlVXBsb2FkZXIvc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkhtQyIsImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9zdGxpdGUtZGV2L3N0bGl0ZS1kZXYvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3dpZGdldHMvRmlsZVVwbG9hZGVyL3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkLCB7IENTU09iamVjdCB9IGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwic3JjL3RoZW1lXCJcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZWRGaWxlRHJvcHpvbmUge1xuICBpc0Rpc2FibGVkOiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb248U3R5bGVkRmlsZURyb3B6b25lPihcbiAgKHsgaXNEaXNhYmxlZCwgdGhlbWUgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcubGcsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5QmcsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpaS5tZCxcbiAgICBcIjpmb2N1c1wiOiB7XG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDFweCAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fWAsXG4gICAgfSxcbiAgICBjb2xvcjogaXNEaXNhYmxlZCA/IHRoZW1lLmNvbG9ycy5ncmF5IDogdGhlbWUuY29sb3JzLmJvZHlUZXh0LFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnNGaWxlVXBsb2FkZXJJY29uID0gc3R5bGVkLnNwYW4oXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5kYXJrZW5lZEJnTWl4MTAwLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zU3R5bGVkU3BhbiA9IHN0eWxlZC5zcGFuKFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy50d29YUyxcbiAgfSlcbilcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0NvbHVtbiA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbn0pXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVzID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBsZWZ0OiAwLFxuICByaWdodDogMCxcbiAgbGluZUhlaWdodDogdGhlbWUubGluZUhlaWdodHMudGlnaHQsXG4gIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcubWQsXG4gIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcubGcsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0ID0gc3R5bGVkLnVsKCgpID0+ICh7XG4gIGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLFxuICBtYXJnaW5Cb3R0b206IDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSA9IHN0eWxlZC5saSgoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW46IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVEYXRhID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJiYXNlbGluZVwiLFxuICBmbGV4OiAxLFxuICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZy5sZyxcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZU5hbWUgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnNtLFxuICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcudHdvWFMsXG4gIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIixcbiAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkVXBsb2FkZWRGaWxlID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRFcnJvck1lc3NhZ2UgPSBzdHlsZWQuc3BhbigoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy50d29YUyxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZUljb24gPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhcmtlbmVkQmdNaXgxMDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvciA9IHN0eWxlZC5zbWFsbCgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhbmdlcixcbiAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgaGVpZ2h0OiB0aGVtZS5mb250U2l6ZXMuc20sXG4gIGxpbmVIZWlnaHQ6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvckljb24gPSBzdHlsZWQuc3Bhbih7fSlcblxuY29uc3QgY29tcGFjdEZpbGVVcGxvYWRlciA9ICh0aGVtZTogVGhlbWUpOiBDU1NPYmplY3QgPT4gKHtcbiAgW1N0eWxlZEZpbGVEcm9wem9uZVNlY3Rpb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnMgYXMgYW55XToge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy5sZyxcbiAgfSxcbiAgW1N0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0ZpbGVVcGxvYWRlckljb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlcyBhcyBhbnldOiB7XG4gICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlIGFzIGFueV06IHtcbiAgICBtYXhXaWR0aDogXCJpbmhlcml0XCIsXG4gICAgZmxleDogMSxcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcuc20sXG4gIH0sXG4gIFtTdHlsZWRVcGxvYWRlZEZpbGVOYW1lIGFzIGFueV06IHtcbiAgICB3aWR0aDogdGhlbWUuc2l6ZXMuZnVsbCxcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZURhdGEgYXMgYW55XToge1xuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3IgYXMgYW55XToge1xuICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgd2hpdGVTcGFjZTogXCJpbml0aWFsXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3JJY29uIGFzIGFueV06IHtcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSBhcyBhbnldOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nLm5vbmUsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVVcGxvYWRlciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4ge1xuICBpZiAodGhlbWUuaW5TaWRlYmFyKSB7XG4gICAgcmV0dXJuIGNvbXBhY3RGaWxlVXBsb2FkZXIodGhlbWUpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIFtgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMuc219KWBdOlxuICAgICAgY29tcGFjdEZpbGVVcGxvYWRlcih0aGVtZSksXG4gIH1cbn0pXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const compactFileUploader = theme => ({
  [StyledFileDropzoneSection]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  [StyledFileDropzoneInstructions]: {
    marginBottom: theme.spacing.lg
  },
  [StyledFileDropzoneInstructionsFileUploaderIcon]: {
    display: "none"
  },
  [StyledUploadedFiles]: {
    paddingRight: theme.spacing.lg
  },
  [StyledUploadedFile]: {
    maxWidth: "inherit",
    flex: 1,
    alignItems: "flex-start",
    marginBottom: theme.spacing.sm
  },
  [StyledUploadedFileName]: {
    width: theme.sizes.full
  },
  [StyledUploadedFileData]: {
    flexDirection: "column"
  },
  [StyledFileError]: {
    height: "auto",
    whiteSpace: "initial"
  },
  [StyledFileErrorIcon]: {
    display: "none"
  },
  [StyledUploadedFilesListItem]: {
    margin: theme.spacing.none,
    padding: theme.spacing.none
  }
});
const StyledFileUploader = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "exg6vvm0",
  label: "StyledFileUploader"
})(_ref12 => {
  let {
    theme
  } = _ref12;
  if (theme.inSidebar) {
    return compactFileUploader(theme);
  }
  return {
    [`@media (max-width: ${theme.breakpoints.sm})`]: compactFileUploader(theme)
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9GaWxlVXBsb2FkZXIvc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUtrQyIsImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9zdGxpdGUtZGV2L3N0bGl0ZS1kZXYvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3dpZGdldHMvRmlsZVVwbG9hZGVyL3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkLCB7IENTU09iamVjdCB9IGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwic3JjL3RoZW1lXCJcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZWRGaWxlRHJvcHpvbmUge1xuICBpc0Rpc2FibGVkOiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb248U3R5bGVkRmlsZURyb3B6b25lPihcbiAgKHsgaXNEaXNhYmxlZCwgdGhlbWUgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcubGcsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5QmcsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpaS5tZCxcbiAgICBcIjpmb2N1c1wiOiB7XG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDFweCAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fWAsXG4gICAgfSxcbiAgICBjb2xvcjogaXNEaXNhYmxlZCA/IHRoZW1lLmNvbG9ycy5ncmF5IDogdGhlbWUuY29sb3JzLmJvZHlUZXh0LFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnNGaWxlVXBsb2FkZXJJY29uID0gc3R5bGVkLnNwYW4oXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5kYXJrZW5lZEJnTWl4MTAwLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZURyb3B6b25lSW5zdHJ1Y3Rpb25zU3R5bGVkU3BhbiA9IHN0eWxlZC5zcGFuKFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy50d29YUyxcbiAgfSlcbilcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0NvbHVtbiA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbn0pXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVzID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBsZWZ0OiAwLFxuICByaWdodDogMCxcbiAgbGluZUhlaWdodDogdGhlbWUubGluZUhlaWdodHMudGlnaHQsXG4gIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcubWQsXG4gIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcubGcsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0ID0gc3R5bGVkLnVsKCgpID0+ICh7XG4gIGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLFxuICBtYXJnaW5Cb3R0b206IDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSA9IHN0eWxlZC5saSgoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW46IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRVcGxvYWRlZEZpbGVEYXRhID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJiYXNlbGluZVwiLFxuICBmbGV4OiAxLFxuICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZy5sZyxcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFVwbG9hZGVkRmlsZU5hbWUgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnNtLFxuICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcudHdvWFMsXG4gIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIixcbiAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkVXBsb2FkZWRGaWxlID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRFcnJvck1lc3NhZ2UgPSBzdHlsZWQuc3BhbigoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy50d29YUyxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsZUljb24gPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhcmtlbmVkQmdNaXgxMDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvciA9IHN0eWxlZC5zbWFsbCgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuY29sb3JzLmRhbmdlcixcbiAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgaGVpZ2h0OiB0aGVtZS5mb250U2l6ZXMuc20sXG4gIGxpbmVIZWlnaHQ6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVFcnJvckljb24gPSBzdHlsZWQuc3Bhbih7fSlcblxuY29uc3QgY29tcGFjdEZpbGVVcGxvYWRlciA9ICh0aGVtZTogVGhlbWUpOiBDU1NPYmplY3QgPT4gKHtcbiAgW1N0eWxlZEZpbGVEcm9wem9uZVNlY3Rpb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRHJvcHpvbmVJbnN0cnVjdGlvbnMgYXMgYW55XToge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy5sZyxcbiAgfSxcbiAgW1N0eWxlZEZpbGVEcm9wem9uZUluc3RydWN0aW9uc0ZpbGVVcGxvYWRlckljb24gYXMgYW55XToge1xuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlcyBhcyBhbnldOiB7XG4gICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICB9LFxuICBbU3R5bGVkVXBsb2FkZWRGaWxlIGFzIGFueV06IHtcbiAgICBtYXhXaWR0aDogXCJpbmhlcml0XCIsXG4gICAgZmxleDogMSxcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcuc20sXG4gIH0sXG4gIFtTdHlsZWRVcGxvYWRlZEZpbGVOYW1lIGFzIGFueV06IHtcbiAgICB3aWR0aDogdGhlbWUuc2l6ZXMuZnVsbCxcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZURhdGEgYXMgYW55XToge1xuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3IgYXMgYW55XToge1xuICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgd2hpdGVTcGFjZTogXCJpbml0aWFsXCIsXG4gIH0sXG4gIFtTdHlsZWRGaWxlRXJyb3JJY29uIGFzIGFueV06IHtcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgfSxcbiAgW1N0eWxlZFVwbG9hZGVkRmlsZXNMaXN0SXRlbSBhcyBhbnldOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nLm5vbmUsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5ub25lLFxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbGVVcGxvYWRlciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4ge1xuICBpZiAodGhlbWUuaW5TaWRlYmFyKSB7XG4gICAgcmV0dXJuIGNvbXBhY3RGaWxlVXBsb2FkZXIodGhlbWUpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIFtgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMuc219KWBdOlxuICAgICAgY29tcGFjdEZpbGVVcGxvYWRlcih0aGVtZSksXG4gIH1cbn0pXG4iXX0= */");

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

/***/ "../../streamlit/frontend/src/hocs/withPagination/Pagination.tsx":
/*!***********************************************************************!*\
  !*** ../../streamlit/frontend/src/hocs/withPagination/Pagination.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _emotion_icons_material_outlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion-icons/material-outlined */ "../../node_modules/@emotion-icons/material-outlined/ChevronLeft/ChevronLeft.esm.js");
/* harmony import */ var _emotion_icons_material_outlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion-icons/material-outlined */ "../../node_modules/@emotion-icons/material-outlined/ChevronRight/ChevronRight.esm.js");
/* harmony import */ var src_components_shared_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/shared/Button */ "../../streamlit/frontend/src/components/shared/Button/index.tsx");
/* harmony import */ var src_components_shared_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/shared/Icon */ "../../streamlit/frontend/src/components/shared/Icon/index.tsx");
/* harmony import */ var src_components_shared_TextElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/shared/TextElements */ "../../streamlit/frontend/src/components/shared/TextElements/index.tsx");
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled-components */ "../../streamlit/frontend/src/hocs/withPagination/styled-components.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/hocs/withPagination/Pagination.tsx";
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








const Pagination = _ref => {
  let {
    className,
    currentPage,
    totalPages,
    onNext,
    onPrevious
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_4__.StyledPagination, {
    className: className,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(src_components_shared_TextElements__WEBPACK_IMPORTED_MODULE_3__.Small, {
      children: `Showing page ${currentPage} of ${totalPages}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_4__.StyledPaginators, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(src_components_shared_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onClick: onPrevious,
        kind: src_components_shared_Button__WEBPACK_IMPORTED_MODULE_1__.Kind.MINIMAL,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(src_components_shared_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
          content: _emotion_icons_material_outlined__WEBPACK_IMPORTED_MODULE_6__.ChevronLeft,
          size: "xl"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(src_components_shared_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onClick: onNext,
        kind: src_components_shared_Button__WEBPACK_IMPORTED_MODULE_1__.Kind.MINIMAL,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(src_components_shared_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
          content: _emotion_icons_material_outlined__WEBPACK_IMPORTED_MODULE_7__.ChevronRight,
          size: "xl"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, undefined);
};
_c = Pagination;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);
var _c;
__webpack_require__.$Refresh$.register(_c, "Pagination");

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

/***/ "../../streamlit/frontend/src/hocs/withPagination/index.tsx":
/*!******************************************************************!*\
  !*** ../../streamlit/frontend/src/hocs/withPagination/index.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _withPagination__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _withPagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withPagination */ "../../streamlit/frontend/src/hocs/withPagination/withPagination.tsx");
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

/***/ "../../streamlit/frontend/src/hocs/withPagination/styled-components.ts":
/*!*****************************************************************************!*\
  !*** ../../streamlit/frontend/src/hocs/withPagination/styled-components.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledPagination": () => (/* binding */ StyledPagination),
/* harmony export */   "StyledPaginators": () => (/* binding */ StyledPaginators)
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

const StyledPagination = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e1f8s2qs1",
  label: "StyledPagination"
})(_ref => {
  let {
    theme
  } = _ref;
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: theme.spacing.twoXS,
    marginBottom: theme.spacing.twoXS
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2hvY3Mvd2l0aFBhZ2luYXRpb24vc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JnQyIsImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9zdGxpdGUtZGV2L3N0bGl0ZS1kZXYvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9ob2NzL3dpdGhQYWdpbmF0aW9uL3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuXG5leHBvcnQgY29uc3QgU3R5bGVkUGFnaW5hdGlvbiA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZy50d29YUyxcbiAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRQYWdpbmF0b3JzID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMuZmFkZWRUZXh0NDAsXG59KSlcbiJdfQ== */");
const StyledPaginators = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e1f8s2qs0",
  label: "StyledPaginators"
})(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.colors.fadedText40
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2hvY3Mvd2l0aFBhZ2luYXRpb24vc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJnQyIsImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9zdGxpdGUtZGV2L3N0bGl0ZS1kZXYvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9ob2NzL3dpdGhQYWdpbmF0aW9uL3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuXG5leHBvcnQgY29uc3QgU3R5bGVkUGFnaW5hdGlvbiA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZy50d29YUyxcbiAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nLnR3b1hTLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRQYWdpbmF0b3JzID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMuZmFkZWRUZXh0NDAsXG59KSlcbiJdfQ== */");

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

/***/ "../../streamlit/frontend/src/hocs/withPagination/withPagination.tsx":
/*!***************************************************************************!*\
  !*** ../../streamlit/frontend/src/hocs/withPagination/withPagination.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hoist-non-react-statics */ "../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_hocs_withPagination_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/hocs/withPagination/Pagination */ "../../streamlit/frontend/src/hocs/withPagination/Pagination.tsx");
/* harmony import */ var src_lib_Hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/lib/Hooks */ "../../streamlit/frontend/src/lib/Hooks.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/hocs/withPagination/withPagination.tsx";
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







const calculateNumPages = (items, pageSize) => Math.ceil(items.length / pageSize);
const withPagination = WrappedComponent => {
  var _s = __webpack_require__.$Refresh$.signature();
  const WithPagination = _ref => {
    _s();
    let {
      pageSize,
      items,
      resetOnAdd,
      ...props
    } = _ref;
    const [currentPage, updateCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const [totalPages, updateTotalPages] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(calculateNumPages(items, pageSize));
    const prevItems = (0,src_lib_Hooks__WEBPACK_IMPORTED_MODULE_3__.usePrevious)(items);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      if (prevItems && prevItems.length !== items.length) {
        updateTotalPages(calculateNumPages(items, pageSize));
      }
      if (prevItems && prevItems.length < items.length) {
        if (resetOnAdd) {
          updateCurrentPage(0);
        }
      } else if (currentPage + 1 >= totalPages) {
        updateCurrentPage(totalPages - 1);
      }
    }, [items, currentPage, pageSize, prevItems, resetOnAdd, totalPages]);
    const onNext = () => {
      updateCurrentPage(Math.min(currentPage + 1, totalPages - 1));
    };
    const onPrevious = () => {
      updateCurrentPage(Math.max(0, currentPage - 1));
    };
    const paginatedItems = items.slice(currentPage * pageSize, currentPage * pageSize + pageSize);
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(WrappedComponent, {
        items: paginatedItems,
        ...props
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, undefined), items.length > pageSize ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(src_hocs_withPagination_Pagination__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "streamlit-paginator",
        pageSize: pageSize,
        totalPages: totalPages,
        currentPage: currentPage + 1,
        onNext: onNext,
        onPrevious: onPrevious
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }, undefined) : null]
    }, void 0, true);
  };
  _s(WithPagination, "WtHGO/Rz2lQwG5isM+VSYpNELvc=", false, function () {
    return [src_lib_Hooks__WEBPACK_IMPORTED_MODULE_3__.usePrevious];
  });
  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default()(WithPagination, WrappedComponent);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withPagination);

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

/***/ "../../streamlit/frontend/src/lib/FileHelper.ts":
/*!******************************************************!*\
  !*** ../../streamlit/frontend/src/lib/FileHelper.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BYTE_CONVERSION_SIZE": () => (/* binding */ BYTE_CONVERSION_SIZE),
/* harmony export */   "FileSize": () => (/* binding */ FileSize),
/* harmony export */   "getSizeDisplay": () => (/* binding */ getSizeDisplay),
/* harmony export */   "sizeConverter": () => (/* binding */ sizeConverter)
/* harmony export */ });
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/lib/utils */ "../../streamlit/frontend/src/lib/utils.ts");
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


let FileSize;

// There is a shift towards displaying storage in base 10 vs base 2
// but Windows is still displaying things in base 2. This does not handle
// all cases but for simplicity general rule is to use base 2 for Windows.
(function (FileSize) {
  FileSize["Gigabyte"] = "gb";
  FileSize["Megabyte"] = "mb";
  FileSize["Kilobyte"] = "kb";
  FileSize["Byte"] = "b";
})(FileSize || (FileSize = {}));
const BYTE_CONVERSION_SIZE = (0,src_lib_utils__WEBPACK_IMPORTED_MODULE_0__.isFromWindows)() ? 1024 : 1000;
const sizeUnitSequence = [FileSize.Gigabyte, FileSize.Megabyte, FileSize.Kilobyte, FileSize.Byte];
const getSizeDisplay = function (size, unit) {
  let rounding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  if (!unit) {
    unit = FileSize.Byte;
  }
  if (rounding < 0) {
    rounding = 0;
  }
  if (size < 0) {
    throw new Error("Size must be greater than or equal to 0");
  }
  const sizeIndex = sizeUnitSequence.indexOf(unit);
  const nextUnitSize = size / BYTE_CONVERSION_SIZE;
  if (sizeIndex && size > BYTE_CONVERSION_SIZE / 2) {
    return getSizeDisplay(nextUnitSize, sizeUnitSequence[sizeIndex - 1], rounding);
  }
  return `${size.toFixed(rounding)}${unit.toUpperCase()}`;
};
const sizeConverter = (size, inputUnit, outputUnit) => {
  if (size < 0) {
    throw Error("Size must be 0 or greater");
  }
  const inputLevel = sizeUnitSequence.findIndex(unit => unit === inputUnit);
  const outputLevel = sizeUnitSequence.findIndex(unit => unit === outputUnit);
  if (inputLevel === -1 || outputLevel === -1) {
    // Should not ever occur
    throw Error("Unexpected byte unit provided");
  }
  if (inputLevel === outputLevel) {
    return size;
  }
  const levelsBetween = Math.abs(inputLevel - outputLevel);
  const byteDifference = BYTE_CONVERSION_SIZE ** levelsBetween;
  if (inputLevel > outputLevel) {
    // Going from smaller to bigger
    return size / byteDifference;
  }
  // Going from bigger to smaller
  return size * byteDifference;
};

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
//# sourceMappingURL=streamlit_frontend_src_components_widgets_FileUploader_index_tsx.chunk.js.map