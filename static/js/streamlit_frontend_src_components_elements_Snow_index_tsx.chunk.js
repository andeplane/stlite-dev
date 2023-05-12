"use strict";
(globalThis["webpackChunk_stlite_mountable"] = globalThis["webpackChunk_stlite_mountable"] || []).push([["streamlit_frontend_src_components_elements_Snow_index_tsx"],{

/***/ "../../streamlit/frontend/src/components/elements/Snow/Snow.tsx":
/*!**********************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/Snow/Snow.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NUM_FLAKES": () => (/* binding */ NUM_FLAKES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var src_assets_img_snow_flake_0_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/img/snow/flake-0.png */ "../../streamlit/frontend/src/assets/img/snow/flake-0.png");
/* harmony import */ var src_assets_img_snow_flake_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/img/snow/flake-1.png */ "../../streamlit/frontend/src/assets/img/snow/flake-1.png");
/* harmony import */ var src_assets_img_snow_flake_2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/img/snow/flake-2.png */ "../../streamlit/frontend/src/assets/img/snow/flake-2.png");
/* harmony import */ var src_components_elements_Particles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/elements/Particles */ "../../streamlit/frontend/src/components/elements/Particles/index.tsx");
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled-components */ "../../streamlit/frontend/src/components/elements/Snow/styled-components.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/elements/Snow/Snow.tsx";
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



/*
 * IMPORTANT: If you change the asset imports below, make sure they still work if Streamlit is
 * served from a subpath.
 */






const NUM_FLAKES = 100;
const FLAKE_IMAGES = [src_assets_img_snow_flake_0_png__WEBPACK_IMPORTED_MODULE_1__, src_assets_img_snow_flake_1_png__WEBPACK_IMPORTED_MODULE_2__, src_assets_img_snow_flake_2_png__WEBPACK_IMPORTED_MODULE_3__];
const NUM_FLAKE_TYPES = FLAKE_IMAGES.length;
const Flake = _ref => {
  let {
    particleType
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_5__.StyledFlake, {
    src: FLAKE_IMAGES[particleType]
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 3
  }, undefined);
};
_c = Flake;
const Snow = function Snow(_ref2) {
  let {
    scriptRunId
  } = _ref2;
  // Keys should be unique each time, so React replaces the images in the DOM and their animations
  // actually rerun.
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(src_components_elements_Particles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "snow",
    scriptRunId: scriptRunId,
    numParticleTypes: NUM_FLAKE_TYPES,
    numParticles: NUM_FLAKES,
    ParticleComponent: Flake
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, this);
};
_c2 = Snow;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c3 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Snow));
var _c, _c2, _c3;
__webpack_require__.$Refresh$.register(_c, "Flake");
__webpack_require__.$Refresh$.register(_c2, "Snow");
__webpack_require__.$Refresh$.register(_c3, "%default%");

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

/***/ "../../streamlit/frontend/src/components/elements/Snow/index.tsx":
/*!***********************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/Snow/index.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NUM_FLAKES": () => (/* reexport safe */ _Snow__WEBPACK_IMPORTED_MODULE_0__.NUM_FLAKES),
/* harmony export */   "default": () => (/* reexport safe */ _Snow__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Snow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Snow */ "../../streamlit/frontend/src/components/elements/Snow/Snow.tsx");
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

/***/ "../../streamlit/frontend/src/components/elements/Snow/styled-components.ts":
/*!**********************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/Snow/styled-components.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledFlake": () => (/* binding */ StyledFlake)
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


const IMAGE_HEIGHT = 150;
const IMAGE_WIDTH = 150;
const POS_MIN_VW = 10;
const POS_MAX_VW = 90;
const DELAY_MAX_MS = 4000;
const rand = function (max) {
  let min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Math.random() * (max - min) + min;
};
const moveDown = () => _emotion_react__WEBPACK_IMPORTED_MODULE_1__.keyframes`
  from {
    transform:
      translateY(0)
      rotateX(${rand(360)}deg)
      rotateY(${rand(360)}deg)
      rotateZ(${rand(360)}deg);
  }

  to {
    transform:
      translateY(calc(100vh + ${IMAGE_HEIGHT}px))
      rotateX(0)
      rotateY(0)
      rotateZ(0);
  }
`;
const StyledFlake = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("img",  false ? 0 : {
  target: "e1hbdfkw0",
  label: "StyledFlake"
})(_ref => {
  let {
    theme
  } = _ref;
  return {
    position: "fixed",
    top: `${-IMAGE_HEIGHT}px`,
    marginLeft: `${-IMAGE_WIDTH / 2}px`,
    zIndex: theme.zIndices.balloons,
    left: `${rand(POS_MAX_VW, POS_MIN_VW)}vw`,
    animationDelay: `${rand(DELAY_MAX_MS)}ms`,
    height: `${IMAGE_HEIGHT}px`,
    width: `${IMAGE_WIDTH}px`,
    pointerEvents: "none",
    animationDuration: "3000ms",
    animationName: moveDown(),
    animationTimingFunction: "ease-in",
    animationDirection: "normal",
    animationIterationCount: 1,
    opacity: 1
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvU25vdy9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QzJCIiwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvU25vdy9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMilcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsga2V5ZnJhbWVzLCBLZXlmcmFtZXMgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIlxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcblxuY29uc3QgSU1BR0VfSEVJR0hUID0gMTUwXG5jb25zdCBJTUFHRV9XSURUSCA9IDE1MFxuY29uc3QgUE9TX01JTl9WVyA9IDEwXG5jb25zdCBQT1NfTUFYX1ZXID0gOTBcbmNvbnN0IERFTEFZX01BWF9NUyA9IDQwMDBcblxuY29uc3QgcmFuZCA9IChtYXg6IG51bWJlciwgbWluID0gMCk6IG51bWJlciA9PlxuICBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW5cblxuY29uc3QgbW92ZURvd24gPSAoKTogS2V5ZnJhbWVzID0+IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOlxuICAgICAgdHJhbnNsYXRlWSgwKVxuICAgICAgcm90YXRlWCgke3JhbmQoMzYwKX1kZWcpXG4gICAgICByb3RhdGVZKCR7cmFuZCgzNjApfWRlZylcbiAgICAgIHJvdGF0ZVooJHtyYW5kKDM2MCl9ZGVnKTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06XG4gICAgICB0cmFuc2xhdGVZKGNhbGMoMTAwdmggKyAke0lNQUdFX0hFSUdIVH1weCkpXG4gICAgICByb3RhdGVYKDApXG4gICAgICByb3RhdGVZKDApXG4gICAgICByb3RhdGVaKDApO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGbGFrZSA9IHN0eWxlZC5pbWcoKHsgdGhlbWUgfSkgPT4gKHtcbiAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgdG9wOiBgJHstSU1BR0VfSEVJR0hUfXB4YCxcbiAgbWFyZ2luTGVmdDogYCR7LUlNQUdFX1dJRFRIIC8gMn1weGAsXG4gIHpJbmRleDogdGhlbWUuekluZGljZXMuYmFsbG9vbnMsXG4gIGxlZnQ6IGAke3JhbmQoUE9TX01BWF9WVywgUE9TX01JTl9WVyl9dndgLFxuICBhbmltYXRpb25EZWxheTogYCR7cmFuZChERUxBWV9NQVhfTVMpfW1zYCxcbiAgaGVpZ2h0OiBgJHtJTUFHRV9IRUlHSFR9cHhgLFxuICB3aWR0aDogYCR7SU1BR0VfV0lEVEh9cHhgLFxuICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcblxuICBhbmltYXRpb25EdXJhdGlvbjogXCIzMDAwbXNcIixcbiAgYW5pbWF0aW9uTmFtZTogbW92ZURvd24oKSxcbiAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246IFwiZWFzZS1pblwiLFxuICBhbmltYXRpb25EaXJlY3Rpb246IFwibm9ybWFsXCIsXG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAxLFxuICBvcGFjaXR5OiAxLFxufSkpXG4iXX0= */");

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

/***/ "../../streamlit/frontend/src/assets/img/snow/flake-0.png":
/*!****************************************************************!*\
  !*** ../../streamlit/frontend/src/assets/img/snow/flake-0.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/flake-0.beded754e8024c73d9d2.png";

/***/ }),

/***/ "../../streamlit/frontend/src/assets/img/snow/flake-1.png":
/*!****************************************************************!*\
  !*** ../../streamlit/frontend/src/assets/img/snow/flake-1.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/flake-1.8077dc154e0bf900aa73.png";

/***/ }),

/***/ "../../streamlit/frontend/src/assets/img/snow/flake-2.png":
/*!****************************************************************!*\
  !*** ../../streamlit/frontend/src/assets/img/snow/flake-2.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/flake-2.e3f07d06933dd0e84c24.png";

/***/ })

}]);
//# sourceMappingURL=streamlit_frontend_src_components_elements_Snow_index_tsx.chunk.js.map