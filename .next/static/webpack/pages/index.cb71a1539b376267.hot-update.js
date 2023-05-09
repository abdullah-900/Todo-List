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

/***/ "./components/TaskList.js":
/*!********************************!*\
  !*** ./components/TaskList.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TaskList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ \"./node_modules/@fortawesome/free-regular-svg-icons/index.mjs\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nfunction TaskList(param) {\n    let { todos , ondelete , onChange  } = param;\n    _s();\n    const unfinished = todos.filter((t)=>t.done === false);\n    const [showActive, setShowActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const visible = showActive ? unfinished : todos;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        checked: showActive,\n                        onChange: (e)=>setShowActive(e.target.checked)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this),\n                    \"Show only active todos\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                lineNumber: 10,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: visible.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"task\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Task, {\n                            onChange: onChange,\n                            ondelete: ondelete,\n                            todo: todo\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                            lineNumber: 21,\n                            columnNumber: 25\n                        }, this)\n                    }, todo.id, false, {\n                        fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                        lineNumber: 20,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    unfinished.length,\n                    \" todos left\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(TaskList, \"kVZJErV71iJXVPe+h7sofnBtGyU=\");\n_c = TaskList;\nfunction Task(param) {\n    let { todo , ondelete , onChange  } = param;\n    _s1();\n    const [isEdit, setIsEdit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    if (isEdit) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    value: todo.task,\n                    onChange: (e)=>{\n                        onChange({\n                            ...todo,\n                            task: e.target.value\n                        });\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                    style: {\n                        cursor: \"pointer\"\n                    },\n                    onClick: ()=>setIsEdit(!isEdit),\n                    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faFloppyDisk\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                    lineNumber: 45,\n                    columnNumber: 18\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                    style: {\n                        cursor: \"pointer\"\n                    },\n                    onClick: ()=>ondelete(todo.id),\n                    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faXmarkCircle\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                    lineNumber: 46,\n                    columnNumber: 16\n                }, this)\n            ]\n        }, void 0, true);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                todo.done ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"s\", {\n                    children: todo.task\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                    lineNumber: 57,\n                    columnNumber: 34\n                }, this) : todo.task,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"edit\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                            style: {\n                                cursor: \"pointer\"\n                            },\n                            onClick: ()=>ondelete(todo.id),\n                            icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faXmarkCircle\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                            lineNumber: 59,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                            onClick: ()=>setIsEdit(!isEdit),\n                            icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPenToSquare\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"checkbox-wrapper-39\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"checkbox-wrapper-39\",\n                                        checked: todo.done,\n                                        type: \"checkbox\",\n                                        onChange: (e)=>{\n                                            onChange(todo.done ? {\n                                                ...todo,\n                                                done: false\n                                            } : {\n                                                ...todo,\n                                                done: e.target.checked\n                                            });\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"checkbox\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                                lineNumber: 62,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                    lineNumber: 58,\n                    columnNumber: 22\n                }, this)\n            ]\n        }, void 0, true);\n    }\n}\n_s1(Task, \"IoDxBt6oZLuuzPcHAVPOspg3K60=\");\n_c1 = Task;\nvar _c, _c1;\n$RefreshReg$(_c, \"TaskList\");\n$RefreshReg$(_c1, \"Task\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLENBQUM7d0NBQ3BEOzs7Ozs7a0RBRVEsOERBQUNzQjt3Q0FBS2YsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWF4QyxDQUFDO0FBQ0w7SUFwRFNDO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGFza0xpc3QuanM/ZjczNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHsgZmFGbG9wcHlEaXNrLGZhWG1hcmtDaXJjbGUsZmFQZW5Ub1NxdWFyZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrTGlzdCh7IHRvZG9zLCBvbmRlbGV0ZSwgb25DaGFuZ2V9KSB7XHJcbmNvbnN0IHVuZmluaXNoZWQ9dG9kb3MuZmlsdGVyKHQ9PnQuZG9uZT09PWZhbHNlKVxyXG5jb25zdCBbc2hvd0FjdGl2ZSxzZXRTaG93QWN0aXZlXT11c2VTdGF0ZShmYWxzZSlcclxuY29uc3QgdmlzaWJsZT1zaG93QWN0aXZlP3VuZmluaXNoZWQ6dG9kb3NcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgIGNoZWNrZWQ9e3Nob3dBY3RpdmV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTaG93QWN0aXZlKGUudGFyZ2V0LmNoZWNrZWQpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgU2hvdyBvbmx5IGFjdGl2ZSB0b2Rvc1xyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8dWwgPlxyXG4gICAgICAgICAgICAgICAge3Zpc2libGUubWFwKCh0b2RvKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhc2tcIiBrZXk9e3RvZG8uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFzayBvbkNoYW5nZT17b25DaGFuZ2V9IG9uZGVsZXRlPXtvbmRlbGV0ZX0gdG9kbz17dG9kb30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxwPnt1bmZpbmlzaGVkLmxlbmd0aH0gdG9kb3MgbGVmdDwvcD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gVGFzayh7IHRvZG8sIG9uZGVsZXRlLCBvbkNoYW5nZX0pIHtcclxuICAgIGNvbnN0IFtpc0VkaXQsIHNldElzRWRpdF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBcclxuICAgIFxyXG4gICAgaWYgKGlzRWRpdCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt0b2RvLnRhc2t9IG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4udG9kbyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFzazogZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319IG9uQ2xpY2s9eygpID0+ICBzZXRJc0VkaXQoIWlzRWRpdCl9IGljb249e2ZhRmxvcHB5RGlza30gLz5cclxuICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fSAgb25DbGljaz17KCkgPT4gb25kZWxldGUodG9kby5pZCl9IGljb249e2ZhWG1hcmtDaXJjbGV9IC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcblxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7dG9kby5kb25lID8gPHM+e3RvZG8udGFza308L3M+IDogdG9kby50YXNrfVxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319IG9uQ2xpY2s9eygpID0+IG9uZGVsZXRlKHRvZG8uaWQpfSBpY29uPXtmYVhtYXJrQ2lyY2xlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gb25DbGljaz17KCkgPT4gIHNldElzRWRpdCghaXNFZGl0KSB9IGljb249e2ZhUGVuVG9TcXVhcmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja2JveC13cmFwcGVyLTM5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjaGVja2JveC13cmFwcGVyLTM5XCIgIGNoZWNrZWQ9e3RvZG8uZG9uZX0gIHR5cGU9J2NoZWNrYm94JyAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHRvZG8uZG9uZT97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi50b2RvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZTogZmFsc2V9OnsuLi50b2RvLGRvbmU6ZS50YXJnZXQuY2hlY2tlZH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja2JveFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcblxyXG5cclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZvbnRBd2Vzb21lSWNvbiIsImZhRmxvcHB5RGlzayIsImZhWG1hcmtDaXJjbGUiLCJmYVBlblRvU3F1YXJlIiwiVGFza0xpc3QiLCJ0b2RvcyIsIm9uZGVsZXRlIiwib25DaGFuZ2UiLCJ1bmZpbmlzaGVkIiwiZmlsdGVyIiwidCIsImRvbmUiLCJzaG93QWN0aXZlIiwic2V0U2hvd0FjdGl2ZSIsInZpc2libGUiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsImNoZWNrZWQiLCJlIiwidGFyZ2V0IiwidWwiLCJtYXAiLCJ0b2RvIiwibGkiLCJjbGFzc05hbWUiLCJUYXNrIiwiaWQiLCJwIiwibGVuZ3RoIiwiaXNFZGl0Iiwic2V0SXNFZGl0IiwidmFsdWUiLCJ0YXNrIiwic3R5bGUiLCJjdXJzb3IiLCJvbkNsaWNrIiwiaWNvbiIsInMiLCJkaXYiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TaskList.js\n"));

/***/ })

});