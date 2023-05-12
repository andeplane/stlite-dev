"use strict";
(globalThis["webpackChunk_stlite_mountable"] = globalThis["webpackChunk_stlite_mountable"] || []).push([["streamlit_frontend_src_components_widgets_CameraInput_index_tsx"],{

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

/***/ "../../streamlit/frontend/src/components/widgets/CameraInput/CameraInput.tsx":
/*!***********************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/CameraInput/CameraInput.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_icons_open_iconic__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @emotion-icons/open-iconic */ "../../node_modules/@emotion-icons/open-iconic/X/X.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var src_autogen_proto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/autogen/proto */ "../../streamlit/frontend/src/autogen/proto.js");
/* harmony import */ var src_components_shared_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/shared/Icon */ "../../streamlit/frontend/src/components/shared/Icon/index.tsx");
/* harmony import */ var src_components_shared_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/shared/Tooltip */ "../../streamlit/frontend/src/components/shared/Tooltip/index.tsx");
/* harmony import */ var src_components_shared_TooltipIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/shared/TooltipIcon */ "../../streamlit/frontend/src/components/shared/TooltipIcon/index.tsx");
/* harmony import */ var src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/widgets/BaseWidget */ "../../streamlit/frontend/src/components/widgets/BaseWidget/index.tsx");
/* harmony import */ var src_components_widgets_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/widgets/Form */ "../../streamlit/frontend/src/components/widgets/Form/index.tsx");
/* harmony import */ var src_lib_log__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/lib/log */ "../../streamlit/frontend/src/lib/log.ts");
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/lib/utils */ "../../streamlit/frontend/src/lib/utils.ts");
/* harmony import */ var src_components_widgets_FileUploader_UploadFileInfo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/components/widgets/FileUploader/UploadFileInfo */ "../../streamlit/frontend/src/components/widgets/FileUploader/UploadFileInfo.ts");
/* harmony import */ var _CameraInputButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CameraInputButton */ "../../streamlit/frontend/src/components/widgets/CameraInput/CameraInputButton.tsx");
/* harmony import */ var _SwitchFacingModeButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SwitchFacingModeButton */ "../../streamlit/frontend/src/components/widgets/CameraInput/SwitchFacingModeButton.tsx");
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styled-components */ "../../streamlit/frontend/src/components/widgets/CameraInput/styled-components.ts");
/* harmony import */ var _WebcamComponent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./WebcamComponent */ "../../streamlit/frontend/src/components/widgets/CameraInput/WebcamComponent.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/widgets/CameraInput/CameraInput.tsx";
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




















const MIN_SHUTTER_EFFECT_TIME_MS = 150;
class CameraInput extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
  constructor(props) {
    super(props);
    this.localFileIdCounter = 1;
    this.RESTORED_FROM_WIDGET_STRING = "RESTORED_FROM_WIDGET";
    this.formClearHelper = new src_components_widgets_Form__WEBPACK_IMPORTED_MODULE_8__.FormClearHelper();
    this.getProgress = () => {
      if (this.state.files.length > 0 && this.state.files[this.state.files.length - 1].status.type === "uploading") {
        const status = this.state.files[this.state.files.length - 1].status;
        return status.progress;
      }
      return undefined;
    };
    this.setClearPhotoInProgress = clearPhotoInProgress => {
      this.setState({
        clearPhotoInProgress
      });
    };
    this.setFacingMode = () => {
      this.setState(prevState => ({
        facingMode: prevState.facingMode === _SwitchFacingModeButton__WEBPACK_IMPORTED_MODULE_13__.FacingMode.USER ? _SwitchFacingModeButton__WEBPACK_IMPORTED_MODULE_13__.FacingMode.ENVIRONMENT : _SwitchFacingModeButton__WEBPACK_IMPORTED_MODULE_13__.FacingMode.USER
      }));
    };
    this.handleCapture = imgSrc => {
      if (imgSrc === null) {
        return Promise.resolve();
      }
      this.setState({
        imgSrc,
        shutter: true,
        minShutterEffectPassed: false
      });
      const delay = t => new Promise(resolve => setTimeout(resolve, t));
      const promise = urltoFile(imgSrc, `camera-input-${new Date().toISOString().replace(/:/g, "_")}.jpg`).then(file => this.uploadFile(file)).then(() => delay(MIN_SHUTTER_EFFECT_TIME_MS)).then(() => {
        this.setState((prevState, _) => {
          return {
            imgSrc,
            shutter: prevState.shutter,
            minShutterEffectPassed: true
          };
        });
      }).catch(err => {
        (0,src_lib_log__WEBPACK_IMPORTED_MODULE_9__.logError)(err);
      });
      return promise;
    };
    this.removeCapture = () => {
      if (this.state.files.length === 0) {
        return;
      }
      this.state.files.forEach(file => this.deleteFile(file.id));
      this.setState({
        imgSrc: null,
        clearPhotoInProgress: true
      });
    };
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
      // If we are reconnecting, reset the camera input so that the widget is
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
    this.onFormCleared = () => {
      this.setState({
        files: []
      }, () => {
        const newWidgetValue = this.createWidgetValue();
        if (newWidgetValue == null) {
          return;
        }
        this.setState({
          imgSrc: null
        });
        this.props.widgetMgr.setFileUploaderStateValue(this.props.element, newWidgetValue, {
          fromUi: true
        });
      });
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
    this.onUploadComplete = (localFileId, serverFileId) => {
      // "state.newestServerFileId" must always hold the max fileID
      // returned from the server.
      this.setState(state => ({
        newestServerFileId: Math.max(state.newestServerFileId, serverFileId),
        shutter: false
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
    this.reset = () => {
      this.setState({
        files: [],
        imgSrc: null
      });
    };
    this.uploadFile = file => {
      // Create an UploadFileInfo for this file and add it to our state.
      const cancelToken = axios__WEBPACK_IMPORTED_MODULE_0___default().CancelToken.source();
      const uploadingFileInfo = new src_components_widgets_FileUploader_UploadFileInfo__WEBPACK_IMPORTED_MODULE_11__.UploadFileInfo(file.name, file.size, this.nextLocalFileId(), {
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
    this.state = this.initialValue;
  }
  get initialValue() {
    const emptyState = {
      files: [],
      newestServerFileId: 0,
      imgSrc: null,
      shutter: false,
      minShutterEffectPassed: true,
      clearPhotoInProgress: false,
      facingMode: _SwitchFacingModeButton__WEBPACK_IMPORTED_MODULE_13__.FacingMode.USER
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
        return new src_components_widgets_FileUploader_UploadFileInfo__WEBPACK_IMPORTED_MODULE_11__.UploadFileInfo(name, size, this.nextLocalFileId(), {
          type: "uploaded",
          serverFileId
        });
      }),
      newestServerFileId: Number(maxFileId),
      imgSrc: uploadedFileInfo.length === 0 ? "" : this.RESTORED_FROM_WIDGET_STRING,
      shutter: false,
      minShutterEffectPassed: false,
      clearPhotoInProgress: false,
      facingMode: _SwitchFacingModeButton__WEBPACK_IMPORTED_MODULE_13__.FacingMode.USER
    };
  }
  componentWillUnmount() {
    this.formClearHelper.disconnect();
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
   * If we're part of a clear_on_submit form, this will be called when our
   * form is submitted. Restore our default value and update the WidgetManager.
   */

  render() {
    var _element$labelVisibil;
    const {
      element,
      widgetMgr,
      disabled,
      width
    } = this.props;

    // Manage our form-clear event handler.
    this.formClearHelper.manageFormClearListener(widgetMgr, element.formId, this.onFormCleared);
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_14__.StyledCameraInput, {
      width: width,
      className: "row-widget",
      "data-testid": "stCameraInput",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_7__.WidgetLabel, {
        label: element.label,
        disabled: disabled,
        labelVisibility: (0,src_lib_utils__WEBPACK_IMPORTED_MODULE_10__.labelVisibilityProtoValueToEnum)((_element$labelVisibil = element.labelVisibility) === null || _element$labelVisibil === void 0 ? void 0 : _element$labelVisibil.value),
        children: element.help && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_7__.StyledWidgetLabelHelp, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(src_components_shared_TooltipIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
            content: element.help,
            placement: src_components_shared_Tooltip__WEBPACK_IMPORTED_MODULE_5__.Placement.TOP_RIGHT
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 383,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 382,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 374,
        columnNumber: 9
      }, this), this.state.imgSrc ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_14__.StyledBox, {
          width: width,
          children: this.state.imgSrc !== this.RESTORED_FROM_WIDGET_STRING && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_14__.StyledImg, {
            src: this.state.imgSrc,
            alt: "Snapshot",
            opacity: this.state.shutter || !this.state.minShutterEffectPassed ? "50%" : "100%",
            width: width,
            height: width * 9 / 16
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 394,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 392,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_CameraInputButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
          onClick: this.removeCapture,
          progress: this.getProgress(),
          disabled: !!this.getProgress() || disabled,
          children: this.getProgress() ? "Uploading..." : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_14__.StyledSpan, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(src_components_shared_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
              content: _emotion_icons_open_iconic__WEBPACK_IMPORTED_MODULE_17__.X,
              margin: "0 xs 0 0",
              size: "sm"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 416,
              columnNumber: 19
            }, this), " Clear photo"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 415,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 407,
          columnNumber: 13
        }, this)]
      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_WebcamComponent__WEBPACK_IMPORTED_MODULE_15__["default"], {
        handleCapture: this.handleCapture,
        width: width,
        disabled: disabled,
        clearPhotoInProgress: this.state.clearPhotoInProgress,
        setClearPhotoInProgress: this.setClearPhotoInProgress,
        facingMode: this.state.facingMode,
        setFacingMode: this.setFacingMode
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 422,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 7
    }, this);
  }
  nextLocalFileId() {
    return this.localFileIdCounter++;
  }

  /**
   * Delete the file with the given ID:
   * - Cancel the file upload if it's in progress
   * - Remove the fileID from our local state
   * We don't actually tell the server to delete the file. It will garbage
   * collect it.
   */
}

function urltoFile(url, filename) {
  return fetch(url).then(res => res.arrayBuffer()).then(buf => new File([buf], filename, {
    type: "image/jpeg"
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CameraInput);

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

/***/ "../../streamlit/frontend/src/components/widgets/CameraInput/CameraInputButton.tsx":
/*!*****************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/CameraInput/CameraInputButton.tsx ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var src_components_shared_ProgressBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/shared/ProgressBar */ "../../streamlit/frontend/src/components/shared/ProgressBar/index.tsx");
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled-components */ "../../streamlit/frontend/src/components/widgets/CameraInput/styled-components.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/widgets/CameraInput/CameraInputButton.tsx";
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





function CameraInputButton(_ref) {
  let {
    disabled,
    onClick,
    children,
    progress
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_2__.StyledCameraInputBaseButton, {
    disabled: disabled || false,
    onClick: onClick || (() => {}),
    progress: progress || null,
    "data-testid": "stCameraInputButton",
    children: [children, progress && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_2__.StyledProgressBar, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(src_components_shared_ProgressBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
        value: progress,
        size: src_components_shared_ProgressBar__WEBPACK_IMPORTED_MODULE_1__.Size.EXTRASMALL,
        overrides: {
          Bar: {
            style: {
              borderTopLeftRadius: "0px",
              borderTopRightRadius: "0px"
            }
          },
          BarProgress: {
            style: {
              borderTopLeftRadius: "0px",
              borderTopRightRadius: "0px"
            }
          },
          BarContainer: {
            style: {
              borderTopLeftRadius: "0px",
              borderTopRightRadius: "0px"
            }
          }
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, this);
}
_c = CameraInputButton;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CameraInputButton);
var _c;
__webpack_require__.$Refresh$.register(_c, "CameraInputButton");

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

/***/ "../../streamlit/frontend/src/components/widgets/CameraInput/SwitchFacingModeButton.tsx":
/*!**********************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/CameraInput/SwitchFacingModeButton.tsx ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FacingMode": () => (/* binding */ FacingMode),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _emotion_icons_material_rounded__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion-icons/material-rounded */ "../../node_modules/@emotion-icons/material-rounded/SwitchCamera/SwitchCamera.esm.js");
/* harmony import */ var src_components_shared_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/shared/Button */ "../../streamlit/frontend/src/components/shared/Button/index.tsx");
/* harmony import */ var src_components_shared_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/shared/Icon */ "../../streamlit/frontend/src/components/shared/Icon/index.tsx");
/* harmony import */ var src_components_shared_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/shared/Tooltip */ "../../streamlit/frontend/src/components/shared/Tooltip/index.tsx");
/* harmony import */ var src_theme_baseTheme_themeColors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/theme/baseTheme/themeColors */ "../../streamlit/frontend/src/theme/baseTheme/themeColors.ts");
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled-components */ "../../streamlit/frontend/src/components/widgets/CameraInput/styled-components.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/widgets/CameraInput/SwitchFacingModeButton.tsx";
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









let FacingMode;
(function (FacingMode) {
  FacingMode["USER"] = "user";
  FacingMode["ENVIRONMENT"] = "environment";
})(FacingMode || (FacingMode = {}));
const SwitchFacingModeButton = _ref => {
  let {
    switchFacingMode
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_5__.StyledSwitchFacingModeButton, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(src_components_shared_Tooltip__WEBPACK_IMPORTED_MODULE_3__["default"], {
      content: "Switch camera",
      placement: src_components_shared_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Placement.TOP_RIGHT,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(src_components_shared_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        kind: src_components_shared_Button__WEBPACK_IMPORTED_MODULE_1__.Kind.MINIMAL,
        onClick: switchFacingMode,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(src_components_shared_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
          content: _emotion_icons_material_rounded__WEBPACK_IMPORTED_MODULE_7__.SwitchCamera,
          size: "twoXL",
          color: src_theme_baseTheme_themeColors__WEBPACK_IMPORTED_MODULE_4__["default"].white
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, undefined);
};
_c = SwitchFacingModeButton;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwitchFacingModeButton);
var _c;
__webpack_require__.$Refresh$.register(_c, "SwitchFacingModeButton");

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

/***/ "../../streamlit/frontend/src/components/widgets/CameraInput/WebcamComponent.tsx":
/*!***************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/CameraInput/WebcamComponent.tsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AskForCameraPermission": () => (/* binding */ AskForCameraPermission),
/* harmony export */   "WebcamPermission": () => (/* binding */ WebcamPermission),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_icons_open_iconic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion-icons/open-iconic */ "../../node_modules/@emotion-icons/open-iconic/Video/Video.esm.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @emotion/react */ "../../node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-device-detect */ "../../node_modules/react-device-detect/dist/lib.js");
/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-webcam */ "../../node_modules/react-webcam/dist/react-webcam.js");
/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_webcam__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/lib/utils */ "../../streamlit/frontend/src/lib/utils.ts");
/* harmony import */ var src_components_shared_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/shared/Icon */ "../../streamlit/frontend/src/components/shared/Icon/index.tsx");
/* harmony import */ var src_theme_baseTheme_themeColors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/theme/baseTheme/themeColors */ "../../streamlit/frontend/src/theme/baseTheme/themeColors.ts");
/* harmony import */ var src_urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/urls */ "../../streamlit/frontend/src/urls.ts");
/* harmony import */ var _CameraInputButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CameraInputButton */ "../../streamlit/frontend/src/components/widgets/CameraInput/CameraInputButton.tsx");
/* harmony import */ var _SwitchFacingModeButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SwitchFacingModeButton */ "../../streamlit/frontend/src/components/widgets/CameraInput/SwitchFacingModeButton.tsx");
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styled-components */ "../../streamlit/frontend/src/components/widgets/CameraInput/styled-components.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/widgets/CameraInput/WebcamComponent.tsx",
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














let WebcamPermission;
(function (WebcamPermission) {
  WebcamPermission["PENDING"] = "pending";
  WebcamPermission["SUCCESS"] = "success";
  WebcamPermission["ERROR"] = "error";
})(WebcamPermission || (WebcamPermission = {}));
const AskForCameraPermission = _ref => {
  let {
    width
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_9__.StyledBox, {
    width: width,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(src_components_shared_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      size: "threeXL",
      color: src_theme_baseTheme_themeColors__WEBPACK_IMPORTED_MODULE_5__["default"].gray60,
      content: _emotion_icons_open_iconic__WEBPACK_IMPORTED_MODULE_11__.Video
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_9__.StyledDescription, {
      children: ["This app would like to use your camera.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_9__.StyledLink, {
        href: src_urls__WEBPACK_IMPORTED_MODULE_6__.CAMERA_PERMISSION_URL,
        rel: "noopener noreferrer",
        target: "_blank",
        children: "Learn how to allow access."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 5
  }, undefined);
};
_c = AskForCameraPermission;
const WebcamComponent = _ref2 => {
  _s();
  let {
    handleCapture,
    width,
    disabled,
    clearPhotoInProgress,
    setClearPhotoInProgress,
    facingMode,
    setFacingMode
  } = _ref2;
  const [webcamPermission, setWebcamPermissionState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(WebcamPermission.PENDING);
  const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [debouncedWidth, setDebouncedWidth] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(width);
  const memoizedSetDebouncedCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((0,src_lib_utils__WEBPACK_IMPORTED_MODULE_3__.debounce)(1000, setDebouncedWidth), []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    memoizedSetDebouncedCallback(width);
  }, [width]);
  function capture() {
    if (videoRef.current !== null) {
      const imageSrc = videoRef.current.getScreenshot();
      handleCapture(imageSrc);
    }
  }
  const theme = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.u)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_9__.StyledCameraInput, {
    width: debouncedWidth,
    children: [webcamPermission !== WebcamPermission.SUCCESS && !disabled && !clearPhotoInProgress ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(AskForCameraPermission, {
      width: debouncedWidth
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }, undefined) : react_device_detect__WEBPACK_IMPORTED_MODULE_1__.isMobile && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_SwitchFacingModeButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
      switchFacingMode: setFacingMode
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_9__.StyledBox, {
      hidden: webcamPermission !== WebcamPermission.SUCCESS && !disabled && !clearPhotoInProgress,
      width: debouncedWidth,
      children: !disabled && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((react_webcam__WEBPACK_IMPORTED_MODULE_2___default()), {
        audio: false,
        ref: videoRef,
        screenshotFormat: "image/jpeg",
        screenshotQuality: 1,
        width: debouncedWidth
        // We keep Aspect ratio of container always equal 16 / 9.
        // The aspect ration of video stream may be different depending on a camera.
        ,
        height: debouncedWidth * 9 / 16,
        style: {
          borderRadius: `${theme.radii.md} ${theme.radii.md} 0 0`
        },
        onUserMediaError: () => {
          setWebcamPermissionState(WebcamPermission.ERROR);
        },
        onUserMedia: () => {
          setWebcamPermissionState(WebcamPermission.SUCCESS);
          setClearPhotoInProgress(false);
        },
        videoConstraints: {
          width: {
            ideal: debouncedWidth
          },
          facingMode
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_CameraInputButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: capture,
      disabled: webcamPermission !== WebcamPermission.SUCCESS || disabled || clearPhotoInProgress,
      children: "Take Photo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 5
  }, undefined);
};
_s(WebcamComponent, "hQ4viFkUVjpRM4Okw4ASRyUJfTM=", false, function () {
  return [_emotion_react__WEBPACK_IMPORTED_MODULE_12__.u];
});
_c2 = WebcamComponent;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebcamComponent);
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "AskForCameraPermission");
__webpack_require__.$Refresh$.register(_c2, "WebcamComponent");

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

/***/ "../../streamlit/frontend/src/components/widgets/CameraInput/index.tsx":
/*!*****************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/CameraInput/index.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _CameraInput__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _CameraInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CameraInput */ "../../streamlit/frontend/src/components/widgets/CameraInput/CameraInput.tsx");
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

/***/ "../../streamlit/frontend/src/components/widgets/CameraInput/styled-components.ts":
/*!****************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/CameraInput/styled-components.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledBox": () => (/* binding */ StyledBox),
/* harmony export */   "StyledCameraInput": () => (/* binding */ StyledCameraInput),
/* harmony export */   "StyledCameraInputBaseButton": () => (/* binding */ StyledCameraInputBaseButton),
/* harmony export */   "StyledDescription": () => (/* binding */ StyledDescription),
/* harmony export */   "StyledImg": () => (/* binding */ StyledImg),
/* harmony export */   "StyledLink": () => (/* binding */ StyledLink),
/* harmony export */   "StyledProgressBar": () => (/* binding */ StyledProgressBar),
/* harmony export */   "StyledSpan": () => (/* binding */ StyledSpan),
/* harmony export */   "StyledSwitchFacingModeButton": () => (/* binding */ StyledSwitchFacingModeButton),
/* harmony export */   "StyledWebcamWrapper": () => (/* binding */ StyledWebcamWrapper)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "../../node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* harmony import */ var color2k__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color2k */ "../../node_modules/color2k/dist/index.exports.import.es.mjs");
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


var Size;
(function (Size) {
  Size["XSMALL"] = "xsmall";
  Size["SMALL"] = "small";
  Size["MEDIUM"] = "medium";
  Size["LARGE"] = "large";
})(Size || (Size = {}));
function getSizeStyle(size, theme) {
  switch (size) {
    case Size.XSMALL:
      return {
        padding: `${theme.spacing.twoXS} ${theme.spacing.sm}`,
        fontSize: theme.fontSizes.sm
      };
    case Size.SMALL:
      return {
        padding: `${theme.spacing.twoXS} ${theme.spacing.md}`
      };
    case Size.LARGE:
      return {
        padding: `${theme.spacing.md} ${theme.spacing.md}`
      };
    default:
      return {
        padding: `${theme.spacing.xs} ${theme.spacing.md}`
      };
  }
}
const StyledCameraInput = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "ejtjsn29",
  label: "StyledCameraInput"
})(() => ({
  // This is used to position the "Switch facing mode" button
  // with respect to the webcam block.
  position: "relative",
  overflow: "hidden",
  width: "100%",
  objectFit: "contain"
}),  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9DYW1lcmFJbnB1dC9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRGlDIiwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9DYW1lcmFJbnB1dC9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMilcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHN0eWxlZCwgeyBDU1NPYmplY3QgfSBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcbmltcG9ydCB7IHRyYW5zcGFyZW50aXplIH0gZnJvbSBcImNvbG9yMmtcIlxuaW1wb3J0IHsgTW91c2VFdmVudCwgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcInNyYy90aGVtZVwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhSW5wdXRCdXR0b25Qcm9wcyB7XG4gIG9uQ2xpY2s/OiAoZXZlbnQ6IE1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiBhbnlcbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGVcbiAgcHJvZ3Jlc3M/OiBudW1iZXIgfCBudWxsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVkQ2FtZXJhSW5wdXRQcm9wcyB7XG4gIHdpZHRoOiBudW1iZXJcbn1cblxuZW51bSBTaXplIHtcbiAgWFNNQUxMID0gXCJ4c21hbGxcIixcbiAgU01BTEwgPSBcInNtYWxsXCIsXG4gIE1FRElVTSA9IFwibWVkaXVtXCIsXG4gIExBUkdFID0gXCJsYXJnZVwiLFxufVxuXG5mdW5jdGlvbiBnZXRTaXplU3R5bGUoc2l6ZTogU2l6ZSwgdGhlbWU6IFRoZW1lKTogQ1NTT2JqZWN0IHtcbiAgc3dpdGNoIChzaXplKSB7XG4gICAgY2FzZSBTaXplLlhTTUFMTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudHdvWFN9ICR7dGhlbWUuc3BhY2luZy5zbX1gLFxuICAgICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnNtLFxuICAgICAgfVxuICAgIGNhc2UgU2l6ZS5TTUFMTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudHdvWFN9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgICAgfVxuICAgIGNhc2UgU2l6ZS5MQVJHRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcubWR9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnhzfSAke3RoZW1lLnNwYWNpbmcubWR9YCxcbiAgICAgIH1cbiAgfVxufVxuXG50eXBlIFJlcXVpcmVkQ2FtZXJhSW5wdXRCdXR0b25Qcm9wcyA9IFJlcXVpcmVkPENhbWVyYUlucHV0QnV0dG9uUHJvcHM+XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRDYW1lcmFJbnB1dCA9IHN0eWxlZC5kaXY8U3R5bGVkQ2FtZXJhSW5wdXRQcm9wcz4oKCkgPT4gKHtcbiAgLy8gVGhpcyBpcyB1c2VkIHRvIHBvc2l0aW9uIHRoZSBcIlN3aXRjaCBmYWNpbmcgbW9kZVwiIGJ1dHRvblxuICAvLyB3aXRoIHJlc3BlY3QgdG8gdGhlIHdlYmNhbSBibG9jay5cbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgb2JqZWN0Rml0OiBcImNvbnRhaW5cIixcbn0pKVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlZEJveFByb3BzIHtcbiAgd2lkdGg6IG51bWJlclxufVxuXG5leHBvcnQgY29uc3QgU3R5bGVkQm94ID0gc3R5bGVkLmRpdjxTdHlsZWRCb3hQcm9wcz4oKHsgdGhlbWUsIHdpZHRoIH0pID0+ICh7XG4gIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnNlY29uZGFyeUJnLFxuICBib3JkZXJSYWRpdXM6IGAke3RoZW1lLnJhZGlpLm1kfSAke3RoZW1lLnJhZGlpLm1kfSAwIDBgLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIGhlaWdodDogKHdpZHRoICogOSkgLyAxNixcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWREZXNjcmlwdGlvbiA9IHN0eWxlZC5wKCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy5zbSxcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxufSkpXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVkSW1nUHJvcHMge1xuICBvcGFjaXR5OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IFN0eWxlZEltZyA9IHN0eWxlZC5pbWc8U3R5bGVkSW1nUHJvcHM+KCh7IHRoZW1lLCBvcGFjaXR5IH0pID0+ICh7XG4gIGJvcmRlclJhZGl1czogYCR7dGhlbWUucmFkaWkubWR9ICR7dGhlbWUucmFkaWkubWR9IDAgMGAsXG4gIG9iamVjdEZpdDogXCJjb250YWluXCIsXG4gIG9wYWNpdHksXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQuYSgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRTcGFuID0gc3R5bGVkLnNwYW4oKCkgPT4gKHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFN3aXRjaEZhY2luZ01vZGVCdXR0b24gPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIHRvcDogdGhlbWUuc3BhY2luZy5sZyxcbiAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcubGcsXG4gIHpJbmRleDogMSxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5mYWRlZFRleHQ0MCxcbiAgbWl4QmxlbmRNb2RlOiBcImRpZmZlcmVuY2VcIixcbiAgb3BhY2l0eTogMC42LFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRXZWJjYW1XcmFwcGVyID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkUHJvZ3Jlc3NCYXIgPSBzdHlsZWQuZGl2KCgpID0+ICh7XG4gIGhlaWdodDogXCJmaXQtY29udGVudFwiLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIGJvdHRvbTogMCxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkQ2FtZXJhSW5wdXRCYXNlQnV0dG9uID1cbiAgc3R5bGVkLmJ1dHRvbjxSZXF1aXJlZENhbWVyYUlucHV0QnV0dG9uUHJvcHM+KCh7IHRoZW1lIH0pID0+ICh7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLmxpZ2h0ZW5lZEJnMDUsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmZhZGVkVGV4dDEwfWAsXG4gICAgYm9yZGVyUmFkaXVzOiBgMCAwICR7dGhlbWUucmFkaWkubWR9ICR7dGhlbWUucmFkaWkubWR9YCxcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgIH0sXG4gICAgXCImOmFjdGl2ZVwiOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgICB9LFxuICAgIFwiJjpmb2N1czpub3QoOmFjdGl2ZSlcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgIH0sXG4gICAgXCImOmRpc2FibGVkLCAmOmRpc2FibGVkOmhvdmVyLCAmOmRpc2FibGVkOmFjdGl2ZVwiOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmZhZGVkVGV4dDQwLFxuICAgIH0sXG4gICAgZm9udFdlaWdodDogdGhlbWUuZm9udFdlaWdodHMubm9ybWFsLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcueHN9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgIG1hcmdpbjogMCxcbiAgICBsaW5lSGVpZ2h0OiB0aGVtZS5saW5lSGVpZ2h0cy5iYXNlLFxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgdXNlclNlbGVjdDogXCJub25lXCIsXG4gICAgXCImOmZvY3VzXCI6IHtcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDAuMnJlbSAke3RyYW5zcGFyZW50aXplKHRoZW1lLmNvbG9ycy5wcmltYXJ5LCAwLjUpfWAsXG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICB9LFxuICAgIC4uLmdldFNpemVTdHlsZShTaXplLk1FRElVTSwgdGhlbWUpLFxuICB9KSlcbiJdfQ== */");
const StyledBox = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "ejtjsn28",
  label: "StyledBox"
})(_ref => {
  let {
    theme,
    width
  } = _ref;
  return {
    backgroundColor: theme.colors.secondaryBg,
    borderRadius: `${theme.radii.md} ${theme.radii.md} 0 0`,
    width: "100%",
    height: width * 9 / 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9DYW1lcmFJbnB1dC9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RXlCIiwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9DYW1lcmFJbnB1dC9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMilcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHN0eWxlZCwgeyBDU1NPYmplY3QgfSBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcbmltcG9ydCB7IHRyYW5zcGFyZW50aXplIH0gZnJvbSBcImNvbG9yMmtcIlxuaW1wb3J0IHsgTW91c2VFdmVudCwgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcInNyYy90aGVtZVwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhSW5wdXRCdXR0b25Qcm9wcyB7XG4gIG9uQ2xpY2s/OiAoZXZlbnQ6IE1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiBhbnlcbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGVcbiAgcHJvZ3Jlc3M/OiBudW1iZXIgfCBudWxsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVkQ2FtZXJhSW5wdXRQcm9wcyB7XG4gIHdpZHRoOiBudW1iZXJcbn1cblxuZW51bSBTaXplIHtcbiAgWFNNQUxMID0gXCJ4c21hbGxcIixcbiAgU01BTEwgPSBcInNtYWxsXCIsXG4gIE1FRElVTSA9IFwibWVkaXVtXCIsXG4gIExBUkdFID0gXCJsYXJnZVwiLFxufVxuXG5mdW5jdGlvbiBnZXRTaXplU3R5bGUoc2l6ZTogU2l6ZSwgdGhlbWU6IFRoZW1lKTogQ1NTT2JqZWN0IHtcbiAgc3dpdGNoIChzaXplKSB7XG4gICAgY2FzZSBTaXplLlhTTUFMTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudHdvWFN9ICR7dGhlbWUuc3BhY2luZy5zbX1gLFxuICAgICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnNtLFxuICAgICAgfVxuICAgIGNhc2UgU2l6ZS5TTUFMTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudHdvWFN9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgICAgfVxuICAgIGNhc2UgU2l6ZS5MQVJHRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcubWR9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnhzfSAke3RoZW1lLnNwYWNpbmcubWR9YCxcbiAgICAgIH1cbiAgfVxufVxuXG50eXBlIFJlcXVpcmVkQ2FtZXJhSW5wdXRCdXR0b25Qcm9wcyA9IFJlcXVpcmVkPENhbWVyYUlucHV0QnV0dG9uUHJvcHM+XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRDYW1lcmFJbnB1dCA9IHN0eWxlZC5kaXY8U3R5bGVkQ2FtZXJhSW5wdXRQcm9wcz4oKCkgPT4gKHtcbiAgLy8gVGhpcyBpcyB1c2VkIHRvIHBvc2l0aW9uIHRoZSBcIlN3aXRjaCBmYWNpbmcgbW9kZVwiIGJ1dHRvblxuICAvLyB3aXRoIHJlc3BlY3QgdG8gdGhlIHdlYmNhbSBibG9jay5cbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgb2JqZWN0Rml0OiBcImNvbnRhaW5cIixcbn0pKVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlZEJveFByb3BzIHtcbiAgd2lkdGg6IG51bWJlclxufVxuXG5leHBvcnQgY29uc3QgU3R5bGVkQm94ID0gc3R5bGVkLmRpdjxTdHlsZWRCb3hQcm9wcz4oKHsgdGhlbWUsIHdpZHRoIH0pID0+ICh7XG4gIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnNlY29uZGFyeUJnLFxuICBib3JkZXJSYWRpdXM6IGAke3RoZW1lLnJhZGlpLm1kfSAke3RoZW1lLnJhZGlpLm1kfSAwIDBgLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIGhlaWdodDogKHdpZHRoICogOSkgLyAxNixcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWREZXNjcmlwdGlvbiA9IHN0eWxlZC5wKCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy5zbSxcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxufSkpXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVkSW1nUHJvcHMge1xuICBvcGFjaXR5OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IFN0eWxlZEltZyA9IHN0eWxlZC5pbWc8U3R5bGVkSW1nUHJvcHM+KCh7IHRoZW1lLCBvcGFjaXR5IH0pID0+ICh7XG4gIGJvcmRlclJhZGl1czogYCR7dGhlbWUucmFkaWkubWR9ICR7dGhlbWUucmFkaWkubWR9IDAgMGAsXG4gIG9iamVjdEZpdDogXCJjb250YWluXCIsXG4gIG9wYWNpdHksXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQuYSgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRTcGFuID0gc3R5bGVkLnNwYW4oKCkgPT4gKHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFN3aXRjaEZhY2luZ01vZGVCdXR0b24gPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIHRvcDogdGhlbWUuc3BhY2luZy5sZyxcbiAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcubGcsXG4gIHpJbmRleDogMSxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5mYWRlZFRleHQ0MCxcbiAgbWl4QmxlbmRNb2RlOiBcImRpZmZlcmVuY2VcIixcbiAgb3BhY2l0eTogMC42LFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRXZWJjYW1XcmFwcGVyID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkUHJvZ3Jlc3NCYXIgPSBzdHlsZWQuZGl2KCgpID0+ICh7XG4gIGhlaWdodDogXCJmaXQtY29udGVudFwiLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIGJvdHRvbTogMCxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkQ2FtZXJhSW5wdXRCYXNlQnV0dG9uID1cbiAgc3R5bGVkLmJ1dHRvbjxSZXF1aXJlZENhbWVyYUlucHV0QnV0dG9uUHJvcHM+KCh7IHRoZW1lIH0pID0+ICh7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLmxpZ2h0ZW5lZEJnMDUsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmZhZGVkVGV4dDEwfWAsXG4gICAgYm9yZGVyUmFkaXVzOiBgMCAwICR7dGhlbWUucmFkaWkubWR9ICR7dGhlbWUucmFkaWkubWR9YCxcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgIH0sXG4gICAgXCImOmFjdGl2ZVwiOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgICB9LFxuICAgIFwiJjpmb2N1czpub3QoOmFjdGl2ZSlcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgIH0sXG4gICAgXCImOmRpc2FibGVkLCAmOmRpc2FibGVkOmhvdmVyLCAmOmRpc2FibGVkOmFjdGl2ZVwiOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmZhZGVkVGV4dDQwLFxuICAgIH0sXG4gICAgZm9udFdlaWdodDogdGhlbWUuZm9udFdlaWdodHMubm9ybWFsLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcueHN9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgIG1hcmdpbjogMCxcbiAgICBsaW5lSGVpZ2h0OiB0aGVtZS5saW5lSGVpZ2h0cy5iYXNlLFxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgdXNlclNlbGVjdDogXCJub25lXCIsXG4gICAgXCImOmZvY3VzXCI6IHtcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDAuMnJlbSAke3RyYW5zcGFyZW50aXplKHRoZW1lLmNvbG9ycy5wcmltYXJ5LCAwLjUpfWAsXG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICB9LFxuICAgIC4uLmdldFNpemVTdHlsZShTaXplLk1FRElVTSwgdGhlbWUpLFxuICB9KSlcbiJdfQ== */");
const StyledDescription = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("p",  false ? 0 : {
  target: "ejtjsn27",
  label: "StyledDescription"
})(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    marginTop: theme.spacing.sm,
    textAlign: "center"
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9DYW1lcmFJbnB1dC9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RmlDIiwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9DYW1lcmFJbnB1dC9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMilcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHN0eWxlZCwgeyBDU1NPYmplY3QgfSBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcbmltcG9ydCB7IHRyYW5zcGFyZW50aXplIH0gZnJvbSBcImNvbG9yMmtcIlxuaW1wb3J0IHsgTW91c2VFdmVudCwgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcInNyYy90aGVtZVwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhSW5wdXRCdXR0b25Qcm9wcyB7XG4gIG9uQ2xpY2s/OiAoZXZlbnQ6IE1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiBhbnlcbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGVcbiAgcHJvZ3Jlc3M/OiBudW1iZXIgfCBudWxsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVkQ2FtZXJhSW5wdXRQcm9wcyB7XG4gIHdpZHRoOiBudW1iZXJcbn1cblxuZW51bSBTaXplIHtcbiAgWFNNQUxMID0gXCJ4c21hbGxcIixcbiAgU01BTEwgPSBcInNtYWxsXCIsXG4gIE1FRElVTSA9IFwibWVkaXVtXCIsXG4gIExBUkdFID0gXCJsYXJnZVwiLFxufVxuXG5mdW5jdGlvbiBnZXRTaXplU3R5bGUoc2l6ZTogU2l6ZSwgdGhlbWU6IFRoZW1lKTogQ1NTT2JqZWN0IHtcbiAgc3dpdGNoIChzaXplKSB7XG4gICAgY2FzZSBTaXplLlhTTUFMTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudHdvWFN9ICR7dGhlbWUuc3BhY2luZy5zbX1gLFxuICAgICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnNtLFxuICAgICAgfVxuICAgIGNhc2UgU2l6ZS5TTUFMTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudHdvWFN9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgICAgfVxuICAgIGNhc2UgU2l6ZS5MQVJHRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcubWR9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnhzfSAke3RoZW1lLnNwYWNpbmcubWR9YCxcbiAgICAgIH1cbiAgfVxufVxuXG50eXBlIFJlcXVpcmVkQ2FtZXJhSW5wdXRCdXR0b25Qcm9wcyA9IFJlcXVpcmVkPENhbWVyYUlucHV0QnV0dG9uUHJvcHM+XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRDYW1lcmFJbnB1dCA9IHN0eWxlZC5kaXY8U3R5bGVkQ2FtZXJhSW5wdXRQcm9wcz4oKCkgPT4gKHtcbiAgLy8gVGhpcyBpcyB1c2VkIHRvIHBvc2l0aW9uIHRoZSBcIlN3aXRjaCBmYWNpbmcgbW9kZVwiIGJ1dHRvblxuICAvLyB3aXRoIHJlc3BlY3QgdG8gdGhlIHdlYmNhbSBibG9jay5cbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgb2JqZWN0Rml0OiBcImNvbnRhaW5cIixcbn0pKVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlZEJveFByb3BzIHtcbiAgd2lkdGg6IG51bWJlclxufVxuXG5leHBvcnQgY29uc3QgU3R5bGVkQm94ID0gc3R5bGVkLmRpdjxTdHlsZWRCb3hQcm9wcz4oKHsgdGhlbWUsIHdpZHRoIH0pID0+ICh7XG4gIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnNlY29uZGFyeUJnLFxuICBib3JkZXJSYWRpdXM6IGAke3RoZW1lLnJhZGlpLm1kfSAke3RoZW1lLnJhZGlpLm1kfSAwIDBgLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIGhlaWdodDogKHdpZHRoICogOSkgLyAxNixcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWREZXNjcmlwdGlvbiA9IHN0eWxlZC5wKCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy5zbSxcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxufSkpXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVkSW1nUHJvcHMge1xuICBvcGFjaXR5OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IFN0eWxlZEltZyA9IHN0eWxlZC5pbWc8U3R5bGVkSW1nUHJvcHM+KCh7IHRoZW1lLCBvcGFjaXR5IH0pID0+ICh7XG4gIGJvcmRlclJhZGl1czogYCR7dGhlbWUucmFkaWkubWR9ICR7dGhlbWUucmFkaWkubWR9IDAgMGAsXG4gIG9iamVjdEZpdDogXCJjb250YWluXCIsXG4gIG9wYWNpdHksXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQuYSgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRTcGFuID0gc3R5bGVkLnNwYW4oKCkgPT4gKHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFN3aXRjaEZhY2luZ01vZGVCdXR0b24gPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIHRvcDogdGhlbWUuc3BhY2luZy5sZyxcbiAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcubGcsXG4gIHpJbmRleDogMSxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5mYWRlZFRleHQ0MCxcbiAgbWl4QmxlbmRNb2RlOiBcImRpZmZlcmVuY2VcIixcbiAgb3BhY2l0eTogMC42LFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRXZWJjYW1XcmFwcGVyID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkUHJvZ3Jlc3NCYXIgPSBzdHlsZWQuZGl2KCgpID0+ICh7XG4gIGhlaWdodDogXCJmaXQtY29udGVudFwiLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIGJvdHRvbTogMCxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkQ2FtZXJhSW5wdXRCYXNlQnV0dG9uID1cbiAgc3R5bGVkLmJ1dHRvbjxSZXF1aXJlZENhbWVyYUlucHV0QnV0dG9uUHJvcHM+KCh7IHRoZW1lIH0pID0+ICh7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLmxpZ2h0ZW5lZEJnMDUsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmZhZGVkVGV4dDEwfWAsXG4gICAgYm9yZGVyUmFkaXVzOiBgMCAwICR7dGhlbWUucmFkaWkubWR9ICR7dGhlbWUucmFkaWkubWR9YCxcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgIH0sXG4gICAgXCImOmFjdGl2ZVwiOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgICB9LFxuICAgIFwiJjpmb2N1czpub3QoOmFjdGl2ZSlcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgIH0sXG4gICAgXCImOmRpc2FibGVkLCAmOmRpc2FibGVkOmhvdmVyLCAmOmRpc2FibGVkOmFjdGl2ZVwiOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmZhZGVkVGV4dDQwLFxuICAgIH0sXG4gICAgZm9udFdlaWdodDogdGhlbWUuZm9udFdlaWdodHMubm9ybWFsLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcueHN9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgIG1hcmdpbjogMCxcbiAgICBsaW5lSGVpZ2h0OiB0aGVtZS5saW5lSGVpZ2h0cy5iYXNlLFxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgdXNlclNlbGVjdDogXCJub25lXCIsXG4gICAgXCImOmZvY3VzXCI6IHtcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDAuMnJlbSAke3RyYW5zcGFyZW50aXplKHRoZW1lLmNvbG9ycy5wcmltYXJ5LCAwLjUpfWAsXG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICB9LFxuICAgIC4uLmdldFNpemVTdHlsZShTaXplLk1FRElVTSwgdGhlbWUpLFxuICB9KSlcbiJdfQ== */");
const StyledImg = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("img",  false ? 0 : {
  target: "ejtjsn26",
  label: "StyledImg"
})(_ref3 => {
  let {
    theme,
    opacity
  } = _ref3;
  return {
    borderRadius: `${theme.radii.md} ${theme.radii.md} 0 0`,
    objectFit: "contain",
    opacity
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9DYW1lcmFJbnB1dC9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnR3lCIiwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9DYW1lcmFJbnB1dC9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMilcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHN0eWxlZCwgeyBDU1NPYmplY3QgfSBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcbmltcG9ydCB7IHRyYW5zcGFyZW50aXplIH0gZnJvbSBcImNvbG9yMmtcIlxuaW1wb3J0IHsgTW91c2VFdmVudCwgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcInNyYy90aGVtZVwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhSW5wdXRCdXR0b25Qcm9wcyB7XG4gIG9uQ2xpY2s/OiAoZXZlbnQ6IE1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiBhbnlcbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGVcbiAgcHJvZ3Jlc3M/OiBudW1iZXIgfCBudWxsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVkQ2FtZXJhSW5wdXRQcm9wcyB7XG4gIHdpZHRoOiBudW1iZXJcbn1cblxuZW51bSBTaXplIHtcbiAgWFNNQUxMID0gXCJ4c21hbGxcIixcbiAgU01BTEwgPSBcInNtYWxsXCIsXG4gIE1FRElVTSA9IFwibWVkaXVtXCIsXG4gIExBUkdFID0gXCJsYXJnZVwiLFxufVxuXG5mdW5jdGlvbiBnZXRTaXplU3R5bGUoc2l6ZTogU2l6ZSwgdGhlbWU6IFRoZW1lKTogQ1NTT2JqZWN0IHtcbiAgc3dpdGNoIChzaXplKSB7XG4gICAgY2FzZSBTaXplLlhTTUFMTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudHdvWFN9ICR7dGhlbWUuc3BhY2luZy5zbX1gLFxuICAgICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnNtLFxuICAgICAgfVxuICAgIGNhc2UgU2l6ZS5TTUFMTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudHdvWFN9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgICAgfVxuICAgIGNhc2UgU2l6ZS5MQVJHRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcubWR9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnhzfSAke3RoZW1lLnNwYWNpbmcubWR9YCxcbiAgICAgIH1cbiAgfVxufVxuXG50eXBlIFJlcXVpcmVkQ2FtZXJhSW5wdXRCdXR0b25Qcm9wcyA9IFJlcXVpcmVkPENhbWVyYUlucHV0QnV0dG9uUHJvcHM+XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRDYW1lcmFJbnB1dCA9IHN0eWxlZC5kaXY8U3R5bGVkQ2FtZXJhSW5wdXRQcm9wcz4oKCkgPT4gKHtcbiAgLy8gVGhpcyBpcyB1c2VkIHRvIHBvc2l0aW9uIHRoZSBcIlN3aXRjaCBmYWNpbmcgbW9kZVwiIGJ1dHRvblxuICAvLyB3aXRoIHJlc3BlY3QgdG8gdGhlIHdlYmNhbSBibG9jay5cbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgb2JqZWN0Rml0OiBcImNvbnRhaW5cIixcbn0pKVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlZEJveFByb3BzIHtcbiAgd2lkdGg6IG51bWJlclxufVxuXG5leHBvcnQgY29uc3QgU3R5bGVkQm94ID0gc3R5bGVkLmRpdjxTdHlsZWRCb3hQcm9wcz4oKHsgdGhlbWUsIHdpZHRoIH0pID0+ICh7XG4gIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnNlY29uZGFyeUJnLFxuICBib3JkZXJSYWRpdXM6IGAke3RoZW1lLnJhZGlpLm1kfSAke3RoZW1lLnJhZGlpLm1kfSAwIDBgLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIGhlaWdodDogKHdpZHRoICogOSkgLyAxNixcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWREZXNjcmlwdGlvbiA9IHN0eWxlZC5wKCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy5zbSxcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxufSkpXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVkSW1nUHJvcHMge1xuICBvcGFjaXR5OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IFN0eWxlZEltZyA9IHN0eWxlZC5pbWc8U3R5bGVkSW1nUHJvcHM+KCh7IHRoZW1lLCBvcGFjaXR5IH0pID0+ICh7XG4gIGJvcmRlclJhZGl1czogYCR7dGhlbWUucmFkaWkubWR9ICR7dGhlbWUucmFkaWkubWR9IDAgMGAsXG4gIG9iamVjdEZpdDogXCJjb250YWluXCIsXG4gIG9wYWNpdHksXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQuYSgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRTcGFuID0gc3R5bGVkLnNwYW4oKCkgPT4gKHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFN3aXRjaEZhY2luZ01vZGVCdXR0b24gPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIHRvcDogdGhlbWUuc3BhY2luZy5sZyxcbiAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcubGcsXG4gIHpJbmRleDogMSxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5mYWRlZFRleHQ0MCxcbiAgbWl4QmxlbmRNb2RlOiBcImRpZmZlcmVuY2VcIixcbiAgb3BhY2l0eTogMC42LFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRXZWJjYW1XcmFwcGVyID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkUHJvZ3Jlc3NCYXIgPSBzdHlsZWQuZGl2KCgpID0+ICh7XG4gIGhlaWdodDogXCJmaXQtY29udGVudFwiLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIGJvdHRvbTogMCxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkQ2FtZXJhSW5wdXRCYXNlQnV0dG9uID1cbiAgc3R5bGVkLmJ1dHRvbjxSZXF1aXJlZENhbWVyYUlucHV0QnV0dG9uUHJvcHM+KCh7IHRoZW1lIH0pID0+ICh7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLmxpZ2h0ZW5lZEJnMDUsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmZhZGVkVGV4dDEwfWAsXG4gICAgYm9yZGVyUmFkaXVzOiBgMCAwICR7dGhlbWUucmFkaWkubWR9ICR7dGhlbWUucmFkaWkubWR9YCxcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgIH0sXG4gICAgXCImOmFjdGl2ZVwiOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgICB9LFxuICAgIFwiJjpmb2N1czpub3QoOmFjdGl2ZSlcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgIH0sXG4gICAgXCImOmRpc2FibGVkLCAmOmRpc2FibGVkOmhvdmVyLCAmOmRpc2FibGVkOmFjdGl2ZVwiOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmZhZGVkVGV4dDQwLFxuICAgIH0sXG4gICAgZm9udFdlaWdodDogdGhlbWUuZm9udFdlaWdodHMubm9ybWFsLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcueHN9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgIG1hcmdpbjogMCxcbiAgICBsaW5lSGVpZ2h0OiB0aGVtZS5saW5lSGVpZ2h0cy5iYXNlLFxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgdXNlclNlbGVjdDogXCJub25lXCIsXG4gICAgXCImOmZvY3VzXCI6IHtcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDAuMnJlbSAke3RyYW5zcGFyZW50aXplKHRoZW1lLmNvbG9ycy5wcmltYXJ5LCAwLjUpfWAsXG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICB9LFxuICAgIC4uLmdldFNpemVTdHlsZShTaXplLk1FRElVTSwgdGhlbWUpLFxuICB9KSlcbiJdfQ== */");
const StyledLink = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("a",  false ? 0 : {
  target: "ejtjsn25",
  label: "StyledLink"
})(_ref4 => {
  let {
    theme
  } = _ref4;
  return {
    color: theme.colors.primary,
    display: "block",
    textDecoration: "none"
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9DYW1lcmFJbnB1dC9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRzBCIiwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9DYW1lcmFJbnB1dC9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMilcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHN0eWxlZCwgeyBDU1NPYmplY3QgfSBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcbmltcG9ydCB7IHRyYW5zcGFyZW50aXplIH0gZnJvbSBcImNvbG9yMmtcIlxuaW1wb3J0IHsgTW91c2VFdmVudCwgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcInNyYy90aGVtZVwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhSW5wdXRCdXR0b25Qcm9wcyB7XG4gIG9uQ2xpY2s/OiAoZXZlbnQ6IE1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiBhbnlcbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGVcbiAgcHJvZ3Jlc3M/OiBudW1iZXIgfCBudWxsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVkQ2FtZXJhSW5wdXRQcm9wcyB7XG4gIHdpZHRoOiBudW1iZXJcbn1cblxuZW51bSBTaXplIHtcbiAgWFNNQUxMID0gXCJ4c21hbGxcIixcbiAgU01BTEwgPSBcInNtYWxsXCIsXG4gIE1FRElVTSA9IFwibWVkaXVtXCIsXG4gIExBUkdFID0gXCJsYXJnZVwiLFxufVxuXG5mdW5jdGlvbiBnZXRTaXplU3R5bGUoc2l6ZTogU2l6ZSwgdGhlbWU6IFRoZW1lKTogQ1NTT2JqZWN0IHtcbiAgc3dpdGNoIChzaXplKSB7XG4gICAgY2FzZSBTaXplLlhTTUFMTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudHdvWFN9ICR7dGhlbWUuc3BhY2luZy5zbX1gLFxuICAgICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnNtLFxuICAgICAgfVxuICAgIGNhc2UgU2l6ZS5TTUFMTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudHdvWFN9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgICAgfVxuICAgIGNhc2UgU2l6ZS5MQVJHRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcubWR9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnhzfSAke3RoZW1lLnNwYWNpbmcubWR9YCxcbiAgICAgIH1cbiAgfVxufVxuXG50eXBlIFJlcXVpcmVkQ2FtZXJhSW5wdXRCdXR0b25Qcm9wcyA9IFJlcXVpcmVkPENhbWVyYUlucHV0QnV0dG9uUHJvcHM+XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRDYW1lcmFJbnB1dCA9IHN0eWxlZC5kaXY8U3R5bGVkQ2FtZXJhSW5wdXRQcm9wcz4oKCkgPT4gKHtcbiAgLy8gVGhpcyBpcyB1c2VkIHRvIHBvc2l0aW9uIHRoZSBcIlN3aXRjaCBmYWNpbmcgbW9kZVwiIGJ1dHRvblxuICAvLyB3aXRoIHJlc3BlY3QgdG8gdGhlIHdlYmNhbSBibG9jay5cbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgb2JqZWN0Rml0OiBcImNvbnRhaW5cIixcbn0pKVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlZEJveFByb3BzIHtcbiAgd2lkdGg6IG51bWJlclxufVxuXG5leHBvcnQgY29uc3QgU3R5bGVkQm94ID0gc3R5bGVkLmRpdjxTdHlsZWRCb3hQcm9wcz4oKHsgdGhlbWUsIHdpZHRoIH0pID0+ICh7XG4gIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnNlY29uZGFyeUJnLFxuICBib3JkZXJSYWRpdXM6IGAke3RoZW1lLnJhZGlpLm1kfSAke3RoZW1lLnJhZGlpLm1kfSAwIDBgLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIGhlaWdodDogKHdpZHRoICogOSkgLyAxNixcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWREZXNjcmlwdGlvbiA9IHN0eWxlZC5wKCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy5zbSxcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxufSkpXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVkSW1nUHJvcHMge1xuICBvcGFjaXR5OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IFN0eWxlZEltZyA9IHN0eWxlZC5pbWc8U3R5bGVkSW1nUHJvcHM+KCh7IHRoZW1lLCBvcGFjaXR5IH0pID0+ICh7XG4gIGJvcmRlclJhZGl1czogYCR7dGhlbWUucmFkaWkubWR9ICR7dGhlbWUucmFkaWkubWR9IDAgMGAsXG4gIG9iamVjdEZpdDogXCJjb250YWluXCIsXG4gIG9wYWNpdHksXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQuYSgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRTcGFuID0gc3R5bGVkLnNwYW4oKCkgPT4gKHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFN3aXRjaEZhY2luZ01vZGVCdXR0b24gPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIHRvcDogdGhlbWUuc3BhY2luZy5sZyxcbiAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcubGcsXG4gIHpJbmRleDogMSxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5mYWRlZFRleHQ0MCxcbiAgbWl4QmxlbmRNb2RlOiBcImRpZmZlcmVuY2VcIixcbiAgb3BhY2l0eTogMC42LFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRXZWJjYW1XcmFwcGVyID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkUHJvZ3Jlc3NCYXIgPSBzdHlsZWQuZGl2KCgpID0+ICh7XG4gIGhlaWdodDogXCJmaXQtY29udGVudFwiLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIGJvdHRvbTogMCxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkQ2FtZXJhSW5wdXRCYXNlQnV0dG9uID1cbiAgc3R5bGVkLmJ1dHRvbjxSZXF1aXJlZENhbWVyYUlucHV0QnV0dG9uUHJvcHM+KCh7IHRoZW1lIH0pID0+ICh7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLmxpZ2h0ZW5lZEJnMDUsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmZhZGVkVGV4dDEwfWAsXG4gICAgYm9yZGVyUmFkaXVzOiBgMCAwICR7dGhlbWUucmFkaWkubWR9ICR7dGhlbWUucmFkaWkubWR9YCxcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgIH0sXG4gICAgXCImOmFjdGl2ZVwiOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgICB9LFxuICAgIFwiJjpmb2N1czpub3QoOmFjdGl2ZSlcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgIH0sXG4gICAgXCImOmRpc2FibGVkLCAmOmRpc2FibGVkOmhvdmVyLCAmOmRpc2FibGVkOmFjdGl2ZVwiOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmZhZGVkVGV4dDQwLFxuICAgIH0sXG4gICAgZm9udFdlaWdodDogdGhlbWUuZm9udFdlaWdodHMubm9ybWFsLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcueHN9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgIG1hcmdpbjogMCxcbiAgICBsaW5lSGVpZ2h0OiB0aGVtZS5saW5lSGVpZ2h0cy5iYXNlLFxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgdXNlclNlbGVjdDogXCJub25lXCIsXG4gICAgXCImOmZvY3VzXCI6IHtcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDAuMnJlbSAke3RyYW5zcGFyZW50aXplKHRoZW1lLmNvbG9ycy5wcmltYXJ5LCAwLjUpfWAsXG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICB9LFxuICAgIC4uLmdldFNpemVTdHlsZShTaXplLk1FRElVTSwgdGhlbWUpLFxuICB9KSlcbiJdfQ== */");
const StyledSpan = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span",  false ? 0 : {
  target: "ejtjsn24",
  label: "StyledSpan"
})(() => ({
  display: "flex",
  alignItems: "center"
}),  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9DYW1lcmFJbnB1dC9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RzBCIiwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9DYW1lcmFJbnB1dC9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMilcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHN0eWxlZCwgeyBDU1NPYmplY3QgfSBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcbmltcG9ydCB7IHRyYW5zcGFyZW50aXplIH0gZnJvbSBcImNvbG9yMmtcIlxuaW1wb3J0IHsgTW91c2VFdmVudCwgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcInNyYy90aGVtZVwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhSW5wdXRCdXR0b25Qcm9wcyB7XG4gIG9uQ2xpY2s/OiAoZXZlbnQ6IE1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiBhbnlcbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGVcbiAgcHJvZ3Jlc3M/OiBudW1iZXIgfCBudWxsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVkQ2FtZXJhSW5wdXRQcm9wcyB7XG4gIHdpZHRoOiBudW1iZXJcbn1cblxuZW51bSBTaXplIHtcbiAgWFNNQUxMID0gXCJ4c21hbGxcIixcbiAgU01BTEwgPSBcInNtYWxsXCIsXG4gIE1FRElVTSA9IFwibWVkaXVtXCIsXG4gIExBUkdFID0gXCJsYXJnZVwiLFxufVxuXG5mdW5jdGlvbiBnZXRTaXplU3R5bGUoc2l6ZTogU2l6ZSwgdGhlbWU6IFRoZW1lKTogQ1NTT2JqZWN0IHtcbiAgc3dpdGNoIChzaXplKSB7XG4gICAgY2FzZSBTaXplLlhTTUFMTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudHdvWFN9ICR7dGhlbWUuc3BhY2luZy5zbX1gLFxuICAgICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnNtLFxuICAgICAgfVxuICAgIGNhc2UgU2l6ZS5TTUFMTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudHdvWFN9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgICAgfVxuICAgIGNhc2UgU2l6ZS5MQVJHRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcubWR9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnhzfSAke3RoZW1lLnNwYWNpbmcubWR9YCxcbiAgICAgIH1cbiAgfVxufVxuXG50eXBlIFJlcXVpcmVkQ2FtZXJhSW5wdXRCdXR0b25Qcm9wcyA9IFJlcXVpcmVkPENhbWVyYUlucHV0QnV0dG9uUHJvcHM+XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRDYW1lcmFJbnB1dCA9IHN0eWxlZC5kaXY8U3R5bGVkQ2FtZXJhSW5wdXRQcm9wcz4oKCkgPT4gKHtcbiAgLy8gVGhpcyBpcyB1c2VkIHRvIHBvc2l0aW9uIHRoZSBcIlN3aXRjaCBmYWNpbmcgbW9kZVwiIGJ1dHRvblxuICAvLyB3aXRoIHJlc3BlY3QgdG8gdGhlIHdlYmNhbSBibG9jay5cbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgb2JqZWN0Rml0OiBcImNvbnRhaW5cIixcbn0pKVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlZEJveFByb3BzIHtcbiAgd2lkdGg6IG51bWJlclxufVxuXG5leHBvcnQgY29uc3QgU3R5bGVkQm94ID0gc3R5bGVkLmRpdjxTdHlsZWRCb3hQcm9wcz4oKHsgdGhlbWUsIHdpZHRoIH0pID0+ICh7XG4gIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnNlY29uZGFyeUJnLFxuICBib3JkZXJSYWRpdXM6IGAke3RoZW1lLnJhZGlpLm1kfSAke3RoZW1lLnJhZGlpLm1kfSAwIDBgLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIGhlaWdodDogKHdpZHRoICogOSkgLyAxNixcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWREZXNjcmlwdGlvbiA9IHN0eWxlZC5wKCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy5zbSxcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxufSkpXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVkSW1nUHJvcHMge1xuICBvcGFjaXR5OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IFN0eWxlZEltZyA9IHN0eWxlZC5pbWc8U3R5bGVkSW1nUHJvcHM+KCh7IHRoZW1lLCBvcGFjaXR5IH0pID0+ICh7XG4gIGJvcmRlclJhZGl1czogYCR7dGhlbWUucmFkaWkubWR9ICR7dGhlbWUucmFkaWkubWR9IDAgMGAsXG4gIG9iamVjdEZpdDogXCJjb250YWluXCIsXG4gIG9wYWNpdHksXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQuYSgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRTcGFuID0gc3R5bGVkLnNwYW4oKCkgPT4gKHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFN3aXRjaEZhY2luZ01vZGVCdXR0b24gPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIHRvcDogdGhlbWUuc3BhY2luZy5sZyxcbiAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcubGcsXG4gIHpJbmRleDogMSxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5mYWRlZFRleHQ0MCxcbiAgbWl4QmxlbmRNb2RlOiBcImRpZmZlcmVuY2VcIixcbiAgb3BhY2l0eTogMC42LFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRXZWJjYW1XcmFwcGVyID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkUHJvZ3Jlc3NCYXIgPSBzdHlsZWQuZGl2KCgpID0+ICh7XG4gIGhlaWdodDogXCJmaXQtY29udGVudFwiLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIGJvdHRvbTogMCxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkQ2FtZXJhSW5wdXRCYXNlQnV0dG9uID1cbiAgc3R5bGVkLmJ1dHRvbjxSZXF1aXJlZENhbWVyYUlucHV0QnV0dG9uUHJvcHM+KCh7IHRoZW1lIH0pID0+ICh7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLmxpZ2h0ZW5lZEJnMDUsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmZhZGVkVGV4dDEwfWAsXG4gICAgYm9yZGVyUmFkaXVzOiBgMCAwICR7dGhlbWUucmFkaWkubWR9ICR7dGhlbWUucmFkaWkubWR9YCxcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgIH0sXG4gICAgXCImOmFjdGl2ZVwiOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgICB9LFxuICAgIFwiJjpmb2N1czpub3QoOmFjdGl2ZSlcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgIH0sXG4gICAgXCImOmRpc2FibGVkLCAmOmRpc2FibGVkOmhvdmVyLCAmOmRpc2FibGVkOmFjdGl2ZVwiOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmZhZGVkVGV4dDQwLFxuICAgIH0sXG4gICAgZm9udFdlaWdodDogdGhlbWUuZm9udFdlaWdodHMubm9ybWFsLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcueHN9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgIG1hcmdpbjogMCxcbiAgICBsaW5lSGVpZ2h0OiB0aGVtZS5saW5lSGVpZ2h0cy5iYXNlLFxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgdXNlclNlbGVjdDogXCJub25lXCIsXG4gICAgXCImOmZvY3VzXCI6IHtcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDAuMnJlbSAke3RyYW5zcGFyZW50aXplKHRoZW1lLmNvbG9ycy5wcmltYXJ5LCAwLjUpfWAsXG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICB9LFxuICAgIC4uLmdldFNpemVTdHlsZShTaXplLk1FRElVTSwgdGhlbWUpLFxuICB9KSlcbiJdfQ== */");
const StyledSwitchFacingModeButton = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "ejtjsn23",
  label: "StyledSwitchFacingModeButton"
})(_ref5 => {
  let {
    theme
  } = _ref5;
  return {
    position: "absolute",
    top: theme.spacing.lg,
    right: theme.spacing.lg,
    zIndex: 1,
    color: theme.colors.fadedText40,
    mixBlendMode: "difference",
    opacity: 0.6
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9DYW1lcmFJbnB1dC9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSDRDIiwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9DYW1lcmFJbnB1dC9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMilcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHN0eWxlZCwgeyBDU1NPYmplY3QgfSBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcbmltcG9ydCB7IHRyYW5zcGFyZW50aXplIH0gZnJvbSBcImNvbG9yMmtcIlxuaW1wb3J0IHsgTW91c2VFdmVudCwgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcInNyYy90aGVtZVwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhSW5wdXRCdXR0b25Qcm9wcyB7XG4gIG9uQ2xpY2s/OiAoZXZlbnQ6IE1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiBhbnlcbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGVcbiAgcHJvZ3Jlc3M/OiBudW1iZXIgfCBudWxsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVkQ2FtZXJhSW5wdXRQcm9wcyB7XG4gIHdpZHRoOiBudW1iZXJcbn1cblxuZW51bSBTaXplIHtcbiAgWFNNQUxMID0gXCJ4c21hbGxcIixcbiAgU01BTEwgPSBcInNtYWxsXCIsXG4gIE1FRElVTSA9IFwibWVkaXVtXCIsXG4gIExBUkdFID0gXCJsYXJnZVwiLFxufVxuXG5mdW5jdGlvbiBnZXRTaXplU3R5bGUoc2l6ZTogU2l6ZSwgdGhlbWU6IFRoZW1lKTogQ1NTT2JqZWN0IHtcbiAgc3dpdGNoIChzaXplKSB7XG4gICAgY2FzZSBTaXplLlhTTUFMTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudHdvWFN9ICR7dGhlbWUuc3BhY2luZy5zbX1gLFxuICAgICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnNtLFxuICAgICAgfVxuICAgIGNhc2UgU2l6ZS5TTUFMTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudHdvWFN9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgICAgfVxuICAgIGNhc2UgU2l6ZS5MQVJHRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcubWR9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnhzfSAke3RoZW1lLnNwYWNpbmcubWR9YCxcbiAgICAgIH1cbiAgfVxufVxuXG50eXBlIFJlcXVpcmVkQ2FtZXJhSW5wdXRCdXR0b25Qcm9wcyA9IFJlcXVpcmVkPENhbWVyYUlucHV0QnV0dG9uUHJvcHM+XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRDYW1lcmFJbnB1dCA9IHN0eWxlZC5kaXY8U3R5bGVkQ2FtZXJhSW5wdXRQcm9wcz4oKCkgPT4gKHtcbiAgLy8gVGhpcyBpcyB1c2VkIHRvIHBvc2l0aW9uIHRoZSBcIlN3aXRjaCBmYWNpbmcgbW9kZVwiIGJ1dHRvblxuICAvLyB3aXRoIHJlc3BlY3QgdG8gdGhlIHdlYmNhbSBibG9jay5cbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgb2JqZWN0Rml0OiBcImNvbnRhaW5cIixcbn0pKVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlZEJveFByb3BzIHtcbiAgd2lkdGg6IG51bWJlclxufVxuXG5leHBvcnQgY29uc3QgU3R5bGVkQm94ID0gc3R5bGVkLmRpdjxTdHlsZWRCb3hQcm9wcz4oKHsgdGhlbWUsIHdpZHRoIH0pID0+ICh7XG4gIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnNlY29uZGFyeUJnLFxuICBib3JkZXJSYWRpdXM6IGAke3RoZW1lLnJhZGlpLm1kfSAke3RoZW1lLnJhZGlpLm1kfSAwIDBgLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIGhlaWdodDogKHdpZHRoICogOSkgLyAxNixcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWREZXNjcmlwdGlvbiA9IHN0eWxlZC5wKCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy5zbSxcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxufSkpXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVkSW1nUHJvcHMge1xuICBvcGFjaXR5OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IFN0eWxlZEltZyA9IHN0eWxlZC5pbWc8U3R5bGVkSW1nUHJvcHM+KCh7IHRoZW1lLCBvcGFjaXR5IH0pID0+ICh7XG4gIGJvcmRlclJhZGl1czogYCR7dGhlbWUucmFkaWkubWR9ICR7dGhlbWUucmFkaWkubWR9IDAgMGAsXG4gIG9iamVjdEZpdDogXCJjb250YWluXCIsXG4gIG9wYWNpdHksXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQuYSgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRTcGFuID0gc3R5bGVkLnNwYW4oKCkgPT4gKHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFN3aXRjaEZhY2luZ01vZGVCdXR0b24gPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIHRvcDogdGhlbWUuc3BhY2luZy5sZyxcbiAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcubGcsXG4gIHpJbmRleDogMSxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5mYWRlZFRleHQ0MCxcbiAgbWl4QmxlbmRNb2RlOiBcImRpZmZlcmVuY2VcIixcbiAgb3BhY2l0eTogMC42LFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRXZWJjYW1XcmFwcGVyID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkUHJvZ3Jlc3NCYXIgPSBzdHlsZWQuZGl2KCgpID0+ICh7XG4gIGhlaWdodDogXCJmaXQtY29udGVudFwiLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIGJvdHRvbTogMCxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkQ2FtZXJhSW5wdXRCYXNlQnV0dG9uID1cbiAgc3R5bGVkLmJ1dHRvbjxSZXF1aXJlZENhbWVyYUlucHV0QnV0dG9uUHJvcHM+KCh7IHRoZW1lIH0pID0+ICh7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLmxpZ2h0ZW5lZEJnMDUsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmZhZGVkVGV4dDEwfWAsXG4gICAgYm9yZGVyUmFkaXVzOiBgMCAwICR7dGhlbWUucmFkaWkubWR9ICR7dGhlbWUucmFkaWkubWR9YCxcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgIH0sXG4gICAgXCImOmFjdGl2ZVwiOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgICB9LFxuICAgIFwiJjpmb2N1czpub3QoOmFjdGl2ZSlcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgIH0sXG4gICAgXCImOmRpc2FibGVkLCAmOmRpc2FibGVkOmhvdmVyLCAmOmRpc2FibGVkOmFjdGl2ZVwiOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmZhZGVkVGV4dDQwLFxuICAgIH0sXG4gICAgZm9udFdlaWdodDogdGhlbWUuZm9udFdlaWdodHMubm9ybWFsLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcueHN9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgIG1hcmdpbjogMCxcbiAgICBsaW5lSGVpZ2h0OiB0aGVtZS5saW5lSGVpZ2h0cy5iYXNlLFxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgdXNlclNlbGVjdDogXCJub25lXCIsXG4gICAgXCImOmZvY3VzXCI6IHtcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDAuMnJlbSAke3RyYW5zcGFyZW50aXplKHRoZW1lLmNvbG9ycy5wcmltYXJ5LCAwLjUpfWAsXG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICB9LFxuICAgIC4uLmdldFNpemVTdHlsZShTaXplLk1FRElVTSwgdGhlbWUpLFxuICB9KSlcbiJdfQ== */");
const StyledWebcamWrapper = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "ejtjsn22",
  label: "StyledWebcamWrapper"
})(() => ({
  display: "flex"
}),  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9DYW1lcmFJbnB1dC9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEySG1DIiwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9DYW1lcmFJbnB1dC9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMilcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHN0eWxlZCwgeyBDU1NPYmplY3QgfSBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcbmltcG9ydCB7IHRyYW5zcGFyZW50aXplIH0gZnJvbSBcImNvbG9yMmtcIlxuaW1wb3J0IHsgTW91c2VFdmVudCwgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcInNyYy90aGVtZVwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhSW5wdXRCdXR0b25Qcm9wcyB7XG4gIG9uQ2xpY2s/OiAoZXZlbnQ6IE1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiBhbnlcbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGVcbiAgcHJvZ3Jlc3M/OiBudW1iZXIgfCBudWxsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVkQ2FtZXJhSW5wdXRQcm9wcyB7XG4gIHdpZHRoOiBudW1iZXJcbn1cblxuZW51bSBTaXplIHtcbiAgWFNNQUxMID0gXCJ4c21hbGxcIixcbiAgU01BTEwgPSBcInNtYWxsXCIsXG4gIE1FRElVTSA9IFwibWVkaXVtXCIsXG4gIExBUkdFID0gXCJsYXJnZVwiLFxufVxuXG5mdW5jdGlvbiBnZXRTaXplU3R5bGUoc2l6ZTogU2l6ZSwgdGhlbWU6IFRoZW1lKTogQ1NTT2JqZWN0IHtcbiAgc3dpdGNoIChzaXplKSB7XG4gICAgY2FzZSBTaXplLlhTTUFMTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudHdvWFN9ICR7dGhlbWUuc3BhY2luZy5zbX1gLFxuICAgICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnNtLFxuICAgICAgfVxuICAgIGNhc2UgU2l6ZS5TTUFMTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudHdvWFN9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgICAgfVxuICAgIGNhc2UgU2l6ZS5MQVJHRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcubWR9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnhzfSAke3RoZW1lLnNwYWNpbmcubWR9YCxcbiAgICAgIH1cbiAgfVxufVxuXG50eXBlIFJlcXVpcmVkQ2FtZXJhSW5wdXRCdXR0b25Qcm9wcyA9IFJlcXVpcmVkPENhbWVyYUlucHV0QnV0dG9uUHJvcHM+XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRDYW1lcmFJbnB1dCA9IHN0eWxlZC5kaXY8U3R5bGVkQ2FtZXJhSW5wdXRQcm9wcz4oKCkgPT4gKHtcbiAgLy8gVGhpcyBpcyB1c2VkIHRvIHBvc2l0aW9uIHRoZSBcIlN3aXRjaCBmYWNpbmcgbW9kZVwiIGJ1dHRvblxuICAvLyB3aXRoIHJlc3BlY3QgdG8gdGhlIHdlYmNhbSBibG9jay5cbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgb2JqZWN0Rml0OiBcImNvbnRhaW5cIixcbn0pKVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlZEJveFByb3BzIHtcbiAgd2lkdGg6IG51bWJlclxufVxuXG5leHBvcnQgY29uc3QgU3R5bGVkQm94ID0gc3R5bGVkLmRpdjxTdHlsZWRCb3hQcm9wcz4oKHsgdGhlbWUsIHdpZHRoIH0pID0+ICh7XG4gIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnNlY29uZGFyeUJnLFxuICBib3JkZXJSYWRpdXM6IGAke3RoZW1lLnJhZGlpLm1kfSAke3RoZW1lLnJhZGlpLm1kfSAwIDBgLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIGhlaWdodDogKHdpZHRoICogOSkgLyAxNixcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWREZXNjcmlwdGlvbiA9IHN0eWxlZC5wKCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy5zbSxcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxufSkpXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVkSW1nUHJvcHMge1xuICBvcGFjaXR5OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IFN0eWxlZEltZyA9IHN0eWxlZC5pbWc8U3R5bGVkSW1nUHJvcHM+KCh7IHRoZW1lLCBvcGFjaXR5IH0pID0+ICh7XG4gIGJvcmRlclJhZGl1czogYCR7dGhlbWUucmFkaWkubWR9ICR7dGhlbWUucmFkaWkubWR9IDAgMGAsXG4gIG9iamVjdEZpdDogXCJjb250YWluXCIsXG4gIG9wYWNpdHksXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQuYSgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRTcGFuID0gc3R5bGVkLnNwYW4oKCkgPT4gKHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFN3aXRjaEZhY2luZ01vZGVCdXR0b24gPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIHRvcDogdGhlbWUuc3BhY2luZy5sZyxcbiAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcubGcsXG4gIHpJbmRleDogMSxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5mYWRlZFRleHQ0MCxcbiAgbWl4QmxlbmRNb2RlOiBcImRpZmZlcmVuY2VcIixcbiAgb3BhY2l0eTogMC42LFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRXZWJjYW1XcmFwcGVyID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkUHJvZ3Jlc3NCYXIgPSBzdHlsZWQuZGl2KCgpID0+ICh7XG4gIGhlaWdodDogXCJmaXQtY29udGVudFwiLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIGJvdHRvbTogMCxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkQ2FtZXJhSW5wdXRCYXNlQnV0dG9uID1cbiAgc3R5bGVkLmJ1dHRvbjxSZXF1aXJlZENhbWVyYUlucHV0QnV0dG9uUHJvcHM+KCh7IHRoZW1lIH0pID0+ICh7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLmxpZ2h0ZW5lZEJnMDUsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmZhZGVkVGV4dDEwfWAsXG4gICAgYm9yZGVyUmFkaXVzOiBgMCAwICR7dGhlbWUucmFkaWkubWR9ICR7dGhlbWUucmFkaWkubWR9YCxcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgIH0sXG4gICAgXCImOmFjdGl2ZVwiOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgICB9LFxuICAgIFwiJjpmb2N1czpub3QoOmFjdGl2ZSlcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgIH0sXG4gICAgXCImOmRpc2FibGVkLCAmOmRpc2FibGVkOmhvdmVyLCAmOmRpc2FibGVkOmFjdGl2ZVwiOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmZhZGVkVGV4dDQwLFxuICAgIH0sXG4gICAgZm9udFdlaWdodDogdGhlbWUuZm9udFdlaWdodHMubm9ybWFsLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcueHN9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgIG1hcmdpbjogMCxcbiAgICBsaW5lSGVpZ2h0OiB0aGVtZS5saW5lSGVpZ2h0cy5iYXNlLFxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgdXNlclNlbGVjdDogXCJub25lXCIsXG4gICAgXCImOmZvY3VzXCI6IHtcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDAuMnJlbSAke3RyYW5zcGFyZW50aXplKHRoZW1lLmNvbG9ycy5wcmltYXJ5LCAwLjUpfWAsXG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICB9LFxuICAgIC4uLmdldFNpemVTdHlsZShTaXplLk1FRElVTSwgdGhlbWUpLFxuICB9KSlcbiJdfQ== */");
const StyledProgressBar = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "ejtjsn21",
  label: "StyledProgressBar"
})(() => ({
  height: "fit-content",
  width: "100%",
  position: "absolute",
  bottom: 0
}),  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9DYW1lcmFJbnB1dC9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErSGlDIiwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9DYW1lcmFJbnB1dC9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMilcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHN0eWxlZCwgeyBDU1NPYmplY3QgfSBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcbmltcG9ydCB7IHRyYW5zcGFyZW50aXplIH0gZnJvbSBcImNvbG9yMmtcIlxuaW1wb3J0IHsgTW91c2VFdmVudCwgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcInNyYy90aGVtZVwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhSW5wdXRCdXR0b25Qcm9wcyB7XG4gIG9uQ2xpY2s/OiAoZXZlbnQ6IE1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiBhbnlcbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGVcbiAgcHJvZ3Jlc3M/OiBudW1iZXIgfCBudWxsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVkQ2FtZXJhSW5wdXRQcm9wcyB7XG4gIHdpZHRoOiBudW1iZXJcbn1cblxuZW51bSBTaXplIHtcbiAgWFNNQUxMID0gXCJ4c21hbGxcIixcbiAgU01BTEwgPSBcInNtYWxsXCIsXG4gIE1FRElVTSA9IFwibWVkaXVtXCIsXG4gIExBUkdFID0gXCJsYXJnZVwiLFxufVxuXG5mdW5jdGlvbiBnZXRTaXplU3R5bGUoc2l6ZTogU2l6ZSwgdGhlbWU6IFRoZW1lKTogQ1NTT2JqZWN0IHtcbiAgc3dpdGNoIChzaXplKSB7XG4gICAgY2FzZSBTaXplLlhTTUFMTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudHdvWFN9ICR7dGhlbWUuc3BhY2luZy5zbX1gLFxuICAgICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnNtLFxuICAgICAgfVxuICAgIGNhc2UgU2l6ZS5TTUFMTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudHdvWFN9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgICAgfVxuICAgIGNhc2UgU2l6ZS5MQVJHRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcubWR9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnhzfSAke3RoZW1lLnNwYWNpbmcubWR9YCxcbiAgICAgIH1cbiAgfVxufVxuXG50eXBlIFJlcXVpcmVkQ2FtZXJhSW5wdXRCdXR0b25Qcm9wcyA9IFJlcXVpcmVkPENhbWVyYUlucHV0QnV0dG9uUHJvcHM+XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRDYW1lcmFJbnB1dCA9IHN0eWxlZC5kaXY8U3R5bGVkQ2FtZXJhSW5wdXRQcm9wcz4oKCkgPT4gKHtcbiAgLy8gVGhpcyBpcyB1c2VkIHRvIHBvc2l0aW9uIHRoZSBcIlN3aXRjaCBmYWNpbmcgbW9kZVwiIGJ1dHRvblxuICAvLyB3aXRoIHJlc3BlY3QgdG8gdGhlIHdlYmNhbSBibG9jay5cbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgb2JqZWN0Rml0OiBcImNvbnRhaW5cIixcbn0pKVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlZEJveFByb3BzIHtcbiAgd2lkdGg6IG51bWJlclxufVxuXG5leHBvcnQgY29uc3QgU3R5bGVkQm94ID0gc3R5bGVkLmRpdjxTdHlsZWRCb3hQcm9wcz4oKHsgdGhlbWUsIHdpZHRoIH0pID0+ICh7XG4gIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnNlY29uZGFyeUJnLFxuICBib3JkZXJSYWRpdXM6IGAke3RoZW1lLnJhZGlpLm1kfSAke3RoZW1lLnJhZGlpLm1kfSAwIDBgLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIGhlaWdodDogKHdpZHRoICogOSkgLyAxNixcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWREZXNjcmlwdGlvbiA9IHN0eWxlZC5wKCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy5zbSxcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxufSkpXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVkSW1nUHJvcHMge1xuICBvcGFjaXR5OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IFN0eWxlZEltZyA9IHN0eWxlZC5pbWc8U3R5bGVkSW1nUHJvcHM+KCh7IHRoZW1lLCBvcGFjaXR5IH0pID0+ICh7XG4gIGJvcmRlclJhZGl1czogYCR7dGhlbWUucmFkaWkubWR9ICR7dGhlbWUucmFkaWkubWR9IDAgMGAsXG4gIG9iamVjdEZpdDogXCJjb250YWluXCIsXG4gIG9wYWNpdHksXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQuYSgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRTcGFuID0gc3R5bGVkLnNwYW4oKCkgPT4gKHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFN3aXRjaEZhY2luZ01vZGVCdXR0b24gPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIHRvcDogdGhlbWUuc3BhY2luZy5sZyxcbiAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcubGcsXG4gIHpJbmRleDogMSxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5mYWRlZFRleHQ0MCxcbiAgbWl4QmxlbmRNb2RlOiBcImRpZmZlcmVuY2VcIixcbiAgb3BhY2l0eTogMC42LFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRXZWJjYW1XcmFwcGVyID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkUHJvZ3Jlc3NCYXIgPSBzdHlsZWQuZGl2KCgpID0+ICh7XG4gIGhlaWdodDogXCJmaXQtY29udGVudFwiLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIGJvdHRvbTogMCxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkQ2FtZXJhSW5wdXRCYXNlQnV0dG9uID1cbiAgc3R5bGVkLmJ1dHRvbjxSZXF1aXJlZENhbWVyYUlucHV0QnV0dG9uUHJvcHM+KCh7IHRoZW1lIH0pID0+ICh7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLmxpZ2h0ZW5lZEJnMDUsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmZhZGVkVGV4dDEwfWAsXG4gICAgYm9yZGVyUmFkaXVzOiBgMCAwICR7dGhlbWUucmFkaWkubWR9ICR7dGhlbWUucmFkaWkubWR9YCxcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgIH0sXG4gICAgXCImOmFjdGl2ZVwiOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgICB9LFxuICAgIFwiJjpmb2N1czpub3QoOmFjdGl2ZSlcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgIH0sXG4gICAgXCImOmRpc2FibGVkLCAmOmRpc2FibGVkOmhvdmVyLCAmOmRpc2FibGVkOmFjdGl2ZVwiOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmZhZGVkVGV4dDQwLFxuICAgIH0sXG4gICAgZm9udFdlaWdodDogdGhlbWUuZm9udFdlaWdodHMubm9ybWFsLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcueHN9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgIG1hcmdpbjogMCxcbiAgICBsaW5lSGVpZ2h0OiB0aGVtZS5saW5lSGVpZ2h0cy5iYXNlLFxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgdXNlclNlbGVjdDogXCJub25lXCIsXG4gICAgXCImOmZvY3VzXCI6IHtcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDAuMnJlbSAke3RyYW5zcGFyZW50aXplKHRoZW1lLmNvbG9ycy5wcmltYXJ5LCAwLjUpfWAsXG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICB9LFxuICAgIC4uLmdldFNpemVTdHlsZShTaXplLk1FRElVTSwgdGhlbWUpLFxuICB9KSlcbiJdfQ== */");
const StyledCameraInputBaseButton = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("button",  false ? 0 : {
  target: "ejtjsn20",
  label: "StyledCameraInputBaseButton"
})(_ref6 => {
  let {
    theme
  } = _ref6;
  return {
    position: "relative",
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.lightenedBg05,
    border: `1px solid ${theme.colors.fadedText10}`,
    borderRadius: `0 0 ${theme.radii.md} ${theme.radii.md}`,
    "&:hover": {
      borderColor: theme.colors.primary,
      color: theme.colors.primary
    },
    "&:active": {
      color: theme.colors.white,
      borderColor: theme.colors.primary,
      backgroundColor: theme.colors.primary
    },
    "&:focus:not(:active)": {
      borderColor: theme.colors.primary,
      color: theme.colors.primary
    },
    "&:disabled, &:disabled:hover, &:disabled:active": {
      color: theme.colors.fadedText40
    },
    fontWeight: theme.fontWeights.normal,
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    margin: 0,
    lineHeight: theme.lineHeights.base,
    color: "inherit",
    width: "100%",
    userSelect: "none",
    "&:focus": {
      boxShadow: `0 0 0 0.2rem ${(0,color2k__WEBPACK_IMPORTED_MODULE_1__.transparentize)(theme.colors.primary, 0.5)}`,
      outline: "none"
    },
    ...getSizeStyle(Size.MEDIUM, theme)
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9DYW1lcmFJbnB1dC9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1SUUiLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmsvc3RsaXRlLWRldi9zdGxpdGUtZGV2L3N0cmVhbWxpdC9mcm9udGVuZC9zcmMvY29tcG9uZW50cy93aWRnZXRzL0NhbWVyYUlucHV0L3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkLCB7IENTU09iamVjdCB9IGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuaW1wb3J0IHsgdHJhbnNwYXJlbnRpemUgfSBmcm9tIFwiY29sb3Iya1wiXG5pbXBvcnQgeyBNb3VzZUV2ZW50LCBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwic3JjL3RoZW1lXCJcblxuZXhwb3J0IGludGVyZmFjZSBDYW1lcmFJbnB1dEJ1dHRvblByb3BzIHtcbiAgb25DbGljaz86IChldmVudDogTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IGFueVxuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgY2hpbGRyZW46IFJlYWN0Tm9kZVxuICBwcm9ncmVzcz86IG51bWJlciB8IG51bGxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZWRDYW1lcmFJbnB1dFByb3BzIHtcbiAgd2lkdGg6IG51bWJlclxufVxuXG5lbnVtIFNpemUge1xuICBYU01BTEwgPSBcInhzbWFsbFwiLFxuICBTTUFMTCA9IFwic21hbGxcIixcbiAgTUVESVVNID0gXCJtZWRpdW1cIixcbiAgTEFSR0UgPSBcImxhcmdlXCIsXG59XG5cbmZ1bmN0aW9uIGdldFNpemVTdHlsZShzaXplOiBTaXplLCB0aGVtZTogVGhlbWUpOiBDU1NPYmplY3Qge1xuICBzd2l0Y2ggKHNpemUpIHtcbiAgICBjYXNlIFNpemUuWFNNQUxMOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZy50d29YU30gJHt0aGVtZS5zcGFjaW5nLnNtfWAsXG4gICAgICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMuc20sXG4gICAgICB9XG4gICAgY2FzZSBTaXplLlNNQUxMOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZy50d29YU30gJHt0aGVtZS5zcGFjaW5nLm1kfWAsXG4gICAgICB9XG4gICAgY2FzZSBTaXplLkxBUkdFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZy5tZH0gJHt0aGVtZS5zcGFjaW5nLm1kfWAsXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcueHN9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgICAgfVxuICB9XG59XG5cbnR5cGUgUmVxdWlyZWRDYW1lcmFJbnB1dEJ1dHRvblByb3BzID0gUmVxdWlyZWQ8Q2FtZXJhSW5wdXRCdXR0b25Qcm9wcz5cblxuZXhwb3J0IGNvbnN0IFN0eWxlZENhbWVyYUlucHV0ID0gc3R5bGVkLmRpdjxTdHlsZWRDYW1lcmFJbnB1dFByb3BzPigoKSA9PiAoe1xuICAvLyBUaGlzIGlzIHVzZWQgdG8gcG9zaXRpb24gdGhlIFwiU3dpdGNoIGZhY2luZyBtb2RlXCIgYnV0dG9uXG4gIC8vIHdpdGggcmVzcGVjdCB0byB0aGUgd2ViY2FtIGJsb2NrLlxuICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBvYmplY3RGaXQ6IFwiY29udGFpblwiLFxufSkpXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVkQm94UHJvcHMge1xuICB3aWR0aDogbnVtYmVyXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRCb3ggPSBzdHlsZWQuZGl2PFN0eWxlZEJveFByb3BzPigoeyB0aGVtZSwgd2lkdGggfSkgPT4gKHtcbiAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5QmcsXG4gIGJvcmRlclJhZGl1czogYCR7dGhlbWUucmFkaWkubWR9ICR7dGhlbWUucmFkaWkubWR9IDAgMGAsXG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgaGVpZ2h0OiAod2lkdGggKiA5KSAvIDE2LFxuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZERlc2NyaXB0aW9uID0gc3R5bGVkLnAoKHsgdGhlbWUgfSkgPT4gKHtcbiAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnNtLFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG59KSlcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZWRJbWdQcm9wcyB7XG4gIG9wYWNpdHk6IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgU3R5bGVkSW1nID0gc3R5bGVkLmltZzxTdHlsZWRJbWdQcm9wcz4oKHsgdGhlbWUsIG9wYWNpdHkgfSkgPT4gKHtcbiAgYm9yZGVyUmFkaXVzOiBgJHt0aGVtZS5yYWRpaS5tZH0gJHt0aGVtZS5yYWRpaS5tZH0gMCAwYCxcbiAgb2JqZWN0Rml0OiBcImNvbnRhaW5cIixcbiAgb3BhY2l0eSxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZC5hKCh7IHRoZW1lIH0pID0+ICh7XG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgZGlzcGxheTogXCJibG9ja1wiLFxuICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFNwYW4gPSBzdHlsZWQuc3BhbigoKSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkU3dpdGNoRmFjaW5nTW9kZUJ1dHRvbiA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgdG9wOiB0aGVtZS5zcGFjaW5nLmxnLFxuICByaWdodDogdGhlbWUuc3BhY2luZy5sZyxcbiAgekluZGV4OiAxLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLmZhZGVkVGV4dDQwLFxuICBtaXhCbGVuZE1vZGU6IFwiZGlmZmVyZW5jZVwiLFxuICBvcGFjaXR5OiAwLjYsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFdlYmNhbVdyYXBwZXIgPSBzdHlsZWQuZGl2KCgpID0+ICh7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRQcm9ncmVzc0JhciA9IHN0eWxlZC5kaXYoKCkgPT4gKHtcbiAgaGVpZ2h0OiBcImZpdC1jb250ZW50XCIsXG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgYm90dG9tOiAwLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRDYW1lcmFJbnB1dEJhc2VCdXR0b24gPVxuICBzdHlsZWQuYnV0dG9uPFJlcXVpcmVkQ2FtZXJhSW5wdXRCdXR0b25Qcm9wcz4oKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMubGlnaHRlbmVkQmcwNSxcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuZmFkZWRUZXh0MTB9YCxcbiAgICBib3JkZXJSYWRpdXM6IGAwIDAgJHt0aGVtZS5yYWRpaS5tZH0gJHt0aGVtZS5yYWRpaS5tZH1gLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gICAgfSxcbiAgICBcIiY6YWN0aXZlXCI6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUsXG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgIH0sXG4gICAgXCImOmZvY3VzOm5vdCg6YWN0aXZlKVwiOiB7XG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gICAgfSxcbiAgICBcIiY6ZGlzYWJsZWQsICY6ZGlzYWJsZWQ6aG92ZXIsICY6ZGlzYWJsZWQ6YWN0aXZlXCI6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZmFkZWRUZXh0NDAsXG4gICAgfSxcbiAgICBmb250V2VpZ2h0OiB0aGVtZS5mb250V2VpZ2h0cy5ub3JtYWwsXG4gICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZy54c30gJHt0aGVtZS5zcGFjaW5nLm1kfWAsXG4gICAgbWFyZ2luOiAwLFxuICAgIGxpbmVIZWlnaHQ6IHRoZW1lLmxpbmVIZWlnaHRzLmJhc2UsXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICB1c2VyU2VsZWN0OiBcIm5vbmVcIixcbiAgICBcIiY6Zm9jdXNcIjoge1xuICAgICAgYm94U2hhZG93OiBgMCAwIDAgMC4ycmVtICR7dHJhbnNwYXJlbnRpemUodGhlbWUuY29sb3JzLnByaW1hcnksIDAuNSl9YCxcbiAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgIH0sXG4gICAgLi4uZ2V0U2l6ZVN0eWxlKFNpemUuTUVESVVNLCB0aGVtZSksXG4gIH0pKVxuIl19 */");

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

/***/ })

}]);
//# sourceMappingURL=streamlit_frontend_src_components_widgets_CameraInput_index_tsx.chunk.js.map