/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../kernel/dist/file.js":
/*!******************************!*\
  !*** ../kernel/dist/file.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renameWithParents": () => (/* binding */ renameWithParents),
/* harmony export */   "writeFileWithParents": () => (/* binding */ writeFileWithParents)
/* harmony export */ });
/* harmony import */ var path_browserify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path-browserify */ "../../node_modules/path-browserify/index.js");
/* harmony import */ var path_browserify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path_browserify__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");


function ensureParent(pyodide, filePath) {
  const normalized = path_browserify__WEBPACK_IMPORTED_MODULE_0___default().normalize(filePath);
  const dirPath = path_browserify__WEBPACK_IMPORTED_MODULE_0___default().dirname(normalized);
  const dirNames = dirPath.split("/");
  const chDirNames = [];
  for (const dirName of dirNames) {
    chDirNames.push(dirName);
    const dirPath = chDirNames.join("/");
    if (pyodide.FS.analyzePath(dirPath).exists) {
      if (pyodide.FS.isDir(dirPath)) {
        throw new Error(`"${dirPath}" already exists and is not a directory.`);
      }
      continue;
    }
    try {
      pyodide.FS.mkdir(dirPath);
    } catch (err) {
      console.error(`Failed to create a directory "${dirPath}"`);
      throw err;
    }
  }
}
function writeFileWithParents(pyodide, filePath, data, opts) {
  ensureParent(pyodide, filePath);
  pyodide.FS.writeFile(filePath, data, opts);
}
function renameWithParents(pyodide, oldPath, newPath) {
  ensureParent(pyodide, newPath);
  pyodide.FS.rename(oldPath, newPath);
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

/***/ "../kernel/dist/mock.js":
/*!******************************!*\
  !*** ../kernel/dist/mock.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mockPyArrow": () => (/* binding */ mockPyArrow)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

function mockPyArrow(pyodide) {
  pyodide.runPython(`
import micropip
micropip.add_mock_package(
    "pyarrow", "0.0.1",
    modules={
        "pyarrow": """
__version__ = '0.0.1'  # TODO: Update when releasing


class Table:
    @classmethod
    def from_pandas(*args, **kwargs):
        raise NotImplementedError("stlite is not supporting this method.")
"""
    }
)
`);
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

/***/ "../kernel/dist/requirements.js":
/*!**************************************!*\
  !*** ../kernel/dist/requirements.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "verifyRequirements": () => (/* binding */ verifyRequirements)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

function verifyRequirements(requirements) {
  requirements.forEach(req => {
    let url;
    try {
      url = new URL(req);
    } catch (_a) {
      // `req` is not a URL -> OK
      return;
    }
    // Ref: The scheme checker in the micropip implementation is https://github.com/pyodide/micropip/blob/v0.1.0/micropip/_compat_in_pyodide.py#L23-L26
    if (url.protocol === "emfs:" || url.protocol === "file:") {
      throw new Error(`"emfs:" and "file:" protocols are not allowed for the requirement (${req})`);
    }
  });
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

/***/ "../kernel/dist/worker.js":
/*!********************************!*\
  !*** ../kernel/dist/worker.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lumino_coreutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lumino/coreutils */ "../../node_modules/@lumino/coreutils/dist/index.es6.js");
/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file */ "../kernel/dist/file.js");
/* harmony import */ var _requirements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./requirements */ "../kernel/dist/requirements.js");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock */ "../kernel/dist/mock.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};




let pyodide;
// Cognite
let token;
let baseUrl;
let project;
let httpServer;
// Ref: https://v4.webpack.js.org/loaders/worker-loader/#loading-with-worker-loader
const ctx = self;
const initDataPromiseDelegate = new _lumino_coreutils__WEBPACK_IMPORTED_MODULE_0__.PromiseDelegate();
function postProgressMessage(message) {
  ctx.postMessage({
    type: "event:progress",
    data: {
      message
    }
  });
}
/**
 * Load Pyodided and initialize the interpreter.
 *
 * NOTE: This implementation is based on JupyterLite@v0.1.0a16.
 *       Since v0.1.0a17, a wrapper around micropip, piplite, has been introduced
 *       and the importing strategy of pyolite and other packages has been changed.
 *       We might need to catch up it.
 *       https://github.com/jupyterlite/jupyterlite/pull/310
 */
function loadPyodideAndPackages() {
  return __awaiter(this, void 0, void 0, function* () {
    const {
      entrypoint,
      files,
      requirements,
      wheels,
      mountedSitePackagesSnapshotFilePath,
      pyodideEntrypointUrl
    } = yield initDataPromiseDelegate.promise;
    postProgressMessage("Loading Pyodide.");
    console.debug("Import the entrypoint script.");
    importScripts(pyodideEntrypointUrl !== null && pyodideEntrypointUrl !== void 0 ? pyodideEntrypointUrl : "https://cdn.jsdelivr.net/pyodide/v0.22.1/full/pyodide.js");
    console.debug("Loading Pyodide");
    pyodide = yield loadPyodide({
      stderr: console.error
    });
    console.debug("Loaded Pyodide");
    console.debug("Patch Cognite");
    patchCognite();
    // Mount files
    postProgressMessage("Mounting files.");
    Object.keys(files).forEach(path => {
      const {
        data,
        opts
      } = files[path];
      console.debug(`Write a file "${path}"`);
      (0,_file__WEBPACK_IMPORTED_MODULE_1__.writeFileWithParents)(pyodide, path, data, opts);
    });
    if (mountedSitePackagesSnapshotFilePath) {
      // Restore the site-packages director(y|ies) from the mounted snapshot file.
      postProgressMessage("Restoring the snapshot.");
      yield pyodide.runPythonAsync(`import tarfile, shutil, site`);
      // Remove "site-packages" directories such as '/lib/python3.10/site-packages'
      // assuming these directories will be extracted from the snapshot archive.
      yield pyodide.runPythonAsync(`
      site_packages_dirs = site.getsitepackages()
      for site_packages in site_packages_dirs:
          shutil.rmtree(site_packages)
    `);
      console.debug(`Unarchive ${mountedSitePackagesSnapshotFilePath}`);
      yield pyodide.runPythonAsync(`
      with tarfile.open("${mountedSitePackagesSnapshotFilePath}", "r") as tar_gz_file:
          tar_gz_file.extractall("/")
    `);
      console.debug("Restored the snapshot");
      postProgressMessage("Mocking some packages.");
      console.debug("Mock pyarrow");
      (0,_mock__WEBPACK_IMPORTED_MODULE_3__.mockPyArrow)(pyodide);
      console.debug("Mocked pyarrow");
    } else if (wheels) {
      postProgressMessage("Installing streamlit and its dependencies.");
      console.debug("Loading stlite-server, and streamlit");
      yield pyodide.loadPackage("micropip");
      const micropip = pyodide.pyimport("micropip");
      yield micropip.install.callKwargs([wheels.stliteServer], {
        keep_going: true
      });
      yield micropip.install.callKwargs([wheels.streamlit], {
        keep_going: true
      });
      console.debug("Loaded stlite-server, and streamlit");
      postProgressMessage("Mocking some packages.");
      console.debug("Mock pyarrow");
      (0,_mock__WEBPACK_IMPORTED_MODULE_3__.mockPyArrow)(pyodide);
      console.debug("Mocked pyarrow");
      postProgressMessage("Installing the requirements.");
      console.debug("Installing the requirements:", requirements);
      (0,_requirements__WEBPACK_IMPORTED_MODULE_2__.verifyRequirements)(requirements); // Blocks the not allowed wheel URL schemes.
      yield micropip.install.callKwargs(requirements, {
        keep_going: true
      });
      console.debug("Installed the requirements:", requirements);
    } else {
      throw new Error(`Neither snapshot nor wheel files are provided.`);
    }
    // The following code is necessary to avoid errors like  `NameError: name '_imp' is not defined`
    // at importing installed packages.
    yield pyodide.runPythonAsync(`
    import importlib
    importlib.invalidate_caches()
  `);
    postProgressMessage("Loading streamlit package.");
    console.debug("Loading the Streamlit package");
    // Importing the `streamlit` module takes most of the time,
    // so we first run this step independently for clearer logs and easy exec-time profiling.
    // For https://github.com/whitphx/stlite/issues/427
    yield pyodide.runPythonAsync(`
      import streamlit.runtime
      import streamlit.web
  `);
    console.debug("Loaded the Streamlit package");
    postProgressMessage("Setting up the loggers.");
    console.debug("Setting the loggers");
    // Fix the Streamlit's logger instantiating strategy, which violates the standard and is problematic for us.
    // See https://github.com/streamlit/streamlit/issues/4742
    yield pyodide.runPythonAsync(`
      import logging
      import streamlit.logger

      streamlit.logger.get_logger = logging.getLogger
      streamlit.logger.setup_formatter = None
      streamlit.logger.update_formatter = lambda *a, **k: None
      streamlit.logger.set_log_level = lambda *a, **k: None
  `);
    // Then configure the logger.
    const logCallback = msg => {
      if (msg.startsWith("CRITICAL") || msg.startsWith("ERROR")) {
        console.error(msg);
      } else if (msg.startsWith("WARNING")) {
        console.warn(msg);
      } else if (msg.startsWith("INFO")) {
        console.info(msg);
      } else if (msg.startsWith("DEBUG")) {
        console.debug(msg);
      } else {}
    };
    self.__logCallback__ = logCallback;
    yield pyodide.runPythonAsync(`
      from js import __logCallback__


      class JsHandler(logging.Handler):
          def emit(self, record):
              msg = self.format(record)
              __logCallback__(msg)


      main_formatter = logging.Formatter("%(levelname)s:%(name)s:%(message)s")

      js_handler = JsHandler()
      js_handler.setFormatter(main_formatter)

      root_logger = logging.getLogger()
      root_logger.handlers.clear()
      root_logger.addHandler(js_handler)
      root_logger.setLevel(logging.DEBUG)

      streamlit_handler = logging.getLogger("streamlit")
      streamlit_handler.setLevel(logging.DEBUG)
  `);
    console.debug("Set the loggers");
    postProgressMessage("Mocking some Streamlit functions for the browser environment.");
    console.debug("Mocking some Streamlit functions");
    // Disable caching. See https://github.com/whitphx/stlite/issues/495
    yield pyodide.runPythonAsync(`
    import streamlit

    def is_cacheable_msg(msg):
        return False

    streamlit.runtime.runtime.is_cacheable_msg = is_cacheable_msg
  `);
    console.debug("Mocked some Streamlit functions");
    postProgressMessage("Booting up the Streamlit server.");
    console.debug("Booting up the Streamlit server");
    // The following Python code is based on streamlit.web.cli.main_run().
    yield pyodide.runPythonAsync(`
    from stlite_server.bootstrap import load_config_options, prepare
    from stlite_server.server import Server

    load_config_options({
        "global.dataFrameSerialization": "legacy",  # Not to use PyArrow
        "browser.gatherUsageStats": False,
        "runner.fastReruns": False,  # Fast reruns do not work well with the async script runner of stlite. See https://github.com/whitphx/stlite/pull/550#issuecomment-1505485865.
    })

    main_script_path = "${entrypoint}"
    command_line = None
    args = []

    prepare(main_script_path, args)

    server = Server(main_script_path, command_line)
    server.start()
  `);
    console.debug("Booted up the Streamlit server");
    console.debug("Setting up the HTTP server");
    // Pull the http server instance from Python world to JS world and set up it.
    httpServer = pyodide.globals.get("server").copy();
    console.debug("Set up the HTTP server");
    ctx.postMessage({
      type: "event:loaded"
    });
  });
}
const pyodideReadyPromise = loadPyodideAndPackages().catch(error => {
  ctx.postMessage({
    type: "event:error",
    data: {
      error
    }
  });
  throw error;
});
/**
 * Process a message sent to the worker.
 *
 * @param event The message event to process
 */
self.onmessage = event => __awaiter(void 0, void 0, void 0, function* () {
  const data = event.data;
  // handle Cognite data
  if (event.data.type === "newToken") {
    token = data.token;
    project = data.project;
    baseUrl = data.baseUrl;
    if (token && project && baseUrl) {
      if (pyodide) {
        // If kernel is ready, set new values
        yield pyodide.runPythonAsync(`
        import os
        os.environ["COGNITE_TOKEN"] = "${token}"
        os.environ["COGNITE_PROJECT"] = "${project}"
        os.environ["COGNITE_BASE_URL"] = "${baseUrl}"
        # Set flag to tell the SDK that we are inside of a Fusion Notebook:
        os.environ["COGNITE_FUSION_NOTEBOOK"] = "1"
      `);
      }
    }
  }
  // Special case for transmitting the initial data
  if (data.type === "initData") {
    initDataPromiseDelegate.resolve(data.data);
    return;
  }
  yield pyodideReadyPromise;
  const messagePort = event.ports[0];
  try {
    switch (data.type) {
      case "websocket:connect":
        {
          console.debug("websocket:connect", data.data);
          const {
            path
          } = data.data;
          httpServer.start_websocket(path, (messageProxy, binary) => {
            // XXX: Now there is no session mechanism
            if (binary) {
              const buffer = messageProxy.getBuffer("u8");
              messageProxy.destroy();
              const payload = new Uint8ClampedArray(buffer.data.buffer, buffer.data.byteOffset, buffer.data.byteLength);
              ctx.postMessage({
                type: "websocket:message",
                data: {
                  payload: new Uint8Array(payload)
                }
              });
            } else {
              ctx.postMessage({
                type: "websocket:message",
                data: {
                  payload: messageProxy
                }
              });
            }
          });
          messagePort.postMessage({
            type: "reply"
          });
          break;
        }
      case "websocket:send":
        {
          console.debug("websocket:send", data.data);
          const {
            payload
          } = data.data;
          httpServer.receive_websocket_from_js(payload);
          break;
        }
      case "http:request":
        {
          console.debug("http:request", data.data);
          const {
            request
          } = data.data;
          const onResponse = (statusCode, _headers, _body) => {
            const headers = _headers.toJs();
            const body = _body.toJs();
            console.debug({
              statusCode,
              headers,
              body
            });
            const reply = {
              type: "http:response",
              data: {
                response: {
                  statusCode,
                  headers,
                  body
                }
              }
            };
            messagePort.postMessage(reply);
          };
          httpServer.receive_http_from_js(request.method, request.path, request.headers, request.body, onResponse);
          break;
        }
      case "file:write":
        {
          const {
            path,
            data: fileData,
            opts
          } = data.data;
          console.debug(`Write a file "${path}"`);
          (0,_file__WEBPACK_IMPORTED_MODULE_1__.writeFileWithParents)(pyodide, path, fileData, opts);
          messagePort.postMessage({
            type: "reply"
          });
          break;
        }
      case "file:rename":
        {
          const {
            oldPath,
            newPath
          } = data.data;
          console.debug(`Rename "${oldPath}" to ${newPath}`);
          (0,_file__WEBPACK_IMPORTED_MODULE_1__.renameWithParents)(pyodide, oldPath, newPath);
          messagePort.postMessage({
            type: "reply"
          });
          break;
        }
      case "file:unlink":
        {
          const {
            path
          } = data.data;
          console.debug(`Remove "${path}`);
          pyodide.FS.unlink(path);
          messagePort.postMessage({
            type: "reply"
          });
          break;
        }
      case "install":
        {
          const {
            requirements
          } = data.data;
          const micropip = pyodide.pyimport("micropip");
          (0,_requirements__WEBPACK_IMPORTED_MODULE_2__.verifyRequirements)(requirements); // Blocks the not allowed wheel URL schemes.
          yield micropip.install.callKwargs(requirements, {
            keep_going: true
          }).then(() => {
            if (requirements.includes("matplotlib")) {
              return pyodide.runPythonAsync(`
                from stlite_server.bootstrap import _fix_matplotlib_crash
                _fix_matplotlib_crash()
              `);
            }
          }).then(() => {
            console.debug("Successfully installed");
            messagePort.postMessage({
              type: "reply"
            });
          });
        }
    }
  } catch (error) {
    messagePort.postMessage({
      type: "reply",
      error
    });
  }
});
ctx.postMessage({
  type: "event:start"
});
const patchCognite = () => __awaiter(void 0, void 0, void 0, function* () {
  // const micropip = await pyodide.loadPackage("micropip") 
  const requirements = ["pyodide-http", "requests", "cognite-sdk", "pandas", "matplotlib"];
  yield pyodide.loadPackage("micropip");
  const micropip = pyodide.pyimport("micropip");
  yield micropip.install.callKwargs(requirements, {
    keep_going: true
  });
  // If token has been passed already, set token etc
  yield pyodide.runPythonAsync(`
    import os
    os.environ["COGNITE_TOKEN"] = "${token}"
    os.environ["COGNITE_PROJECT"] = "${project}"
    os.environ["COGNITE_BASE_URL"] = "${baseUrl}"
    # Set flag to tell the SDK that we are inside of a Fusion Notebook:
    os.environ["COGNITE_FUSION_NOTEBOOK"] = "1"
  `);
});

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

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_lumino_coreutils_dist_index_es6_js-node_modules_pmmmwh_react-refresh-web-3315f5"], () => (__webpack_require__("../kernel/dist/worker.js")))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "static/js/" + chunkId + ".chunk.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/stlite/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/react refresh */
/******/ 	(() => {
/******/ 		__webpack_require__.i.push((options) => {
/******/ 			const originalFactory = options.factory;
/******/ 			options.factory = function (moduleObject, moduleExports, webpackRequire) {
/******/ 				__webpack_require__.$Refresh$.setup(options.id);
/******/ 				try {
/******/ 					originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
/******/ 				} finally {
/******/ 					if (typeof Promise !== 'undefined' && moduleObject.exports instanceof Promise) {
/******/ 						options.module.exports = options.module.exports.then(
/******/ 							(result) => {
/******/ 								__webpack_require__.$Refresh$.cleanup(options.id);
/******/ 								return result;
/******/ 							},
/******/ 							(reason) => {
/******/ 								__webpack_require__.$Refresh$.cleanup(options.id);
/******/ 								return Promise.reject(reason);
/******/ 							}
/******/ 						);
/******/ 					} else {
/******/ 						__webpack_require__.$Refresh$.cleanup(options.id)
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		})
/******/ 		
/******/ 		__webpack_require__.$Refresh$ = {
/******/ 			register: () => (undefined),
/******/ 			signature: () => ((type) => (type)),
/******/ 			runtime: {
/******/ 				createSignatureFunctionForTransform: () => ((type) => (type)),
/******/ 				register: () => (undefined)
/******/ 			},
/******/ 			setup: (currentModuleId) => {
/******/ 				const prevModuleId = __webpack_require__.$Refresh$.moduleId;
/******/ 				const prevRegister = __webpack_require__.$Refresh$.register;
/******/ 				const prevSignature = __webpack_require__.$Refresh$.signature;
/******/ 				const prevCleanup = __webpack_require__.$Refresh$.cleanup;
/******/ 		
/******/ 				__webpack_require__.$Refresh$.moduleId = currentModuleId;
/******/ 		
/******/ 				__webpack_require__.$Refresh$.register = (type, id) => {
/******/ 					const typeId = currentModuleId + " " + id;
/******/ 					__webpack_require__.$Refresh$.runtime.register(type, typeId);
/******/ 				}
/******/ 		
/******/ 				__webpack_require__.$Refresh$.signature = () => (__webpack_require__.$Refresh$.runtime.createSignatureFunctionForTransform());
/******/ 		
/******/ 				__webpack_require__.$Refresh$.cleanup = (cleanupModuleId) => {
/******/ 					if (currentModuleId === cleanupModuleId) {
/******/ 						__webpack_require__.$Refresh$.moduleId = prevModuleId;
/******/ 						__webpack_require__.$Refresh$.register = prevRegister;
/******/ 						__webpack_require__.$Refresh$.signature = prevSignature;
/******/ 						__webpack_require__.$Refresh$.cleanup = prevCleanup;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"kernel_dist_worker_js": 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunk_stlite_mountable"] = globalThis["webpackChunk_stlite_mountable"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			return __webpack_require__.e("vendors-node_modules_lumino_coreutils_dist_index_es6_js-node_modules_pmmmwh_react-refresh-web-3315f5").then(next);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;
//# sourceMappingURL=kernel_dist_worker_js.chunk.js.map