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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TaskList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ \"./node_modules/@fortawesome/free-regular-svg-icons/index.mjs\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nfunction TaskList(param) {\n    let { todos , ondelete , onChange  } = param;\n    _s();\n    const unfinished = todos.filter((t)=>t.done === false);\n    const [showActive, setShowActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const visible = showActive ? unfinished : todos;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        checked: showActive,\n                        onChange: (e)=>setShowActive(e.target.checked)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this),\n                    \"Show only active todos\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                lineNumber: 10,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: visible.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"task\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Task, {\n                            onChange: onChange,\n                            ondelete: ondelete,\n                            todo: todo\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                            lineNumber: 21,\n                            columnNumber: 25\n                        }, this)\n                    }, todo.id, false, {\n                        fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                        lineNumber: 20,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    unfinished.length,\n                    \" todos left\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(TaskList, \"kVZJErV71iJXVPe+h7sofnBtGyU=\");\n_c = TaskList;\nfunction Task(param) {\n    let { todo , ondelete , onChange  } = param;\n    _s1();\n    const [isEdit, setIsEdit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    if (isEdit) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    value: todo.task,\n                    onChange: (e)=>{\n                        onChange({\n                            ...todo,\n                            task: e.target.value\n                        });\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                    style: {\n                        cus\n                    },\n                    onClick: ()=>setIsEdit(!isEdit),\n                    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faFloppyDisk\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                    lineNumber: 45,\n                    columnNumber: 18\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                    onClick: ()=>ondelete(todo.id),\n                    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faXmarkCircle\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                    lineNumber: 46,\n                    columnNumber: 16\n                }, this)\n            ]\n        }, void 0, true);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                todo.done ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"s\", {\n                    children: todo.task\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                    lineNumber: 57,\n                    columnNumber: 34\n                }, this) : todo.task,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"edit\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                            onClick: ()=>ondelete(todo.id),\n                            icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faXmarkCircle\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                            lineNumber: 59,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                            onClick: ()=>setIsEdit(!isEdit),\n                            icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPenToSquare\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"checkbox-wrapper-39\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"checkbox-wrapper-39\",\n                                        checked: todo.done,\n                                        type: \"checkbox\",\n                                        onChange: (e)=>{\n                                            onChange(todo.done ? {\n                                                ...todo,\n                                                done: false\n                                            } : {\n                                                ...todo,\n                                                done: e.target.checked\n                                            });\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"checkbox\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                                lineNumber: 62,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\Todo-List\\\\components\\\\TaskList.js\",\n                    lineNumber: 58,\n                    columnNumber: 22\n                }, this)\n            ]\n        }, void 0, true);\n    }\n}\n_s1(Task, \"IoDxBt6oZLuuzPcHAVPOspg3K60=\");\n_c1 = Task;\nvar _c, _c1;\n$RefreshReg$(_c, \"TaskList\");\n$RefreshReg$(_c1, \"Task\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7SUFheEMsQ0FBQztBQUNMO0lBcERTQztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Rhc2tMaXN0LmpzP2Y3MzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhRmxvcHB5RGlzayxmYVhtYXJrQ2lyY2xlLGZhUGVuVG9TcXVhcmUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucydcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFza0xpc3QoeyB0b2Rvcywgb25kZWxldGUsIG9uQ2hhbmdlfSkge1xyXG5jb25zdCB1bmZpbmlzaGVkPXRvZG9zLmZpbHRlcih0PT50LmRvbmU9PT1mYWxzZSlcclxuY29uc3QgW3Nob3dBY3RpdmUsc2V0U2hvd0FjdGl2ZV09dXNlU3RhdGUoZmFsc2UpXHJcbmNvbnN0IHZpc2libGU9c2hvd0FjdGl2ZT91bmZpbmlzaGVkOnRvZG9zXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICBjaGVja2VkPXtzaG93QWN0aXZlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U2hvd0FjdGl2ZShlLnRhcmdldC5jaGVja2VkKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIFNob3cgb25seSBhY3RpdmUgdG9kb3NcclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPHVsID5cclxuICAgICAgICAgICAgICAgIHt2aXNpYmxlLm1hcCgodG9kbykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YXNrXCIga2V5PXt0b2RvLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhc2sgb25DaGFuZ2U9e29uQ2hhbmdlfSBvbmRlbGV0ZT17b25kZWxldGV9IHRvZG89e3RvZG99IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8cD57dW5maW5pc2hlZC5sZW5ndGh9IHRvZG9zIGxlZnQ8L3A+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRhc2soeyB0b2RvLCBvbmRlbGV0ZSwgb25DaGFuZ2V9KSB7XHJcbiAgICBjb25zdCBbaXNFZGl0LCBzZXRJc0VkaXRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgXHJcbiAgICBcclxuICAgIGlmIChpc0VkaXQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17dG9kby50YXNrfSBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRvZG8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2s6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH19PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17e2N1c319IG9uQ2xpY2s9eygpID0+ICBzZXRJc0VkaXQoIWlzRWRpdCl9IGljb249e2ZhRmxvcHB5RGlza30gLz5cclxuICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiAgb25DbGljaz17KCkgPT4gb25kZWxldGUodG9kby5pZCl9IGljb249e2ZhWG1hcmtDaXJjbGV9IC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcblxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7dG9kby5kb25lID8gPHM+e3RvZG8udGFza308L3M+IDogdG9kby50YXNrfVxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIG9uQ2xpY2s9eygpID0+IG9uZGVsZXRlKHRvZG8uaWQpfSBpY29uPXtmYVhtYXJrQ2lyY2xlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gb25DbGljaz17KCkgPT4gIHNldElzRWRpdCghaXNFZGl0KSB9IGljb249e2ZhUGVuVG9TcXVhcmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja2JveC13cmFwcGVyLTM5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjaGVja2JveC13cmFwcGVyLTM5XCIgIGNoZWNrZWQ9e3RvZG8uZG9uZX0gIHR5cGU9J2NoZWNrYm94JyAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHRvZG8uZG9uZT97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi50b2RvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZTogZmFsc2V9OnsuLi50b2RvLGRvbmU6ZS50YXJnZXQuY2hlY2tlZH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja2JveFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcblxyXG5cclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZvbnRBd2Vzb21lSWNvbiIsImZhRmxvcHB5RGlzayIsImZhWG1hcmtDaXJjbGUiLCJmYVBlblRvU3F1YXJlIiwiVGFza0xpc3QiLCJ0b2RvcyIsIm9uZGVsZXRlIiwib25DaGFuZ2UiLCJ1bmZpbmlzaGVkIiwiZmlsdGVyIiwidCIsImRvbmUiLCJzaG93QWN0aXZlIiwic2V0U2hvd0FjdGl2ZSIsInZpc2libGUiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsImNoZWNrZWQiLCJlIiwidGFyZ2V0IiwidWwiLCJtYXAiLCJ0b2RvIiwibGkiLCJjbGFzc05hbWUiLCJUYXNrIiwiaWQiLCJwIiwibGVuZ3RoIiwiaXNFZGl0Iiwic2V0SXNFZGl0IiwidmFsdWUiLCJ0YXNrIiwic3R5bGUiLCJjdXMiLCJvbkNsaWNrIiwiaWNvbiIsInMiLCJkaXYiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TaskList.js\n"));

/***/ })

});