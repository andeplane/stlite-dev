(globalThis["webpackChunk_stlite_mountable"] = globalThis["webpackChunk_stlite_mountable"] || []).push([["streamlit_frontend_src_components_elements_ImageList_index_tsx"],{

/***/ "../../streamlit/frontend/src/components/elements/ImageList/ImageList.tsx":
/*!********************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/ImageList/ImageList.tsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageList": () => (/* binding */ ImageList),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-html-parser */ "../../node_modules/react-html-parser/lib/index.js");
/* harmony import */ var _stlite_kernel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stlite/kernel */ "../kernel/dist/index.js");
/* harmony import */ var src_hocs_withFullScreenWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/hocs/withFullScreenWrapper */ "../../streamlit/frontend/src/hocs/withFullScreenWrapper/index.tsx");
/* harmony import */ var src_lib_UriUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/lib/UriUtil */ "../../streamlit/frontend/src/lib/UriUtil.ts");
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled-components */ "../../streamlit/frontend/src/components/elements/ImageList/styled-components.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/elements/ImageList/ImageList.tsx",
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








var WidthBehavior;
/**
 * Functional element for a horizontal list of images.
 */
(function (WidthBehavior) {
  WidthBehavior[WidthBehavior["OriginalWidth"] = -1] = "OriginalWidth";
  WidthBehavior[WidthBehavior["ColumnWidth"] = -2] = "ColumnWidth";
  WidthBehavior[WidthBehavior["AutoWidth"] = -3] = "AutoWidth";
})(WidthBehavior || (WidthBehavior = {}));
function ImageList(_ref) {
  _s();
  let {
    width,
    isFullScreen,
    element,
    height,
    endpoints
  } = _ref;
  const images = (0,_stlite_kernel__WEBPACK_IMPORTED_MODULE_2__.useStliteImageList)(element.imgs);

  // The width field in the proto sets the image width, but has special
  // cases for -1, -2, and -3.
  let containerWidth;
  const protoWidth = element.width;
  if (protoWidth === WidthBehavior.OriginalWidth || protoWidth === WidthBehavior.AutoWidth) {
    // Use the original image width.
    containerWidth = undefined;
  } else if (protoWidth === WidthBehavior.ColumnWidth) {
    // Use the column width
    containerWidth = width;
  } else if (protoWidth > 0) {
    // Set the image width explicitly.
    containerWidth = protoWidth;
  } else {
    throw Error(`Invalid image width: ${protoWidth}`);
  }
  const imgStyle = {};
  if (height && isFullScreen) {
    imgStyle.maxHeight = height;
    imgStyle["object-fit"] = "contain";
  } else {
    imgStyle.width = containerWidth;
    if (protoWidth === WidthBehavior.AutoWidth) {
      // Cap the image width, so it doesn't exceed the column width
      imgStyle.maxWidth = "100%";
    }
  }
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_5__.StyledImageList, {
    style: {
      width
    },
    children: images.map((iimage, idx) => {
      const image = iimage;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_5__.StyledImageContainer, {
        "data-testid": "stImage",
        children: [image.markup ?
        // SVGs are received unsanitized
        (0,react_html_parser__WEBPACK_IMPORTED_MODULE_1__["default"])((0,src_lib_UriUtil__WEBPACK_IMPORTED_MODULE_4__.xssSanitizeSvg)(image.markup)) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
          style: imgStyle,
          src: endpoints.buildMediaURL(image.url),
          alt: idx.toString()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 15
        }, this), image.caption && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_5__.StyledCaption, {
          "data-testid": "caption",
          style: imgStyle,
          children: ` ${image.caption} `
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 15
        }, this)]
      }, idx, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 11
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 5
  }, this);
}
_s(ImageList, "cLF/IT2+qP1aw08IX357tzUorQE=", false, function () {
  return [_stlite_kernel__WEBPACK_IMPORTED_MODULE_2__.useStliteImageList];
});
_c = ImageList;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = (0,src_hocs_withFullScreenWrapper__WEBPACK_IMPORTED_MODULE_3__["default"])(ImageList));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "ImageList");
__webpack_require__.$Refresh$.register(_c2, "%default%");

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

/***/ "../../streamlit/frontend/src/components/elements/ImageList/index.tsx":
/*!****************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/ImageList/index.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _ImageList__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _ImageList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageList */ "../../streamlit/frontend/src/components/elements/ImageList/ImageList.tsx");
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

/***/ "../../streamlit/frontend/src/components/elements/ImageList/styled-components.ts":
/*!***************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/ImageList/styled-components.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledCaption": () => (/* binding */ StyledCaption),
/* harmony export */   "StyledImageContainer": () => (/* binding */ StyledImageContainer),
/* harmony export */   "StyledImageList": () => (/* binding */ StyledImageList)
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

const StyledImageList = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "etr89bj2",
  label: "StyledImageList"
})(_ref => {
  let {
    theme
  } = _ref;
  return {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    // Not supported in Safari, but at least it's not a regression for those users:
    rowGap: theme.spacing.lg
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvSW1hZ2VMaXN0L3N0eWxlZC1jb21wb25lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCK0IiLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmsvc3RsaXRlLWRldi9zdGxpdGUtZGV2L3N0cmVhbWxpdC9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9lbGVtZW50cy9JbWFnZUxpc3Qvc3R5bGVkLWNvbXBvbmVudHMudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgU3RyZWFtbGl0IEluYy4gKDIwMTgtMjAyMikgU25vd2ZsYWtlIEluYy4gKDIwMjIpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRJbWFnZUxpc3QgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICBmbGV4V3JhcDogXCJ3cmFwXCIsXG4gIC8vIE5vdCBzdXBwb3J0ZWQgaW4gU2FmYXJpLCBidXQgYXQgbGVhc3QgaXQncyBub3QgYSByZWdyZXNzaW9uIGZvciB0aG9zZSB1c2VyczpcbiAgcm93R2FwOiB0aGVtZS5zcGFjaW5nLmxnLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXYoKCkgPT4gKHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIGFsaWduSXRlbXM6IFwic3RyZXRjaFwiLFxuICB3aWR0aDogXCJhdXRvXCIsXG4gIGZsZXhHcm93OiAwLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRDYXB0aW9uID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBmb250RmFtaWx5OiB0aGVtZS5nZW5lcmljRm9udHMuYm9keUZvbnQsXG4gIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMuc20sXG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMuZmFkZWRUZXh0NjAsXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnhzLFxuICB3b3JkV3JhcDogXCJicmVhay13b3JkXCIsXG4gIHBhZGRpbmc6IFwiMC4xMjVyZW1cIixcbn0pKVxuIl19 */");
const StyledImageContainer = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "etr89bj1",
  label: "StyledImageContainer"
})(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  width: "auto",
  flexGrow: 0
}),  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvSW1hZ2VMaXN0L3N0eWxlZC1jb21wb25lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCb0MiLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmsvc3RsaXRlLWRldi9zdGxpdGUtZGV2L3N0cmVhbWxpdC9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9lbGVtZW50cy9JbWFnZUxpc3Qvc3R5bGVkLWNvbXBvbmVudHMudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgU3RyZWFtbGl0IEluYy4gKDIwMTgtMjAyMikgU25vd2ZsYWtlIEluYy4gKDIwMjIpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRJbWFnZUxpc3QgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICBmbGV4V3JhcDogXCJ3cmFwXCIsXG4gIC8vIE5vdCBzdXBwb3J0ZWQgaW4gU2FmYXJpLCBidXQgYXQgbGVhc3QgaXQncyBub3QgYSByZWdyZXNzaW9uIGZvciB0aG9zZSB1c2VyczpcbiAgcm93R2FwOiB0aGVtZS5zcGFjaW5nLmxnLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXYoKCkgPT4gKHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIGFsaWduSXRlbXM6IFwic3RyZXRjaFwiLFxuICB3aWR0aDogXCJhdXRvXCIsXG4gIGZsZXhHcm93OiAwLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRDYXB0aW9uID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBmb250RmFtaWx5OiB0aGVtZS5nZW5lcmljRm9udHMuYm9keUZvbnQsXG4gIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMuc20sXG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMuZmFkZWRUZXh0NjAsXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnhzLFxuICB3b3JkV3JhcDogXCJicmVhay13b3JkXCIsXG4gIHBhZGRpbmc6IFwiMC4xMjVyZW1cIixcbn0pKVxuIl19 */");
const StyledCaption = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "etr89bj0",
  label: "StyledCaption"
})(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    fontFamily: theme.genericFonts.bodyFont,
    fontSize: theme.fontSizes.sm,
    color: theme.colors.fadedText60,
    textAlign: "center",
    marginTop: theme.spacing.xs,
    wordWrap: "break-word",
    padding: "0.125rem"
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvSW1hZ2VMaXN0L3N0eWxlZC1jb21wb25lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDNkIiLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmsvc3RsaXRlLWRldi9zdGxpdGUtZGV2L3N0cmVhbWxpdC9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9lbGVtZW50cy9JbWFnZUxpc3Qvc3R5bGVkLWNvbXBvbmVudHMudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgU3RyZWFtbGl0IEluYy4gKDIwMTgtMjAyMikgU25vd2ZsYWtlIEluYy4gKDIwMjIpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRJbWFnZUxpc3QgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICBmbGV4V3JhcDogXCJ3cmFwXCIsXG4gIC8vIE5vdCBzdXBwb3J0ZWQgaW4gU2FmYXJpLCBidXQgYXQgbGVhc3QgaXQncyBub3QgYSByZWdyZXNzaW9uIGZvciB0aG9zZSB1c2VyczpcbiAgcm93R2FwOiB0aGVtZS5zcGFjaW5nLmxnLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXYoKCkgPT4gKHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIGFsaWduSXRlbXM6IFwic3RyZXRjaFwiLFxuICB3aWR0aDogXCJhdXRvXCIsXG4gIGZsZXhHcm93OiAwLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRDYXB0aW9uID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBmb250RmFtaWx5OiB0aGVtZS5nZW5lcmljRm9udHMuYm9keUZvbnQsXG4gIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMuc20sXG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMuZmFkZWRUZXh0NjAsXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnhzLFxuICB3b3JkV3JhcDogXCJicmVhay13b3JkXCIsXG4gIHBhZGRpbmc6IFwiMC4xMjVyZW1cIixcbn0pKVxuIl19 */");

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

/***/ "?77f2":
/*!*********************************!*\
  !*** readable-stream (ignored) ***!
  \*********************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=streamlit_frontend_src_components_elements_ImageList_index_tsx.chunk.js.map