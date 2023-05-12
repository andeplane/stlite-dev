"use strict";
(globalThis["webpackChunk_stlite_mountable"] = globalThis["webpackChunk_stlite_mountable"] || []).push([["streamlit_frontend_src_components_elements_ArrowVegaLiteChart_index_tsx"],{

/***/ "../../streamlit/frontend/src/components/elements/ArrowVegaLiteChart/ArrowVegaLiteChart.tsx":
/*!**************************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/ArrowVegaLiteChart/ArrowVegaLiteChart.tsx ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrowVegaLiteChart": () => (/* binding */ ArrowVegaLiteChart),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getDataArray": () => (/* binding */ getDataArray)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/react */ "../../node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js");
/* harmony import */ var vega_embed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vega-embed */ "../../node_modules/vega-embed/build/vega-embed.module.js");
/* harmony import */ var vega__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vega */ "../../node_modules/vega/build/vega.module.js");
/* harmony import */ var vega_interpreter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vega-interpreter */ "../../node_modules/vega-interpreter/build/vega-interpreter.module.js");
/* harmony import */ var src_lib_log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/lib/log */ "../../streamlit/frontend/src/lib/log.ts");
/* harmony import */ var src_hocs_withFullScreenWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/hocs/withFullScreenWrapper */ "../../streamlit/frontend/src/hocs/withFullScreenWrapper/index.tsx");
/* harmony import */ var src_lib_ErrorHandling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/lib/ErrorHandling */ "../../streamlit/frontend/src/lib/ErrorHandling.ts");
/* harmony import */ var src_lib_Quiver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/lib/Quiver */ "../../streamlit/frontend/src/lib/Quiver.ts");
/* harmony import */ var _CustomTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CustomTheme */ "../../streamlit/frontend/src/components/elements/ArrowVegaLiteChart/CustomTheme.tsx");
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styled-components */ "../../streamlit/frontend/src/components/elements/ArrowVegaLiteChart/styled-components.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/elements/ArrowVegaLiteChart/ArrowVegaLiteChart.tsx";
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
 * Fix bug where Vega Lite was vertically-cropping the x-axis in some cases.
 * For example, in e2e/scripts/add_rows.py
 */
const BOTTOM_PADDING = 20;

/** Types of dataframe-indices that are supported as x axis. */
const SUPPORTED_INDEX_TYPES = new Set([src_lib_Quiver__WEBPACK_IMPORTED_MODULE_7__.IndexTypeName.DatetimeIndex, src_lib_Quiver__WEBPACK_IMPORTED_MODULE_7__.IndexTypeName.Float64Index, src_lib_Quiver__WEBPACK_IMPORTED_MODULE_7__.IndexTypeName.Int64Index, src_lib_Quiver__WEBPACK_IMPORTED_MODULE_7__.IndexTypeName.RangeIndex, src_lib_Quiver__WEBPACK_IMPORTED_MODULE_7__.IndexTypeName.UInt64Index]);
class ArrowVegaLiteChart extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
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
      var _spec$usermeta, _spec$usermeta$embedO;
      const {
        element: el,
        theme
      } = this.props;
      const spec = JSON.parse(el.spec);
      const {
        useContainerWidth
      } = el;
      if (el.vegaLiteTheme === "streamlit") {
        spec.config = (0,_CustomTheme__WEBPACK_IMPORTED_MODULE_8__.applyStreamlitTheme)(spec.config, theme);
      } else if (((_spec$usermeta = spec.usermeta) === null || _spec$usermeta === void 0 ? void 0 : (_spec$usermeta$embedO = _spec$usermeta.embedOptions) === null || _spec$usermeta$embedO === void 0 ? void 0 : _spec$usermeta$embedO.theme) === "streamlit") {
        spec.config = (0,_CustomTheme__WEBPACK_IMPORTED_MODULE_8__.applyStreamlitTheme)(spec.config, theme);
        // Remove the theme from the usermeta so it doesn't get picked up by vega embed.
        spec.usermeta.embedOptions.theme = undefined;
      } else {
        // Apply minor theming improvements to work better with Streamlit
        spec.config = (0,_CustomTheme__WEBPACK_IMPORTED_MODULE_8__.applyThemeDefaults)(spec.config, theme);
      }
      if (this.props.height) {
        // fullscreen
        spec.width = this.props.width;
        spec.height = this.props.height;
      } else if (useContainerWidth) {
        spec.width = this.props.width;
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
      const error = (0,src_lib_ErrorHandling__WEBPACK_IMPORTED_MODULE_6__.ensureError)(e);
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
    const prevSpec = prevElement.spec;
    const {
      spec
    } = element;
    if (!this.vegaView || prevSpec !== spec || prevTheme !== theme || prevProps.width !== this.props.width || prevProps.height !== this.props.height || prevProps.element.vegaLiteTheme !== this.props.element.vegaLiteTheme) {
      (0,src_lib_log__WEBPACK_IMPORTED_MODULE_4__.logMessage)("Vega spec changed.");
      try {
        await this.createView();
      } catch (e) {
        const error = (0,src_lib_ErrorHandling__WEBPACK_IMPORTED_MODULE_6__.ensureError)(e);
        this.setState({
          error
        });
      }
      return;
    }
    const prevData = prevElement.data;
    const {
      data
    } = element;
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
    if (!data || data.data.numRows === 0) {
      const view = this.vegaView;
      // eslint-disable-next-line no-underscore-dangle
      const viewHasDataWithName = view._runtime.data.hasOwnProperty(name);
      if (viewHasDataWithName) {
        this.vegaView.remove(name, vega__WEBPACK_IMPORTED_MODULE_2__.truthy);
      }
      return;
    }
    if (!prevData || prevData.data.numRows === 0) {
      this.vegaView.insert(name, getDataArray(data));
      return;
    }
    const {
      dataRows: prevNumRows,
      dataColumns: prevNumCols
    } = prevData.dimensions;
    const {
      dataRows: numRows,
      dataColumns: numCols
    } = data.dimensions;

    // Check if dataframes have same "shape" but the new one has more rows.
    if (dataIsAnAppendOfPrev(prevData, prevNumRows, prevNumCols, data, numRows, numCols)) {
      if (prevNumRows < numRows) {
        this.vegaView.insert(name, getDataArray(data, prevNumRows));
      }
    } else {
      // Clean the dataset and insert from scratch.
      const cs = vega__WEBPACK_IMPORTED_MODULE_2__.changeset().remove(vega__WEBPACK_IMPORTED_MODULE_2__.truthy).insert(getDataArray(data));
      this.vegaView.change(name, cs);
      (0,src_lib_log__WEBPACK_IMPORTED_MODULE_4__.logMessage)(`Had to clear the ${name} dataset before inserting data through Vega view.`);
    }
  }

  /**
   * Create a new Vega view and add the data.
   */
  async createView() {
    (0,src_lib_log__WEBPACK_IMPORTED_MODULE_4__.logMessage)("Creating a new Vega view.");
    if (!this.element) {
      throw Error("Element missing.");
    }

    // Finalize the previous view so it can be garbage collected.
    this.finalizeView();
    const el = this.props.element;
    const spec = this.generateSpec();
    const options = {
      defaultStyle: true,
      // Adds interpreter support for Vega expressions that is compliant with CSP
      ast: true,
      expr: vega_interpreter__WEBPACK_IMPORTED_MODULE_3__.expressionInterpreter
    };
    const {
      vgSpec,
      view,
      finalize
    } = await (0,vega_embed__WEBPACK_IMPORTED_MODULE_1__["default"])(this.element, spec, options);
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
        "data-testid": "stArrowVegaLiteChart",
        ref: c => {
          this.element = c;
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 375,
        columnNumber: 7
      }, this)
    );
  }
}
function getInlineData(el) {
  const dataProto = el.data;
  if (!dataProto || dataProto.data.numRows === 0) {
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
  var _el$datasets;
  if (((_el$datasets = el.datasets) === null || _el$datasets === void 0 ? void 0 : _el$datasets.length) === 0) {
    return null;
  }
  const datasets = {};
  el.datasets.forEach(x => {
    if (!x) {
      return;
    }
    const name = x.hasName ? x.name : null;
    datasets[name] = x.data;
  });
  return datasets;
}
function getDataArray(dataProto) {
  let startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (dataProto.isEmpty()) {
    return [];
  }
  const dataArr = [];
  const {
    dataRows: rows,
    dataColumns: cols
  } = dataProto.dimensions;
  const indexType = src_lib_Quiver__WEBPACK_IMPORTED_MODULE_7__.Quiver.getTypeName(dataProto.types.index[0]);
  const hasSupportedIndex = SUPPORTED_INDEX_TYPES.has(indexType);
  for (let rowIndex = startIndex; rowIndex < rows; rowIndex++) {
    const row = {};
    if (hasSupportedIndex) {
      const indexValue = dataProto.getIndexValue(rowIndex, 0);
      // VegaLite can't handle BigInts, so they have to be converted to Numbers first
      row[MagicFields.DATAFRAME_INDEX] = typeof indexValue === "bigint" ? Number(indexValue) : indexValue;
    }
    for (let colIndex = 0; colIndex < cols; colIndex++) {
      const dataValue = dataProto.getDataValue(rowIndex, colIndex);
      row[dataProto.columns[0][colIndex]] = typeof dataValue === "bigint" ? Number(dataValue) : dataValue;
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
  const c = numCols - 1;
  const r = prevNumRows - 1;

  // Check if the new dataframe looks like it's a superset of the old one.
  // (this is a very light check, and not guaranteed to be right!)
  if (prevData.getDataValue(0, c) !== data.getDataValue(0, c) || prevData.getDataValue(r, c) !== data.getDataValue(r, c)) {
    return false;
  }
  return true;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.b)(_c = (0,src_hocs_withFullScreenWrapper__WEBPACK_IMPORTED_MODULE_5__["default"])(ArrowVegaLiteChart)));
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

/***/ "../../streamlit/frontend/src/components/elements/ArrowVegaLiteChart/CustomTheme.tsx":
/*!*******************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/ArrowVegaLiteChart/CustomTheme.tsx ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyStreamlitTheme": () => (/* binding */ applyStreamlitTheme),
/* harmony export */   "applyThemeDefaults": () => (/* binding */ applyThemeDefaults)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/theme */ "../../streamlit/frontend/src/theme/index.ts");
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



function applyStreamlitTheme(config, theme) {
  // This theming config contains multiple hard coded spacing values.
  // The reason is that we currently only have rem values in our spacing
  // definitions and vega lite requires numerical (pixel) values.

  const streamlitTheme = {
    font: theme.genericFonts.bodyFont,
    background: theme.colors.bgColor,
    fieldTitle: "verbal",
    autosize: {
      type: "fit",
      contains: "padding"
    },
    title: {
      align: "left",
      anchor: "start",
      color: theme.colors.headingColor,
      titleFontStyle: "normal",
      fontWeight: theme.fontWeights.bold,
      fontSize: theme.fontSizes.smPx + 2,
      orient: "top",
      offset: 26
    },
    axis: {
      labelFontSize: theme.fontSizes.twoSmPx,
      labelFontWeight: theme.fontWeights.normal,
      labelColor: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray70)(theme),
      labelFontStyle: "normal",
      titleFontWeight: theme.fontWeights.normal,
      titleFontSize: theme.fontSizes.smPx,
      titleColor: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray70)(theme),
      titleFontStyle: "normal",
      ticks: false,
      gridColor: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray30)(theme),
      domain: false,
      domainWidth: 1,
      domainColor: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray30)(theme),
      labelFlush: true,
      labelFlushOffset: 1,
      labelBound: false,
      labelLimit: 100,
      titlePadding: theme.spacing.lgPx,
      labelPadding: theme.spacing.lgPx,
      labelSeparation: theme.spacing.twoXSPx,
      labelOverlap: true
    },
    legend: {
      labelFontSize: theme.fontSizes.smPx,
      labelFontWeight: theme.fontWeights.normal,
      labelColor: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray70)(theme),
      titleFontSize: theme.fontSizes.smPx,
      titleFontWeight: theme.fontWeights.normal,
      titleFontStyle: "normal",
      titleColor: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray70)(theme),
      titlePadding: theme.spacing.mdPx,
      labelPadding: theme.spacing.lgPx,
      columnPadding: theme.spacing.smPx,
      rowPadding: theme.spacing.twoXSPx,
      padding: 7,
      symbolStrokeWidth: 4
    },
    range: {
      category: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getCategoricalColorsArray)(theme),
      diverging: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getDivergingColorsArray)(theme),
      ramp: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getSequentialColorsArray)(theme),
      heatmap: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getSequentialColorsArray)(theme)
    },
    view: {
      columns: 1,
      strokeWidth: 0,
      stroke: "transparent",
      continuousHeight: 350,
      continuousWidth: 400
    },
    concat: {
      columns: 1
    },
    facet: {
      columns: 1
    },
    mark: {
      tooltip: true,
      ...((0,src_theme__WEBPACK_IMPORTED_MODULE_1__.hasLightBackgroundColor)(theme) ? {
        color: "#0068C9"
      } : {
        color: "#83C9FF"
      })
    },
    bar: {
      binSpacing: theme.spacing.twoXSPx,
      discreteBandSize: {
        band: 0.85
      }
    },
    axisDiscrete: {
      grid: false
    },
    axisXPoint: {
      grid: false
    },
    axisTemporal: {
      grid: false
    },
    axisXBand: {
      grid: false
    }
  };
  if (!config) {
    return streamlitTheme;
  }

  // Fill in theme defaults where the user didn't specify config options.
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.mergeWith)({}, streamlitTheme, config, (_, b) => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(b) ? b : undefined);
}
function applyThemeDefaults(config, theme) {
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
      gridColor: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray30)(theme),
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
      continuousHeight: 350,
      continuousWidth: 400
    },
    mark: {
      tooltip: true
    }
  };
  if (!config) {
    return themeDefaults;
  }

  // Fill in theme defaults where the user didn't specify config options.
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.merge)({}, themeDefaults, config);
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

/***/ "../../streamlit/frontend/src/components/elements/ArrowVegaLiteChart/index.tsx":
/*!*************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/ArrowVegaLiteChart/index.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _ArrowVegaLiteChart__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _ArrowVegaLiteChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrowVegaLiteChart */ "../../streamlit/frontend/src/components/elements/ArrowVegaLiteChart/ArrowVegaLiteChart.tsx");
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

/***/ "../../streamlit/frontend/src/components/elements/ArrowVegaLiteChart/styled-components.ts":
/*!************************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/ArrowVegaLiteChart/styled-components.ts ***!
  \************************************************************************************************/
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
  target: "everg990",
  label: "StyledVegaLiteChartContainer"
})(_ref => {
  let {
    theme
  } = _ref;
  return {
    // These styles come from VegaLite Library
    "&.vega-embed": {
      "&:hover summary, .vega-embed:focus summary": {
        background: "transparent"
      },
      "&.has-actions": {
        paddingRight: 0
      },
      ".vega-actions": {
        zIndex: theme.zIndices.popupMenu,
        // Customize menu UI to look like the Streamlit menu:
        backgroundColor: theme.colors.bgColor,
        boxShadow: "rgb(0 0 0 / 16%) 0px 4px 16px",
        border: `1px solid ${theme.colors.fadedText10}`,
        a: {
          fontFamily: theme.genericFonts.bodyFont,
          fontWeight: theme.fontWeights.normal,
          fontSize: theme.fontSizes.md,
          margin: 0,
          padding: `${theme.spacing.twoXS} ${theme.spacing.twoXL}`,
          color: theme.colors.bodyText
        },
        "a:hover": {
          backgroundColor: theme.colors.secondaryBg,
          color: theme.colors.bodyText
        },
        ":before": {
          content: "none"
        },
        ":after": {
          content: "none"
        }
      },
      summary: {
        opacity: 0,
        // Fix weird floating button height issue in Vega Lite.
        height: "auto",
        // Fix floating button appearing above pop-ups.
        zIndex: theme.zIndices.menuButton,
        border: "none",
        boxShadow: "none",
        borderRadius: theme.radii.md,
        color: theme.colors.fadedText10,
        backgroundColor: "transparent",
        transition: "opacity 300ms 150ms,transform 300ms 150ms",
        "&:active, &:focus-visible, &:hover": {
          border: "none",
          boxShadow: "none",
          color: theme.colors.bodyText,
          opacity: "1 !important",
          background: theme.colors.darkenedBgMix25
        }
      }
    }
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvQXJyb3dWZWdhTGl0ZUNoYXJ0L3N0eWxlZC1jb21wb25lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCNEMiLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmsvc3RsaXRlLWRldi9zdGxpdGUtZGV2L3N0cmVhbWxpdC9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9lbGVtZW50cy9BcnJvd1ZlZ2FMaXRlQ2hhcnQvc3R5bGVkLWNvbXBvbmVudHMudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgU3RyZWFtbGl0IEluYy4gKDIwMTgtMjAyMikgU25vd2ZsYWtlIEluYy4gKDIwMjIpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRWZWdhTGl0ZUNoYXJ0Q29udGFpbmVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICAvLyBUaGVzZSBzdHlsZXMgY29tZSBmcm9tIFZlZ2FMaXRlIExpYnJhcnlcbiAgXCImLnZlZ2EtZW1iZWRcIjoge1xuICAgIFwiJjpob3ZlciBzdW1tYXJ5LCAudmVnYS1lbWJlZDpmb2N1cyBzdW1tYXJ5XCI6IHtcbiAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcbiAgICB9LFxuICAgIFwiJi5oYXMtYWN0aW9uc1wiOiB7XG4gICAgICBwYWRkaW5nUmlnaHQ6IDAsXG4gICAgfSxcbiAgICBcIi52ZWdhLWFjdGlvbnNcIjoge1xuICAgICAgekluZGV4OiB0aGVtZS56SW5kaWNlcy5wb3B1cE1lbnUsXG4gICAgICAvLyBDdXN0b21pemUgbWVudSBVSSB0byBsb29rIGxpa2UgdGhlIFN0cmVhbWxpdCBtZW51OlxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuYmdDb2xvcixcbiAgICAgIGJveFNoYWRvdzogXCJyZ2IoMCAwIDAgLyAxNiUpIDBweCA0cHggMTZweFwiLFxuICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmZhZGVkVGV4dDEwfWAsXG4gICAgICBhOiB7XG4gICAgICAgIGZvbnRGYW1pbHk6IHRoZW1lLmdlbmVyaWNGb250cy5ib2R5Rm9udCxcbiAgICAgICAgZm9udFdlaWdodDogdGhlbWUuZm9udFdlaWdodHMubm9ybWFsLFxuICAgICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLm1kLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudHdvWFN9ICR7dGhlbWUuc3BhY2luZy50d29YTH1gLFxuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJvZHlUZXh0LFxuICAgICAgfSxcbiAgICAgIFwiYTpob3ZlclwiOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnNlY29uZGFyeUJnLFxuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJvZHlUZXh0LFxuICAgICAgfSxcbiAgICAgIFwiOmJlZm9yZVwiOiB7XG4gICAgICAgIGNvbnRlbnQ6IFwibm9uZVwiLFxuICAgICAgfSxcbiAgICAgIFwiOmFmdGVyXCI6IHtcbiAgICAgICAgY29udGVudDogXCJub25lXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgc3VtbWFyeToge1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIC8vIEZpeCB3ZWlyZCBmbG9hdGluZyBidXR0b24gaGVpZ2h0IGlzc3VlIGluIFZlZ2EgTGl0ZS5cbiAgICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgICAvLyBGaXggZmxvYXRpbmcgYnV0dG9uIGFwcGVhcmluZyBhYm92ZSBwb3AtdXBzLlxuICAgICAgekluZGV4OiB0aGVtZS56SW5kaWNlcy5tZW51QnV0dG9uLFxuICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnJhZGlpLm1kLFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5mYWRlZFRleHQxMCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgdHJhbnNpdGlvbjogXCJvcGFjaXR5IDMwMG1zIDE1MG1zLHRyYW5zZm9ybSAzMDBtcyAxNTBtc1wiLFxuICAgICAgXCImOmFjdGl2ZSwgJjpmb2N1cy12aXNpYmxlLCAmOmhvdmVyXCI6IHtcbiAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ib2R5VGV4dCxcbiAgICAgICAgb3BhY2l0eTogXCIxICFpbXBvcnRhbnRcIixcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLmRhcmtlbmVkQmdNaXgyNSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pKVxuIl19 */");

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
//# sourceMappingURL=streamlit_frontend_src_components_elements_ArrowVegaLiteChart_index_tsx.chunk.js.map