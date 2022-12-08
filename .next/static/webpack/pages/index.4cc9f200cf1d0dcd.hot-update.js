"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ taskApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_TaskList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TaskList.js */ \"./components/TaskList.js\");\n/* harmony import */ var _components_AddTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AddTodo */ \"./components/AddTodo.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction taskApp() {\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    function handleAdd(task) {\n        setTodos([\n            ...todos,\n            {\n                id: Math.random(),\n                task: task,\n                done: false\n            }\n        ]);\n    }\n    function handledelete(id) {\n        setTodos(todos.filter((todo)=>todo.id !== id));\n    }\n    function handleChange(nextID) {\n        setTodos(todos.map((t)=>{\n            if (t.id === nextID.id) {\n                return nextID;\n            } else {\n                return t;\n            }\n        }));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"parent\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"child\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddTodo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    onAdd: handleAdd\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\pages\\\\index.js\",\n                    lineNumber: 44,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TaskList_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    onChange: handleChange,\n                    onAdd: handleAdd,\n                    ondelete: handledelete,\n                    todos: todos\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\pages\\\\index.js\",\n                    lineNumber: 46,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\pages\\\\index.js\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\pages\\\\index.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(taskApp, \"ZATHeV9x55jFrDOww2hwcxQ3V1U=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQTJDO0FBQ0s7QUFDSjtBQUU3QixTQUFTSSxVQUFVOztJQUdoQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUdyQyxTQUFTTyxVQUFVQyxJQUFJLEVBQUU7UUFDdkJGLFNBQ0U7ZUFDS0Q7WUFDSDtnQkFDRUksSUFBSUMsS0FBS0MsTUFBTTtnQkFDZkgsTUFBTUE7Z0JBQ05JLE1BQU0sS0FBSztZQUNiO1NBQ0Q7SUFHTDtJQUNBLFNBQVNDLGFBQWFKLEVBQUUsRUFBRTtRQUN4QkgsU0FDRUQsTUFBTVMsTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtOLEVBQUUsS0FBS0E7SUFFdkM7SUFFRixTQUFTTyxhQUFhQyxNQUFNLEVBQUU7UUFDNUJYLFNBQVNELE1BQU1hLEdBQUcsQ0FBQ0MsQ0FBQUEsSUFBRztZQUNwQixJQUFHQSxFQUFFVixFQUFFLEtBQUdRLE9BQU9SLEVBQUUsRUFBRTtnQkFDbkIsT0FBT1E7WUFDVCxPQUFPO2dCQUNMLE9BQU9FO1lBQ1QsQ0FBQztRQUNIO0lBQ0Y7SUFDRSxxQkFFRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBRWYsOERBQUNsQiwyREFBT0E7b0JBQUNtQixPQUFPZjs7Ozs7OzhCQUVoQiw4REFBQ0wsK0RBQVFBO29CQUFFcUIsVUFBVVA7b0JBQWNNLE9BQU9mO29CQUFZaUIsVUFBVVg7b0JBQWNSLE9BQU9BOzs7Ozs7Ozs7Ozs7Ozs7OztBQUszRixDQUFDO0dBOUN1QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUYXNrTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1Rhc2tMaXN0LmpzJ1xyXG5pbXBvcnQgQWRkVG9kbyBmcm9tICcuLi9jb21wb25lbnRzL0FkZFRvZG8nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFza0FwcCgpIHtcclxuICBcclxuIFxyXG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gIFxyXG4gIGZ1bmN0aW9uIGhhbmRsZUFkZCh0YXNrKSB7XHJcbiAgICBzZXRUb2RvcyhcclxuICAgICAgW1xyXG4gICAgICAgIC4uLnRvZG9zLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgdGFzazogdGFzayxcclxuICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgKVxyXG4gICAgXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGhhbmRsZWRlbGV0ZShpZCkge1xyXG4gICAgc2V0VG9kb3MoXHJcbiAgICAgIHRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5pZCAhPT0gaWQpXHJcbiAgICApXHJcbiAgfVxyXG4gXHJcbmZ1bmN0aW9uIGhhbmRsZUNoYW5nZShuZXh0SUQpIHtcclxuICBzZXRUb2Rvcyh0b2Rvcy5tYXAodD0+e1xyXG4gICAgaWYodC5pZD09PW5leHRJRC5pZCkge1xyXG4gICAgICByZXR1cm4gbmV4dElEXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdFxyXG4gICAgfVxyXG4gIH0pKVxyXG59XHJcbiAgcmV0dXJuIChcclxuICAgIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3BhcmVudCc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGlsZCc+XHJcbiAgICAgIFxyXG4gICAgICA8QWRkVG9kbyBvbkFkZD17aGFuZGxlQWRkfSAvPlxyXG4gICAgICBcclxuICAgICAgPFRhc2tMaXN0ICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBvbkFkZD17aGFuZGxlQWRkfSAgb25kZWxldGU9e2hhbmRsZWRlbGV0ZX0gdG9kb3M9e3RvZG9zfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBcclxuICApXHJcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUYXNrTGlzdCIsIkFkZFRvZG8iLCJ0YXNrQXBwIiwidG9kb3MiLCJzZXRUb2RvcyIsImhhbmRsZUFkZCIsInRhc2siLCJpZCIsIk1hdGgiLCJyYW5kb20iLCJkb25lIiwiaGFuZGxlZGVsZXRlIiwiZmlsdGVyIiwidG9kbyIsImhhbmRsZUNoYW5nZSIsIm5leHRJRCIsIm1hcCIsInQiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkFkZCIsIm9uQ2hhbmdlIiwib25kZWxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});