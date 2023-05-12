"use strict";
(globalThis["webpackChunk_stlite_mountable"] = globalThis["webpackChunk_stlite_mountable"] || []).push([["streamlit_frontend_src_components_widgets_DataFrame_index_tsx"],{

/***/ "../../streamlit/frontend/src/components/widgets/DataFrame/DataFrame.tsx":
/*!*******************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/DataFrame/DataFrame.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @glideapps/glide-data-grid */ "../../node_modules/@glideapps/glide-data-grid/dist/js/index.js");
/* harmony import */ var _glideapps_glide_data_grid_cells__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @glideapps/glide-data-grid-cells */ "../../node_modules/@glideapps/glide-data-grid-cells/dist/js/index.js");
/* harmony import */ var re_resizable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! re-resizable */ "../../node_modules/re-resizable/lib/index.js");
/* harmony import */ var src_components_widgets_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/widgets/Form */ "../../streamlit/frontend/src/components/widgets/Form/index.tsx");
/* harmony import */ var src_hocs_withFullScreenWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/hocs/withFullScreenWrapper */ "../../streamlit/frontend/src/hocs/withFullScreenWrapper/index.tsx");
/* harmony import */ var src_autogen_proto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/autogen/proto */ "../../streamlit/frontend/src/autogen/proto.js");
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/lib/utils */ "../../streamlit/frontend/src/lib/utils.ts");
/* harmony import */ var _EditingState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EditingState */ "../../streamlit/frontend/src/components/widgets/DataFrame/EditingState.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hooks */ "../../streamlit/frontend/src/components/widgets/DataFrame/hooks/index.ts");
/* harmony import */ var _columns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./columns */ "../../streamlit/frontend/src/components/widgets/DataFrame/columns/index.ts");
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styled-components */ "../../streamlit/frontend/src/components/widgets/DataFrame/styled-components.ts");
/* harmony import */ var _glideapps_glide_data_grid_dist_index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @glideapps/glide-data-grid/dist/index.css */ "../../node_modules/@glideapps/glide-data-grid/dist/index.css");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite-dev/stlite-dev/streamlit/frontend/src/components/widgets/DataFrame/DataFrame.tsx",
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















// Min column width used for manual and automatic resizing

const MIN_COLUMN_WIDTH = 50;
// Max column width used for manual resizing
const MAX_COLUMN_WIDTH = 1000;
// Max column width used for automatic column sizing
const MAX_COLUMN_AUTO_WIDTH = 500;
// Debounce time for triggering a widget state update
// This prevents to rapid updates to the widget state.
const DEBOUNCE_TIME_MS = 100;
// Token used for missing values (null, NaN, etc.)
const NULL_VALUE_TOKEN = "None";
// Number of rows that triggers some optimization features
// for large tables.
const LARGE_TABLE_ROWS_THRESHOLD = 150000;
/**
 * If a cell is marked as missing, we draw a placeholder symbol with a faded text color.
 * This is done by providing a custom cell renderer.
 */
const drawMissingCells = args => {
  const {
    cell,
    theme
  } = args;
  if ((0,_columns__WEBPACK_IMPORTED_MODULE_8__.isMissingValueCell)(cell)) {
    (0,_glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_12__.drawTextCell)({
      ...args,
      theme: {
        ...theme,
        textDark: theme.textLight,
        textMedium: theme.textLight
      },
      // The following props are just added for technical reasons:
      // @ts-expect-error
      spriteManager: {},
      hyperWrapping: false
    }, NULL_VALUE_TOKEN, cell.contentAlign);
    return true;
  }
  return false;
};

/**
 * The main component used by dataframe & data_editor to render an editable table.
 *
 * @param element - The element's proto message
 * @param data - The Arrow data to render (extracted from the proto message)
 * @param width - The width of the container
 * @param height - The height of the container
 * @param disabled - Whether the widget is disabled
 * @param widgetMgr - The widget manager
 * @param isFullScreen - Whether the widget is in full screen mode
 */
function DataFrame(_ref2) {
  _s();
  let {
    element,
    data,
    width: containerWidth,
    height: containerHeight,
    disabled,
    widgetMgr,
    isFullScreen
  } = _ref2;
  const resizableRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const dataEditorRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const extraCellArgs = (0,_glideapps_glide_data_grid_cells__WEBPACK_IMPORTED_MODULE_13__.useExtraCells)();
  const theme = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__.useCustomTheme)();
  const [isFocused, setIsFocused] = react__WEBPACK_IMPORTED_MODULE_0__.useState(true);
  const [gridSelection, setGridSelection] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    columns: _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_12__.CompactSelection.empty(),
    rows: _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_12__.CompactSelection.empty(),
    current: undefined
  });

  // This callback is used to clear all selections (row/column/cell)
  const clearSelection = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    setGridSelection({
      columns: _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_12__.CompactSelection.empty(),
      rows: _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_12__.CompactSelection.empty(),
      current: undefined
    });
  }, []);

  // This callback is used to refresh the rendering of selected cells
  const refreshCells = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(cells => {
    var _dataEditorRef$curren;
    (_dataEditorRef$curren = dataEditorRef.current) === null || _dataEditorRef$curren === void 0 ? void 0 : _dataEditorRef$curren.updateCells(cells);
  }, []);

  // This is done to keep some backwards compatibility
  // so that old arrow proto messages from the st.dataframe
  // would still work. Those messages don't have the
  // editingMode field defined.
  if ((0,src_lib_utils__WEBPACK_IMPORTED_MODULE_5__.isNullOrUndefined)(element.editingMode)) {
    element.editingMode = src_autogen_proto__WEBPACK_IMPORTED_MODULE_4__.Arrow.EditingMode.READ_ONLY;
  }
  const {
    READ_ONLY,
    DYNAMIC
  } = src_autogen_proto__WEBPACK_IMPORTED_MODULE_4__.Arrow.EditingMode;

  // Number of rows of the table minus 1 for the header row:
  const dataDimensions = data.dimensions;
  const originalNumRows = Math.max(0, dataDimensions.rows - 1);

  // For empty tables, we show an extra row that
  // contains "empty" as a way to indicate that the table is empty.
  const isEmptyTable = originalNumRows === 0 &&
  // We don't show empty state for dynamic mode with a table that has
  // data columns defined.
  !(element.editingMode === DYNAMIC && dataDimensions.dataColumns > 0);

  // For large tables, we apply some optimizations to handle large data
  const isLargeTable = originalNumRows > LARGE_TABLE_ROWS_THRESHOLD;
  const editingState = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new _EditingState__WEBPACK_IMPORTED_MODULE_6__["default"](originalNumRows));
  const [numRows, setNumRows] = react__WEBPACK_IMPORTED_MODULE_0__.useState(editingState.current.getNumRows());
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    editingState.current = new _EditingState__WEBPACK_IMPORTED_MODULE_6__["default"](originalNumRows);
    setNumRows(editingState.current.getNumRows());
  }, [originalNumRows]);
  const resetEditingState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    editingState.current = new _EditingState__WEBPACK_IMPORTED_MODULE_6__["default"](originalNumRows);
    setNumRows(editingState.current.getNumRows());
  }, [originalNumRows]);
  const {
    columns: originalColumns
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__.useColumnLoader)(element, data, disabled);

  // On the first rendering, try to load initial widget state if
  // it exist. This is required in the case that other elements
  // are inserted before this widget.
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (element.editingMode !== READ_ONLY) {
      const initialWidgetValue = widgetMgr.getStringValue(element);
      if (initialWidgetValue) {
        editingState.current.fromJson(initialWidgetValue, originalColumns);
        setNumRows(editingState.current.getNumRows());
      }
    }
  }, []);
  const {
    getCellContent: getOriginalCellContent
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__.useDataLoader)(data, originalColumns, numRows, editingState);
  const {
    columns,
    sortColumn,
    getOriginalIndex,
    getCellContent
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__.useColumnSort)(originalNumRows, originalColumns, getOriginalCellContent);

  /**
   * This callback should be called after any edits have been applied to the data.
   * It will finish up the editing by updating the number of rows, clearing the selection,
   * and triggering a rerun of the script.
   *
   * @param clearSelections - Whether to clear the selection. This is usually done after deleting rows.
   * @param triggerRerun - Whether to trigger a rerun of the script after applying edits
   */
  const applyEdits = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {
    let clearSelections = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    let triggerRerun = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (numRows !== editingState.current.getNumRows()) {
      // Reset the number of rows if it has been changed in the editing state
      setNumRows(editingState.current.getNumRows());
    }
    if (clearSelections) {
      clearSelection();
    }

    // Use debounce to prevent rapid updates to the widget state.
    (0,src_lib_utils__WEBPACK_IMPORTED_MODULE_5__.debounce)(DEBOUNCE_TIME_MS, () => {
      const currentEditingState = editingState.current.toJson(columns);
      let currentWidgetState = widgetMgr.getStringValue(element);
      if (currentWidgetState === undefined) {
        // Create an empty widget state
        currentWidgetState = new _EditingState__WEBPACK_IMPORTED_MODULE_6__["default"](0).toJson([]);
      }

      // Only update if there is actually a difference between editing and widget state
      if (currentEditingState !== currentWidgetState) {
        widgetMgr.setStringValue(element, currentEditingState, {
          fromUi: triggerRerun
        });
      }
    })();
  }, [widgetMgr, element, numRows]);
  const {
    onCellEdited,
    onPaste,
    onRowAppended,
    onDelete
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__.useDataEditor)(columns, element.editingMode !== DYNAMIC, editingState, getCellContent, getOriginalIndex, refreshCells, applyEdits);
  const {
    columns: glideColumns,
    onColumnResize
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__.useColumnSizer)(columns.map(column => (0,_columns__WEBPACK_IMPORTED_MODULE_8__.toGlideColumn)(column)));
  const {
    rowHeight,
    minHeight,
    maxHeight,
    minWidth,
    maxWidth,
    resizableSize,
    setResizableSize
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__.useTableSizer)(element, numRows, containerWidth, containerHeight, isFullScreen);

  // This is used as fallback in case the table is empty to
  // insert cells indicating this state:
  const getEmptyStateContent = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(_ref3 => {
    let [_col, _row] = _ref3;
    return {
      ...(0,_columns__WEBPACK_IMPORTED_MODULE_8__.getTextCell)(true, false),
      displayData: "empty",
      contentAlign: "center",
      allowOverlay: false,
      themeOverride: {
        textDark: theme.textLight
      },
      span: [0, Math.max(columns.length - 1, 0)]
    };
  }, [columns]);

  // This is required for the form clearing functionality:
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    const formClearHelper = new src_components_widgets_Form__WEBPACK_IMPORTED_MODULE_2__.FormClearHelper();
    formClearHelper.manageFormClearListener(widgetMgr, element.formId, resetEditingState);
    return () => {
      formClearHelper.disconnect();
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_9__.StyledResizableContainer, {
    className: "stDataFrame",
    onBlur: () => {
      // If the container loses focus, clear the current selection
      if (!isFocused) {
        clearSelection();
      }
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(re_resizable__WEBPACK_IMPORTED_MODULE_1__.Resizable, {
      "data-testid": "stDataFrameResizable",
      ref: resizableRef,
      defaultSize: resizableSize,
      style: {
        border: `1px solid ${theme.borderColor}`,
        borderRadius: `${theme.tableBorderRadius}`
      },
      minHeight: minHeight,
      maxHeight: maxHeight,
      minWidth: minWidth,
      maxWidth: maxWidth,
      size: resizableSize,
      enable: {
        top: false,
        right: false,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: true,
        bottomLeft: false,
        topLeft: false
      },
      grid: [1, rowHeight],
      snapGap: rowHeight / 3,
      onResizeStop: (_event, _direction, _ref, _delta) => {
        if (resizableRef.current) {
          setResizableSize({
            width: resizableRef.current.size.width,
            height:
            // Add an additional pixel if it is stretched to full width
            // to allow the full cell border to be visible
            maxHeight - resizableRef.current.size.height === 3 ? resizableRef.current.size.height + 3 : resizableRef.current.size.height
          });
        }
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_12__.DataEditor, {
        className: "glideDataEditor",
        ref: dataEditorRef,
        columns: glideColumns,
        rows: isEmptyTable ? 1 : numRows,
        minColumnWidth: MIN_COLUMN_WIDTH,
        maxColumnWidth: MAX_COLUMN_WIDTH,
        maxColumnAutoWidth: MAX_COLUMN_AUTO_WIDTH,
        rowHeight: rowHeight,
        headerHeight: rowHeight,
        getCellContent: isEmptyTable ? getEmptyStateContent : getCellContent,
        onColumnResize: onColumnResize
        // Freeze all index columns:
        ,
        freezeColumns: isEmptyTable ? 0 : columns.filter(col => col.isIndex).length,
        smoothScrollX: true,
        smoothScrollY: true
        // Show borders between cells:
        ,
        verticalBorder: col =>
        // Show no border for last column in certain situations
        // This is required to prevent the cell selection border to not be cut off
        !(col >= columns.length && (element.useContainerWidth || resizableSize.width === "100%"))
        // Activate copy to clipboard functionality:
        ,
        getCellsForSelection: true
        // Deactivate row markers and numbers:
        ,
        rowMarkers: "none"
        // Deactivate selections:
        ,
        rangeSelect: "rect",
        columnSelect: "none",
        rowSelect: "none"
        // Activate search:
        ,
        keybindings: {
          search: true,
          downFill: true
        }
        // Header click is used for column sorting:
        ,
        onHeaderClicked:
        // Deactivate sorting for empty state and for large dataframes:
        isEmptyTable || isLargeTable ? undefined : sortColumn,
        gridSelection: gridSelection,
        onGridSelectionChange: setGridSelection
        // Apply different styling to missing cells:
        ,
        drawCell: drawMissingCells,
        theme: theme,
        onMouseMove: args => {
          // Determine if the dataframe is focused or not
          if (args.kind === "out-of-bounds" && isFocused) {
            setIsFocused(false);
          } else if (args.kind !== "out-of-bounds" && !isFocused) {
            setIsFocused(true);
          }
        }
        // Add shadow for index columns and header on scroll:
        ,
        fixedShadowX: true,
        fixedShadowY: true,
        experimental: {
          // We use an overlay scrollbar, so no need to have space for reserved for the scrollbar:
          scrollbarWidthOverride: 1
        }
        // Add support for additional cells:
        ,
        customRenderers: extraCellArgs.customRenderers
        // The default setup is read only, and therefore we deactivate paste here:
        ,
        onPaste: false
        // If element is editable, enable editing features:
        ,
        ...(!isEmptyTable && element.editingMode !== READ_ONLY && !disabled && {
          // Support fill handle for bulk editing:
          fillHandle: true,
          // Support editing:
          onCellEdited,
          // Support pasting data for bulk editing:
          onPaste,
          // Support deleting cells & rows:
          onDelete
        }),
        ...(!isEmptyTable && element.editingMode === DYNAMIC && {
          // Support adding rows:
          trailingRowOptions: {
            sticky: false,
            tint: true
          },
          rowMarkerTheme: {
            bgCell: theme.bgHeader,
            bgCellMedium: theme.bgHeader
          },
          rowMarkers: "checkbox",
          rowSelectionMode: "auto",
          rowSelect: disabled ? "none" : "multi",
          // Support adding rows:
          onRowAppended: disabled ? undefined : onRowAppended,
          // Deactivate sorting, since it is not supported with dynamic editing:
          onHeaderClicked: undefined
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 392,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 344,
    columnNumber: 5
  }, this);
}
_s(DataFrame, "t5suH7ElslD5m+QZSEZtoASPUMc=", false, function () {
  return [_glideapps_glide_data_grid_cells__WEBPACK_IMPORTED_MODULE_13__.useExtraCells, _hooks__WEBPACK_IMPORTED_MODULE_7__.useCustomTheme, _hooks__WEBPACK_IMPORTED_MODULE_7__.useColumnLoader, _hooks__WEBPACK_IMPORTED_MODULE_7__.useDataLoader, _hooks__WEBPACK_IMPORTED_MODULE_7__.useColumnSort, _hooks__WEBPACK_IMPORTED_MODULE_7__.useDataEditor, _hooks__WEBPACK_IMPORTED_MODULE_7__.useColumnSizer, _hooks__WEBPACK_IMPORTED_MODULE_7__.useTableSizer];
});
_c = DataFrame;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = (0,src_hocs_withFullScreenWrapper__WEBPACK_IMPORTED_MODULE_3__["default"])(DataFrame));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "DataFrame");
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

/***/ "../../streamlit/frontend/src/components/widgets/DataFrame/EditingState.ts":
/*!*********************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/DataFrame/EditingState.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/lib/utils */ "../../streamlit/frontend/src/lib/utils.ts");
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
 * The editing state keeps track of all table edits applied by the user.
 */
class EditingState {
  // row -> column -> GridCell
  // Using [number, number] as a key for a Map would not work.

  // List of rows represented by of column -> GridCell mappings

  // List of deleted row IDs

  // The original number of rows in the table (without potential additions & deletions)

  constructor(numRows) {
    this.editedCells = new Map();
    this.addedRows = [];
    this.deletedRows = [];
    this.numRows = 0;
    this.numRows = numRows;
  }

  /**
   * Convert the current editing state to a JSON string.
   *
   * @param columns - The columns of the table
   * @returns JSON string
   */
  toJson(columns) {
    const columnsByIndex = new Map();
    columns.forEach(column => {
      columnsByIndex.set(column.indexNumber, column);
    });
    const currentState = {
      // We use snake case here since this is the widget state
      // that is sent and used in the backend. Therefore, it should
      // conform with the Python naming conventions.
      edited_cells: {},
      added_rows: [],
      deleted_rows: []
    };

    // Loop through all edited cells and transform into the structure
    // we use for the JSON-compatible widget state:
    // "<rowIndex>:<colIndex>" -> edited value
    this.editedCells.forEach((row, rowIndex, _map) => {
      row.forEach((cell, colIndex, _map) => {
        const column = columnsByIndex.get(colIndex);
        if (column) {
          currentState.edited_cells[`${rowIndex}:${colIndex}`] = column.getCellValue(cell);
        }
      });
    });

    // Loop through all added rows and transform into the format that
    // we use for the JSON-compatible widget state:
    // List of column index -> edited value
    this.addedRows.forEach(row => {
      const addedRow = {};
      row.forEach((cell, colIndex, _map) => {
        const column = columnsByIndex.get(colIndex);
        if (column) {
          const cellValue = column.getCellValue(cell);
          if ((0,src_lib_utils__WEBPACK_IMPORTED_MODULE_0__.notNullOrUndefined)(cellValue)) {
            addedRow[colIndex] = cellValue;
          }
        }
      });
      currentState.added_rows.push(addedRow);
    });

    // The deleted rows don't need to be transformed
    currentState.deleted_rows = this.deletedRows;

    // Convert undefined values to null, otherwise this is removed here since
    // undefined does not exist in JSON.
    const json = JSON.stringify(currentState, (k, v) => v === undefined ? null : v);
    return json;
  }

  /**
   * Load the editing state from a JSON string.
   *
   * @param columns - The columns of the table
   * @returns JSON string
   */
  fromJson(editingStateJson, columns) {
    const editingState = JSON.parse(editingStateJson);
    // Map columns to column index
    const columnsByIndex = new Map();
    columns.forEach(column => {
      columnsByIndex.set(column.indexNumber, column);
    });

    // Loop through all edited cells and transform into the structure
    // we use for the editing state:
    // row -> column -> GridCell
    Object.keys(editingState.edited_cells).forEach(key => {
      const [rowIndex, colIndex] = key.split(":").map(Number);
      const column = columnsByIndex.get(colIndex);
      if (column) {
        const cell = column.getCell(editingState.edited_cells[key]);
        if (cell) {
          var _this$editedCells$get;
          if (this.editedCells.has(rowIndex) == false) {
            this.editedCells.set(rowIndex, new Map());
          }
          (_this$editedCells$get = this.editedCells.get(rowIndex)) === null || _this$editedCells$get === void 0 ? void 0 : _this$editedCells$get.set(colIndex, cell);
        }
      }
    });

    // Loop through all added rows and transform into the format that
    // we use for the editing state:
    // List of column index -> edited value
    editingState.added_rows.forEach(row => {
      const addedRow = new Map();

      // Initialize all cells in row with undefined (empty)
      columns.forEach(column => {
        addedRow.set(column.indexNumber, column.getCell(undefined));
      });

      // Set the cells that were actually edited in the row
      Object.keys(row).forEach(colIndex => {
        const column = columnsByIndex.get(Number(colIndex));
        if (column) {
          const cell = column.getCell(row[Number(colIndex)]);
          if (cell) {
            addedRow.set(Number(colIndex), cell);
          }
        }
      });
      this.addedRows.push(addedRow);
    });

    // The deleted rows don't need to be transformed
    this.deletedRows = editingState.deleted_rows;
  }

  /**
   * Returns true if the given row was added by the user through the UI.
   */
  isAddedRow(row) {
    return row >= this.numRows;
  }

  /**
   * Returns the cell at the given column and row,
   * in case the cell was edited or added.
   *
   * @param col - The column index
   * @param row - The row index
   *
   * @returns The edited cell at the given column and row
   */
  getCell(col, row) {
    if (this.isAddedRow(row)) {
      // Added rows have their own editing state
      return this.addedRows[row - this.numRows].get(col);
    }
    const rowCache = this.editedCells.get(row);
    if (rowCache === undefined) {
      return undefined;
    }
    return rowCache.get(col);
  }

  /**
   * Adds a cell to the editing state for the given column and row index.
   *
   * @param col - The column index
   * @param row - The row index
   * @param cell - The cell to add to the editing state
   */
  setCell(col, row, cell) {
    if (this.isAddedRow(row)) {
      if (row - this.numRows >= this.addedRows.length) {
        // Added row does not exist. This is only expected to happen
        // in relation to a trailing row issue in glide-data-grid.
        return;
      }
      // Added rows have their own editing state
      this.addedRows[row - this.numRows].set(col, cell);
    } else {
      if (this.editedCells.get(row) === undefined) {
        this.editedCells.set(row, new Map());
      }
      const rowCache = this.editedCells.get(row);
      rowCache.set(col, cell);
    }
  }

  /**
   * Adds a new row to the editing state.
   *
   * @param rowCells - The cells of the row to add
   */
  addRow(rowCells) {
    this.addedRows.push(rowCells);
  }

  /**
   * Deletes the given rows from the editing state.
   *
   * @param rows - The rows to delete
   */
  deleteRows(rows) {
    // Delete row one by one starting from the row with the highest index
    rows.sort((a, b) => b - a).forEach(row => {
      this.deleteRow(row);
    });
  }

  /**
   * Deletes the given row from the editing state.
   *
   * @param row - The row to delete
   */
  deleteRow(row) {
    if ((0,src_lib_utils__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(row) || row < 0) {
      // This should never happen
      return;
    }
    if (this.isAddedRow(row)) {
      // Remove from added rows:
      this.addedRows.splice(row - this.numRows, 1);
      // there is nothing more we have to do
      return;
    }
    if (!this.deletedRows.includes(row)) {
      // Add to the set
      this.deletedRows.push(row);
      // Sort the deleted rows (important for calculation of the original row index)
      this.deletedRows = this.deletedRows.sort((a, b) => a - b);
    }

    // Remove all cells from cell state associated with this row:
    this.editedCells.delete(row);
  }

  /**
   * Returns the original row index of the given row.
   * Since the user can delete rows, the original row index and the
   * current one can diverge.
   *
   * @param row - The row index from the current state
   *
   * @returns The original row index
   */
  getOriginalRowIndex(row) {
    // Just count all deleted rows before this row to determine the original row index:
    let originalIndex = row;
    for (let i = 0; i < this.deletedRows.length; i++) {
      if (this.deletedRows[i] > originalIndex) {
        break;
      }
      originalIndex += 1;
    }
    return originalIndex;
  }

  /**
   * Returns the total number of rows of the current state.
   */
  getNumRows() {
    return this.numRows + this.addedRows.length - this.deletedRows.length;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditingState);

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

/***/ "../../streamlit/frontend/src/components/widgets/DataFrame/arrowUtils.ts":
/*!*******************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/DataFrame/arrowUtils.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyPandasStylerCss": () => (/* binding */ applyPandasStylerCss),
/* harmony export */   "extractCssProperty": () => (/* binding */ extractCssProperty),
/* harmony export */   "getAllColumnsFromArrow": () => (/* binding */ getAllColumnsFromArrow),
/* harmony export */   "getCellFromArrow": () => (/* binding */ getCellFromArrow),
/* harmony export */   "getColumnFromArrow": () => (/* binding */ getColumnFromArrow),
/* harmony export */   "getColumnTypeFromArrow": () => (/* binding */ getColumnTypeFromArrow),
/* harmony export */   "getEmptyIndexColumn": () => (/* binding */ getEmptyIndexColumn),
/* harmony export */   "getIndexFromArrow": () => (/* binding */ getIndexFromArrow),
/* harmony export */   "processDisplayData": () => (/* binding */ processDisplayData)
/* harmony export */ });
/* harmony import */ var _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @glideapps/glide-data-grid */ "../../node_modules/@glideapps/glide-data-grid/dist/js/index.js");
/* harmony import */ var src_lib_Quiver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/lib/Quiver */ "../../streamlit/frontend/src/lib/Quiver.ts");
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/lib/utils */ "../../streamlit/frontend/src/lib/utils.ts");
/* harmony import */ var _columns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./columns */ "../../streamlit/frontend/src/components/widgets/DataFrame/columns/index.ts");
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
 * Extracts a CSS property value from a given CSS style string by using a regex.
 *
 * @param htmlElementId - The ID of the HTML element to extract the property for.
 * @param property - The css property to extract the value for.
 * @param cssStyle - The css style string.
 *
 * @return the CSS property value or undefined if the property is not found.
 */
function extractCssProperty(htmlElementId, property, cssStyle) {
  // This regex is supposed to extract the value of a CSS property
  // for a specified HTML element ID from a CSS style string:
  const regex = new RegExp(`${htmlElementId}[,\\s].*{(?:[^}]*[\\s;]{1})?${property}:\\s*([^;}]+)[;]?.*}`, "gm");
  // Makes the regex simpler to match the element correctly:
  cssStyle = cssStyle.replace(/{/g, " {");
  const match = regex.exec(cssStyle);
  if (match) {
    return match[1].trim();
  }
  return undefined;
}
function processDisplayData(displayData) {
  // Remove all line breaks
  return displayData.replace(/(\r\n|\n|\r)/gm, " ");
}

/**
 * Applies pandas styler CSS to style the cell.
 *
 * @param cell: The cell to style.
 * @param cssId: The css ID of the cell.
 * @param cssStyles: All CSS styles from pandas styler.
 *
 * @return a styled grid cell.
 */
function applyPandasStylerCss(cell, cssId, cssStyles) {
  const themeOverride = {};

  // Extract and apply the font color
  const fontColor = extractCssProperty(cssId, "color", cssStyles);
  if (fontColor) {
    themeOverride.textDark = fontColor;
  }

  // Extract and apply the background color
  const backgroundColor = extractCssProperty(cssId, "background-color", cssStyles);
  if (backgroundColor) {
    themeOverride.bgCell = backgroundColor;
  }
  if (backgroundColor === "yellow" && fontColor === undefined) {
    // Yellow is used by pandas styler as the default highlight color.
    // But yellow won't work well with our default font color in dark mode.
    // Therefore, we are overriding the font color to our dark font color which
    // always works well with yellow background.
    themeOverride.textDark = "#31333F";
  }
  if (themeOverride) {
    // Apply the background and font color in the theme override
    return {
      ...cell,
      themeOverride
    };
  }
  return cell;
}

/**
 * Maps the data type from Arrow to a column type.
 */
function getColumnTypeFromArrow(arrowType) {
  let typeName = arrowType ? src_lib_Quiver__WEBPACK_IMPORTED_MODULE_0__.Quiver.getTypeName(arrowType) : null;
  if (!typeName) {
    // Use object column as fallback
    return _columns__WEBPACK_IMPORTED_MODULE_2__.ObjectColumn;
  }
  typeName = typeName.toLowerCase().trim();
  // Match based on arrow types
  if (["unicode", "empty"].includes(typeName)) {
    return _columns__WEBPACK_IMPORTED_MODULE_2__.TextColumn;
  }
  if (["object", "date", "time", "datetime", "datetimetz", "decimal", "bytes"].includes(typeName)) {
    return _columns__WEBPACK_IMPORTED_MODULE_2__.ObjectColumn;
  }
  if (["bool"].includes(typeName)) {
    return _columns__WEBPACK_IMPORTED_MODULE_2__.BooleanColumn;
  }
  if (["int8", "int16", "int32", "int64", "uint8", "uint16", "uint32", "uint64", "float16", "float32", "float64", "float96", "float128", "range" // The default index in pandas uses a range type.
  ].includes(typeName)) {
    return _columns__WEBPACK_IMPORTED_MODULE_2__.NumberColumn;
  }
  if (typeName === "categorical") {
    return _columns__WEBPACK_IMPORTED_MODULE_2__.CategoricalColumn;
  }
  if (typeName.startsWith("list")) {
    return _columns__WEBPACK_IMPORTED_MODULE_2__.ListColumn;
  }
  return _columns__WEBPACK_IMPORTED_MODULE_2__.ObjectColumn;
}

/**
 * Creates the column props for an index column from the Arrow metadata.
 *
 * @param data - The Arrow data.
 * @param indexPosition - The numeric position of the index column.
 *
 * @return the column props for the index column.
 */
function getIndexFromArrow(data, indexPosition) {
  const arrowType = data.types.index[indexPosition];
  const title = data.indexNames[indexPosition];
  let isEditable = true;
  if (src_lib_Quiver__WEBPACK_IMPORTED_MODULE_0__.Quiver.getTypeName(arrowType) === "range") {
    // Range indices are not editable
    isEditable = false;
  }
  return {
    id: `index-${indexPosition}`,
    isEditable,
    title,
    arrowType,
    isIndex: true,
    isHidden: false
  };
}

/**
 * Creates the column props for a data column from the Arrow metadata.
 *
 * @param data - The Arrow data.
 * @param columnPosition - The numeric position of the data column.
 *
 * @return the column props for the data column.
 */
function getColumnFromArrow(data, columnPosition) {
  const title = data.columns[0][columnPosition];
  let arrowType = data.types.data[columnPosition];
  if ((0,src_lib_utils__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(arrowType)) {
    // Use empty column type as fallback
    arrowType = {
      meta: null,
      numpy_type: "object",
      pandas_type: "object"
    };
  }
  let columnTypeMetadata;
  if (src_lib_Quiver__WEBPACK_IMPORTED_MODULE_0__.Quiver.getTypeName(arrowType) === "categorical") {
    // Get the available categories and use it in column type metadata
    const options = data.getCategoricalOptions(columnPosition);
    if ((0,src_lib_utils__WEBPACK_IMPORTED_MODULE_1__.notNullOrUndefined)(options)) {
      columnTypeMetadata = {
        options
      };
    }
  }
  return {
    id: `column-${title}-${columnPosition}`,
    isEditable: true,
    title,
    arrowType,
    columnTypeMetadata,
    isIndex: false,
    isHidden: false
  };
}

/**
 * Creates the column props for an empty index column.
 * This is used for DataFrames that don't have any index.
 * At least one column is required for glide.
 */
function getEmptyIndexColumn() {
  return {
    id: `empty-index`,
    title: "",
    indexNumber: 0,
    isEditable: false,
    isIndex: true
  };
}

/**
 * Creates the column props for all columns from the Arrow metadata.
 *
 * @param data - The Arrow data.
 * @return the column props for all columns.
 */
function getAllColumnsFromArrow(data) {
  var _data$types$index$len, _data$types, _data$types$index, _data$columns$0$lengt, _data$columns, _data$columns$;
  const columns = [];

  // TODO(lukasmasuch): use data.dimensions instead here?
  const numIndices = (_data$types$index$len = (_data$types = data.types) === null || _data$types === void 0 ? void 0 : (_data$types$index = _data$types.index) === null || _data$types$index === void 0 ? void 0 : _data$types$index.length) !== null && _data$types$index$len !== void 0 ? _data$types$index$len : 0;
  const numColumns = (_data$columns$0$lengt = (_data$columns = data.columns) === null || _data$columns === void 0 ? void 0 : (_data$columns$ = _data$columns[0]) === null || _data$columns$ === void 0 ? void 0 : _data$columns$.length) !== null && _data$columns$0$lengt !== void 0 ? _data$columns$0$lengt : 0;
  if (numIndices === 0 && numColumns === 0) {
    // Tables that don't have any columns cause an exception in glide-data-grid.
    // As a workaround, we are adding an empty index column in this case.
    columns.push(getEmptyIndexColumn());
    return columns;
  }
  for (let i = 0; i < numIndices; i++) {
    const column = {
      ...getIndexFromArrow(data, i),
      indexNumber: i
    };
    columns.push(column);
  }
  for (let i = 0; i < numColumns; i++) {
    const column = {
      ...getColumnFromArrow(data, i),
      indexNumber: i + numIndices
    };
    columns.push(column);
  }
  return columns;
}

/**
 * Returns a glide-data-grid compatible cell object based on the
 * cell data from the Quiver (Arrow) object. Different types of data will
 * result in different cell types.
 *
 * @param column - The colum of the cell.
 * @param arrowCell - The dataframe cell object from Arrow.
 * @param cssStyles - Optional css styles to apply on the cell.
 *
 * @return a GridCell object that can be used by glide-data-grid.
 */
function getCellFromArrow(column, arrowCell) {
  let cssStyles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  let cellTemplate;
  if (column.kind === "object") {
    // Always use display value from Quiver for object types
    // these are special types that the dataframe only support in read-only mode.
    cellTemplate = column.getCell((0,src_lib_utils__WEBPACK_IMPORTED_MODULE_1__.notNullOrUndefined)(arrowCell.content) ? processDisplayData(src_lib_Quiver__WEBPACK_IMPORTED_MODULE_0__.Quiver.format(arrowCell.content, arrowCell.contentType, arrowCell.field)) : null);
  } else {
    cellTemplate = column.getCell(arrowCell.content);
  }
  if ((0,_columns__WEBPACK_IMPORTED_MODULE_2__.isErrorCell)(cellTemplate)) {
    // Directly return error cells without any additional modification
    return cellTemplate;
  }
  if (!column.isEditable) {
    // Only apply display content and css styles to non-editable cells.
    if ((0,src_lib_utils__WEBPACK_IMPORTED_MODULE_1__.notNullOrUndefined)(arrowCell.displayContent)) {
      const displayData = processDisplayData(arrowCell.displayContent);
      // If the display content is set, use that instead of the content.
      // This is only supported for text, object, date, datetime, time and number cells.
      if (cellTemplate.kind === _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_3__.GridCellKind.Text) {
        cellTemplate = {
          ...cellTemplate,
          displayData
        };
      } else if (cellTemplate.kind === _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_3__.GridCellKind.Number) {
        cellTemplate = {
          ...cellTemplate,
          displayData
        };
      }
      // TODO (lukasmasuch): Also support datetime formatting here
    }

    if (cssStyles && arrowCell.cssId) {
      cellTemplate = applyPandasStylerCss(cellTemplate, arrowCell.cssId, cssStyles);
    }
  }
  return cellTemplate;
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

/***/ "../../streamlit/frontend/src/components/widgets/DataFrame/columns/BooleanColumn.ts":
/*!******************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/DataFrame/columns/BooleanColumn.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @glideapps/glide-data-grid */ "../../node_modules/@glideapps/glide-data-grid/dist/js/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../../streamlit/frontend/src/components/widgets/DataFrame/columns/utils.ts");
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
 * A column type that supports optimized rendering and editing for boolean values
 * by using checkboxes.
 */
function BooleanColumn(props) {
  const cellTemplate = {
    kind: _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_1__.GridCellKind.Boolean,
    data: false,
    allowOverlay: false,
    // no overlay possible
    contentAlign: props.contentAlignment,
    readonly: !props.isEditable,
    style: props.isIndex ? "faded" : "normal"
  };
  return {
    ...props,
    kind: "boolean",
    sortMode: "default",
    getCell(data) {
      let cellData = null;
      cellData = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toSafeBoolean)(data);
      if (cellData === undefined) {
        return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getErrorCell)((0,_utils__WEBPACK_IMPORTED_MODULE_0__.toSafeString)(data), `The value cannot be interpreted as boolean.`);
      }

      // We are not setting isMissingValue here because the checkbox column
      // does not work with the missing cell rendering.
      return {
        ...cellTemplate,
        data: cellData
      };
    },
    getCellValue(cell) {
      return cell.data === undefined ? null : cell.data;
    }
  };
}
_c = BooleanColumn;
BooleanColumn.isEditableType = true;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BooleanColumn);
var _c;
__webpack_require__.$Refresh$.register(_c, "BooleanColumn");

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

/***/ "../../streamlit/frontend/src/components/widgets/DataFrame/columns/CategoricalColumn.ts":
/*!**********************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/DataFrame/columns/CategoricalColumn.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @glideapps/glide-data-grid */ "../../node_modules/@glideapps/glide-data-grid/dist/js/index.js");
/* harmony import */ var src_lib_Quiver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/lib/Quiver */ "../../streamlit/frontend/src/lib/Quiver.ts");
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/lib/utils */ "../../streamlit/frontend/src/lib/utils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "../../streamlit/frontend/src/components/widgets/DataFrame/columns/utils.ts");
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
 * A column type that supports optimized rendering and editing for categorical values
 * by using a dropdown. This is automatically used by categorical columns (Pandas).
 *
 */
function CategoricalColumn(props) {
  // Categorical column can be either string, number or boolean type based on the options
  let dataType = "string";
  const parameters = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.mergeColumnParameters)(
  // Default parameters:
  {
    options: src_lib_Quiver__WEBPACK_IMPORTED_MODULE_0__.Quiver.getTypeName(props.arrowType) === "bool" ? [true, false] : []
  },
  // User parameters:
  props.columnTypeMetadata);
  const uniqueTypes = new Set(parameters.options.map(x => typeof x));
  if (uniqueTypes.size === 1) {
    if (uniqueTypes.has("number") || uniqueTypes.has("bigint")) {
      dataType = "number";
    } else if (uniqueTypes.has("boolean")) {
      dataType = "boolean";
    }
  }
  const cellTemplate = {
    kind: _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_3__.GridCellKind.Custom,
    allowOverlay: props.isEditable,
    copyData: "",
    contentAlign: props.contentAlignment,
    readonly: !props.isEditable,
    data: {
      kind: "dropdown-cell",
      allowedValues: ["",
      // Enforce the empty option
      ...parameters.options.filter(opt => opt !== "") // ignore empty option if it exists
      .map(opt => (0,_utils__WEBPACK_IMPORTED_MODULE_2__.toSafeString)(opt)) // convert everything to string
      ],

      value: "",
      readonly: !props.isEditable
    }
  };
  return {
    ...props,
    kind: "categorical",
    sortMode: "default",
    getCell(data) {
      // Empty string refers to a missing value
      let cellData = "";
      if ((0,src_lib_utils__WEBPACK_IMPORTED_MODULE_1__.notNullOrUndefined)(data)) {
        cellData = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.toSafeString)(data);
      }
      if (!cellTemplate.data.allowedValues.includes(cellData)) {
        return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getErrorCell)((0,_utils__WEBPACK_IMPORTED_MODULE_2__.toSafeString)(cellData), `The value is not part of the allowed options.`);
      }
      return {
        ...cellTemplate,
        isMissingValue: cellData === "",
        copyData: cellData,
        // Column sorting is done via the copyData value
        data: {
          ...cellTemplate.data,
          value: cellData
        }
      };
    },
    getCellValue(cell) {
      var _cell$data, _cell$data2, _cell$data5;
      if (((_cell$data = cell.data) === null || _cell$data === void 0 ? void 0 : _cell$data.value) === undefined || ((_cell$data2 = cell.data) === null || _cell$data2 === void 0 ? void 0 : _cell$data2.value) === "") {
        return null;
      }
      if (dataType === "number") {
        var _toSafeNumber, _cell$data3;
        return (_toSafeNumber = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.toSafeNumber)((_cell$data3 = cell.data) === null || _cell$data3 === void 0 ? void 0 : _cell$data3.value)) !== null && _toSafeNumber !== void 0 ? _toSafeNumber : null;
      } else if (dataType === "boolean") {
        var _toSafeBoolean, _cell$data4;
        return (_toSafeBoolean = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.toSafeBoolean)((_cell$data4 = cell.data) === null || _cell$data4 === void 0 ? void 0 : _cell$data4.value)) !== null && _toSafeBoolean !== void 0 ? _toSafeBoolean : null;
      }
      return (_cell$data5 = cell.data) === null || _cell$data5 === void 0 ? void 0 : _cell$data5.value;
    }
  };
}
_c = CategoricalColumn;
CategoricalColumn.isEditableType = true;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoricalColumn);
var _c;
__webpack_require__.$Refresh$.register(_c, "CategoricalColumn");

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

/***/ "../../streamlit/frontend/src/components/widgets/DataFrame/columns/ListColumn.ts":
/*!***************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/DataFrame/columns/ListColumn.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @glideapps/glide-data-grid */ "../../node_modules/@glideapps/glide-data-grid/dist/js/index.js");
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/lib/utils */ "../../streamlit/frontend/src/lib/utils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../../streamlit/frontend/src/components/widgets/DataFrame/columns/utils.ts");
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
 * A column type that supports optimized rendering values of array/list types.
 */
function ListColumn(props) {
  const cellTemplate = {
    kind: _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_2__.GridCellKind.Bubble,
    data: [],
    allowOverlay: true,
    contentAlign: props.contentAlignment,
    style: props.isIndex ? "faded" : "normal"
  };
  return {
    ...props,
    kind: "list",
    sortMode: "default",
    isEditable: false,
    // List column is always readonly
    getCell(data) {
      // TODO(lukasmasuch): if notNullOrUndefined -> use empty cell to return null value
      return {
        ...cellTemplate,
        data: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.toSafeArray)(data),
        isMissingValue: (0,src_lib_utils__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(data)
      };
    },
    getCellValue(cell) {
      return cell.data === undefined ? null : cell.data;
    }
  };
}
_c = ListColumn;
ListColumn.isEditableType = false;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListColumn);
var _c;
__webpack_require__.$Refresh$.register(_c, "ListColumn");

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

/***/ "../../streamlit/frontend/src/components/widgets/DataFrame/columns/NumberColumn.ts":
/*!*****************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/DataFrame/columns/NumberColumn.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @glideapps/glide-data-grid */ "../../node_modules/@glideapps/glide-data-grid/dist/js/index.js");
/* harmony import */ var src_lib_Quiver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/lib/Quiver */ "../../streamlit/frontend/src/lib/Quiver.ts");
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/lib/utils */ "../../streamlit/frontend/src/lib/utils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "../../streamlit/frontend/src/components/widgets/DataFrame/columns/utils.ts");
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
 * A column types that supports optimized rendering and editing for numbers.
 * This supports float, integer, and unsigned integer types.
 */
function NumberColumn(props) {
  const arrowTypeName = src_lib_Quiver__WEBPACK_IMPORTED_MODULE_0__.Quiver.getTypeName(props.arrowType);
  const parameters = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.mergeColumnParameters)(
  // Default parameters:
  {
    precision: arrowTypeName.startsWith("int") || arrowTypeName === "range" || arrowTypeName.startsWith("uint") ? 0 : undefined,
    // if uint (unsigned int), only positive numbers are allowed
    min: arrowTypeName.startsWith("uint") ? 0 : undefined
  },
  // User parameters:
  props.columnTypeMetadata);
  const allowNegative = (0,src_lib_utils__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(parameters.min) || parameters.min < 0;
  const fixedDecimals = (0,src_lib_utils__WEBPACK_IMPORTED_MODULE_1__.notNullOrUndefined)(parameters.precision) ? parameters.precision : undefined;
  const cellTemplate = {
    kind: _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_3__.GridCellKind.Number,
    data: undefined,
    displayData: "",
    readonly: !props.isEditable,
    allowOverlay: true,
    contentAlign: props.contentAlignment || "right",
    style: props.isIndex ? "faded" : "normal",
    allowNegative,
    fixedDecimals
  };
  return {
    ...props,
    kind: "number",
    sortMode: "smart",
    getCell(data) {
      let cellData = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.toSafeNumber)(data);
      if ((0,src_lib_utils__WEBPACK_IMPORTED_MODULE_1__.notNullOrUndefined)(cellData)) {
        if (Number.isNaN(cellData)) {
          return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getErrorCell)((0,_utils__WEBPACK_IMPORTED_MODULE_2__.toSafeString)(data), "The value cannot be interpreted as a number.");
        }

        // Apply precision parameter
        if ((0,src_lib_utils__WEBPACK_IMPORTED_MODULE_1__.notNullOrUndefined)(parameters.precision)) {
          cellData = parameters.precision === 0 ? Math.trunc(cellData) : Math.trunc(cellData * 10 ** parameters.precision) / 10 ** parameters.precision;
        }

        // Apply min parameter
        if ((0,src_lib_utils__WEBPACK_IMPORTED_MODULE_1__.notNullOrUndefined)(parameters.min)) {
          cellData = Math.max(cellData, parameters.min);
        }

        // Apply max parameter
        if ((0,src_lib_utils__WEBPACK_IMPORTED_MODULE_1__.notNullOrUndefined)(parameters.max)) {
          cellData = Math.min(cellData, parameters.max);
        }
      }
      return {
        ...cellTemplate,
        data: cellData,
        displayData: (0,src_lib_utils__WEBPACK_IMPORTED_MODULE_1__.notNullOrUndefined)(cellData) ? (0,_utils__WEBPACK_IMPORTED_MODULE_2__.formatNumber)(cellData) : "",
        isMissingValue: (0,src_lib_utils__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(cellData)
      };
    },
    getCellValue(cell) {
      return cell.data === undefined ? null : cell.data;
    }
  };
}
_c = NumberColumn;
NumberColumn.isEditableType = true;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberColumn);
var _c;
__webpack_require__.$Refresh$.register(_c, "NumberColumn");

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

/***/ "../../streamlit/frontend/src/components/widgets/DataFrame/columns/ObjectColumn.ts":
/*!*****************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/DataFrame/columns/ObjectColumn.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @glideapps/glide-data-grid */ "../../node_modules/@glideapps/glide-data-grid/dist/js/index.js");
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/lib/utils */ "../../streamlit/frontend/src/lib/utils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../../streamlit/frontend/src/components/widgets/DataFrame/columns/utils.ts");
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
 * A column type for read-only cells used as a fallback
 * for data types that are currently not supported for editing.
 */
function ObjectColumn(props) {
  const cellTemplate = {
    kind: _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_2__.GridCellKind.Text,
    data: "",
    displayData: "",
    allowOverlay: true,
    contentAlignment: props.contentAlignment,
    readonly: true,
    style: props.isIndex ? "faded" : "normal"
  };
  return {
    ...props,
    kind: "object",
    sortMode: "default",
    isEditable: false,
    // Object columns are read-only.
    getCell(data) {
      try {
        const cellData = (0,src_lib_utils__WEBPACK_IMPORTED_MODULE_0__.notNullOrUndefined)(data) ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__.toSafeString)(data) : null;
        const displayData = (0,src_lib_utils__WEBPACK_IMPORTED_MODULE_0__.notNullOrUndefined)(cellData) ? cellData : "";
        return {
          ...cellTemplate,
          data: cellData,
          displayData,
          isMissingValue: (0,src_lib_utils__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(data)
        };
      } catch (error) {
        return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getErrorCell)((0,_utils__WEBPACK_IMPORTED_MODULE_1__.toSafeString)(data), `The value cannot be interpreted as a string. Error: ${error}`);
      }
    },
    getCellValue(cell) {
      return cell.data === undefined ? null : cell.data;
    }
  };
}
_c = ObjectColumn;
ObjectColumn.isEditableType = false;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ObjectColumn);
var _c;
__webpack_require__.$Refresh$.register(_c, "ObjectColumn");

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

/***/ "../../streamlit/frontend/src/components/widgets/DataFrame/columns/TextColumn.ts":
/*!***************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/DataFrame/columns/TextColumn.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @glideapps/glide-data-grid */ "../../node_modules/@glideapps/glide-data-grid/dist/js/index.js");
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/lib/utils */ "../../streamlit/frontend/src/lib/utils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../../streamlit/frontend/src/components/widgets/DataFrame/columns/utils.ts");
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
 * A column that supports rendering & editing of text values.
 */
function TextColumn(props) {
  const cellTemplate = {
    kind: _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_2__.GridCellKind.Text,
    data: "",
    displayData: "",
    allowOverlay: true,
    contentAlignment: props.contentAlignment,
    readonly: !props.isEditable,
    style: props.isIndex ? "faded" : "normal"
  };
  return {
    ...props,
    kind: "text",
    sortMode: "default",
    getCell(data) {
      try {
        const cellData = (0,src_lib_utils__WEBPACK_IMPORTED_MODULE_0__.notNullOrUndefined)(data) ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__.toSafeString)(data) : null;
        const displayData = (0,src_lib_utils__WEBPACK_IMPORTED_MODULE_0__.notNullOrUndefined)(cellData) ? cellData : "";
        return {
          ...cellTemplate,
          isMissingValue: (0,src_lib_utils__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(cellData),
          data: cellData,
          displayData
        };
      } catch (error) {
        // This should never happen, but if it does, we want to show an error
        return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getErrorCell)("Incompatible value", `The value cannot be interpreted as string. Error: ${error}`);
      }
    },
    getCellValue(cell) {
      return cell.data === undefined ? null : cell.data;
    }
  };
}
_c = TextColumn;
TextColumn.isEditableType = true;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextColumn);
var _c;
__webpack_require__.$Refresh$.register(_c, "TextColumn");

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

/***/ "../../streamlit/frontend/src/components/widgets/DataFrame/columns/index.ts":
/*!**********************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/DataFrame/columns/index.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooleanColumn": () => (/* reexport safe */ _BooleanColumn__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "CategoricalColumn": () => (/* reexport safe */ _CategoricalColumn__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "ColumnTypes": () => (/* binding */ ColumnTypes),
/* harmony export */   "ListColumn": () => (/* reexport safe */ _ListColumn__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "NumberColumn": () => (/* reexport safe */ _NumberColumn__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "ObjectColumn": () => (/* reexport safe */ _ObjectColumn__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "TextColumn": () => (/* reexport safe */ _TextColumn__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "formatNumber": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.formatNumber),
/* harmony export */   "getEmptyCell": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.getEmptyCell),
/* harmony export */   "getErrorCell": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.getErrorCell),
/* harmony export */   "getTextCell": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.getTextCell),
/* harmony export */   "isErrorCell": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.isErrorCell),
/* harmony export */   "isMissingValueCell": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.isMissingValueCell),
/* harmony export */   "mergeColumnParameters": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.mergeColumnParameters),
/* harmony export */   "toGlideColumn": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.toGlideColumn),
/* harmony export */   "toSafeArray": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.toSafeArray),
/* harmony export */   "toSafeBoolean": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.toSafeBoolean),
/* harmony export */   "toSafeNumber": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.toSafeNumber),
/* harmony export */   "toSafeString": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.toSafeString)
/* harmony export */ });
/* harmony import */ var _ObjectColumn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectColumn */ "../../streamlit/frontend/src/components/widgets/DataFrame/columns/ObjectColumn.ts");
/* harmony import */ var _TextColumn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextColumn */ "../../streamlit/frontend/src/components/widgets/DataFrame/columns/TextColumn.ts");
/* harmony import */ var _BooleanColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BooleanColumn */ "../../streamlit/frontend/src/components/widgets/DataFrame/columns/BooleanColumn.ts");
/* harmony import */ var _CategoricalColumn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CategoricalColumn */ "../../streamlit/frontend/src/components/widgets/DataFrame/columns/CategoricalColumn.ts");
/* harmony import */ var _ListColumn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListColumn */ "../../streamlit/frontend/src/components/widgets/DataFrame/columns/ListColumn.ts");
/* harmony import */ var _NumberColumn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NumberColumn */ "../../streamlit/frontend/src/components/widgets/DataFrame/columns/NumberColumn.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "../../streamlit/frontend/src/components/widgets/DataFrame/columns/utils.ts");
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
 * All available column types need to be registered here.
 */
const ColumnTypes = new Map(Object.entries({
  object: _ObjectColumn__WEBPACK_IMPORTED_MODULE_0__["default"],
  text: _TextColumn__WEBPACK_IMPORTED_MODULE_1__["default"],
  boolean: _BooleanColumn__WEBPACK_IMPORTED_MODULE_2__["default"],
  categorical: _CategoricalColumn__WEBPACK_IMPORTED_MODULE_3__["default"],
  list: _ListColumn__WEBPACK_IMPORTED_MODULE_4__["default"],
  number: _NumberColumn__WEBPACK_IMPORTED_MODULE_5__["default"]
}));


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

/***/ "../../streamlit/frontend/src/components/widgets/DataFrame/columns/utils.ts":
/*!**********************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/DataFrame/columns/utils.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatNumber": () => (/* binding */ formatNumber),
/* harmony export */   "getEmptyCell": () => (/* binding */ getEmptyCell),
/* harmony export */   "getErrorCell": () => (/* binding */ getErrorCell),
/* harmony export */   "getTextCell": () => (/* binding */ getTextCell),
/* harmony export */   "isErrorCell": () => (/* binding */ isErrorCell),
/* harmony export */   "isMissingValueCell": () => (/* binding */ isMissingValueCell),
/* harmony export */   "mergeColumnParameters": () => (/* binding */ mergeColumnParameters),
/* harmony export */   "toGlideColumn": () => (/* binding */ toGlideColumn),
/* harmony export */   "toSafeArray": () => (/* binding */ toSafeArray),
/* harmony export */   "toSafeBoolean": () => (/* binding */ toSafeBoolean),
/* harmony export */   "toSafeNumber": () => (/* binding */ toSafeNumber),
/* harmony export */   "toSafeString": () => (/* binding */ toSafeString)
/* harmony export */ });
/* harmony import */ var _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @glideapps/glide-data-grid */ "../../node_modules/@glideapps/glide-data-grid/dist/js/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var numbro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! numbro */ "../../node_modules/numbro/dist/numbro.min.js");
/* harmony import */ var numbro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numbro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/lib/utils */ "../../streamlit/frontend/src/lib/utils.ts");
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
 * Interface used for defining the properties (configuration options) of a column.
 * These options can also be used to overwrite from user-defined column config.
 */

// See pydantic for inspiration: https://pydantic-docs.helpmanual.io/usage/types/#booleans
const BOOLEAN_TRUE_VALUES = ["true", "t", "yes", "y", "on", "1"];
const BOOLEAN_FALSE_VALUES = ["false", "f", "no", "n", "off", "0"];

/**
 * Interface used for indicating if a cell contains an error.
 */

/**
 * Returns a cell with an error message.
 *
 * @param errorMsg: A short error message to use as display value.
 * @param errorDetails: The full error message to show when the user
 *                     clicks on a cell.
 *
 * @return a read-only GridCell object that can be used by glide-data-grid.
 */
function getErrorCell(errorMsg) {
  let errorDetails = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  errorMsg = `⚠️ ${errorMsg}`;
  return {
    kind: _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_3__.GridCellKind.Text,
    readonly: true,
    allowOverlay: true,
    data: errorMsg + (errorDetails ? `\n\n${errorDetails}\n` : ""),
    displayData: errorMsg,
    isError: true
  };
}

/**
 * Returns `true` if the given cell contains an error.
 * This can happen if the value type is not compatible with
 * the given value type.
 */
function isErrorCell(cell) {
  return cell.hasOwnProperty("isError") && cell.isError;
}

/**
 * Interface used for indicating if a cell contains no value.
 */

/**
 * Returns `true` if the given cell contains no value (-> missing value).
 * For example, a number cell that contains null is interpreted as a missing value.
 */
function isMissingValueCell(cell) {
  return cell.hasOwnProperty("isMissingValue") && cell.isMissingValue;
}

/**
 * Returns an empty cell.
 */
function getEmptyCell() {
  return {
    kind: _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_3__.GridCellKind.Loading,
    allowOverlay: false
  };
}

/**
 * Returns an empty text cell.
 *
 * @param readonly: If true, returns a read-only version of the cell.
 * @param faded: If true, returns a faded version of the cell.
 *
 * @return a GridCell object that can be used by glide-data-grid.
 */
function getTextCell(readonly, faded) {
  const style = faded ? "faded" : "normal";
  return {
    kind: _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_3__.GridCellKind.Text,
    data: "",
    displayData: "",
    allowOverlay: true,
    readonly,
    style
  };
}

/**
 * Converts from our BaseColumn format to the glide-data-grid compatible GridColumn.
 */
function toGlideColumn(column) {
  return {
    id: column.id,
    title: column.title,
    hasMenu: false,
    themeOverride: column.themeOverride,
    ...(column.isStretched && {
      grow: column.isIndex ? 1 : 3
    }),
    ...(column.width && {
      width: column.width
    })
  };
}

/**
 * Merges the default column parameters with the user-defined column parameters.
 *
 * @param defaultParams - The default column parameters.
 * @param userParams - The user-defined column parameters.
 *
 * @returns The merged column parameters.
 */
function mergeColumnParameters(defaultParams, userParams) {
  if ((0,src_lib_utils__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(defaultParams)) {
    return userParams || {};
  }
  if ((0,src_lib_utils__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(userParams)) {
    return defaultParams || {};
  }
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.merge)(defaultParams, userParams);
}

/**
 * Converts the given value of unknown type to an array without
 * the risks of any exceptions.
 *
 * @param data - The value to convert to an array.
 *
 * @returns The converted array or an empty array if the value cannot be interpreted as an array.
 */
function toSafeArray(data) {
  if ((0,src_lib_utils__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(data)) {
    return [];
  }
  if (typeof data === "number" || typeof data === "boolean") {
    // Single number or boolean
    return [data];
  }
  if (typeof data === "string") {
    if (data === "") {
      // Empty string
      return [];
    }

    // Try to parse string to an array
    if (data.trim().startsWith("[") && data.trim().endsWith("]")) {
      // Support for JSON arrays: ["foo", 1, null, "test"]
      try {
        return JSON.parse(data);
      } catch (error) {
        return [data];
      }
    } else {
      // Support for comma-separated values: "foo,1,,test"
      return data.split(",");
    }
  }
  try {
    const parsedData = JSON.parse(JSON.stringify(data, (_key, value) => typeof value === "bigint" ? Number(value) : value));
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(parsedData)) {
      return [toSafeString(parsedData)];
    }
    return parsedData.map(value => ["string", "number", "boolean", "null"].includes(typeof value) ? value : toSafeString(value));
  } catch (error) {
    return [toSafeString(data)];
  }
}

/**
 * Converts the given value of unknown type to a string without
 * the risks of any exceptions.
 *
 * @param data - The value to convert to a string.
 *
 * @return The converted string or a string showing the type of the object as fallback.
 */
function toSafeString(data) {
  try {
    try {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.toString)(data);
    } catch (error) {
      return JSON.stringify(data, (_key, value) => typeof value === "bigint" ? Number(value) : value);
    }
  } catch (error) {
    // This is most likely an object that cannot be converted to a string
    // console.log converts this to `[object Object]` which we are doing here as well:
    return `[${typeof data}]`;
  }
}

/**
 * Converts the given value of unknown type to a boolean without
 * the risks of any exceptions.
 *
 * @param value - The value to convert to a boolean.
 *
 * @return The converted boolean, null if the value is empty or undefined if the
 *         value cannot be interpreted as a boolean.
 */
function toSafeBoolean(value) {
  if ((0,src_lib_utils__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(value)) {
    return null;
  }
  if (typeof value === "boolean") {
    return value;
  }
  const cleanedValue = toSafeString(value).toLowerCase().trim();
  if (cleanedValue === "") {
    return null;
  } else if (BOOLEAN_TRUE_VALUES.includes(cleanedValue)) {
    return true;
  } else if (BOOLEAN_FALSE_VALUES.includes(cleanedValue)) {
    return false;
  }
  // The value cannot be interpreted as boolean
  return undefined;
}

/**
 * Converts the given value of unknown type to a number without
 * the risks of any exceptions.
 *
 * @param value - The value to convert to a number.
 *
 * @returns The converted number or null if the value is empty or undefined or NaN if the
 *          value cannot be interpreted as a number.
 */
function toSafeNumber(value) {
  // TODO(lukasmasuch): Should this return null as replacement for NaN?

  if ((0,src_lib_utils__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(value)) {
    return null;
  }
  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(value)) {
    return NaN;
  }
  if (typeof value === "string") {
    if (value.trim().length === 0) {
      // Empty string should return null
      return null;
    }
    try {
      // Try to convert string to number via numbro:
      // https://numbrojs.com/old-format.html#unformat
      const unformattedValue = numbro__WEBPACK_IMPORTED_MODULE_1___default().unformat(value.trim());
      if ((0,src_lib_utils__WEBPACK_IMPORTED_MODULE_2__.notNullOrUndefined)(unformattedValue)) {
        return unformattedValue;
      }
    } catch (error) {
      // Do nothing here
    }
  } else if (value instanceof Int32Array) {
    // int values need to be extracted this way:
    // eslint-disable-next-line prefer-destructuring
    return Number(value[0]);
  }
  return Number(value);
}

/**
 * Formats the given number to a string with the given maximum precision.
 *
 * @param value - The number to format.
 * @param maxPrecision - The maximum number of decimals to show.
 * @param keepTrailingZeros - Whether to keep trailing zeros.
 *
 * @returns The formatted number as a string.
 */
function formatNumber(value) {
  let maxPrecision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  let keepTrailingZeros = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!Number.isNaN(value) && Number.isFinite(value)) {
    if (maxPrecision === 0) {
      // Numbro is unable to format the numb with 0 decimals.
      value = Math.round(value);
    }
    return numbro__WEBPACK_IMPORTED_MODULE_1___default()(value).format(keepTrailingZeros ? `0,0.${"0".repeat(maxPrecision)}` : `0,0.[${"0".repeat(maxPrecision)}]`);
  }
  return "";
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

/***/ "../../streamlit/frontend/src/components/widgets/DataFrame/hooks/index.ts":
/*!********************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/DataFrame/hooks/index.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useColumnLoader": () => (/* reexport safe */ _useColumnLoader__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "useColumnSizer": () => (/* reexport safe */ _useColumnSizer__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "useColumnSort": () => (/* reexport safe */ _useColumnSort__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "useCustomTheme": () => (/* reexport safe */ _useCustomTheme__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "useDataEditor": () => (/* reexport safe */ _useDataEditor__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "useDataLoader": () => (/* reexport safe */ _useDataLoader__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "useTableSizer": () => (/* reexport safe */ _useTableSizer__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _useCustomTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useCustomTheme */ "../../streamlit/frontend/src/components/widgets/DataFrame/hooks/useCustomTheme.ts");
/* harmony import */ var _useDataLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useDataLoader */ "../../streamlit/frontend/src/components/widgets/DataFrame/hooks/useDataLoader.ts");
/* harmony import */ var _useTableSizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useTableSizer */ "../../streamlit/frontend/src/components/widgets/DataFrame/hooks/useTableSizer.ts");
/* harmony import */ var _useDataEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useDataEditor */ "../../streamlit/frontend/src/components/widgets/DataFrame/hooks/useDataEditor.ts");
/* harmony import */ var _useColumnSizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useColumnSizer */ "../../streamlit/frontend/src/components/widgets/DataFrame/hooks/useColumnSizer.ts");
/* harmony import */ var _useColumnSort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useColumnSort */ "../../streamlit/frontend/src/components/widgets/DataFrame/hooks/useColumnSort.ts");
/* harmony import */ var _useColumnLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useColumnLoader */ "../../streamlit/frontend/src/components/widgets/DataFrame/hooks/useColumnLoader.ts");
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

/***/ "../../streamlit/frontend/src/components/widgets/DataFrame/hooks/useColumnLoader.ts":
/*!******************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/DataFrame/hooks/useColumnLoader.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COLUMN_POSITION_PREFIX": () => (/* binding */ COLUMN_POSITION_PREFIX),
/* harmony export */   "INDEX_IDENTIFIER": () => (/* binding */ INDEX_IDENTIFIER),
/* harmony export */   "applyColumnConfig": () => (/* binding */ applyColumnConfig),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getColumnConfig": () => (/* binding */ getColumnConfig),
/* harmony export */   "getColumnType": () => (/* binding */ getColumnType)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_autogen_proto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/autogen/proto */ "../../streamlit/frontend/src/autogen/proto.js");
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/lib/utils */ "../../streamlit/frontend/src/lib/utils.ts");
/* harmony import */ var src_lib_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/lib/log */ "../../streamlit/frontend/src/lib/log.ts");
/* harmony import */ var src_components_widgets_DataFrame_arrowUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/widgets/DataFrame/arrowUtils */ "../../streamlit/frontend/src/components/widgets/DataFrame/arrowUtils.ts");
/* harmony import */ var src_components_widgets_DataFrame_columns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/widgets/DataFrame/columns */ "../../streamlit/frontend/src/components/widgets/DataFrame/columns/index.ts");
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







// Using this ID for column config will apply the config to all index columns
const INDEX_IDENTIFIER = "index";
// Prefix used in the config column mapping when referring to a column via the numeric position
const COLUMN_POSITION_PREFIX = "col:";

/**
 * Options to configure columns.
 */

/**
 * Apply the user-defined column configuration if supplied.
 *
 * @param columnProps - The column properties to apply the config to.
 * @param columnConfigMapping - The user-defined column configuration mapping.
 *
 * @return the column properties with the config applied.
 */
function applyColumnConfig(columnProps, columnConfigMapping) {
  var _columnConfig$type;
  if (!columnConfigMapping) {
    // No column config configured
    return columnProps;
  }
  let columnConfig;
  if (columnConfigMapping.has(columnProps.title)) {
    // Config is configured based on the column title
    columnConfig = columnConfigMapping.get(columnProps.title);
  } else if (columnConfigMapping.has(`${COLUMN_POSITION_PREFIX}${columnProps.indexNumber}`)) {
    // Config is configured based on the column position, e.g. col:0 -> first column
    columnConfig = columnConfigMapping.get(`${COLUMN_POSITION_PREFIX}${columnProps.indexNumber}`);
  } else if (columnProps.isIndex && columnConfigMapping.has(INDEX_IDENTIFIER)) {
    // Config is configured for the index column (or all index columns for multi-index)
    columnConfig = columnConfigMapping.get(INDEX_IDENTIFIER);
  }
  if (!columnConfig) {
    // No column config found for this column
    return columnProps;
  }

  // This will update all column props with the user-defined config for all
  // configuration option that are not undefined:
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.merge)({
    ...columnProps
  }, {
    title: columnConfig.title,
    width: columnConfig.width,
    customType: (_columnConfig$type = columnConfig.type) === null || _columnConfig$type === void 0 ? void 0 : _columnConfig$type.toLowerCase().trim(),
    isEditable: columnConfig.editable,
    isHidden: columnConfig.hidden,
    columnTypeMetadata: columnConfig.metadata,
    contentAlignment: columnConfig.alignment
  });
}

/**
 * Extracts the user-defined column configuration from the proto message.
 *
 * @param element - The proto message of the dataframe element.
 *
 * @returns the user-defined column configuration.
 */
function getColumnConfig(element) {
  if (!element.columns) {
    return new Map();
  }
  try {
    return new Map(Object.entries(JSON.parse(element.columns)));
  } catch (error) {
    // This is not expected to happen, but if it does, we'll return an empty map
    // and log the error to the console.
    (0,src_lib_log__WEBPACK_IMPORTED_MODULE_3__.logError)(error);
    return new Map();
  }
}
/**
 * Get the column type (creator class of column type) for the given column properties.
 *
 * @param column - The column properties.
 *
 * @returns the column creator of the corresponding column type.
 */
function getColumnType(column) {
  // Create a column instance based on the column properties
  let ColumnType;
  if ((0,src_lib_utils__WEBPACK_IMPORTED_MODULE_2__.notNullOrUndefined)(column.customType)) {
    if (src_components_widgets_DataFrame_columns__WEBPACK_IMPORTED_MODULE_5__.ColumnTypes.has(column.customType)) {
      ColumnType = src_components_widgets_DataFrame_columns__WEBPACK_IMPORTED_MODULE_5__.ColumnTypes.get(column.customType);
    } else {
      (0,src_lib_log__WEBPACK_IMPORTED_MODULE_3__.logWarning)(`Unknown column type configured in column configuration: ${column.customType}`);
    }
  }
  if ((0,src_lib_utils__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(ColumnType)) {
    // Load based on arrow type
    ColumnType = (0,src_components_widgets_DataFrame_arrowUtils__WEBPACK_IMPORTED_MODULE_4__.getColumnTypeFromArrow)(column.arrowType);
  }
  return ColumnType;
}

/**
 * Custom hook that handles loads and configures all table columns from the Arrow table.
 *
 * @param element - The proto message of the dataframe element
 * @param data - The Arrow data extracted from the proto message
 * @param disabled - Whether the widget is disabled
 *
 * @returns the columns and the cell content getter compatible with glide-data-grid.
 */
function useColumnLoader(element, data, disabled) {
  // TODO(lukasmasuch): We might use state to store the column config as additional optimization?
  const columnConfigMapping = getColumnConfig(element);
  const stretchColumns = element.useContainerWidth || (0,src_lib_utils__WEBPACK_IMPORTED_MODULE_2__.notNullOrUndefined)(element.width) && element.width > 0;

  // Converts the columns from Arrow into columns compatible with glide-data-grid
  const configuredColumns = (0,src_components_widgets_DataFrame_arrowUtils__WEBPACK_IMPORTED_MODULE_4__.getAllColumnsFromArrow)(data).map(column => {
    // Apply column configurations
    let updatedColumn = {
      ...column,
      ...applyColumnConfig(column, columnConfigMapping),
      isStretched: stretchColumns
    };
    const ColumnType = getColumnType(updatedColumn);

    // Make sure editing is deactivated if the column is read-only, disabled,
    // or a not editable type.
    if (element.editingMode === src_autogen_proto__WEBPACK_IMPORTED_MODULE_1__.Arrow.EditingMode.READ_ONLY || disabled || ColumnType.isEditableType === false) {
      updatedColumn = {
        ...updatedColumn,
        isEditable: false
      };
    }
    return ColumnType(updatedColumn);
  }).filter(column => {
    // Filter out all columns that are hidden
    return !column.isHidden;
  });

  // If all columns got filtered out, we add an empty index column
  // to prevent errors from glide-data-grid.
  const columns = configuredColumns.length > 0 ? configuredColumns : [(0,src_components_widgets_DataFrame_columns__WEBPACK_IMPORTED_MODULE_5__.ObjectColumn)((0,src_components_widgets_DataFrame_arrowUtils__WEBPACK_IMPORTED_MODULE_4__.getEmptyIndexColumn)())];
  return {
    columns
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useColumnLoader);

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

/***/ "../../streamlit/frontend/src/components/widgets/DataFrame/hooks/useColumnSizer.ts":
/*!*****************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/DataFrame/hooks/useColumnSizer.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();
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
 * Hook to manage the interactive column resizing capabilities.
 *
 * @param columns - The columns of the table.
 *
 * @returns An object containing the following properties:
 * - columns: The updated list of columns.
 * - onColumnResize: The callback function to be called when a column is resized.
 */
function useColumnSizer(columns) {
  _s();
  // The columns with the corresponding empty template for every type:
  const [columnSizes, setColumnSizes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => new Map());
  const onColumnResize = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((column, _newSize, _colIndex, newSizeWithGrow) => {
    if (column.id) {
      setColumnSizes(new Map(columnSizes).set(column.id, newSizeWithGrow));
    }
  }, [columnSizes]);

  // Apply column widths from state:
  const sizedColumns = columns.map(column => {
    if (column.id && columnSizes.has(column.id) && columnSizes.get(column.id) !== undefined) {
      return {
        ...column,
        width: columnSizes.get(column.id),
        // Deactivate grow whenever a column gets manually resized
        grow: 0
      };
    }
    return column;
  });
  return {
    columns: sizedColumns,
    onColumnResize
  };
}
_s(useColumnSizer, "UOyKOGjHcN+x0VzYnhUvabisLkk=");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useColumnSizer);

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

/***/ "../../streamlit/frontend/src/components/widgets/DataFrame/hooks/useColumnSort.ts":
/*!****************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/DataFrame/hooks/useColumnSort.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _glideapps_glide_data_grid_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @glideapps/glide-data-grid-source */ "../../node_modules/@glideapps/glide-data-grid-source/dist/js/use-column-sort.js");
/* harmony import */ var src_components_widgets_DataFrame_columns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/widgets/DataFrame/columns */ "../../streamlit/frontend/src/components/widgets/DataFrame/columns/index.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();
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
 * Configuration type for column sorting hook.
 */

/**
 * Updates the column headers based on the sorting configuration.
 *
 * @param columns - The columns of the table.
 * @param sort - The current sorting configuration.
 *
 * @returns The updated list of columns.
 */
function updateSortingHeader(columns, sort) {
  if (sort === undefined) {
    return columns;
  }
  return columns.map(column => {
    if (column.id === sort.column.id) {
      return {
        ...column,
        title: sort.direction === "asc" ? `↑ ${column.title}` : `↓ ${column.title}`
      };
    }
    return column;
  });
}
/**
 * A React hook that provides column sorting functionality.
 *
 * @param numRows - The number of rows in the table.
 * @param columns - The columns of the table.
 *
 * @returns An object containing the following properties:
 * - `columns`: The updated list of columns.
 * - `sortColumn`: A function that sorts the column at the given index.
 * - `getOriginalIndex`: A function that returns the original index of the row at the given index.
 * - `getCellContent`: An updated function that returns the content of the cell at the given column and row indices.
 */
function useColumnSort(numRows, columns, getCellContent) {
  _s();
  const [sort, setSort] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  const {
    getCellContent: getCellContentSorted,
    getOriginalIndex
  } = (0,_glideapps_glide_data_grid_source__WEBPACK_IMPORTED_MODULE_2__.useColumnSort)({
    columns: columns.map(column => (0,src_components_widgets_DataFrame_columns__WEBPACK_IMPORTED_MODULE_1__.toGlideColumn)(column)),
    getCellContent,
    rows: numRows,
    sort
  });
  const updatedColumns = updateSortingHeader(columns, sort);
  const sortColumn = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(index => {
    let sortDirection = "asc";
    const clickedColumn = updatedColumns[index];
    if (sort && sort.column.id === clickedColumn.id) {
      // The clicked column is already sorted
      if (sort.direction === "asc") {
        // Sort column descending
        sortDirection = "desc";
      } else {
        // Remove sorting of column
        setSort(undefined);
        return;
      }
    }
    setSort({
      column: (0,src_components_widgets_DataFrame_columns__WEBPACK_IMPORTED_MODULE_1__.toGlideColumn)(clickedColumn),
      direction: sortDirection,
      mode: clickedColumn.sortMode
    });
  }, [sort, updatedColumns]);
  return {
    columns: updatedColumns,
    sortColumn,
    getOriginalIndex,
    getCellContent: getCellContentSorted
  };
}
_s(useColumnSort, "yugsV1f/luFCIkHWAvKGfnfvGVI=", false, function () {
  return [_glideapps_glide_data_grid_source__WEBPACK_IMPORTED_MODULE_2__.useColumnSort];
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useColumnSort);

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

/***/ "../../streamlit/frontend/src/components/widgets/DataFrame/hooks/useCustomTheme.ts":
/*!*****************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/DataFrame/hooks/useCustomTheme.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var color2k__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color2k */ "../../node_modules/color2k/dist/index.exports.import.es.mjs");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "../../node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();
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
 * Creates a glide-data-grid compatible theme based on our theme configuration.
 *
 * @return a glide-data-grid compatible theme.
 */
function useCustomTheme() {
  _s();
  const theme = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.u)();
  return {
    // Explanations: https://github.com/glideapps/glide-data-grid/blob/main/packages/core/API.md#theme
    accentColor: theme.colors.primary,
    accentFg: theme.colors.white,
    accentLight: (0,color2k__WEBPACK_IMPORTED_MODULE_1__.transparentize)(theme.colors.primary, 0.9),
    borderColor: theme.colors.fadedText05,
    horizontalBorderColor: theme.colors.fadedText05,
    fontFamily: theme.genericFonts.bodyFont,
    bgSearchResult: (0,color2k__WEBPACK_IMPORTED_MODULE_1__.transparentize)(theme.colors.primary, 0.9),
    // Header styling:
    bgIconHeader: theme.colors.fadedText60,
    fgIconHeader: theme.colors.white,
    bgHeader: theme.colors.bgMix,
    bgHeaderHasFocus: theme.colors.secondaryBg,
    bgHeaderHovered: theme.colors.bgMix,
    // uses same color as bgHeader to deactivate the hover effect
    textHeader: theme.colors.fadedText60,
    textHeaderSelected: theme.colors.white,
    textGroupHeader: theme.colors.fadedText60,
    headerFontStyle: `${theme.fontSizes.sm}`,
    // Cell styling:
    baseFontStyle: theme.fontSizes.sm,
    editorFontSize: theme.fontSizes.sm,
    textDark: theme.colors.bodyText,
    textMedium: (0,color2k__WEBPACK_IMPORTED_MODULE_1__.transparentize)(theme.colors.bodyText, 0.2),
    textLight: theme.colors.fadedText40,
    textBubble: theme.colors.fadedText60,
    bgCell: theme.colors.bgColor,
    bgCellMedium: theme.colors.bgColor,
    // uses same as bgCell to always have the same background color
    cellHorizontalPadding: 8,
    cellVerticalPadding: 3,
    // Special cells:
    bgBubble: theme.colors.secondaryBg,
    bgBubbleSelected: theme.colors.secondaryBg,
    linkColor: theme.colors.linkText,
    drilldownBorder: theme.colors.darkenedBgMix25,
    // Unused settings:
    // lineHeight
    // Custom settings
    tableBorderRadius: theme.radii.md
  };
}
_s(useCustomTheme, "Efx5jmflhb3doeu7ejPUjs98xmU=", false, function () {
  return [_emotion_react__WEBPACK_IMPORTED_MODULE_0__.u];
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCustomTheme);

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

/***/ "../../streamlit/frontend/src/components/widgets/DataFrame/hooks/useDataEditor.ts":
/*!****************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/DataFrame/hooks/useDataEditor.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var src_components_widgets_DataFrame_columns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/widgets/DataFrame/columns */ "../../streamlit/frontend/src/components/widgets/DataFrame/columns/index.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();
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
 * Custom hook to handle all aspects related to data editing. This includes editing cells,
 * pasting from clipboard, and appending & deleting rows.
 *
 * @param columns - The columns of the table.
 * @param fixedNumRows - Whether the number of rows is fixed. This means that rows cannot be added or deleted.
 * @param editingState - The editing state of the data editor.
 * @param getCellContent - Function to get a specific cell.
 * @param getOriginalIndex - Function to map a row ID of the current state to the original row ID.
 *                           This mainly changed by sorting of columns.
 * @param refreshCells - Callback that allows to trigger a UI refresh of a selection of cells.
 * @param applyEdits - Callback that needs to be called on all edits. This will also trigger a rerun
 *                     and send widget state to the backend.
 *
 * @returns Glide-data-grid compatible functions for editing capabilities.
 */
function useDataEditor(columns, fixedNumRows, editingState, getCellContent, getOriginalIndex, refreshCells, applyEdits) {
  _s();
  const onCellEdited = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((_ref, updatedCell) => {
    let [col, row] = _ref;
    const column = columns[col];
    const originalCol = column.indexNumber;

    // We need to apply two different mappings here. One for the case that
    // the user has sorted a column, and another one from the editing state
    // to get the correct row ID when the user has deleted rows.
    const originalRow = editingState.current.getOriginalRowIndex(getOriginalIndex(row));
    const currentCell = getCellContent([col, row]);
    const currentValue = column.getCellValue(currentCell);
    const newValue = column.getCellValue(updatedCell);
    if (!(0,src_components_widgets_DataFrame_columns__WEBPACK_IMPORTED_MODULE_1__.isErrorCell)(currentCell) && newValue === currentValue) {
      // No editing is required since the values did not change
      return;
    }
    const newCell = column.getCell(newValue);
    editingState.current.setCell(originalCol, originalRow, {
      ...newCell,
      lastUpdated: performance.now()
    });
    applyEdits();
  }, [columns, editingState, getOriginalIndex, getCellContent, applyEdits]);
  const onRowAppended = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    if (fixedNumRows) {
      // Appending rows is not supported
      return;
    }
    const newRow = new Map();
    columns.forEach(column => {
      newRow.set(column.indexNumber, column.getCell(undefined));
    });
    editingState.current.addRow(newRow);
    applyEdits(false, false);
  }, [columns, editingState, fixedNumRows]);
  const onDelete = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(selection => {
    var _selection$current;
    if (selection.rows.length > 0) {
      // User has selected one or more rows
      if (fixedNumRows) {
        // Deleting rows is not supported
        return true;
      }
      const rowsToDelete = selection.rows.toArray().map(row => {
        return editingState.current.getOriginalRowIndex(getOriginalIndex(row));
      });
      // We need to delete all rows at once, so that the indexes work correct
      editingState.current.deleteRows(rowsToDelete);
      applyEdits(true);
      return false;
    }
    if ((_selection$current = selection.current) !== null && _selection$current !== void 0 && _selection$current.range) {
      // User has selected one or more cells
      const updatedCells = [];
      const selectedArea = selection.current.range;
      for (let row = selectedArea.y; row < selectedArea.y + selectedArea.height; row++) {
        for (let col = selectedArea.x; col < selectedArea.x + selectedArea.width; col++) {
          const column = columns[col];
          if (column.isEditable) {
            updatedCells.push({
              cell: [col, row]
            });
            onCellEdited([col, row], column.getCell(null));
          }
        }
      }
      if (updatedCells.length > 0) {
        applyEdits();
        refreshCells(updatedCells);
      }
      return false;
    }
    return true;
  }, [columns, editingState, fixedNumRows, refreshCells, getOriginalIndex, applyEdits]);
  const onPaste = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((target, values) => {
    const [targetCol, targetRow] = target;
    const updatedCells = [];
    for (let row = 0; row < values.length; row++) {
      const rowData = values[row];
      if (row + targetRow >= editingState.current.getNumRows()) {
        if (fixedNumRows) {
          // Only add new rows if editing mode is dynamic, otherwise break here
          break;
        }
        // Adding rows during paste would not work currently. However, we already disallow
        // sorting in dynamic mode, so we don't have to do anything here.
        onRowAppended();
      }
      for (let col = 0; col < rowData.length; col++) {
        const pasteDataValue = rowData[col];
        const rowIndex = row + targetRow;
        const colIndex = col + targetCol;
        if (colIndex >= columns.length) {
          // We could potentially add new columns here in the future.
          break;
        }
        const column = columns[colIndex];
        // Only add to columns that are editable:
        if (column.isEditable) {
          const newCell = column.getCell(pasteDataValue);
          // We are not editing cells if the pasted value leads to an error:
          if (!(0,src_components_widgets_DataFrame_columns__WEBPACK_IMPORTED_MODULE_1__.isErrorCell)(newCell)) {
            const originalCol = column.indexNumber;
            const originalRow = editingState.current.getOriginalRowIndex(getOriginalIndex(rowIndex));
            const currentValue = column.getCellValue(getCellContent([colIndex, rowIndex]));
            const newValue = column.getCellValue(newCell);
            // Edit the cell only if the value actually changed:
            if (newValue !== currentValue) {
              editingState.current.setCell(originalCol, originalRow, {
                ...newCell,
                lastUpdated: performance.now()
              });
              updatedCells.push({
                cell: [colIndex, rowIndex]
              });
            }
          }
        }
      }
      if (updatedCells.length > 0) {
        applyEdits();
        refreshCells(updatedCells);
      }
    }
    return false;
  }, [columns, editingState, fixedNumRows, getOriginalIndex, getCellContent, onRowAppended, applyEdits, refreshCells]);
  return {
    onCellEdited,
    onPaste,
    onRowAppended,
    onDelete
  };
}
_s(useDataEditor, "xszPomYPh9+tscchsPGXX8hTDmk=");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDataEditor);

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

/***/ "../../streamlit/frontend/src/components/widgets/DataFrame/hooks/useDataLoader.ts":
/*!****************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/DataFrame/hooks/useDataLoader.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var src_lib_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/lib/log */ "../../streamlit/frontend/src/lib/log.ts");
/* harmony import */ var src_components_widgets_DataFrame_arrowUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/widgets/DataFrame/arrowUtils */ "../../streamlit/frontend/src/components/widgets/DataFrame/arrowUtils.ts");
/* harmony import */ var src_components_widgets_DataFrame_columns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/widgets/DataFrame/columns */ "../../streamlit/frontend/src/components/widgets/DataFrame/columns/index.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();
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
 * Custom hook that handles all data loading capabilities for the interactive data table.
 * This also includes the logic to load and configure columns.
 *
 * @param data - The Arrow data extracted from the proto message
 * @param numRows - The number of rows of the current state (includes row additions/deletions)
 * @param editingState - The editing state of the data editor
 *
 * @returns the columns and the cell content getter compatible with glide-data-grid.
 */
function useDataLoader(data, columns, numRows, editingState) {
  _s();
  const getCellContent = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(_ref => {
    let [col, row] = _ref;
    if (col > columns.length - 1) {
      return (0,src_components_widgets_DataFrame_columns__WEBPACK_IMPORTED_MODULE_3__.getErrorCell)("Column index out of bounds.", "This should never happen. Please report this bug.");
    }
    if (row > numRows - 1) {
      return (0,src_components_widgets_DataFrame_columns__WEBPACK_IMPORTED_MODULE_3__.getErrorCell)("Row index out of bounds.", "This should never happen. Please report this bug.");
    }
    const column = columns[col];
    const originalCol = column.indexNumber;
    const originalRow = editingState.current.getOriginalRowIndex(row);

    // Use editing state if editable or if it is an appended row
    if (column.isEditable || editingState.current.isAddedRow(originalRow)) {
      const editedCell = editingState.current.getCell(originalCol, originalRow);
      if (editedCell !== undefined) {
        return editedCell;
      }
    }
    try {
      // Arrow has the header in first row
      const arrowCell = data.getCell(originalRow + 1, originalCol);
      return (0,src_components_widgets_DataFrame_arrowUtils__WEBPACK_IMPORTED_MODULE_2__.getCellFromArrow)(column, arrowCell, data.cssStyles);
    } catch (error) {
      (0,src_lib_log__WEBPACK_IMPORTED_MODULE_1__.logError)(error);
      return (0,src_components_widgets_DataFrame_columns__WEBPACK_IMPORTED_MODULE_3__.getErrorCell)("Error during cell creation.", `This should never happen. Please report this bug. \nError: ${error}`);
    }
  }, [columns, numRows, data, editingState]);
  return {
    getCellContent
  };
}
_s(useDataLoader, "iv4x51T5x3e9a43OqYAbDgHzZzM=");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDataLoader);

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

/***/ "../../streamlit/frontend/src/components/widgets/DataFrame/hooks/useTableSizer.ts":
/*!****************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/DataFrame/hooks/useTableSizer.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateMaxHeight": () => (/* binding */ calculateMaxHeight),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var src_autogen_proto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/autogen/proto */ "../../streamlit/frontend/src/autogen/proto.js");
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/lib/utils */ "../../streamlit/frontend/src/lib/utils.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();
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




const ROW_HEIGHT = 35;
// Min width for the resizable table container:
// Based on one column at minimum width + 2 for borders + 1 to prevent overlap problem with selection ring.
const MIN_TABLE_WIDTH = 52;
// Min height for the resizable table container:
// Based on header + one column, and + 2 for borders + 1 to prevent overlap problem with selection ring.
const MIN_TABLE_HEIGHT = 2 * ROW_HEIGHT + 3;
const DEFAULT_TABLE_HEIGHT = 400;
function calculateMaxHeight(numRows) {
  // +2 pixels for borders
  return Math.max(numRows * ROW_HEIGHT + 1 + 2, MIN_TABLE_HEIGHT);
}
/**
 * A custom React hook that manages all aspects related to the size of the table.
 *
 * @param element - The ArrowProto element
 * @param numRows - The number of rows in the table
 * @param containerWidth - The width of the surrounding container
 * @param containerHeight - The height of the surrounding container
 * @param isFullScreen - Whether the table is in fullscreen mode
 *
 * @returns The row height, min/max height & width, and the current size of the resizable container.
 */
function useTableSizer(element, numRows, containerWidth, containerHeight, isFullScreen) {
  _s();
  let maxHeight = calculateMaxHeight(numRows + 1 + (
  // Column header row
  element.editingMode === src_autogen_proto__WEBPACK_IMPORTED_MODULE_1__.Arrow.EditingMode.DYNAMIC ? 1 : 0) // Trailing row
  );

  let initialHeight = Math.min(maxHeight, DEFAULT_TABLE_HEIGHT);
  if (element.height) {
    // User has explicitly configured a height
    initialHeight = Math.max(element.height, MIN_TABLE_HEIGHT);
    maxHeight = Math.max(element.height, maxHeight);
  }
  if (containerHeight) {
    // If container height is set (e.g. when used in fullscreen)
    // The maxHeight and height should not be larger than container height
    initialHeight = Math.min(initialHeight, containerHeight);
    maxHeight = Math.min(maxHeight, containerHeight);
    if (!element.height) {
      // If no explicit height is set, set height to max height (fullscreen mode)
      initialHeight = maxHeight;
    }
  }
  let initialWidth; // If container width is undefined, auto set based on column widths
  let maxWidth = containerWidth;
  if (element.useContainerWidth) {
    // Always use the full container width
    initialWidth = containerWidth;
  } else if (element.width) {
    // User has explicitly configured a width
    initialWidth = Math.min(Math.max(element.width, MIN_TABLE_WIDTH), containerWidth);
    maxWidth = Math.min(Math.max(element.width, maxWidth), containerWidth);
  }
  const [resizableSize, setResizableSize] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    width: initialWidth || "100%",
    height: initialHeight
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
    // This prevents weird table resizing behavior if the container width
    // changes and the table uses the full container width.
    if (element.useContainerWidth && resizableSize.width === "100%") {
      setResizableSize({
        width: containerWidth,
        height: resizableSize.height
      });
    }
  }, [containerWidth]);

  // Reset the height if the number of rows changes (e.g. via add_rows):
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
    setResizableSize({
      width: resizableSize.width,
      height: initialHeight
    });
  }, [numRows]);

  // Reset the width if the element width parameter was changed:
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
    setResizableSize({
      width: initialWidth || "100%",
      height: resizableSize.height
    });
  }, [initialWidth]);

  // Reset the height if the element height parameter was changed:
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
    setResizableSize({
      width: resizableSize.width,
      height: initialHeight
    });
  }, [initialHeight]);

  // Change sizing if the fullscreen mode is activated or deactivated:
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
    if (isFullScreen) {
      const stretchColumns = element.useContainerWidth || (0,src_lib_utils__WEBPACK_IMPORTED_MODULE_2__.notNullOrUndefined)(element.width) && element.width > 0;
      setResizableSize({
        width: stretchColumns ? maxWidth : "100%",
        height: maxHeight
      });
    } else {
      setResizableSize({
        width: initialWidth || "100%",
        height: initialHeight
      });
    }
  }, [isFullScreen]);
  return {
    rowHeight: ROW_HEIGHT,
    minHeight: MIN_TABLE_HEIGHT,
    maxHeight,
    minWidth: MIN_TABLE_WIDTH,
    maxWidth,
    resizableSize,
    setResizableSize
  };
}
_s(useTableSizer, "hX3Kke/s3QMNeOEmPgVzDzzTPDc=");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTableSizer);

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

/***/ "../../streamlit/frontend/src/components/widgets/DataFrame/index.tsx":
/*!***************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/DataFrame/index.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _DataFrame__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _DataFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataFrame */ "../../streamlit/frontend/src/components/widgets/DataFrame/DataFrame.tsx");
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

/***/ "../../streamlit/frontend/src/components/widgets/DataFrame/styled-components.ts":
/*!**************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/DataFrame/styled-components.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledResizableContainer": () => (/* binding */ StyledResizableContainer)
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

/**
 * A resizable data grid container component.
 */
const StyledResizableContainer = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e17g77xh0",
  label: "StyledResizableContainer"
})(_ref => {
  let {
    theme
  } = _ref;
  return {
    position: "relative",
    display: "inline-block",
    "& .glideDataEditor": {
      height: "100%",
      minWidth: "100%",
      borderRadius: theme.radii.md
    },
    "& .dvn-scroller": {
      scrollbarWidth: "thin",
      ["overflowX"]: "overlay !important",
      ["overflowY"]: "overlay !important"
    }
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS1kZXYvc3RsaXRlLWRldi9zdHJlYW1saXQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9EYXRhRnJhbWUvc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJ3QyIsImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9zdGxpdGUtZGV2L3N0bGl0ZS1kZXYvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3dpZGdldHMvRGF0YUZyYW1lL3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuXG4vKipcbiAqIEEgcmVzaXphYmxlIGRhdGEgZ3JpZCBjb250YWluZXIgY29tcG9uZW50LlxuICovXG5leHBvcnQgY29uc3QgU3R5bGVkUmVzaXphYmxlQ29udGFpbmVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXG4gIFwiJiAuZ2xpZGVEYXRhRWRpdG9yXCI6IHtcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIG1pbldpZHRoOiBcIjEwMCVcIixcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnJhZGlpLm1kLFxuICB9LFxuXG4gIFwiJiAuZHZuLXNjcm9sbGVyXCI6IHtcbiAgICBzY3JvbGxiYXJXaWR0aDogXCJ0aGluXCIsXG4gICAgW1wib3ZlcmZsb3dYXCIgYXMgYW55XTogXCJvdmVybGF5ICFpbXBvcnRhbnRcIixcbiAgICBbXCJvdmVyZmxvd1lcIiBhcyBhbnldOiBcIm92ZXJsYXkgIWltcG9ydGFudFwiLFxuICB9LFxufSkpXG4iXX0= */");

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
//# sourceMappingURL=streamlit_frontend_src_components_widgets_DataFrame_index_tsx.chunk.js.map