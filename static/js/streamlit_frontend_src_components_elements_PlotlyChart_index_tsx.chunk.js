"use strict";
(globalThis["webpackChunk_stlite_mountable"] = globalThis["webpackChunk_stlite_mountable"] || []).push([["streamlit_frontend_src_components_elements_PlotlyChart_index_tsx"],{

/***/ "../../streamlit/frontend/src/components/elements/PlotlyChart/CustomTheme.tsx":
/*!************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/PlotlyChart/CustomTheme.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyStreamlitTheme": () => (/* binding */ applyStreamlitTheme),
/* harmony export */   "applyStreamlitThemeTemplateLayout": () => (/* binding */ applyStreamlitThemeTemplateLayout),
/* harmony export */   "layoutWithThemeDefaults": () => (/* binding */ layoutWithThemeDefaults),
/* harmony export */   "replaceTemporaryColors": () => (/* binding */ replaceTemporaryColors)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/theme */ "../../streamlit/frontend/src/theme/index.ts");
/* harmony import */ var src_lib_ErrorHandling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/lib/ErrorHandling */ "../../streamlit/frontend/src/lib/ErrorHandling.ts");
/* harmony import */ var src_lib_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/lib/log */ "../../streamlit/frontend/src/lib/log.ts");
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






/**
 * This applies general layout changes to things such as x axis,
 * y axis, legends, titles, grid changes, background, etc.
 * @param layout - spec.layout.template.layout
 * @param theme - Theme from useTheme()
 */
function applyStreamlitThemeTemplateLayout(layout, theme) {
  const {
    genericFonts,
    colors,
    fontSizes
  } = theme;
  const streamlitTheme = {
    font: {
      color: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray70)(theme),
      family: genericFonts.bodyFont,
      size: fontSizes.twoSmPx
    },
    title: {
      color: colors.headingColor,
      subtitleColor: colors.bodyText,
      font: {
        family: genericFonts.headingFont,
        size: fontSizes.mdPx,
        color: colors.headingColor
      },
      pad: {
        l: theme.spacing.twoXSPx
      },
      xanchor: "left",
      x: 0
    },
    legend: {
      title: {
        font: {
          size: fontSizes.twoSmPx,
          color: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray70)(theme)
        },
        side: "top"
      },
      valign: "top",
      bordercolor: colors.transparent,
      borderwidth: theme.spacing.nonePx,
      font: {
        size: fontSizes.twoSmPx,
        color: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray90)(theme)
      }
    },
    paper_bgcolor: colors.bgColor,
    plot_bgcolor: colors.bgColor,
    yaxis: {
      ticklabelposition: "outside",
      zerolinecolor: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray30)(theme),
      title: {
        font: {
          color: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray70)(theme),
          size: fontSizes.smPx
        },
        standoff: theme.spacing.twoXLPx
      },
      tickcolor: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray30)(theme),
      tickfont: {
        color: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray70)(theme),
        size: fontSizes.twoSmPx
      },
      gridcolor: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray30)(theme),
      minor: {
        gridcolor: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray30)(theme)
      },
      automargin: true
    },
    xaxis: {
      zerolinecolor: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray30)(theme),
      gridcolor: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray30)(theme),
      showgrid: false,
      tickfont: {
        color: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray70)(theme),
        size: fontSizes.twoSmPx
      },
      tickcolor: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray30)(theme),
      title: {
        font: {
          color: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray70)(theme),
          size: fontSizes.smPx
        },
        standoff: theme.spacing.xlPx
      },
      minor: {
        gridcolor: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray30)(theme)
      },
      zeroline: false,
      automargin: true,
      rangeselector: {
        bgcolor: colors.bgColor,
        bordercolor: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray30)(theme),
        borderwidth: 1,
        x: 0
      }
    },
    margin: {
      pad: theme.spacing.smPx,
      r: theme.spacing.nonePx,
      l: theme.spacing.nonePx
    },
    hoverlabel: {
      bgcolor: colors.bgColor,
      bordercolor: colors.fadedText10,
      font: {
        color: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray70)(theme),
        family: genericFonts.bodyFont,
        size: fontSizes.twoSmPx
      }
    },
    coloraxis: {
      colorbar: {
        thickness: 16,
        xpad: theme.spacing.twoXLPx,
        ticklabelposition: "outside",
        outlinecolor: colors.transparent,
        outlinewidth: 8,
        len: 0.75,
        y: 0.5745,
        title: {
          font: {
            color: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray70)(theme),
            size: fontSizes.smPx
          }
        },
        tickfont: {
          color: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray70)(theme),
          size: fontSizes.twoSmPx
        }
      }
    },
    // specifically for the ternary graph
    ternary: {
      gridcolor: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray70)(theme),
      bgcolor: colors.bgColor,
      title: {
        font: {
          family: genericFonts.bodyFont,
          size: fontSizes.smPx
        }
      },
      color: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray70)(theme),
      aaxis: {
        gridcolor: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray70)(theme),
        linecolor: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray70)(theme),
        tickfont: {
          family: genericFonts.bodyFont,
          size: fontSizes.twoSmPx
        }
      },
      baxis: {
        linecolor: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray70)(theme),
        gridcolor: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray70)(theme),
        tickfont: {
          family: genericFonts.bodyFont,
          size: fontSizes.twoSmPx
        }
      },
      caxis: {
        linecolor: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray70)(theme),
        gridcolor: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray70)(theme),
        tickfont: {
          family: genericFonts.bodyFont,
          size: fontSizes.twoSmPx
        }
      }
    }
  };
  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.merge)(layout, streamlitTheme);
}

/**
 * Replace the colors that we are using from streamlit_plotly_theme.py.
 * This is done so that we change colors based on the background color
 * as the backend has no idea of the background color.
 * @param spec the spec that we want to update
 * @param theme
 * @param elementTheme element.theme
 * @returns the updated spec with the correct theme colors
 */
function replaceCategoricalColors(spec, theme, elementTheme) {
  // All the placeholder constants defined here are matching the placeholders in the python implementation.
  const CATEGORY_0 = "#000001";
  const CATEGORY_1 = "#000002";
  const CATEGORY_2 = "#000003";
  const CATEGORY_3 = "#000004";
  const CATEGORY_4 = "#000005";
  const CATEGORY_5 = "#000006";
  const CATEGORY_6 = "#000007";
  const CATEGORY_7 = "#000008";
  const CATEGORY_8 = "#000009";
  const CATEGORY_9 = "#000010";
  if (elementTheme === "streamlit") {
    const categoryColors = (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getCategoricalColorsArray)(theme);
    spec = spec.replaceAll(CATEGORY_0, categoryColors[0]);
    spec = spec.replaceAll(CATEGORY_1, categoryColors[1]);
    spec = spec.replaceAll(CATEGORY_2, categoryColors[2]);
    spec = spec.replaceAll(CATEGORY_3, categoryColors[3]);
    spec = spec.replaceAll(CATEGORY_4, categoryColors[4]);
    spec = spec.replaceAll(CATEGORY_5, categoryColors[5]);
    spec = spec.replaceAll(CATEGORY_6, categoryColors[6]);
    spec = spec.replaceAll(CATEGORY_7, categoryColors[7]);
    spec = spec.replaceAll(CATEGORY_8, categoryColors[8]);
    spec = spec.replaceAll(CATEGORY_9, categoryColors[9]);
  } else {
    // Default plotly colors
    spec = spec.replaceAll(CATEGORY_0, "#636efa");
    spec = spec.replaceAll(CATEGORY_1, "#EF553B");
    spec = spec.replaceAll(CATEGORY_2, "#00cc96");
    spec = spec.replaceAll(CATEGORY_3, "#ab63fa");
    spec = spec.replaceAll(CATEGORY_4, "#FFA15A");
    spec = spec.replaceAll(CATEGORY_5, "#19d3f3");
    spec = spec.replaceAll(CATEGORY_6, "#FF6692");
    spec = spec.replaceAll(CATEGORY_7, "#B6E880");
    spec = spec.replaceAll(CATEGORY_8, "#FF97FF");
    spec = spec.replaceAll(CATEGORY_9, "#FECB52");
  }
  return spec;
}
function replaceSequentialColors(spec, theme, elementTheme) {
  // All the placeholder constants defined here are matching the placeholders in the python implementation.
  const SEQUENTIAL_0 = "#000011";
  const SEQUENTIAL_1 = "#000012";
  const SEQUENTIAL_2 = "#000013";
  const SEQUENTIAL_3 = "#000014";
  const SEQUENTIAL_4 = "#000015";
  const SEQUENTIAL_5 = "#000016";
  const SEQUENTIAL_6 = "#000017";
  const SEQUENTIAL_7 = "#000018";
  const SEQUENTIAL_8 = "#000019";
  const SEQUENTIAL_9 = "#000020";
  if (elementTheme === "streamlit") {
    const sequentialColors = (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getSequentialColorsArray)(theme);
    spec = spec.replaceAll(SEQUENTIAL_0, sequentialColors[0]);
    spec = spec.replaceAll(SEQUENTIAL_1, sequentialColors[1]);
    spec = spec.replaceAll(SEQUENTIAL_2, sequentialColors[2]);
    spec = spec.replaceAll(SEQUENTIAL_3, sequentialColors[3]);
    spec = spec.replaceAll(SEQUENTIAL_4, sequentialColors[4]);
    spec = spec.replaceAll(SEQUENTIAL_5, sequentialColors[5]);
    spec = spec.replaceAll(SEQUENTIAL_6, sequentialColors[6]);
    spec = spec.replaceAll(SEQUENTIAL_7, sequentialColors[7]);
    spec = spec.replaceAll(SEQUENTIAL_8, sequentialColors[8]);
    spec = spec.replaceAll(SEQUENTIAL_9, sequentialColors[9]);
  } else {
    // Default plotly colors
    spec = spec.replaceAll(SEQUENTIAL_0, "#0d0887");
    spec = spec.replaceAll(SEQUENTIAL_1, "#46039f");
    spec = spec.replaceAll(SEQUENTIAL_2, "#7201a8");
    spec = spec.replaceAll(SEQUENTIAL_3, "#9c179e");
    spec = spec.replaceAll(SEQUENTIAL_4, "#bd3786");
    spec = spec.replaceAll(SEQUENTIAL_5, "#d8576b");
    spec = spec.replaceAll(SEQUENTIAL_6, "#ed7953");
    spec = spec.replaceAll(SEQUENTIAL_7, "#fb9f3a");
    spec = spec.replaceAll(SEQUENTIAL_8, "#fdca26");
    spec = spec.replaceAll(SEQUENTIAL_9, "#f0f921");
  }
  return spec;
}
function replaceDivergingColors(spec, theme, elementTheme) {
  // All the placeholder constants defined here are matching the placeholders in the python implementation.
  const DIVERGING_0 = "#000021";
  const DIVERGING_1 = "#000022";
  const DIVERGING_2 = "#000023";
  const DIVERGING_3 = "#000024";
  const DIVERGING_4 = "#000025";
  const DIVERGING_5 = "#000026";
  const DIVERGING_6 = "#000027";
  const DIVERGING_7 = "#000028";
  const DIVERGING_8 = "#000029";
  const DIVERGING_9 = "#000030";
  const DIVERGING_10 = "#000031";
  if (elementTheme === "streamlit") {
    const divergingColors = (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getDivergingColorsArray)(theme);
    spec = spec.replaceAll(DIVERGING_0, divergingColors[0]);
    spec = spec.replaceAll(DIVERGING_1, divergingColors[1]);
    spec = spec.replaceAll(DIVERGING_2, divergingColors[2]);
    spec = spec.replaceAll(DIVERGING_3, divergingColors[3]);
    spec = spec.replaceAll(DIVERGING_4, divergingColors[4]);
    spec = spec.replaceAll(DIVERGING_5, divergingColors[5]);
    spec = spec.replaceAll(DIVERGING_6, divergingColors[6]);
    spec = spec.replaceAll(DIVERGING_7, divergingColors[7]);
    spec = spec.replaceAll(DIVERGING_8, divergingColors[8]);
    spec = spec.replaceAll(DIVERGING_9, divergingColors[9]);
    spec = spec.replaceAll(DIVERGING_10, divergingColors[10]);
  } else {
    // Default plotly colors
    spec = spec.replaceAll(DIVERGING_0, "#8e0152");
    spec = spec.replaceAll(DIVERGING_1, "#c51b7d");
    spec = spec.replaceAll(DIVERGING_2, "#de77ae");
    spec = spec.replaceAll(DIVERGING_3, "#f1b6da");
    spec = spec.replaceAll(DIVERGING_4, "#fde0ef");
    spec = spec.replaceAll(DIVERGING_5, "#f7f7f7");
    spec = spec.replaceAll(DIVERGING_6, "#e6f5d0");
    spec = spec.replaceAll(DIVERGING_7, "#b8e186");
    spec = spec.replaceAll(DIVERGING_8, "#7fbc41");
    spec = spec.replaceAll(DIVERGING_9, "#4d9221");
    spec = spec.replaceAll(DIVERGING_10, "#276419");
  }
  return spec;
}

/**
 * Because Template.layout doesn't affect the go(plotly.graph_objects) graphs,
 * we use this method to specifically replace these graph properties.
 * */
function replaceGOSpecificColors(spec, theme) {
  // All the placeholder constants defined here are matching the placeholders in the python implementation.
  const INCREASING = "#000032";
  const DECREASING = "#000033";
  const TOTAL = "#000034";
  const GRAY_30 = "#000035";
  const GRAY_70 = "#000036";
  const GRAY_90 = "#000037";
  const BG_COLOR = "#000038";
  const FADED_TEXT_05 = "#000039";
  const BG_MIX = "#000040";
  spec = spec.replaceAll(INCREASING, (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getIncreasingGreen)(theme));
  spec = spec.replaceAll(DECREASING, (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getDecreasingRed)(theme));
  spec = spec.replaceAll(TOTAL, (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.hasLightBackgroundColor)(theme) ? theme.colors.blue80 : theme.colors.blue40);
  spec = spec.replaceAll(GRAY_30, (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray30)(theme));
  spec = spec.replaceAll(GRAY_70, (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray70)(theme));
  spec = spec.replaceAll(GRAY_90, (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.getGray90)(theme));
  spec = spec.replaceAll(BG_COLOR, theme.colors.bgColor);
  spec = spec.replaceAll(FADED_TEXT_05, theme.colors.fadedText05);
  spec = spec.replaceAll(BG_MIX, theme.colors.bgMix);
  return spec;
}
function replaceTemporaryColors(spec, theme, elementTheme) {
  spec = replaceGOSpecificColors(spec, theme);
  spec = replaceCategoricalColors(spec, theme, elementTheme);
  spec = replaceSequentialColors(spec, theme, elementTheme);
  spec = replaceDivergingColors(spec, theme, elementTheme);
  return spec;
}

/**
 * Applies the Streamlit theme by overriding properties in
 * spec.data, spec.layout.template.data, and spec.layout.template.layout
 * @param spec - spec
 */
function applyStreamlitTheme(spec, theme) {
  try {
    applyStreamlitThemeTemplateLayout(spec.layout.template.layout, theme);
  } catch (e) {
    const err = (0,src_lib_ErrorHandling__WEBPACK_IMPORTED_MODULE_2__.ensureError)(e);
    (0,src_lib_log__WEBPACK_IMPORTED_MODULE_3__.logError)(err);
  }
  if ("title" in spec.layout) {
    spec.layout.title = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.merge)(spec.layout.title, {
      text: `<b>${spec.layout.title.text}</b>`
    });
  }
}

/**
 * Apply minimum changes to graph to fit streamlit
 * @param layout - spec.layout
 * @param theme - theme from useTheme()
 * @returns modified spec.layout
 */
function layoutWithThemeDefaults(layout, theme) {
  const {
    colors,
    genericFonts
  } = theme;
  const themeDefaults = {
    font: {
      color: colors.bodyText,
      family: genericFonts.bodyFont
    },
    paper_bgcolor: colors.bgColor,
    plot_bgcolor: colors.secondaryBg
  };

  // Fill in theme defaults where the user didn't specify layout options.
  return {
    ...layout,
    font: {
      ...themeDefaults.font,
      ...layout.font
    },
    paper_bgcolor: layout.paper_bgcolor || themeDefaults.paper_bgcolor,
    plot_bgcolor: layout.plot_bgcolor || themeDefaults.plot_bgcolor
  };
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

/***/ "../../streamlit/frontend/src/components/elements/PlotlyChart/PlotlyChart.tsx":
/*!************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/PlotlyChart/PlotlyChart.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_HEIGHT": () => (/* binding */ DEFAULT_HEIGHT),
/* harmony export */   "PlotlyChart": () => (/* binding */ PlotlyChart),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "../../node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js");
/* harmony import */ var src_hocs_withFullScreenWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/hocs/withFullScreenWrapper */ "../../streamlit/frontend/src/hocs/withFullScreenWrapper/index.tsx");
/* harmony import */ var react_plotly_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-plotly.js */ "../../node_modules/react-plotly.js/react-plotly.js");
/* harmony import */ var _CustomTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomTheme */ "../../streamlit/frontend/src/components/elements/PlotlyChart/CustomTheme.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/elements/PlotlyChart/PlotlyChart.tsx",
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







const DEFAULT_HEIGHT = 450;
function renderIFrame(_ref) {
  let {
    url,
    width,
    height: propHeight
  } = _ref;
  const height = propHeight || DEFAULT_HEIGHT;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("iframe", {
    title: "Plotly",
    src: url,
    style: {
      width,
      height
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
function renderFigure(_ref2) {
  _s();
  let {
    element,
    width,
    height
  } = _ref2;
  const figure = element.figure;
  const isFullScreen = () => !!height;
  const theme = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.u)();
  const generateSpec = () => {
    const spec = JSON.parse((0,_CustomTheme__WEBPACK_IMPORTED_MODULE_3__.replaceTemporaryColors)(figure.spec, theme, element.theme));
    const initialHeight = spec.layout.height;
    const initialWidth = spec.layout.width;
    if (isFullScreen()) {
      spec.layout.width = width;
      spec.layout.height = height;
    } else if (element.useContainerWidth) {
      spec.layout.width = width;
    } else {
      spec.layout.width = initialWidth;
      spec.layout.height = initialHeight;
    }
    if (element.theme === "streamlit") {
      (0,_CustomTheme__WEBPACK_IMPORTED_MODULE_3__.applyStreamlitTheme)(spec, theme);
    } else {
      // Apply minor theming improvements to work better with Streamlit
      spec.layout = (0,_CustomTheme__WEBPACK_IMPORTED_MODULE_3__.layoutWithThemeDefaults)(spec.layout, theme);
    }
    return spec;
  };
  const [config, setConfig] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(JSON.parse(figure.config));
  const [spec, setSpec] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(generateSpec());

  // Update config and spec references iff the theme or props change
  // Use useLayoutEffect to synchronize rerender by updating state
  // More information: https://kentcdodds.com/blog/useeffect-vs-uselayouteffect
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    setConfig(JSON.parse(figure.config));
    setSpec(generateSpec());
  }, [element, theme, height, width]);
  const {
    data,
    layout,
    frames
  } = spec;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_plotly_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "stPlotlyChart",
    data: data,
    layout: layout,
    config: config,
    frames: frames
  }, isFullScreen() ? "fullscreen" : "original", false, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 5
  }, this);
}
_s(renderFigure, "nHKnkNPt8cU2JExiIndg4cNg+4k=", false, function () {
  return [_emotion_react__WEBPACK_IMPORTED_MODULE_5__.u];
});
function PlotlyChart(_ref3) {
  let {
    width,
    element,
    height
  } = _ref3;
  switch (element.chart) {
    case "url":
      return renderIFrame({
        url: element.url,
        height,
        width
      });
    case "figure":
      return renderFigure({
        element,
        height,
        width
      });
    default:
      throw new Error(`Unrecognized PlotlyChart type: ${element.chart}`);
  }
}
_c = PlotlyChart;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = (0,src_hocs_withFullScreenWrapper__WEBPACK_IMPORTED_MODULE_1__["default"])(PlotlyChart));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "PlotlyChart");
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

/***/ "../../streamlit/frontend/src/components/elements/PlotlyChart/index.tsx":
/*!******************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/PlotlyChart/index.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _PlotlyChart__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _PlotlyChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlotlyChart */ "../../streamlit/frontend/src/components/elements/PlotlyChart/PlotlyChart.tsx");
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
//# sourceMappingURL=streamlit_frontend_src_components_elements_PlotlyChart_index_tsx.chunk.js.map