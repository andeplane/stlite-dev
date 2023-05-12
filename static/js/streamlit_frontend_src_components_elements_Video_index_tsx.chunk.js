"use strict";
(globalThis["webpackChunk_stlite_mountable"] = globalThis["webpackChunk_stlite_mountable"] || []).push([["streamlit_frontend_src_components_elements_Video_index_tsx"],{

/***/ "../../streamlit/frontend/src/components/elements/Video/Video.tsx":
/*!************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/Video/Video.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Video)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var src_autogen_proto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/autogen/proto */ "../../streamlit/frontend/src/autogen/proto.js");
/* harmony import */ var _stlite_kernel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stlite/kernel */ "../kernel/dist/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/elements/Video/Video.tsx",
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





const DEFAULT_HEIGHT = 528;
function Video(_ref) {
  _s();
  let {
    element,
    width,
    endpoints
  } = _ref;
  const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  /* Element may contain "url" or "data" property. */

  const {
    type,
    url: rawUrl
  } = element;
  const url = (0,_stlite_kernel__WEBPACK_IMPORTED_MODULE_2__.useStliteMediaObjectUrl)(rawUrl);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const videoNode = videoRef.current;
    const setStartTime = () => {
      if (videoNode) {
        // setStartTime
        videoNode.currentTime = element.startTime;
      }
    };
    if (videoNode) {
      videoNode.addEventListener("loadedmetadata", setStartTime);
    }
    return () => {
      if (videoNode) {
        videoNode.removeEventListener("loadedmetadata", setStartTime);
      }
    };
  }, [element]);
  const getYoutubeSrc = url => {
    const {
      startTime
    } = element;
    if (startTime) {
      return `${url}?start=${startTime}`;
    }
    return url;
  };

  /* Is this a YouTube link? If so we need a fancier tag.
       NOTE: This part assumes the URL is already an "embed" link.
    */
  if (type === src_autogen_proto__WEBPACK_IMPORTED_MODULE_1__.Video.Type.YOUTUBE_IFRAME) {
    // At some point the width 0 will be passed to this component
    // which is caused by the AutoSizer of the VerticalLayout
    // Width 0 will result in height being 0, which results in issue
    // https://github.com/streamlit/streamlit/issues/5069
    // To avoid this, when we detect width is 0, we set height to 528,
    // which is default height based on the default streamlit width
    const height = width !== 0 ? width * 0.75 : DEFAULT_HEIGHT;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("iframe", {
      title: url,
      src: getYoutubeSrc(url),
      width: width,
      height: height,
      frameBorder: "0",
      allow: "autoplay; encrypted-media",
      allowFullScreen: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this);
  }
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("video", {
    ref: videoRef,
    controls: true,
    src: endpoints.buildMediaURL(url),
    className: "stVideo",
    style: {
      width,
      height: width === 0 ? DEFAULT_HEIGHT : undefined
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 5
  }, this);
}
_s(Video, "wPs9jz8FS40HIzynOYOuXv1UiSc=", false, function () {
  return [_stlite_kernel__WEBPACK_IMPORTED_MODULE_2__.useStliteMediaObjectUrl];
});
_c = Video;
var _c;
__webpack_require__.$Refresh$.register(_c, "Video");

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

/***/ "../../streamlit/frontend/src/components/elements/Video/index.tsx":
/*!************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/Video/index.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Video__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Video */ "../../streamlit/frontend/src/components/elements/Video/Video.tsx");
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
//# sourceMappingURL=streamlit_frontend_src_components_elements_Video_index_tsx.chunk.js.map