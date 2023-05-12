(globalThis["webpackChunk_stlite_mountable"] = globalThis["webpackChunk_stlite_mountable"] || []).push([["streamlit_frontend_src_components_elements_GraphVizChart_index_tsx"],{

/***/ "../../streamlit/frontend/src/components/elements/GraphVizChart/GraphVizChart.tsx":
/*!****************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/GraphVizChart/GraphVizChart.tsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphVizChart": () => (/* binding */ GraphVizChart),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "../../node_modules/d3/src/index.js");
/* harmony import */ var d3_graphviz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-graphviz */ "../../node_modules/d3-graphviz/build/d3-graphviz.js");
/* harmony import */ var d3_graphviz__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_graphviz__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_lib_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/lib/log */ "../../streamlit/frontend/src/lib/log.ts");
/* harmony import */ var src_hocs_withFullScreenWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/hocs/withFullScreenWrapper */ "../../streamlit/frontend/src/hocs/withFullScreenWrapper/index.tsx");
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled-components */ "../../streamlit/frontend/src/components/elements/GraphVizChart/styled-components.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/elements/GraphVizChart/GraphVizChart.tsx",
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








// Use d3Graphviz in a dummy expression so the library actually gets loaded.
// This way it registers itself in d3 as a plugin at this point.
const dummyGraphviz = d3_graphviz__WEBPACK_IMPORTED_MODULE_2__.graphviz;
dummyGraphviz; // eslint-disable-line @typescript-eslint/no-unused-expressions

function GraphVizChart(_ref) {
  _s();
  let {
    width: propWidth,
    element,
    height: propHeight
  } = _ref;
  const chartId = `graphviz-chart-${element.elementId}`;
  let originalHeight = 0;
  let originalWidth = 0;
  const getChartData = () => {
    return element.spec;
  };
  const getChartDimensions = () => {
    let chartWidth = originalWidth;
    let chartHeight = originalHeight;
    if (propHeight) {
      // fullscreen
      chartWidth = propWidth;
      chartHeight = propHeight;
    } else if (element.useContainerWidth) {
      chartWidth = propWidth;
    }
    return {
      chartWidth,
      chartHeight
    };
  };
  const updateChart = () => {
    try {
      // Layout and render the graph
      const graph = (0,d3_graphviz__WEBPACK_IMPORTED_MODULE_2__.graphviz)(`#${chartId}`).zoom(false).fit(true).scale(1).renderDot(getChartData()).on("end", () => {
        const node = (0,d3__WEBPACK_IMPORTED_MODULE_1__.select)(`#${chartId} > svg`).node();
        if (node) {
          originalHeight = node.getBBox().height;
          originalWidth = node.getBBox().width;
        }
      });
      const {
        chartHeight,
        chartWidth
      } = getChartDimensions();
      if (chartHeight > 0) {
        // Override or reset the graph height
        graph.height(chartHeight);
      }
      if (chartWidth > 0) {
        // Override or reset the graph width
        graph.width(chartWidth);
      }
    } catch (error) {
      (0,src_lib_log__WEBPACK_IMPORTED_MODULE_3__.logError)(error);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    updateChart();
  });
  const elementDimensions = getChartDimensions();
  const width = elementDimensions.chartWidth ? elementDimensions.chartWidth : propWidth;
  const height = elementDimensions.chartHeight ? elementDimensions.chartHeight : propHeight;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_5__.StyledGraphVizChart, {
    className: "graphviz stGraphVizChart",
    id: chartId,
    style: {
      width,
      height
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 5
  }, this);
}
_s(GraphVizChart, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = GraphVizChart;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = (0,src_hocs_withFullScreenWrapper__WEBPACK_IMPORTED_MODULE_4__["default"])(GraphVizChart));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "GraphVizChart");
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

/***/ "../../streamlit/frontend/src/components/elements/GraphVizChart/index.tsx":
/*!********************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/GraphVizChart/index.tsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _GraphVizChart__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _GraphVizChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphVizChart */ "../../streamlit/frontend/src/components/elements/GraphVizChart/GraphVizChart.tsx");
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

/***/ "../../streamlit/frontend/src/components/elements/GraphVizChart/styled-components.ts":
/*!*******************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/GraphVizChart/styled-components.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledGraphVizChart": () => (/* binding */ StyledGraphVizChart)
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

const StyledGraphVizChart = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e1p558ko0",
  label: "StyledGraphVizChart"
})(_ref => {
  let {
    theme
  } = _ref;
  return {
    "& *": {
      fontFamily: theme.genericFonts.bodyFont,
      // Font sizes inside the SVG element are getting huge for some reason.
      // Hacking together a number by eyeballing it:
      // 12px in the SVG looks like 1rem outside, so 9.6px ~= 0.8rem.
      fontSize: "9.6px"
    },
    "& svg": {
      maxWidth: "100%"
    }
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvR3JhcGhWaXpDaGFydC9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQm1DIiwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvR3JhcGhWaXpDaGFydC9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMilcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEdyYXBoVml6Q2hhcnQgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIFwiJiAqXCI6IHtcbiAgICBmb250RmFtaWx5OiB0aGVtZS5nZW5lcmljRm9udHMuYm9keUZvbnQsXG4gICAgLy8gRm9udCBzaXplcyBpbnNpZGUgdGhlIFNWRyBlbGVtZW50IGFyZSBnZXR0aW5nIGh1Z2UgZm9yIHNvbWUgcmVhc29uLlxuICAgIC8vIEhhY2tpbmcgdG9nZXRoZXIgYSBudW1iZXIgYnkgZXllYmFsbGluZyBpdDpcbiAgICAvLyAxMnB4IGluIHRoZSBTVkcgbG9va3MgbGlrZSAxcmVtIG91dHNpZGUsIHNvIDkuNnB4IH49IDAuOHJlbS5cbiAgICBmb250U2l6ZTogXCI5LjZweFwiLFxuICB9LFxuICBcIiYgc3ZnXCI6IHtcbiAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gIH0sXG59KSlcbiJdfQ== */");

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

/***/ "?6a95":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?41ad":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?5a98":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=streamlit_frontend_src_components_elements_GraphVizChart_index_tsx.chunk.js.map