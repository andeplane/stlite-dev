"use strict";
(globalThis["webpackChunk_stlite_mountable"] = globalThis["webpackChunk_stlite_mountable"] || []).push([["streamlit_frontend_src_components_elements_BokehChart_index_tsx"],{

/***/ "../../streamlit/frontend/src/components/elements/BokehChart/BokehChart.tsx":
/*!**********************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/BokehChart/BokehChart.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BokehChart": () => (/* binding */ BokehChart),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var src_hocs_withFullScreenWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/hocs/withFullScreenWrapper */ "../../streamlit/frontend/src/hocs/withFullScreenWrapper/index.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/elements/BokehChart/BokehChart.tsx",
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




function BokehChart(_ref) {
  _s();
  let {
    width,
    element,
    height
  } = _ref;
  const chartId = `bokeh-chart-${element.elementId}`;
  const memoizedGetChartData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    return JSON.parse(element.figure);
  }, [element]);
  const getChartDimensions = plot => {
    // Default values
    let chartWidth = plot.attributes.plot_width;
    let chartHeight = plot.attributes.plot_height;

    // if is not fullscreen and useContainerWidth==false, we should use default values
    if (height) {
      // fullscreen
      chartWidth = width;
      chartHeight = height;
    } else if (element.useContainerWidth) {
      chartWidth = width;
    }
    return {
      chartWidth,
      chartHeight
    };
  };
  const removeAllChildNodes = element => {
    while (element.lastChild) {
      element.lastChild.remove();
    }
  };
  const updateChart = data => {
    const {
      Bokeh
    } = window;
    const chart = document.getElementById(chartId);

    /**
     * When you create a bokeh chart in your python script, you can specify
     * the width: p = figure(title="simple line example", x_axis_label="x", y_axis_label="y", plot_width=200);
     * In that case, the json object will contains an attribute called
     * plot_width (or plot_heigth) inside the plot reference.
     * If that values are missing, we can set that values to make the chart responsive.
     */
    const plot = data && data.doc && data.doc.roots && data.doc.roots.references ? data.doc.roots.references.find(e => e.type === "Plot") : undefined;
    if (plot) {
      const {
        chartWidth,
        chartHeight
      } = getChartDimensions(plot);
      if (chartWidth > 0) {
        plot.attributes.plot_width = chartWidth;
      }
      if (chartHeight > 0) {
        plot.attributes.plot_height = chartHeight;
      }
    }
    if (chart !== null) {
      removeAllChildNodes(chart);
      // embed_item is actually an async function call, so a race condition
      // can occur if updateChart is called twice, leading to two Bokeh charts
      // to be embedded at the same time.
      Bokeh.embed.embed_item(data, chartId);
    }
  };
  const memoizedUpdateChart = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(updateChart, [width, height, element]);

  // We only want useEffect to run once per prop update, because of the embed_item
  // race condition mentioned per run. Thus we pass in all props and methods
  // into the useEffect dependency array.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    memoizedUpdateChart(memoizedGetChartData());
  }, [width, height, element, memoizedGetChartData, memoizedUpdateChart]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    id: chartId,
    className: "stBokehChart"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 10
  }, this);
}
_s(BokehChart, "39zdr7Mb1y1X49s4Lek8uG7ED8Y=");
_c = BokehChart;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = (0,src_hocs_withFullScreenWrapper__WEBPACK_IMPORTED_MODULE_1__["default"])(BokehChart));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "BokehChart");
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

/***/ "../../streamlit/frontend/src/components/elements/BokehChart/index.tsx":
/*!*****************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/BokehChart/index.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _BokehChart__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _BokehChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BokehChart */ "../../streamlit/frontend/src/components/elements/BokehChart/BokehChart.tsx");
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
//# sourceMappingURL=streamlit_frontend_src_components_elements_BokehChart_index_tsx.chunk.js.map