"use strict";
(globalThis["webpackChunk_stlite_mountable"] = globalThis["webpackChunk_stlite_mountable"] || []).push([["streamlit_frontend_src_components_elements_VegaLiteChart_index_tsx"],{

/***/ "../../streamlit/frontend/src/components/elements/VegaLiteChart/VegaLiteChart.tsx":
/*!****************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/VegaLiteChart/VegaLiteChart.tsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VegaLiteChart": () => (/* binding */ VegaLiteChart),
/* harmony export */   "dataIsAnAppendOfPrev": () => (/* binding */ dataIsAnAppendOfPrev),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/react */ "../../node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js");
/* harmony import */ var src_lib_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/lib/log */ "../../streamlit/frontend/src/lib/log.ts");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/merge */ "../../node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_hocs_withFullScreenWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/hocs/withFullScreenWrapper */ "../../streamlit/frontend/src/hocs/withFullScreenWrapper/index.tsx");
/* harmony import */ var src_lib_dataFrameProto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/lib/dataFrameProto */ "../../streamlit/frontend/src/lib/dataFrameProto.ts");
/* harmony import */ var src_lib_ErrorHandling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/lib/ErrorHandling */ "../../streamlit/frontend/src/lib/ErrorHandling.ts");
/* harmony import */ var vega_embed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vega-embed */ "../../node_modules/vega-embed/build/vega-embed.module.js");
/* harmony import */ var vega__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vega */ "../../node_modules/vega/build/vega.module.js");
/* harmony import */ var vega_interpreter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vega-interpreter */ "../../node_modules/vega-interpreter/build/vega-interpreter.module.js");
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styled-components */ "../../streamlit/frontend/src/components/elements/VegaLiteChart/styled-components.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/elements/VegaLiteChart/VegaLiteChart.tsx";
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













const MagicFields = {
  DATAFRAME_INDEX: "(index)"
};
const DEFAULT_DATA_NAME = "source";

/**
 * Horizontal space needed for the embed actions button.
 */
const EMBED_PADDING = 38;

/**
 * Fix bug where Vega Lite was vertically-cropping the x-axis in some cases.
 * For example, in e2e/scripts/add_rows.py
 */
const BOTTOM_PADDING = 20;

/** Types of dataframe-indices that are supported as x axes. */
const SUPPORTED_INDEX_TYPES = new Set(["datetimeIndex", "float_64Index", "int_64Index", "rangeIndex", "timedeltaIndex", "uint_64Index"]);
class VegaLiteChart extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor() {
    super(...arguments);
    this.vegaView = void 0;
    this.vegaFinalizer = void 0;
    this.defaultDataName = DEFAULT_DATA_NAME;
    this.element = null;
    this.state = {
      error: undefined
    };
    this.finalizeView = () => {
      if (this.vegaFinalizer) {
        this.vegaFinalizer();
      }
      this.vegaFinalizer = undefined;
      this.vegaView = undefined;
    };
    this.generateSpec = () => {
      const {
        element: el,
        theme
      } = this.props;
      const spec = JSON.parse(el.get("spec"));
      const useContainerWidth = JSON.parse(el.get("useContainerWidth"));
      spec.config = configWithThemeDefaults(spec.config, theme);
      if (this.props.height) {
        // fullscreen
        spec.width = this.props.width - EMBED_PADDING;
        spec.height = this.props.height;
      } else if (useContainerWidth) {
        spec.width = this.props.width - EMBED_PADDING;
      }
      if (!spec.padding) {
        spec.padding = {};
      }
      if (spec.padding.bottom == null) {
        spec.padding.bottom = BOTTOM_PADDING;
      }
      if (spec.datasets) {
        throw new Error("Datasets should not be passed as part of the spec");
      }
      return spec;
    };
  }
  async componentDidMount() {
    try {
      await this.createView();
    } catch (e) {
      const error = (0,src_lib_ErrorHandling__WEBPACK_IMPORTED_MODULE_5__.ensureError)(e);
      this.setState({
        error
      });
    }
  }
  componentWillUnmount() {
    this.finalizeView();
  }

  /**
   * Finalize the view so it can be garbage collected. This should be done
   * when a new view is created, and when the component unmounts.
   */

  async componentDidUpdate(prevProps) {
    const {
      element: prevElement,
      theme: prevTheme
    } = prevProps;
    const {
      element,
      theme
    } = this.props;
    const prevSpec = prevElement.get("spec");
    const spec = element.get("spec");
    if (!this.vegaView || prevSpec !== spec || prevTheme !== theme || prevProps.width !== this.props.width || prevProps.height !== this.props.height) {
      (0,src_lib_log__WEBPACK_IMPORTED_MODULE_1__.logMessage)("Vega spec changed.");
      try {
        await this.createView();
      } catch (e) {
        const error = (0,src_lib_ErrorHandling__WEBPACK_IMPORTED_MODULE_5__.ensureError)(e);
        this.setState({
          error
        });
      }
      return;
    }
    const prevData = prevElement.get("data");
    const data = element.get("data");
    if (prevData || data) {
      this.updateData(this.defaultDataName, prevData, data);
    }
    const prevDataSets = getDataSets(prevElement) || {};
    const dataSets = getDataSets(element) || {};
    for (const [name, dataset] of Object.entries(dataSets)) {
      const datasetName = name || this.defaultDataName;
      const prevDataset = prevDataSets[datasetName];
      this.updateData(datasetName, prevDataset, dataset);
    }

    // Remove all datasets that are in the previous but not the current datasets.
    for (const name of Object.keys(prevDataSets)) {
      if (!dataSets.hasOwnProperty(name) && name !== this.defaultDataName) {
        this.updateData(name, null, null);
      }
    }
    this.vegaView.resize().runAsync();
  }
  /**
   * Update the dataset in the Vega view. This method tried to minimize changes
   * by automatically creating and applying diffs.
   *
   * @param name The name of the dataset.
   * @param prevData The dataset before the update.
   * @param data The dataset at the current state.
   */
  updateData(name, prevData, data) {
    if (!this.vegaView) {
      throw new Error("Chart has not been drawn yet");
    }
    if (!data || !data.get("data")) {
      const view = this.vegaView;
      // eslint-disable-next-line no-underscore-dangle
      const viewHasDataWithName = view._runtime.data.hasOwnProperty(name);
      if (viewHasDataWithName) {
        this.vegaView.remove(name, vega__WEBPACK_IMPORTED_MODULE_7__.truthy);
      }
      return;
    }
    if (!prevData || !prevData.get("data")) {
      this.vegaView.insert(name, getDataArray(data));
      return;
    }
    const [prevNumRows, prevNumCols] = (0,src_lib_dataFrameProto__WEBPACK_IMPORTED_MODULE_4__.tableGetRowsAndCols)(prevData.get("data"));
    const [numRows, numCols] = (0,src_lib_dataFrameProto__WEBPACK_IMPORTED_MODULE_4__.tableGetRowsAndCols)(data.get("data"));

    // Check if dataframes have same "shape" but the new one has more rows.
    if (dataIsAnAppendOfPrev(prevData, prevNumRows, prevNumCols, data, numRows, numCols)) {
      if (prevNumRows < numRows) {
        this.vegaView.insert(name, getDataArray(data, prevNumRows));
      }
    } else {
      // Clean the dataset and insert from scratch.
      const cs = vega__WEBPACK_IMPORTED_MODULE_7__.changeset().remove(vega__WEBPACK_IMPORTED_MODULE_7__.truthy).insert(getDataArray(data));
      this.vegaView.change(name, cs);
      (0,src_lib_log__WEBPACK_IMPORTED_MODULE_1__.logMessage)(`Had to clear the ${name} dataset before inserting data through Vega view.`);
    }
  }

  /**
   * Create a new Vega view and add the data.
   */
  async createView() {
    (0,src_lib_log__WEBPACK_IMPORTED_MODULE_1__.logMessage)("Creating a new Vega view.");
    if (!this.element) {
      throw Error("Element missing.");
    }

    // Finalize the previous view so it can be garbage collected.
    this.finalizeView();
    const el = this.props.element;
    const spec = this.generateSpec();
    const options = {
      // Adds interpreter support for Vega expressions that is compliant with CSP
      ast: true,
      expr: vega_interpreter__WEBPACK_IMPORTED_MODULE_8__.expressionInterpreter
    };
    const {
      vgSpec,
      view,
      finalize
    } = await (0,vega_embed__WEBPACK_IMPORTED_MODULE_6__["default"])(this.element, spec, options);
    this.vegaView = view;
    this.vegaFinalizer = finalize;
    const datasets = getDataArrays(el);

    // Heuristic to determine the default dataset name.
    const datasetNames = datasets ? Object.keys(datasets) : [];
    if (datasetNames.length === 1) {
      const [datasetName] = datasetNames;
      this.defaultDataName = datasetName;
    } else if (datasetNames.length === 0 && vgSpec.data) {
      this.defaultDataName = DEFAULT_DATA_NAME;
    }
    const dataObj = getInlineData(el);
    if (dataObj) {
      view.insert(this.defaultDataName, dataObj);
    }
    if (datasets) {
      for (const [name, data] of Object.entries(datasets)) {
        view.insert(name, data);
      }
    }
    await view.runAsync();

    // Fix bug where the "..." menu button overlaps with charts where width is
    // set to -1 on first load.
    this.vegaView.resize().runAsync();
  }
  render() {
    if (this.state.error) {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw this.state.error;
    }
    return (
      /*#__PURE__*/
      // Create the container Vega draws inside.
      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_9__.StyledVegaLiteChartContainer, {
        "data-testid": "stVegaLiteChart",
        ref: c => {
          this.element = c;
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 7
      }, this)
    );
  }
}
function getInlineData(el) {
  const dataProto = el.get("data");
  if (!dataProto) {
    return null;
  }
  return getDataArray(dataProto);
}
function getDataArrays(el) {
  const datasets = getDataSets(el);
  if (datasets == null) {
    return null;
  }
  const datasetArrays = {};
  for (const [name, dataset] of Object.entries(datasets)) {
    datasetArrays[name] = getDataArray(dataset);
  }
  return datasetArrays;
}
function getDataSets(el) {
  if (!el.get("datasets") || el.get("datasets").isEmpty()) {
    return null;
  }
  const datasets = {};
  el.get("datasets").forEach(x => {
    if (!x) {
      return;
    }
    const name = x.get("hasName") ? x.get("name") : null;
    datasets[name] = x.get("data");
  });
  return datasets;
}
function getDataArray(dataProto) {
  let startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (!dataProto.get("data")) {
    return [];
  }
  if (!dataProto.get("index")) {
    return [];
  }
  if (!dataProto.get("columns")) {
    return [];
  }
  const dataArr = [];
  const [rows, cols] = (0,src_lib_dataFrameProto__WEBPACK_IMPORTED_MODULE_4__.tableGetRowsAndCols)(dataProto.get("data"));
  const indexType = dataProto.get("index").get("type");
  const hasSupportedIndex = SUPPORTED_INDEX_TYPES.has(indexType);
  for (let rowIndex = startIndex; rowIndex < rows; rowIndex++) {
    const row = {};
    if (hasSupportedIndex) {
      row[MagicFields.DATAFRAME_INDEX] = (0,src_lib_dataFrameProto__WEBPACK_IMPORTED_MODULE_4__.indexGet)(dataProto.get("index"), 0, rowIndex);
    }
    for (let colIndex = 0; colIndex < cols; colIndex++) {
      row[(0,src_lib_dataFrameProto__WEBPACK_IMPORTED_MODULE_4__.indexGet)(dataProto.get("columns"), 0, colIndex)] = (0,src_lib_dataFrameProto__WEBPACK_IMPORTED_MODULE_4__.tableGet)(dataProto.get("data"), colIndex, rowIndex);
    }
    dataArr.push(row);
  }
  return dataArr;
}

/**
 * Checks if data looks like it's just prevData plus some appended rows.
 */
function dataIsAnAppendOfPrev(prevData, prevNumRows, prevNumCols, data, numRows, numCols) {
  // Check whether dataframes have the same shape.

  // not an append
  if (prevNumCols !== numCols) {
    return false;
  }

  // Data can be updated, but still have the same number of rows.
  // We consider the case an append only when the number of rows has increased
  if (prevNumRows >= numRows) {
    return false;
  }

  // if no previous data, render from scratch
  if (prevNumRows === 0) {
    return false;
  }
  const df0 = prevData.get("data");
  const df1 = data.get("data");
  const c = numCols - 1;
  const r = prevNumRows - 1;

  // Check if the new dataframe looks like it's a superset of the old one.
  // (this is a very light check, and not guaranteed to be right!)
  if ((0,src_lib_dataFrameProto__WEBPACK_IMPORTED_MODULE_4__.tableGet)(df0, c, 0) !== (0,src_lib_dataFrameProto__WEBPACK_IMPORTED_MODULE_4__.tableGet)(df1, c, 0) || (0,src_lib_dataFrameProto__WEBPACK_IMPORTED_MODULE_4__.tableGet)(df0, c, r) !== (0,src_lib_dataFrameProto__WEBPACK_IMPORTED_MODULE_4__.tableGet)(df1, c, r)) {
    return false;
  }
  return true;
}
function configWithThemeDefaults(config, theme) {
  const {
    colors,
    fontSizes,
    genericFonts
  } = theme;
  const themeFonts = {
    labelFont: genericFonts.bodyFont,
    titleFont: genericFonts.bodyFont,
    labelFontSize: fontSizes.twoSmPx,
    titleFontSize: fontSizes.twoSmPx
  };
  const themeDefaults = {
    background: colors.bgColor,
    axis: {
      labelColor: colors.bodyText,
      titleColor: colors.bodyText,
      gridColor: colors.fadedText10,
      ...themeFonts
    },
    legend: {
      labelColor: colors.bodyText,
      titleColor: colors.bodyText,
      ...themeFonts
    },
    title: {
      color: colors.bodyText,
      subtitleColor: colors.bodyText,
      ...themeFonts
    },
    header: {
      labelColor: colors.bodyText
    },
    view: {
      continuousHeight: 300,
      continuousWidth: 400
    }
  };
  if (!config) {
    return themeDefaults;
  }

  // Fill in theme defaults where the user didn't specify config options.
  return lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()({}, themeDefaults, config);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.b)(_c = (0,src_hocs_withFullScreenWrapper__WEBPACK_IMPORTED_MODULE_3__["default"])(VegaLiteChart)));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "%default%$withTheme");
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

/***/ "../../streamlit/frontend/src/components/elements/VegaLiteChart/index.tsx":
/*!********************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/VegaLiteChart/index.tsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _VegaLiteChart__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _VegaLiteChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VegaLiteChart */ "../../streamlit/frontend/src/components/elements/VegaLiteChart/VegaLiteChart.tsx");
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

/***/ "../../streamlit/frontend/src/components/elements/VegaLiteChart/styled-components.ts":
/*!*******************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/VegaLiteChart/styled-components.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledVegaLiteChartContainer": () => (/* binding */ StyledVegaLiteChartContainer)
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

const StyledVegaLiteChartContainer = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e10fe9o10",
  label: "StyledVegaLiteChartContainer"
})(_ref => {
  let {
    theme
  } = _ref;
  return {
    // These styles come from VegaLite Library
    "&.vega-embed": {
      ".vega-actions": {
        zIndex: theme.zIndices.popupMenu
      },
      summary: {
        // Fix weird floating button height issue in Vega Lite.
        height: "auto",
        // Fix floating button appearing above pop-ups.
        zIndex: theme.zIndices.menuButton
      }
    }
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvVmVnYUxpdGVDaGFydC9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQjRDIiwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvVmVnYUxpdGVDaGFydC9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMilcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFZlZ2FMaXRlQ2hhcnRDb250YWluZXIgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIC8vIFRoZXNlIHN0eWxlcyBjb21lIGZyb20gVmVnYUxpdGUgTGlicmFyeVxuICBcIiYudmVnYS1lbWJlZFwiOiB7XG4gICAgXCIudmVnYS1hY3Rpb25zXCI6IHtcbiAgICAgIHpJbmRleDogdGhlbWUuekluZGljZXMucG9wdXBNZW51LFxuICAgIH0sXG4gICAgc3VtbWFyeToge1xuICAgICAgLy8gRml4IHdlaXJkIGZsb2F0aW5nIGJ1dHRvbiBoZWlnaHQgaXNzdWUgaW4gVmVnYSBMaXRlLlxuICAgICAgaGVpZ2h0OiBcImF1dG9cIixcbiAgICAgIC8vIEZpeCBmbG9hdGluZyBidXR0b24gYXBwZWFyaW5nIGFib3ZlIHBvcC11cHMuXG4gICAgICB6SW5kZXg6IHRoZW1lLnpJbmRpY2VzLm1lbnVCdXR0b24sXG4gICAgfSxcbiAgfSxcbn0pKVxuIl19 */");

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
//# sourceMappingURL=streamlit_frontend_src_components_elements_VegaLiteChart_index_tsx.chunk.js.map