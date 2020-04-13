webpackHotUpdate("main",{

/***/ "./src/components/AllClasses/AllClasses.js":
/*!*************************************************!*\
  !*** ./src/components/AllClasses/AllClasses.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AllClasses; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AllClasses_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllClasses.scss */ "./src/components/AllClasses/AllClasses.scss");
/* harmony import */ var _AllClasses_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AllClasses_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ClassProgress_ClassProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ClassProgress/ClassProgress */ "./src/components/ClassProgress/ClassProgress.js");
var _jsxFileName = "/home/felix/Documents/lighthouse-host/side-quests/client/src/components/AllClasses/AllClasses.js";



function AllClasses(props) {
  const AllClassesProgressArray = props.classesProgessData.map(data => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ClassProgress_ClassProgress__WEBPACK_IMPORTED_MODULE_2__["default"], {
    classId: 1,
    data: data,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 72
    }
  }));
  const AllClassesNames = props.classesData.map(data => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    key: data.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 57
    }
  }, " ", data.name));
  const toRender = [];

  for (let i = 0; i < AllClassesProgressArray.length; i++) {
    toRender.push(AllClassesNames[i], AllClassesProgressArray[i]);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "all-classses",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, "All Class Progress"), toRender);
}
AllClasses.displayName = "AllClasses";
AllClasses.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AllClasses"
};

if (typeof STORYBOOK_REACT_CLASSES !== "undefined") {
  STORYBOOK_REACT_CLASSES["src/components/AllClasses/AllClasses.js"] = {
    name: "AllClasses",
    docgenInfo: AllClasses.__docgenInfo,
    path: "src/components/AllClasses/AllClasses.js"
  };
}

/***/ })

})
//# sourceMappingURL=main.46e4c4124f459769bb94.hot-update.js.map