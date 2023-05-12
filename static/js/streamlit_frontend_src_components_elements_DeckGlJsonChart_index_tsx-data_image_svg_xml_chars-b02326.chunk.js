(globalThis["webpackChunk_stlite_mountable"] = globalThis["webpackChunk_stlite_mountable"] || []).push([["streamlit_frontend_src_components_elements_DeckGlJsonChart_index_tsx-data_image_svg_xml_chars-b02326"],{

/***/ "../../streamlit/frontend/src/components/elements/DeckGlJsonChart/DeckGlJsonChart.tsx":
/*!********************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/DeckGlJsonChart/DeckGlJsonChart.tsx ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_DECK_GL_HEIGHT": () => (/* binding */ DEFAULT_DECK_GL_HEIGHT),
/* harmony export */   "DeckGlJsonChart": () => (/* binding */ DeckGlJsonChart),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var deck_gl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! deck.gl */ "../../node_modules/@deck.gl/react/dist/esm/deckgl.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEqual */ "../../node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-map-gl */ "../../node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @emotion/react */ "../../node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js");
/* harmony import */ var src_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/theme */ "../../streamlit/frontend/src/theme/index.ts");
/* harmony import */ var _deck_gl_layers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @deck.gl/layers */ "../../node_modules/@deck.gl/layers/dist/esm/index.js");
/* harmony import */ var _deck_gl_json__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @deck.gl/json */ "../../node_modules/@deck.gl/json/dist/esm/json-converter.js");
/* harmony import */ var _deck_gl_geo_layers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @deck.gl/geo-layers */ "../../node_modules/@deck.gl/geo-layers/dist/esm/index.js");
/* harmony import */ var _deck_gl_aggregation_layers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @deck.gl/aggregation-layers */ "../../node_modules/@deck.gl/aggregation-layers/dist/esm/index.js");
/* harmony import */ var _deck_gl_mesh_layers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @deck.gl/mesh-layers */ "../../node_modules/@deck.gl/mesh-layers/dist/esm/index.js");
/* harmony import */ var _loaders_gl_csv__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @loaders.gl/csv */ "../../node_modules/@loaders.gl/csv/dist/esm/csv-loader.js");
/* harmony import */ var _loaders_gl_gltf__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @loaders.gl/gltf */ "../../node_modules/@loaders.gl/gltf/dist/esm/gltf-loader.js");
/* harmony import */ var _loaders_gl_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @loaders.gl/core */ "../../node_modules/@loaders.gl/core/dist/esm/lib/api/register-loaders.js");
/* harmony import */ var src_hocs_withFullScreenWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/hocs/withFullScreenWrapper */ "../../streamlit/frontend/src/hocs/withFullScreenWrapper/index.tsx");
/* harmony import */ var src_hocs_withMapboxToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/hocs/withMapboxToken */ "../../streamlit/frontend/src/hocs/withMapboxToken/index.tsx");
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/lib/utils */ "../../streamlit/frontend/src/lib/utils.ts");
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styled-components */ "../../streamlit/frontend/src/components/elements/DeckGlJsonChart/styled-components.ts");
/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mapbox-gl/dist/mapbox-gl.css */ "../../node_modules/mapbox-gl/dist/mapbox-gl.css");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/elements/DeckGlJsonChart/DeckGlJsonChart.tsx";
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







// We don't have Typescript defs for these imports, which makes ESLint unhappy
/* eslint-disable import/no-extraneous-dependencies */





/* eslint-enable */










const configuration = {
  classes: {
    ..._deck_gl_layers__WEBPACK_IMPORTED_MODULE_10__,
    ..._deck_gl_aggregation_layers__WEBPACK_IMPORTED_MODULE_11__,
    ..._deck_gl_geo_layers__WEBPACK_IMPORTED_MODULE_12__,
    ..._deck_gl_mesh_layers__WEBPACK_IMPORTED_MODULE_13__
  }
};
(0,_loaders_gl_core__WEBPACK_IMPORTED_MODULE_14__.registerLoaders)([_loaders_gl_csv__WEBPACK_IMPORTED_MODULE_15__.CSVLoader, _loaders_gl_gltf__WEBPACK_IMPORTED_MODULE_16__.GLTFLoader]);
const jsonConverter = new _deck_gl_json__WEBPACK_IMPORTED_MODULE_17__["default"]({
  configuration
});
const DEFAULT_DECK_GL_HEIGHT = 500;
class DeckGlJsonChart extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      viewState: {
        bearing: 0,
        pitch: 0,
        zoom: 11
      },
      initialized: false,
      initialViewState: {}
    };
    this.componentDidMount = () => {
      // HACK: Load layers a little after loading the map, to hack around a bug
      // where HexagonLayers were not drawing on first load but did load when the
      // script got re-executed.
      this.setState({
        initialized: true
      });
    };
    this.createTooltip = info => {
      const {
        element
      } = this.props;
      if (!info || !info.object || !element.tooltip) {
        return false;
      }
      const tooltip = JSON.parse(element.tooltip);

      // NB: https://deckgl.readthedocs.io/en/latest/tooltip.html
      if (tooltip.html) {
        tooltip.html = this.interpolate(info, tooltip.html);
      } else {
        tooltip.text = this.interpolate(info, tooltip.text);
      }
      return tooltip;
    };
    this.interpolate = (info, body) => {
      const matchedVariables = body.match(/{(.*?)}/g);
      if (matchedVariables) {
        matchedVariables.forEach(match => {
          const variable = match.substring(1, match.length - 1);
          if (info.object.hasOwnProperty(variable)) {
            body = body.replace(match, info.object[variable]);
          }
        });
      }
      return body;
    };
    this.onViewStateChange = _ref => {
      let {
        viewState
      } = _ref;
      this.setState({
        viewState
      });
    };
  }
  static getDerivedStateFromProps(props, state) {
    const deck = DeckGlJsonChart.getDeckObject(props);

    // If the ViewState on the server has changed, apply the diff to the current state
    if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default()(deck.initialViewState, state.initialViewState)) {
      const diff = Object.keys(deck.initialViewState).reduce((diff, key) => {
        // @ts-expect-error
        if (deck.initialViewState[key] === state.initialViewState[key]) {
          return diff;
        }
        return {
          ...diff,
          // @ts-expect-error
          [key]: deck.initialViewState[key]
        };
      }, {});
      return {
        viewState: {
          ...state.viewState,
          ...diff
        },
        initialViewState: deck.initialViewState
      };
    }
    return null;
  }
  render() {
    const deck = DeckGlJsonChart.getDeckObject(this.props);
    const {
      viewState
    } = this.state;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_7__.StyledDeckGlChart, {
      className: "stDeckGlJsonChart",
      width: deck.initialViewState.width,
      height: deck.initialViewState.height,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(deck_gl__WEBPACK_IMPORTED_MODULE_18__["default"], {
        viewState: viewState,
        onViewStateChange: this.onViewStateChange,
        height: deck.initialViewState.height,
        width: deck.initialViewState.width,
        layers: this.state.initialized ? deck.layers : [],
        getTooltip: this.createTooltip,
        ContextProvider: react_map_gl__WEBPACK_IMPORTED_MODULE_2__.MapContext.Provider,
        controller: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_2__.StaticMap, {
          height: deck.initialViewState.height,
          width: deck.initialViewState.width,
          mapStyle: deck.mapStyle && (typeof deck.mapStyle === "string" ? deck.mapStyle : deck.mapStyle[0]),
          mapboxApiAccessToken: this.props.mapboxToken
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_7__.StyledNavigationControlContainer, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_2__.NavigationControl, {
            className: "zoomButton",
            showCompass: false
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 7
    }, this);
  }
}
DeckGlJsonChart.getDeckObject = props => {
  const {
    element,
    width,
    height,
    theme
  } = props;
  const json = JSON.parse(element.json);

  // If unset, use either the Mapbox light or dark style based on Streamlit's theme
  // For Mapbox styles, see https://docs.mapbox.com/api/maps/styles/#mapbox-styles
  if (!(0,src_lib_utils__WEBPACK_IMPORTED_MODULE_6__.notNullOrUndefined)(json.mapStyle)) {
    const mapTheme = (0,src_theme__WEBPACK_IMPORTED_MODULE_3__.hasLightBackgroundColor)(theme) ? "light" : "dark";
    json.mapStyle = `mapbox://styles/mapbox/${mapTheme}-v9`;
  }

  // The graph dimensions could be set from props ( like withFullscreen ) or
  // from the generated element object
  if (height) {
    json.initialViewState.height = height;
    json.initialViewState.width = width;
  } else {
    if (!json.initialViewState.height) {
      json.initialViewState.height = DEFAULT_DECK_GL_HEIGHT;
    }
    if (element.useContainerWidth) {
      json.initialViewState.width = width;
    }
  }
  delete json.views; // We are not using views. This avoids a console warning.

  return jsonConverter.convert(json);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_emotion_react__WEBPACK_IMPORTED_MODULE_19__.b)((0,src_hocs_withMapboxToken__WEBPACK_IMPORTED_MODULE_5__["default"])("st.pydeck_chart")((0,src_hocs_withFullScreenWrapper__WEBPACK_IMPORTED_MODULE_4__["default"])(DeckGlJsonChart))));

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

/***/ "../../streamlit/frontend/src/components/elements/DeckGlJsonChart/index.tsx":
/*!**********************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/DeckGlJsonChart/index.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _DeckGlJsonChart__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _DeckGlJsonChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeckGlJsonChart */ "../../streamlit/frontend/src/components/elements/DeckGlJsonChart/DeckGlJsonChart.tsx");
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

/***/ "../../streamlit/frontend/src/components/elements/DeckGlJsonChart/styled-components.ts":
/*!*********************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/DeckGlJsonChart/styled-components.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledDeckGlChart": () => (/* binding */ StyledDeckGlChart),
/* harmony export */   "StyledNavigationControlContainer": () => (/* binding */ StyledNavigationControlContainer)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "../../node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
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


const StyledDeckGlChart = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e1q4dr931",
  label: "StyledDeckGlChart"
})(_ref => {
  let {
    width,
    height,
    theme
  } = _ref;
  return {
    marginTop: theme.spacing.sm,
    position: "relative",
    height,
    width
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvRGVja0dsSnNvbkNoYXJ0L3N0eWxlZC1jb21wb25lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCaUMiLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmsvc3RsaXRlLWRldi9zdGxpdGUtZGV2L3N0cmVhbWxpdC9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9lbGVtZW50cy9EZWNrR2xKc29uQ2hhcnQvc3R5bGVkLWNvbXBvbmVudHMudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgU3RyZWFtbGl0IEluYy4gKDIwMTgtMjAyMikgU25vd2ZsYWtlIEluYy4gKDIwMjIpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5pbXBvcnQgeyBoYXNMaWdodEJhY2tncm91bmRDb2xvciB9IGZyb20gXCJzcmMvdGhlbWVcIlxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlZERlY2tHbENoYXJ0UHJvcHMge1xuICB3aWR0aDogbnVtYmVyXG4gIGhlaWdodDogbnVtYmVyXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWREZWNrR2xDaGFydCA9IHN0eWxlZC5kaXY8U3R5bGVkRGVja0dsQ2hhcnRQcm9wcz4oXG4gICh7IHdpZHRoLCBoZWlnaHQsIHRoZW1lIH0pID0+ICh7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnNtLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgaGVpZ2h0LFxuICAgIHdpZHRoLFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkTmF2aWdhdGlvbkNvbnRyb2xDb250YWluZXIgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIHJpZ2h0OiBcIjIuNjI1cmVtXCIsXG4gIHRvcDogdGhlbWUuc3BhY2luZy5tZCxcbiAgekluZGV4OiAxLFxuXG4gIC8vIFVwZGF0ZSB6b29tIGJ1dHRvbnMgYmFzZWQgb24gdGhlIGFjdGl2ZSB0aGVtZVxuICBcImJ1dHRvbjpub3QoOmRpc2FibGVkKVwiOiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLmJnQ29sb3IsXG5cbiAgICAvLyBBZGQgYSBzZXBhcmF0b3IgYmV0d2VlbiBidXR0b25zXG4gICAgXCImICsgYnV0dG9uXCI6IHtcbiAgICAgIGJvcmRlclRvcENvbG9yOiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5QmcsXG4gICAgfSxcblxuICAgIC8vIE9uIGRhcmsgYmFja2dyb3VuZHMsIGludmVydCB0aGUgY29sb3IgZm9yIHRoZSArIGFuZCAtIHN5bWJvbHNcbiAgICBcIiYgc3BhblwiOiB7XG4gICAgICBmaWx0ZXI6IGhhc0xpZ2h0QmFja2dyb3VuZENvbG9yKHRoZW1lKSA/IFwiXCIgOiBcImludmVydCgxMDAlKVwiLFxuICAgIH0sXG4gIH0sXG59KSlcbiJdfQ== */");
const StyledNavigationControlContainer = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e1q4dr930",
  label: "StyledNavigationControlContainer"
})(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    position: "absolute",
    right: "2.625rem",
    top: theme.spacing.md,
    zIndex: 1,
    // Update zoom buttons based on the active theme
    "button:not(:disabled)": {
      background: theme.colors.bgColor,
      // Add a separator between buttons
      "& + button": {
        borderTopColor: theme.colors.secondaryBg
      },
      // On dark backgrounds, invert the color for the + and - symbols
      "& span": {
        filter: (0,src_theme__WEBPACK_IMPORTED_MODULE_1__.hasLightBackgroundColor)(theme) ? "" : "invert(100%)"
      }
    }
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvRGVja0dsSnNvbkNoYXJ0L3N0eWxlZC1jb21wb25lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDZ0QiLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmsvc3RsaXRlLWRldi9zdGxpdGUtZGV2L3N0cmVhbWxpdC9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9lbGVtZW50cy9EZWNrR2xKc29uQ2hhcnQvc3R5bGVkLWNvbXBvbmVudHMudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgU3RyZWFtbGl0IEluYy4gKDIwMTgtMjAyMikgU25vd2ZsYWtlIEluYy4gKDIwMjIpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5pbXBvcnQgeyBoYXNMaWdodEJhY2tncm91bmRDb2xvciB9IGZyb20gXCJzcmMvdGhlbWVcIlxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlZERlY2tHbENoYXJ0UHJvcHMge1xuICB3aWR0aDogbnVtYmVyXG4gIGhlaWdodDogbnVtYmVyXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWREZWNrR2xDaGFydCA9IHN0eWxlZC5kaXY8U3R5bGVkRGVja0dsQ2hhcnRQcm9wcz4oXG4gICh7IHdpZHRoLCBoZWlnaHQsIHRoZW1lIH0pID0+ICh7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnNtLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgaGVpZ2h0LFxuICAgIHdpZHRoLFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkTmF2aWdhdGlvbkNvbnRyb2xDb250YWluZXIgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIHJpZ2h0OiBcIjIuNjI1cmVtXCIsXG4gIHRvcDogdGhlbWUuc3BhY2luZy5tZCxcbiAgekluZGV4OiAxLFxuXG4gIC8vIFVwZGF0ZSB6b29tIGJ1dHRvbnMgYmFzZWQgb24gdGhlIGFjdGl2ZSB0aGVtZVxuICBcImJ1dHRvbjpub3QoOmRpc2FibGVkKVwiOiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLmJnQ29sb3IsXG5cbiAgICAvLyBBZGQgYSBzZXBhcmF0b3IgYmV0d2VlbiBidXR0b25zXG4gICAgXCImICsgYnV0dG9uXCI6IHtcbiAgICAgIGJvcmRlclRvcENvbG9yOiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5QmcsXG4gICAgfSxcblxuICAgIC8vIE9uIGRhcmsgYmFja2dyb3VuZHMsIGludmVydCB0aGUgY29sb3IgZm9yIHRoZSArIGFuZCAtIHN5bWJvbHNcbiAgICBcIiYgc3BhblwiOiB7XG4gICAgICBmaWx0ZXI6IGhhc0xpZ2h0QmFja2dyb3VuZENvbG9yKHRoZW1lKSA/IFwiXCIgOiBcImludmVydCgxMDAlKVwiLFxuICAgIH0sXG4gIH0sXG59KSlcbiJdfQ== */");

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

/***/ "../../streamlit/frontend/src/hocs/withMapboxToken/MapboxToken.ts":
/*!************************************************************************!*\
  !*** ../../streamlit/frontend/src/hocs/withMapboxToken/MapboxToken.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapboxToken": () => (/* binding */ MapboxToken),
/* harmony export */   "MapboxTokenFetchingError": () => (/* binding */ MapboxTokenFetchingError),
/* harmony export */   "MapboxTokenNotProvidedError": () => (/* binding */ MapboxTokenNotProvidedError),
/* harmony export */   "TOKENS_URL": () => (/* binding */ TOKENS_URL)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_lib_ErrorHandling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/lib/ErrorHandling */ "../../streamlit/frontend/src/lib/ErrorHandling.ts");
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



class MapboxTokenNotProvidedError extends Error {}
class MapboxTokenFetchingError extends Error {}

/**
 * A remote file that stores user-visible tokens.
 */
const TOKENS_URL = "https://data.streamlit.io/tokens.json";
class MapboxToken {
  /**
   * Expose a singleton MapboxToken:
   * - If the user specified a token in their streamlit config, return it.
   * - Else, fetch the remote "tokens.json" and return the "mapbox" entry.
   *
   * (The returned value is cached in memory, so the remote resource will
   * only be fetched once per session.)
   */
  static async get(sessionInfo) {
    const {
      commandLine,
      userMapboxToken
    } = sessionInfo.current;
    if (!MapboxToken.token || MapboxToken.commandLine !== commandLine.toLowerCase()) {
      if (userMapboxToken !== "") {
        MapboxToken.token = userMapboxToken;
      } else {
        // TODO: Replace this with the block below after October 1st 2020.
        MapboxToken.token = await this.fetchToken(TOKENS_URL, "mapbox");
        // if (this.isRunningLocal() && SessionInfo.isHello) {
        //   MapboxToken.token = await this.fetchToken(TOKENS_URL, "mapbox-localhost")
        // } else {
        //   throw new MapboxTokenNotProvidedError("No Mapbox token provided")
        // }
      }

      MapboxToken.commandLine = commandLine.toLowerCase();
    }
    return MapboxToken.token;
  }
  static async fetchToken(url, tokenName) {
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(url);
      const {
        [tokenName]: token
      } = response.data;
      if (token == null || token === "") {
        throw new Error(`Missing token "${tokenName}"`);
      }
      return token;
    } catch (e) {
      const error = (0,src_lib_ErrorHandling__WEBPACK_IMPORTED_MODULE_1__.ensureError)(e);
      throw new MapboxTokenFetchingError(`${error.message} (${url})`);
    }
  }
}
MapboxToken.token = void 0;
MapboxToken.commandLine = void 0;
MapboxToken.isRunningLocal = () => {
  const {
    hostname
  } = window.location;
  return hostname === "localhost" || hostname === "127.0.0.1";
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

/***/ }),

/***/ "../../streamlit/frontend/src/hocs/withMapboxToken/MapboxTokenError.tsx":
/*!******************************************************************************!*\
  !*** ../../streamlit/frontend/src/hocs/withMapboxToken/MapboxTokenError.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var src_components_shared_ErrorElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/shared/ErrorElement */ "../../streamlit/frontend/src/components/shared/ErrorElement/index.tsx");
/* harmony import */ var src_hocs_withMapboxToken_MapboxToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/hocs/withMapboxToken/MapboxToken */ "../../streamlit/frontend/src/hocs/withMapboxToken/MapboxToken.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/hocs/withMapboxToken/MapboxTokenError.tsx";
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






const MapboxTokenError = _ref => {
  let {
    error,
    width,
    deltaType
  } = _ref;
  if (error instanceof src_hocs_withMapboxToken_MapboxToken__WEBPACK_IMPORTED_MODULE_2__.MapboxTokenNotProvidedError) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(src_components_shared_ErrorElement__WEBPACK_IMPORTED_MODULE_1__["default"], {
      width: width,
      name: "No Mapbox token provided",
      message: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: ["To use ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("code", {
            children: ["st.", deltaType]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 22
          }, undefined), " or ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("code", {
            children: "st.map"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 53
          }, undefined), " you need to set up a Mapbox access token."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: ["To get a token, create an account at", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
            href: "https://mapbox.com",
            children: "https://mapbox.com"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 15
          }, undefined), ". It's free for moderate usage levels!"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: ["Once you have a token, just set it using the Streamlit config option ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("code", {
            children: "mapbox.token"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 22
          }, undefined), " and don't forget to restart your Streamlit server at this point if it's still running, then reload this tab."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: ["See", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
            href: "https://docs.streamlit.io/library/advanced-features/configuration#view-all-configuration-options",
            children: "our documentation"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 15
          }, undefined), " ", "for more info on how to set config options."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, undefined)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined);
  }
  if (error instanceof src_hocs_withMapboxToken_MapboxToken__WEBPACK_IMPORTED_MODULE_2__.MapboxTokenFetchingError) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(src_components_shared_ErrorElement__WEBPACK_IMPORTED_MODULE_1__["default"], {
      width: width,
      name: "Error fetching Streamlit Mapbox token",
      message: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: "This app requires an internet connection."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: "Please check your connection and try again."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: ["If you think this is a bug, please file bug report", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
            href: "https://github.com/streamlit/streamlit/issues/new/choose",
            children: "here"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 15
          }, undefined), "."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }, undefined)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, undefined);
  }
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(src_components_shared_ErrorElement__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: width,
    name: "Error fetching Streamlit Mapbox token",
    message: error.message
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 5
  }, undefined);
};
_c = MapboxTokenError;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapboxTokenError);
var _c;
__webpack_require__.$Refresh$.register(_c, "MapboxTokenError");

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

/***/ "../../streamlit/frontend/src/hocs/withMapboxToken/index.tsx":
/*!*******************************************************************!*\
  !*** ../../streamlit/frontend/src/hocs/withMapboxToken/index.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _withMapboxToken__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _withMapboxToken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withMapboxToken */ "../../streamlit/frontend/src/hocs/withMapboxToken/withMapboxToken.tsx");
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

/***/ "../../streamlit/frontend/src/hocs/withMapboxToken/withMapboxToken.tsx":
/*!*****************************************************************************!*\
  !*** ../../streamlit/frontend/src/hocs/withMapboxToken/withMapboxToken.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var src_components_elements_Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/components/elements/Alert */ "../../streamlit/frontend/src/components/elements/Alert/index.tsx");
/* harmony import */ var src_components_shared_AlertContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/shared/AlertContainer */ "../../streamlit/frontend/src/components/shared/AlertContainer/index.tsx");
/* harmony import */ var src_hocs_withMapboxToken_MapboxToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/hocs/withMapboxToken/MapboxToken */ "../../streamlit/frontend/src/hocs/withMapboxToken/MapboxToken.ts");
/* harmony import */ var src_lib_ErrorHandling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/lib/ErrorHandling */ "../../streamlit/frontend/src/lib/ErrorHandling.ts");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ "../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _MapboxTokenError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MapboxTokenError */ "../../streamlit/frontend/src/hocs/withMapboxToken/MapboxTokenError.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/hocs/withMapboxToken/withMapboxToken.tsx";
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
 * A higher-order component that fetches our mapbox token and passes
 * it through to the wrapped component. If the token fetch fails, an error
 * will be rendered in place of the wrapped component.
 *
 * @param {string} deltaType In case of an exception we show an error with this
 */

const withMapboxToken = deltaType => WrappedComponent => {
  // Return a wrapper that accepts the wrapped component's props, minus
  // "mapboxToken". The wrapper will fetch the mapboxToken and inject it into
  // the wrapped component automatically.
  class WithMapboxToken extends react__WEBPACK_IMPORTED_MODULE_5__.PureComponent {
    constructor(props) {
      super(props);
      this.initMapboxToken = async () => {
        try {
          const mapboxToken = await src_hocs_withMapboxToken_MapboxToken__WEBPACK_IMPORTED_MODULE_2__.MapboxToken.get(this.props.sessionInfo);
          this.setState({
            mapboxToken,
            isFetching: false
          });
        } catch (e) {
          const error = (0,src_lib_ErrorHandling__WEBPACK_IMPORTED_MODULE_3__.ensureError)(e);
          this.setState({
            mapboxTokenError: error,
            isFetching: false
          });
        }
      };
      this.render = () => {
        const {
          mapboxToken,
          mapboxTokenError,
          isFetching
        } = this.state;
        const {
          width
        } = this.props;

        // We got an error when fetching our mapbox token: show the error.
        if (mapboxTokenError) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_MapboxTokenError__WEBPACK_IMPORTED_MODULE_6__["default"], {
            width: width,
            error: mapboxTokenError,
            deltaType: deltaType
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, this);
        }

        // If our mapboxToken hasn't been retrieved yet, show a loading alert.
        if (isFetching) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(src_components_elements_Alert__WEBPACK_IMPORTED_MODULE_0__["default"], {
            body: "Loading...",
            kind: src_components_shared_AlertContainer__WEBPACK_IMPORTED_MODULE_1__.Kind.INFO,
            width: width
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 18
          }, this);
        }

        // We have the mapbox token. Pass it through to our component.
        return (
          /*#__PURE__*/
          // (this.props as unknown as P) is required to work around a TS issue:
          // https://github.com/microsoft/TypeScript/issues/28938#issuecomment-450636046
          (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(WrappedComponent, {
            ...this.props,
            mapboxToken: mapboxToken,
            width: width
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 11
          }, this)
        );
      };
      this.state = {
        isFetching: true,
        mapboxToken: undefined,
        mapboxTokenError: undefined
      };
      this.initMapboxToken();
    }

    /**
     * Fetch our MapboxToken.
     */
  }
  WithMapboxToken.displayName = `withMapboxToken(${WrappedComponent.displayName || WrappedComponent.name})`;
  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(WithMapboxToken, WrappedComponent);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withMapboxToken);

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

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg width=%2724%27 height=%2724%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill-rule=%27evenodd%27 fill=%27%23fff%27%3E%3Cpath d=%27M4 10a6 6 0 1012 0 6 6 0 10-12 0m5-3a1 1 0 102 0 1 1 0 10-2 0m0 3a1 1 0 112 0v3a1 1 0 11-2 0%27/%3E%3C/svg%3E":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg width=%2724%27 height=%2724%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill-rule=%27evenodd%27 fill=%27%23fff%27%3E%3Cpath d=%27M4 10a6 6 0 1012 0 6 6 0 10-12 0m5-3a1 1 0 102 0 1 1 0 10-2 0m0 3a1 1 0 112 0v3a1 1 0 11-2 0%27/%3E%3C/svg%3E ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg width=%2724%27 height=%2724%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill-rule=%27evenodd%27 fill=%27%23fff%27%3E%3Cpath d=%27M4 10a6 6 0 1012 0 6 6 0 10-12 0m5-3a1 1 0 102 0 1 1 0 10-2 0m0 3a1 1 0 112 0v3a1 1 0 11-2 0%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg width=%2724%27 height=%2724%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill-rule=%27evenodd%27%3E%3Cpath d=%27M4 10a6 6 0 1012 0 6 6 0 10-12 0m5-3a1 1 0 102 0 1 1 0 10-2 0m0 3a1 1 0 112 0v3a1 1 0 11-2 0%27/%3E%3C/svg%3E":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg width=%2724%27 height=%2724%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill-rule=%27evenodd%27%3E%3Cpath d=%27M4 10a6 6 0 1012 0 6 6 0 10-12 0m5-3a1 1 0 102 0 1 1 0 10-2 0m0 3a1 1 0 112 0v3a1 1 0 11-2 0%27/%3E%3C/svg%3E ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg width=%2724%27 height=%2724%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill-rule=%27evenodd%27%3E%3Cpath d=%27M4 10a6 6 0 1012 0 6 6 0 10-12 0m5-3a1 1 0 102 0 1 1 0 10-2 0m0 3a1 1 0 112 0v3a1 1 0 11-2 0%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3C/svg%3E":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3C/svg%3E ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%2333b5e5%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z%27/%3E%3C/svg%3E":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%2333b5e5%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z%27/%3E%3C/svg%3E ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%2333b5e5%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%2333b5e5%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3C/svg%3E":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%2333b5e5%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3C/svg%3E ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%2333b5e5%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23666%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath d=%27M14 5l1 1-9 9-1-1 9-9z%27 fill=%27red%27/%3E%3C/svg%3E":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23666%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath d=%27M14 5l1 1-9 9-1-1 9-9z%27 fill=%27red%27/%3E%3C/svg%3E ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23666%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath d=%27M14 5l1 1-9 9-1-1 9-9z%27 fill=%27red%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23999%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath d=%27M14 5l1 1-9 9-1-1 9-9z%27 fill=%27red%27/%3E%3C/svg%3E":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23999%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath d=%27M14 5l1 1-9 9-1-1 9-9z%27 fill=%27red%27/%3E%3C/svg%3E ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23999%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath d=%27M14 5l1 1-9 9-1-1 9-9z%27 fill=%27red%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23aaa%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath d=%27M14 5l1 1-9 9-1-1 9-9z%27 fill=%27red%27/%3E%3C/svg%3E":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23aaa%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath d=%27M14 5l1 1-9 9-1-1 9-9z%27 fill=%27red%27/%3E%3C/svg%3E ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23aaa%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath d=%27M14 5l1 1-9 9-1-1 9-9z%27 fill=%27red%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23e54e33%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z%27/%3E%3C/svg%3E":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23e54e33%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z%27/%3E%3C/svg%3E ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23e54e33%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23e58978%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3C/svg%3E":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23e58978%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3C/svg%3E ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23e58978%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3C/svg%3E":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3C/svg%3E ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3C/svg%3E":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3C/svg%3E ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z%27/%3E%3C/svg%3E":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z%27/%3E%3C/svg%3E ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27%3E%3Cpath d=%27M10.5 14l4-8 4 8h-8z%27/%3E%3Cpath d=%27M10.5 16l4 8 4-8h-8z%27 fill=%27%23ccc%27/%3E%3C/svg%3E":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27%3E%3Cpath d=%27M10.5 14l4-8 4 8h-8z%27/%3E%3Cpath d=%27M10.5 16l4 8 4-8h-8z%27 fill=%27%23ccc%27/%3E%3C/svg%3E ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27%3E%3Cpath d=%27M10.5 14l4-8 4 8h-8z%27/%3E%3Cpath d=%27M10.5 16l4 8 4-8h-8z%27 fill=%27%23ccc%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z%27/%3E%3C/svg%3E":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z%27/%3E%3C/svg%3E ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z%27/%3E%3C/svg%3E":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z%27/%3E%3C/svg%3E ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z%27/%3E%3C/svg%3E":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z%27/%3E%3C/svg%3E ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27%3E%3Cpath d=%27M10.5 14l4-8 4 8h-8z%27/%3E%3Cpath d=%27M10.5 16l4 8 4-8h-8z%27 fill=%27%23999%27/%3E%3C/svg%3E":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27%3E%3Cpath d=%27M10.5 14l4-8 4 8h-8z%27/%3E%3Cpath d=%27M10.5 16l4 8 4-8h-8z%27 fill=%27%23999%27/%3E%3C/svg%3E ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27%3E%3Cpath d=%27M10.5 14l4-8 4 8h-8z%27/%3E%3Cpath d=%27M10.5 16l4 8 4-8h-8z%27 fill=%27%23999%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z%27/%3E%3C/svg%3E":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z%27/%3E%3C/svg%3E ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27%3E%3Cpath d=%27M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1h-5.5zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1v-5.5zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1v5.5zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1h5.5z%27/%3E%3C/svg%3E":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27%3E%3Cpath d=%27M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1h-5.5zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1v-5.5zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1v5.5zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1h5.5z%27/%3E%3C/svg%3E ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27%3E%3Cpath d=%27M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1h-5.5zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1v-5.5zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1v5.5zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1h5.5z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z%27/%3E%3C/svg%3E":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z%27/%3E%3C/svg%3E ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z%27/%3E%3C/svg%3E":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z%27/%3E%3C/svg%3E ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M10.5 14l4-8 4 8h-8z%27/%3E%3Cpath d=%27M10.5 16l4 8 4-8h-8z%27 fill=%27%23ccc%27/%3E%3C/svg%3E":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M10.5 14l4-8 4 8h-8z%27/%3E%3Cpath d=%27M10.5 16l4 8 4-8h-8z%27 fill=%27%23ccc%27/%3E%3C/svg%3E ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M10.5 14l4-8 4 8h-8z%27/%3E%3Cpath d=%27M10.5 16l4 8 4-8h-8z%27 fill=%27%23ccc%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z%27/%3E%3C/svg%3E":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z%27/%3E%3C/svg%3E ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1h-5.5zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1v-5.5zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1v5.5zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1h5.5z%27/%3E%3C/svg%3E":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1h-5.5zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1v-5.5zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1v5.5zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1h5.5z%27/%3E%3C/svg%3E ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1h-5.5zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1v-5.5zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1v5.5zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1h5.5z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z%27/%3E%3C/svg%3E":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z%27/%3E%3C/svg%3E ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg width=%2788%27 height=%2723%27 viewBox=%270 0 88 23%27 xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 fill-rule=%27evenodd%27%3E%3Cdefs%3E%3Cpath id=%27a%27 d=%27M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z%27/%3E%3Cpath id=%27b%27 d=%27M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z%27/%3E%3C/defs%3E%3Cmask id=%27c%27%3E%3Crect width=%27100%25%27 height=%27100%25%27 fill=%27%23fff%27/%3E%3Cuse xlink:href=%27%23a%27/%3E%3Cuse xlink:href=%27%23b%27/%3E%3C/mask%3E%3Cg opacity=%27.3%27 stroke=%27%23000%27 stroke-width=%273%27%3E%3Ccircle mask=%27url%28%23c%29%27 cx=%2711.5%27 cy=%2711.5%27 r=%279.25%27/%3E%3Cuse xlink:href=%27%23b%27 mask=%27url%28%23c%29%27/%3E%3C/g%3E%3Cg opacity=%27.9%27 fill=%27%23fff%27%3E%3Cuse xlink:href=%27%23a%27/%3E%3Cuse xlink:href=%27%23b%27/%3E%3C/g%3E%3C/svg%3E":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg width=%2788%27 height=%2723%27 viewBox=%270 0 88 23%27 xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 fill-rule=%27evenodd%27%3E%3Cdefs%3E%3Cpath id=%27a%27 d=%27M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z%27/%3E%3Cpath id=%27b%27 d=%27M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z%27/%3E%3C/defs%3E%3Cmask id=%27c%27%3E%3Crect width=%27100%25%27 height=%27100%25%27 fill=%27%23fff%27/%3E%3Cuse xlink:href=%27%23a%27/%3E%3Cuse xlink:href=%27%23b%27/%3E%3C/mask%3E%3Cg opacity=%27.3%27 stroke=%27%23000%27 stroke-width=%273%27%3E%3Ccircle mask=%27url%28%23c%29%27 cx=%2711.5%27 cy=%2711.5%27 r=%279.25%27/%3E%3Cuse xlink:href=%27%23b%27 mask=%27url%28%23c%29%27/%3E%3C/g%3E%3Cg opacity=%27.9%27 fill=%27%23fff%27%3E%3Cuse xlink:href=%27%23a%27/%3E%3Cuse xlink:href=%27%23b%27/%3E%3C/g%3E%3C/svg%3E ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg width=%2788%27 height=%2723%27 viewBox=%270 0 88 23%27 xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 fill-rule=%27evenodd%27%3E%3Cdefs%3E%3Cpath id=%27a%27 d=%27M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z%27/%3E%3Cpath id=%27b%27 d=%27M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z%27/%3E%3C/defs%3E%3Cmask id=%27c%27%3E%3Crect width=%27100%25%27 height=%27100%25%27 fill=%27%23fff%27/%3E%3Cuse xlink:href=%27%23a%27/%3E%3Cuse xlink:href=%27%23b%27/%3E%3C/mask%3E%3Cg opacity=%27.3%27 stroke=%27%23000%27 stroke-width=%273%27%3E%3Ccircle mask=%27url%28%23c%29%27 cx=%2711.5%27 cy=%2711.5%27 r=%279.25%27/%3E%3Cuse xlink:href=%27%23b%27 mask=%27url%28%23c%29%27/%3E%3C/g%3E%3Cg opacity=%27.9%27 fill=%27%23fff%27%3E%3Cuse xlink:href=%27%23a%27/%3E%3Cuse xlink:href=%27%23b%27/%3E%3C/g%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg width=%2788%27 height=%2723%27 viewBox=%270 0 88 23%27 xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 fill-rule=%27evenodd%27%3E%3Cdefs%3E%3Cpath id=%27a%27 d=%27M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z%27/%3E%3Cpath id=%27b%27 d=%27M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z%27/%3E%3C/defs%3E%3Cmask id=%27c%27%3E%3Crect width=%27100%25%27 height=%27100%25%27 fill=%27%23fff%27/%3E%3Cuse xlink:href=%27%23a%27/%3E%3Cuse xlink:href=%27%23b%27/%3E%3C/mask%3E%3Cg stroke=%27%23000%27 stroke-width=%273%27%3E%3Ccircle mask=%27url%28%23c%29%27 cx=%2711.5%27 cy=%2711.5%27 r=%279.25%27/%3E%3Cuse xlink:href=%27%23b%27 mask=%27url%28%23c%29%27/%3E%3C/g%3E%3Cg fill=%27%23fff%27%3E%3Cuse xlink:href=%27%23a%27/%3E%3Cuse xlink:href=%27%23b%27/%3E%3C/g%3E%3C/svg%3E":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg width=%2788%27 height=%2723%27 viewBox=%270 0 88 23%27 xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 fill-rule=%27evenodd%27%3E%3Cdefs%3E%3Cpath id=%27a%27 d=%27M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z%27/%3E%3Cpath id=%27b%27 d=%27M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z%27/%3E%3C/defs%3E%3Cmask id=%27c%27%3E%3Crect width=%27100%25%27 height=%27100%25%27 fill=%27%23fff%27/%3E%3Cuse xlink:href=%27%23a%27/%3E%3Cuse xlink:href=%27%23b%27/%3E%3C/mask%3E%3Cg stroke=%27%23000%27 stroke-width=%273%27%3E%3Ccircle mask=%27url%28%23c%29%27 cx=%2711.5%27 cy=%2711.5%27 r=%279.25%27/%3E%3Cuse xlink:href=%27%23b%27 mask=%27url%28%23c%29%27/%3E%3C/g%3E%3Cg fill=%27%23fff%27%3E%3Cuse xlink:href=%27%23a%27/%3E%3Cuse xlink:href=%27%23b%27/%3E%3C/g%3E%3C/svg%3E ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg width=%2788%27 height=%2723%27 viewBox=%270 0 88 23%27 xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 fill-rule=%27evenodd%27%3E%3Cdefs%3E%3Cpath id=%27a%27 d=%27M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z%27/%3E%3Cpath id=%27b%27 d=%27M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z%27/%3E%3C/defs%3E%3Cmask id=%27c%27%3E%3Crect width=%27100%25%27 height=%27100%25%27 fill=%27%23fff%27/%3E%3Cuse xlink:href=%27%23a%27/%3E%3Cuse xlink:href=%27%23b%27/%3E%3C/mask%3E%3Cg stroke=%27%23000%27 stroke-width=%273%27%3E%3Ccircle mask=%27url%28%23c%29%27 cx=%2711.5%27 cy=%2711.5%27 r=%279.25%27/%3E%3Cuse xlink:href=%27%23b%27 mask=%27url%28%23c%29%27/%3E%3C/g%3E%3Cg fill=%27%23fff%27%3E%3Cuse xlink:href=%27%23a%27/%3E%3Cuse xlink:href=%27%23b%27/%3E%3C/g%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg width=%2788%27 height=%2723%27 viewBox=%270 0 88 23%27 xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 fill-rule=%27evenodd%27%3E%3Cdefs%3E%3Cpath id=%27a%27 d=%27M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z%27/%3E%3Cpath id=%27b%27 d=%27M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z%27/%3E%3C/defs%3E%3Cmask id=%27c%27%3E%3Crect width=%27100%25%27 height=%27100%25%27 fill=%27%23fff%27/%3E%3Cuse xlink:href=%27%23a%27/%3E%3Cuse xlink:href=%27%23b%27/%3E%3C/mask%3E%3Cg stroke=%27%23fff%27 stroke-width=%273%27 fill=%27%23fff%27%3E%3Ccircle mask=%27url%28%23c%29%27 cx=%2711.5%27 cy=%2711.5%27 r=%279.25%27/%3E%3Cuse xlink:href=%27%23b%27 mask=%27url%28%23c%29%27/%3E%3C/g%3E%3Cuse xlink:href=%27%23a%27/%3E%3Cuse xlink:href=%27%23b%27/%3E%3C/svg%3E":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg width=%2788%27 height=%2723%27 viewBox=%270 0 88 23%27 xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 fill-rule=%27evenodd%27%3E%3Cdefs%3E%3Cpath id=%27a%27 d=%27M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z%27/%3E%3Cpath id=%27b%27 d=%27M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z%27/%3E%3C/defs%3E%3Cmask id=%27c%27%3E%3Crect width=%27100%25%27 height=%27100%25%27 fill=%27%23fff%27/%3E%3Cuse xlink:href=%27%23a%27/%3E%3Cuse xlink:href=%27%23b%27/%3E%3C/mask%3E%3Cg stroke=%27%23fff%27 stroke-width=%273%27 fill=%27%23fff%27%3E%3Ccircle mask=%27url%28%23c%29%27 cx=%2711.5%27 cy=%2711.5%27 r=%279.25%27/%3E%3Cuse xlink:href=%27%23b%27 mask=%27url%28%23c%29%27/%3E%3C/g%3E%3Cuse xlink:href=%27%23a%27/%3E%3Cuse xlink:href=%27%23b%27/%3E%3C/svg%3E ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg width=%2788%27 height=%2723%27 viewBox=%270 0 88 23%27 xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 fill-rule=%27evenodd%27%3E%3Cdefs%3E%3Cpath id=%27a%27 d=%27M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z%27/%3E%3Cpath id=%27b%27 d=%27M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z%27/%3E%3C/defs%3E%3Cmask id=%27c%27%3E%3Crect width=%27100%25%27 height=%27100%25%27 fill=%27%23fff%27/%3E%3Cuse xlink:href=%27%23a%27/%3E%3Cuse xlink:href=%27%23b%27/%3E%3C/mask%3E%3Cg stroke=%27%23fff%27 stroke-width=%273%27 fill=%27%23fff%27%3E%3Ccircle mask=%27url%28%23c%29%27 cx=%2711.5%27 cy=%2711.5%27 r=%279.25%27/%3E%3Cuse xlink:href=%27%23b%27 mask=%27url%28%23c%29%27/%3E%3C/g%3E%3Cuse xlink:href=%27%23a%27/%3E%3Cuse xlink:href=%27%23b%27/%3E%3C/svg%3E";

/***/ }),

/***/ "?0dc7":
/*!********************************!*\
  !*** ../node/buffer (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?f24c":
/*!********************************************!*\
  !*** ../node/require-utils.node (ignored) ***!
  \********************************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=streamlit_frontend_src_components_elements_DeckGlJsonChart_index_tsx-data_image_svg_xml_chars-b02326.chunk.js.map