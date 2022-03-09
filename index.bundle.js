"use strict";
(self["webpackChunkodin_todo_list"] = self["webpackChunkodin_todo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    padding: 0;\n    margin: 0;\n    background-color: white;\n    font-family: sans-serif;\n}\n\n#content {\n    min-height: 100vh;\n    min-width: 100vw;\n\n    display: grid;\n    grid-template-columns: min(300px, 30%) 1fr;\n}\n\nmain {\n    padding: 100px;\n}\n\n.project-heading {\n    width: 100%;\n    font-size: 5rem;\n    border: none;\n    border-bottom: 10px solid black;\n    font-weight: bold;\n}\n\n.project-description {\n    width: 100%;\n    resize: none;\n    border: none;\n    border-bottom: 2px solid black;\n}\n\n#todos-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));\n    column-gap: 20px;\n    flex-direction: column;\n    gap: 18px;\n    align-items: center;\n    margin-top: 18px;\n}\n\n#todo-container-buttons {\n    width: 100%;\n    background-color:lightgrey;\n    display: flex;\n    justify-content: flex-end;\n    padding: 8px;\n}\n\n#todo-container-buttons > button {\n    font-size: 30px;\n    padding: 5px 15px;\n}\n\n.todo {\n    display: grid;\n\n    height: 200px;\n\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 2fr 0.5fr 0.5fr;\n\n    border: 5px solid black;\n}\n\n.todo-checkbox-container {\n    grid-column: 1;\n    min-width: 50px;;\n    grid-row: span 4;\n    padding: 0 12px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    padding-top: 8px;\n}\n\n.priority-button {\n    border: none;\n    cursor: pointer;\n}\n\n.priority-low {\n    background-color: greenyellow\n}\n\n.priority-med {\n    background-color: orange;\n}\n\n.priority-high {\n    background-color: violet;\n}\n\n.todo-checkbox {\n    width: 50px;\n    height: 50px;\n    background-color: white;\n    border: 2px black solid;\n    cursor: pointer;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.todo-checkmark {\n    width: 50%;\n    height: 50%;\n    background-color: black;\n}\n\n.todo-name {\n    min-width: 0;\n    grid-column: 2;\n    grid-row: 1;\n    font-size: 1.5rem;\n    font-weight: bold;\n    background-color: black;\n    color: white;\n}\n\n.todo-description {\n    grid-column: 2;\n    grid-row: 2;\n    resize: none;\n}\n\n.todo-date {\n    text-align: center;\n}\n\n.late {\n    color: red;\n}\n\n.late * {\n    color: red;\n}\n\n.todo-buttons {\n    display: flex;\n    justify-content: center;\n    gap: 4px;\n}\n\n.todo-button {\n    border: none;\n}\n\n.sidebar {\n    background-color: whitesmoke;\n    padding: 20px;\n    overflow: hidden;\n}\n\nheader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 50px;\n}\n\n#image-logo {\n    height: 50px;\n    width: 50px;\n}\n\nnav ul {\n    padding: 0;\n    display: grid;\n    grid-template-columns: 9fr 1fr;\n}\n\nnav ul button {\n    border: none;\n}\n\nnav li {\n    list-style: none;\n    padding: 12px 8px;\n    cursor: pointer;\n}\n\n.selected {\n    background-color: lightgray;\n}\n\n.toolbar {\n    background-color: lightgrey;\n    padding: 8px;\n    display: flex;\n    justify-content: flex-end;\n}\n\n.input-bar {\n    display: flex;\n    height: 30px;\n    width: 100%;\n}\n\n.input-bar > input {\n    border: none;\n    outline: none;\n}\n\n.add-project-input {\n    flex: 1 0 0;\n    background-color: white;\n    color: black;\n    margin: 5px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;;IAEhB,aAAa;IACb,0CAA0C;AAC9C;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,YAAY;IACZ,+BAA+B;IAC/B,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,4DAA4D;IAC5D,gBAAgB;IAChB,sBAAsB;IACtB,SAAS;IACT,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,0BAA0B;IAC1B,aAAa;IACb,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,aAAa;;IAEb,aAAa;;IAEb,8BAA8B;IAC9B,uCAAuC;;IAEvC,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI;AACJ;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,uBAAuB;IACvB,eAAe;;IAEf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,WAAW;IACX,iBAAiB;IACjB,iBAAiB;IACjB,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,QAAQ;AACZ;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,4BAA4B;IAC5B,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,UAAU;IACV,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;IAC3B,YAAY;IACZ,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,YAAY;IACZ,WAAW;AACf","sourcesContent":["body {\n    padding: 0;\n    margin: 0;\n    background-color: white;\n    font-family: sans-serif;\n}\n\n#content {\n    min-height: 100vh;\n    min-width: 100vw;\n\n    display: grid;\n    grid-template-columns: min(300px, 30%) 1fr;\n}\n\nmain {\n    padding: 100px;\n}\n\n.project-heading {\n    width: 100%;\n    font-size: 5rem;\n    border: none;\n    border-bottom: 10px solid black;\n    font-weight: bold;\n}\n\n.project-description {\n    width: 100%;\n    resize: none;\n    border: none;\n    border-bottom: 2px solid black;\n}\n\n#todos-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));\n    column-gap: 20px;\n    flex-direction: column;\n    gap: 18px;\n    align-items: center;\n    margin-top: 18px;\n}\n\n#todo-container-buttons {\n    width: 100%;\n    background-color:lightgrey;\n    display: flex;\n    justify-content: flex-end;\n    padding: 8px;\n}\n\n#todo-container-buttons > button {\n    font-size: 30px;\n    padding: 5px 15px;\n}\n\n.todo {\n    display: grid;\n\n    height: 200px;\n\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 2fr 0.5fr 0.5fr;\n\n    border: 5px solid black;\n}\n\n.todo-checkbox-container {\n    grid-column: 1;\n    min-width: 50px;;\n    grid-row: span 4;\n    padding: 0 12px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    padding-top: 8px;\n}\n\n.priority-button {\n    border: none;\n    cursor: pointer;\n}\n\n.priority-low {\n    background-color: greenyellow\n}\n\n.priority-med {\n    background-color: orange;\n}\n\n.priority-high {\n    background-color: violet;\n}\n\n.todo-checkbox {\n    width: 50px;\n    height: 50px;\n    background-color: white;\n    border: 2px black solid;\n    cursor: pointer;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.todo-checkmark {\n    width: 50%;\n    height: 50%;\n    background-color: black;\n}\n\n.todo-name {\n    min-width: 0;\n    grid-column: 2;\n    grid-row: 1;\n    font-size: 1.5rem;\n    font-weight: bold;\n    background-color: black;\n    color: white;\n}\n\n.todo-description {\n    grid-column: 2;\n    grid-row: 2;\n    resize: none;\n}\n\n.todo-date {\n    text-align: center;\n}\n\n.late {\n    color: red;\n}\n\n.late * {\n    color: red;\n}\n\n.todo-buttons {\n    display: flex;\n    justify-content: center;\n    gap: 4px;\n}\n\n.todo-button {\n    border: none;\n}\n\n.sidebar {\n    background-color: whitesmoke;\n    padding: 20px;\n    overflow: hidden;\n}\n\nheader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 50px;\n}\n\n#image-logo {\n    height: 50px;\n    width: 50px;\n}\n\nnav ul {\n    padding: 0;\n    display: grid;\n    grid-template-columns: 9fr 1fr;\n}\n\nnav ul button {\n    border: none;\n}\n\nnav li {\n    list-style: none;\n    padding: 12px 8px;\n    cursor: pointer;\n}\n\n.selected {\n    background-color: lightgray;\n}\n\n.toolbar {\n    background-color: lightgrey;\n    padding: 8px;\n    display: flex;\n    justify-content: flex-end;\n}\n\n.input-bar {\n    display: flex;\n    height: 30px;\n    width: 100%;\n}\n\n.input-bar > input {\n    border: none;\n    outline: none;\n}\n\n.add-project-input {\n    flex: 1 0 0;\n    background-color: white;\n    color: black;\n    margin: 5px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/date.js":
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDateInThePast": () => (/* binding */ isDateInThePast)
/* harmony export */ });
function isDateInThePast(otherDate)
{
    const date = new Date();
    if(date.getFullYear() > otherDate.year)
    {
        return true;
    } 
    else if(date.getFullYear() == otherDate.year)
    {
        if(date.getMonth() > otherDate.month)
        {
            return true;
        }
        else if(date.getMonth() == otherDate.month)
        {
            if(date.getDate() > otherDate.day) return true;
            else return false;
        }
        else
        {
            return false;
        }
    }
    else
    {
        return false;
    }
}



/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ "./src/event.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date */ "./src/date.js");
/* harmony import */ var _images_assignment_black_24dp_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/assignment_black_24dp.svg */ "./src/images/assignment_black_24dp.svg");




const  DisplayerController = (() => {
    const initHTML = () =>
    {
        document.getElementById('content').innerHTML = `
        <div class="sidebar">
            <header>
                <img src="" alt="Logo" id="image-logo">
                <h1>Todo List</h1>
            </header>
            <div class="toolbar">
                    <button id="add-project-button">+</button>
            </div>
            <div class="input-bar"></div>
            <nav>
                <h3>Projects</h3>
                <ul>
                </ul>
            </nav>
        </div>
        <main>
            <input placeholder="Project title here..." type="type" class="project-heading">
            <textarea placeholder="Project description here..." class="project-description" rows="10"></textarea>
            <div id="todo-container-buttons">
                <button id="new-todo">+</button>
            </div>
            <div id="todos-container">

            </div>
        </main>`;

        document.getElementById('add-project-button').addEventListener('click', toggleAddProjectInput);

        const projectHeading = document.querySelector('.project-heading');
        projectHeading.addEventListener('input', () => {
            _event__WEBPACK_IMPORTED_MODULE_0__["default"].publish('update project', getSelectedProjectId(), {name: projectHeading.value});
            document.querySelector('.selected').textContent = projectHeading.value == '' ? 'Untitled Project' : projectHeading.value;
        });

        const projectDescription = document.querySelector('.project-description');
        projectDescription.addEventListener('input',  () => _event__WEBPACK_IMPORTED_MODULE_0__["default"].publish('update project', getSelectedProjectId(), {description: projectDescription.value}));

        document.getElementById('new-todo').addEventListener('click', () => createTodo())

        document.getElementById('image-logo').src = _images_assignment_black_24dp_svg__WEBPACK_IMPORTED_MODULE_2__;
    }

    const getSelectedProjectId = () =>
    {
        return document.querySelector('.selected').getAttribute('data-id');
    }

    const addProjectToNav = (project, id) =>
    {
        const listItem = document.createElement('li');
        listItem.textContent = project;
        listItem.setAttribute('data-id', id);
        listItem.addEventListener('click', () => {_event__WEBPACK_IMPORTED_MODULE_0__["default"].publish('select project', id);});

        const deleteProject = document.createElement('button');
        deleteProject.addEventListener('click', () => {
            listItem.remove();
            deleteProject.remove();
            _event__WEBPACK_IMPORTED_MODULE_0__["default"].publish('delete project', id);
        });
        deleteProject.textContent = "X";
        document.querySelector('ul').appendChild(listItem);
        document.querySelector('ul').appendChild(deleteProject);

    }
    _event__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('project created', (projectName, id) => addProjectToNav(projectName, id));

    const toggleAddProjectInput = () =>
    {
        if(document.querySelector('.add-project-input'))
        {
            document.querySelector('.add-project-input').remove();
        }
        else
        {
            const input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('placeholder', 'Press enter to submit...');
            input.classList.add('add-project-input')
            document.querySelector('.input-bar').appendChild(input);
            input.focus();
            input.addEventListener('keydown', e => {if(e.key == 'Enter') {_event__WEBPACK_IMPORTED_MODULE_0__["default"].publish('create project', input.value); toggleAddProjectInput()};});
        }
    }

    const updateTodoPriority = (priorityContainer, update) =>
    {
        const priority = priorityContainer.children[0].textContent;

        if(update == 'increase')
        {
            switch(priority)
            {
                case 'low priority':
                    priorityContainer.children[0].textContent = 'medium priority';
                    priorityContainer.classList.remove('priority-low');
                break;
                case 'medium priority':
                    priorityContainer.children[0].textContent = 'high priority';
                    priorityContainer.classList.remove('priority-med');
                break;
            }
        }
        else if(update == 'decrease')
        {
            switch(priority)
            {
                case 'medium priority':
                    priorityContainer.children[0].textContent = 'low priority';
                    priorityContainer.classList.remove('priority-med');
                break;
                case 'high priority':
                    priorityContainer.children[0].textContent = 'medium priority';
                    priorityContainer.classList.remove('priority-high');
                break;
            }
        }
        
        priorityContainer.classList.add(convertPriorityToClass(priorityContainer.children[0].textContent));
    }

    const convertPriorityToClass = priority =>
    {
        switch(priority)
        {
            case 'low priority':
                return 'priority-low';
            case 'medium priority':
                return 'priority-med';
            case 'high priority':
                return 'priority-high';
        }
    }

    const createTodoCheckboxContainer = (todo, complete, priority) =>
    {
        const checkboxContainer = document.createElement('div');
        checkboxContainer.classList.add('todo-checkbox-container');
        checkboxContainer.classList.add(convertPriorityToClass(priority));
        todo.appendChild(checkboxContainer);

        const priorityStatus = document.createElement('div');
        priorityStatus.classList.add('priority-status');
        checkboxContainer.appendChild(priorityStatus);
        priorityStatus.textContent = priority;

        const checkbox = document.createElement('div');
        checkbox.classList.add('todo-checkbox');
        checkboxContainer.appendChild(checkbox);

        const checkmark = document.createElement('div');
        checkmark.classList.add('todo-checkmark');
        if(complete == false) checkmark.toggleAttribute('hidden');
        checkbox.appendChild(checkmark);

        checkbox.addEventListener('click', () => {
            checkmark.toggleAttribute('hidden');
            recordTodos();
        });

        const priorityButtons = document.createElement('div');
        checkboxContainer.appendChild(priorityButtons);

        const priorityDecreaseButton = document.createElement('button');
        priorityDecreaseButton.textContent = '<';
        priorityDecreaseButton.classList.add('priority-button');
        priorityButtons.appendChild(priorityDecreaseButton);
        priorityDecreaseButton.addEventListener('click', () => {
            updateTodoPriority(checkboxContainer, 'decrease');
            recordTodos();
        });

        const priorityIncreaseButton = document.createElement('button');
        priorityIncreaseButton.textContent = '>';
        priorityIncreaseButton.classList.add('priority-button');
        priorityButtons.appendChild(priorityIncreaseButton);
        priorityIncreaseButton.addEventListener('click', () => {
            updateTodoPriority(checkboxContainer, 'increase');
            recordTodos();
        });
    }

    const createTodoName = (todo, name) =>
    {
        const todoName = document.createElement('input');
        todoName.setAttribute('placeholder', 'Enter todo name here...');
        todoName.classList.add('todo-name');
        todoName.value = name;
        todoName.addEventListener('input', recordTodos);
        todo.appendChild(todoName);
    }

    const createTodoDescription = (todo, description) =>
    {
        const todoDescription = document.createElement('textarea');
        todoDescription.setAttribute('placeholder', 'Enter todo description here...');
        todoDescription.classList.add('todo-description');
        todoDescription.value = description;
        todoDescription.addEventListener('input', recordTodos);
        todo.appendChild(todoDescription);
    }

    const createTodoDueDate = (todo, dueDate) =>
    {
        const todoDate = document.createElement('div');
        todoDate.classList.add('todo-date');
        todo.appendChild(todoDate);
        
        const todoButtons = document.createElement('div');
        todoButtons.classList.add('todo-buttons');
        todo.appendChild(todoButtons);

        const date = new Date();
        
        if(dueDate == null) 
        {
            dueDate = {};
            dueDate.day = date.getDate();
            dueDate.month = date.getMonth();
            dueDate.year = date.getFullYear();
        }

        const day = document.createElement('input');
        day.setAttribute('type', 'number');
        day.setAttribute('min', 1);
        day.setAttribute('max', 31);
        day.setAttribute('value', dueDate.day);

        const month = document.createElement('input');
        month.setAttribute('type', 'number');
        month.setAttribute('min', 1);
        month.setAttribute('max', 12);
        month.setAttribute('value', dueDate.month);

        const year = document.createElement('input');
        year.setAttribute('type', 'number');
        year.setAttribute('min', 1985);
        year.setAttribute('max', 9999);
        year.setAttribute('value', dueDate.year);

        todoDate.innerHTML = 'Due date: ' + day.outerHTML + '-' + month.outerHTML + '-' + year.outerHTML;

        Array.from(todoDate.children).forEach(child => child.addEventListener('input', () => {
            recordTodos();
            if((0,_date__WEBPACK_IMPORTED_MODULE_1__.isDateInThePast)({
                day: todoDate.children[0].value,
                month: todoDate.children[1].value,
                year: todoDate.children[2].value
            })) todoDate.classList.add('late');
            else todoDate.classList.remove('late');
        }));


        if((0,_date__WEBPACK_IMPORTED_MODULE_1__.isDateInThePast)(dueDate)) todoDate.classList.add('late');
        
        const removeTodoButton = document.createElement('button');
        removeTodoButton.classList.add('todo-button');
        removeTodoButton.textContent = 'Delete';
        todoButtons.appendChild(removeTodoButton);
        removeTodoButton.addEventListener('click', () => {
            todo.remove();
            recordTodos();
        });
    }

    const createTodo = (name = "", description = "", complete = false, dueDate = null, priority = 'low priority') =>
    {
        const todo = document.createElement('div');
        todo.classList.add('todo');

        createTodoCheckboxContainer(todo, complete, priority);

        createTodoName(todo, name);

        createTodoDescription(todo, description);

        createTodoDueDate(todo, dueDate);

        document.getElementById('todos-container').appendChild(todo);

        recordTodos();
    }

    const recordTodos = () =>
    {
        const todosElements = document.querySelectorAll('.todo');
        const newTodos = Array.from(todosElements).map(todo => {
            let newTodo = {};
            Array.from(todo.children).forEach(child => {
                switch(true)
                {
                    case child.classList.contains('todo-name'):
                        newTodo.name = child.value;
                    break;
                    case child.classList.contains('todo-description'):
                        newTodo.description = child.value;
                    break;
                    case child.classList.contains('todo-checkbox-container'):
                        Array.from(child.children).forEach(child => {
                            switch(true)
                            {
                                case child.classList.contains('todo-checkbox'):
                                    newTodo.complete = child.children[0].getAttribute('hidden') == null;
                                break;
                                case child.classList.contains('priority-status'):
                                    newTodo.priority = child.textContent;
                                break;
                            }
                        })
                    break;
                    case child.classList.contains('todo-date'):
                        newTodo.dueDate = {};
                        newTodo.dueDate.day = child.children[0].value;
                        newTodo.dueDate.month = child.children[1].value;
                        newTodo.dueDate.year = child.children[2].value;
                    break;
                }
            });
            return newTodo;
        });
        _event__WEBPACK_IMPORTED_MODULE_0__["default"].publish('update project', getSelectedProjectId(),{todos: newTodos});
    }

    _event__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('view project', (id, name, description, todos) => {
        if(document.querySelector('.selected') != null) document.querySelector('.selected').classList.remove('selected');
        const selected = document.querySelector(`nav li[data-id="${id}"]`)
        selected.classList.add('selected');
        const projectHeading = document.querySelector('.project-heading');
        projectHeading.value = name;
        const projectDescription = document.querySelector('.project-description');
        projectDescription.value = description;

        document.querySelectorAll('.todo').forEach(todo => todo.remove());

        todos.forEach(todo => {
            createTodo(todo.name, todo.description, todo.complete, todo.dueDate, todo.priority);
        });
    });

    _event__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('update nav', (id, name) => {
        document.querySelector(`nav li[data-id="${id}"]`).textContent = name;
    });

    return {initHTML}
})()


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayerController);

/***/ }),

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Event = name => 
{
    const _handlers = []

    const proto = {
        fire: (...msg) => _handlers.forEach(f => f(...msg)),
        addHandler: handler => _handlers.push(handler),
        getName: () => {return name;}
    }

    return Object.create(proto)
}

const EventAggregator = (() => 
{
    const _events = [];

    const _checkForEvent = name =>
    {
        return _events.findIndex(event => name == event.getName());
    }

    const publish = (name, ...msg) => 
    {
        let eventIndex = _checkForEvent(name);
        if(eventIndex == -1)
        {
            _events.push(Event(name))
            eventIndex = _events.length - 1;
        }

        console.log(_events[eventIndex].getName());
        _events[eventIndex].fire(...msg);
    }

    const subscribe = (name, handler) =>
    {
        let eventIndex = _checkForEvent(name);
        if(eventIndex == -1)
        {
            _events.push(Event(name));
            eventIndex = _events.length - 1;
        }

        console.log(_events[eventIndex].getName());
        _events[eventIndex].addHandler(handler);
    }

    return {publish, subscribe}
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventAggregator);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _displayController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController.js */ "./src/displayController.js");
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event.js */ "./src/event.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





_displayController_js__WEBPACK_IMPORTED_MODULE_0__["default"].initHTML();

if((0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.storageAvailable)('localStorage'))
{
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.initLocalStorageListener)();
    if(!localStorage.getItem('projects'))
    {
        defaultInit();
    }
    else
    {
        (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.loadProjects)();
    }
}
else
{
    init();
}

function defaultInit()
{
    _event_js__WEBPACK_IMPORTED_MODULE_1__["default"].publish('create project', 'Default');
    _event_js__WEBPACK_IMPORTED_MODULE_1__["default"].publish('select project', 0);
}

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storageAvailable": () => (/* binding */ storageAvailable),
/* harmony export */   "initLocalStorageListener": () => (/* binding */ initLocalStorageListener),
/* harmony export */   "loadProjects": () => (/* binding */ loadProjects)
/* harmony export */ });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ "./src/event.js");


function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

function writeProjectsToStorage(projects)
{
    localStorage.setItem('projects', JSON.stringify(projects));
}

function initLocalStorageListener()
{
    _event__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('write storage', writeProjectsToStorage);
}

function loadProjects()
{
    const projects = JSON.parse(localStorage.getItem('projects'));
    projects.forEach(project => {
        _event__WEBPACK_IMPORTED_MODULE_0__["default"].publish('add project', project);
    });

    _event__WEBPACK_IMPORTED_MODULE_0__["default"].publish('select project', 0);
}



/***/ }),

/***/ "./src/images/assignment_black_24dp.svg":
/*!**********************************************!*\
  !*** ./src/images/assignment_black_24dp.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5eafd140172f5ba7f26c.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxzQkFBc0Isc0RBQXVCLGlDQUFpQywwQkFBMEI7QUFDNUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGVBQWUsc0RBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUzs7O0FBR1QsV0FBVyxzREFBZTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVCxRQUFRLHNEQUF1QiwyQ0FBMkMsZ0JBQWdCO0FBQzFGOztBQUVBLElBQUksd0RBQXlCO0FBQzdCO0FBQ0EsbUVBQW1FLEdBQUc7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUwsSUFBSSx3REFBeUI7QUFDN0Isa0RBQWtELEdBQUc7QUFDckQsS0FBSzs7QUFFTCxZQUFZO0FBQ1osQ0FBQzs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDbldmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7O0FBRUQsaUVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDbkR5QjtBQUNkO0FBQytDO0FBQ25FOztBQUVyQixzRUFBMEI7O0FBRTFCLEdBQUcsNkRBQWdCO0FBQ25CO0FBQ0EsSUFBSSxxRUFBd0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBWTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUkseURBQXVCO0FBQzNCLElBQUkseURBQXVCO0FBQzNCOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVCc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx3REFBeUI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUF1QjtBQUMvQixLQUFLOztBQUVMLElBQUksc0RBQXVCO0FBQzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvZGF0ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9ldmVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbigzMDBweCwgMzAlKSAxZnI7XFxufVxcblxcbm1haW4ge1xcbiAgICBwYWRkaW5nOiAxMDBweDtcXG59XFxuXFxuLnByb2plY3QtaGVhZGluZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbiN0b2Rvcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzNzVweCwgMWZyKSk7XFxuICAgIGNvbHVtbi1nYXA6IDIwcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMThweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMThweDtcXG59XFxuXFxuI3RvZG8tY29udGFpbmVyLWJ1dHRvbnMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZXk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuI3RvZG8tY29udGFpbmVyLWJ1dHRvbnMgPiBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIGhlaWdodDogMjAwcHg7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDAuNWZyIDAuNWZyO1xcblxcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRvZG8tY2hlY2tib3gtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIG1pbi13aWR0aDogNTBweDs7XFxuICAgIGdyaWQtcm93OiBzcGFuIDQ7XFxuICAgIHBhZGRpbmc6IDAgMTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xcbn1cXG5cXG4ucHJpb3JpdHktYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcmlvcml0eS1sb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvd1xcbn1cXG5cXG4ucHJpb3JpdHktbWVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZpb2xldDtcXG59XFxuXFxuLnRvZG8tY2hlY2tib3gge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLWNoZWNrbWFyayB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRvZG8tbmFtZSB7XFxuICAgIG1pbi13aWR0aDogMDtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi50b2RvLWRhdGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5sYXRlIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmxhdGUgKiB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi50b2RvLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi50b2RvLWJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuI2ltYWdlLWxvZ28ge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDlmciAxZnI7XFxufVxcblxcbm5hdiB1bCBidXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbm5hdiBsaSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEycHggOHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLnRvb2xiYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmlucHV0LWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5pbnB1dC1iYXIgPiBpbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWlucHV0IHtcXG4gICAgZmxleDogMSAwIDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjs7SUFFaEIsYUFBYTtJQUNiLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDREQUE0RDtJQUM1RCxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTs7SUFFYixhQUFhOztJQUViLDhCQUE4QjtJQUM5Qix1Q0FBdUM7O0lBRXZDLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGVBQWU7O0lBRWYsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4oMzAwcHgsIDMwJSkgMWZyO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgcGFkZGluZzogMTAwcHg7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRpbmcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jdG9kb3MtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzc1cHgsIDFmcikpO1xcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDE4cHg7XFxufVxcblxcbiN0b2RvLWNvbnRhaW5lci1idXR0b25zIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmV5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbiN0b2RvLWNvbnRhaW5lci1idXR0b25zID4gYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXG59XFxuXFxuLnRvZG8ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAwLjVmciAwLjVmcjtcXG5cXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxufVxcblxcbi50b2RvLWNoZWNrYm94LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBtaW4td2lkdGg6IDUwcHg7O1xcbiAgICBncmlkLXJvdzogc3BhbiA0O1xcbiAgICBwYWRkaW5nOiAwIDEycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDhweDtcXG59XFxuXFxuLnByaW9yaXR5LWJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJpb3JpdHktbG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3dcXG59XFxuXFxuLnByaW9yaXR5LW1lZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2aW9sZXQ7XFxufVxcblxcbi50b2RvLWNoZWNrYm94IHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kby1jaGVja21hcmsge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi50b2RvLW5hbWUge1xcbiAgICBtaW4td2lkdGg6IDA7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kby1kZXNjcmlwdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4udG9kby1kYXRlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubGF0ZSB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5sYXRlICoge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4udG9kby1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4udG9kby1idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbiNpbWFnZS1sb2dvIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxubmF2IHVsIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5ZnIgMWZyO1xcbn1cXG5cXG5uYXYgdWwgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5uYXYgbGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAxMnB4IDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi50b29sYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5pbnB1dC1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW5wdXQtYmFyID4gaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5hZGQtcHJvamVjdC1pbnB1dCB7XFxuICAgIGZsZXg6IDEgMCAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBtYXJnaW46IDVweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBpc0RhdGVJblRoZVBhc3Qob3RoZXJEYXRlKVxue1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGlmKGRhdGUuZ2V0RnVsbFllYXIoKSA+IG90aGVyRGF0ZS55ZWFyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBcbiAgICBlbHNlIGlmKGRhdGUuZ2V0RnVsbFllYXIoKSA9PSBvdGhlckRhdGUueWVhcilcbiAgICB7XG4gICAgICAgIGlmKGRhdGUuZ2V0TW9udGgoKSA+IG90aGVyRGF0ZS5tb250aClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihkYXRlLmdldE1vbnRoKCkgPT0gb3RoZXJEYXRlLm1vbnRoKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihkYXRlLmdldERhdGUoKSA+IG90aGVyRGF0ZS5kYXkpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IHtpc0RhdGVJblRoZVBhc3R9OyIsImltcG9ydCBFdmVudEFnZ3JlZ2F0b3IgZnJvbSBcIi4vZXZlbnRcIjtcbmltcG9ydCB7IGlzRGF0ZUluVGhlUGFzdCB9IGZyb20gXCIuL2RhdGVcIjtcbmltcG9ydCBsb2dvIGZyb20gJy4vaW1hZ2VzL2Fzc2lnbm1lbnRfYmxhY2tfMjRkcC5zdmcnO1xuXG5jb25zdCAgRGlzcGxheWVyQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgaW5pdEhUTUwgPSAoKSA9PlxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyXCI+XG4gICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiTG9nb1wiIGlkPVwiaW1hZ2UtbG9nb1wiPlxuICAgICAgICAgICAgICAgIDxoMT5Ub2RvIExpc3Q8L2gxPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbGJhclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYWRkLXByb2plY3QtYnV0dG9uXCI+KzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtYmFyXCI+PC9kaXY+XG4gICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgIDxoMz5Qcm9qZWN0czwvaDM+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiUHJvamVjdCB0aXRsZSBoZXJlLi4uXCIgdHlwZT1cInR5cGVcIiBjbGFzcz1cInByb2plY3QtaGVhZGluZ1wiPlxuICAgICAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPVwiUHJvamVjdCBkZXNjcmlwdGlvbiBoZXJlLi4uXCIgY2xhc3M9XCJwcm9qZWN0LWRlc2NyaXB0aW9uXCIgcm93cz1cIjEwXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ0b2RvLWNvbnRhaW5lci1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm5ldy10b2RvXCI+KzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwidG9kb3MtY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+YDtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVBZGRQcm9qZWN0SW5wdXQpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RIZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaGVhZGluZycpO1xuICAgICAgICBwcm9qZWN0SGVhZGluZy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIEV2ZW50QWdncmVnYXRvci5wdWJsaXNoKCd1cGRhdGUgcHJvamVjdCcsIGdldFNlbGVjdGVkUHJvamVjdElkKCksIHtuYW1lOiBwcm9qZWN0SGVhZGluZy52YWx1ZX0pO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJykudGV4dENvbnRlbnQgPSBwcm9qZWN0SGVhZGluZy52YWx1ZSA9PSAnJyA/ICdVbnRpdGxlZCBQcm9qZWN0JyA6IHByb2plY3RIZWFkaW5nLnZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1kZXNjcmlwdGlvbicpO1xuICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAgKCkgPT4gRXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2goJ3VwZGF0ZSBwcm9qZWN0JywgZ2V0U2VsZWN0ZWRQcm9qZWN0SWQoKSwge2Rlc2NyaXB0aW9uOiBwcm9qZWN0RGVzY3JpcHRpb24udmFsdWV9KSk7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10b2RvJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjcmVhdGVUb2RvKCkpXG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlLWxvZ28nKS5zcmMgPSBsb2dvO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFNlbGVjdGVkUHJvamVjdElkID0gKCkgPT5cbiAgICB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0VG9OYXYgPSAocHJvamVjdCwgaWQpID0+XG4gICAge1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICAgICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpO1xuICAgICAgICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtFdmVudEFnZ3JlZ2F0b3IucHVibGlzaCgnc2VsZWN0IHByb2plY3QnLCBpZCk7fSk7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGlzdEl0ZW0ucmVtb3ZlKCk7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0LnJlbW92ZSgpO1xuICAgICAgICAgICAgRXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2goJ2RlbGV0ZSBwcm9qZWN0JywgaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgZGVsZXRlUHJvamVjdC50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwnKS5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0KTtcblxuICAgIH1cbiAgICBFdmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKCdwcm9qZWN0IGNyZWF0ZWQnLCAocHJvamVjdE5hbWUsIGlkKSA9PiBhZGRQcm9qZWN0VG9OYXYocHJvamVjdE5hbWUsIGlkKSk7XG5cbiAgICBjb25zdCB0b2dnbGVBZGRQcm9qZWN0SW5wdXQgPSAoKSA9PlxuICAgIHtcbiAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWlucHV0JykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1pbnB1dCcpLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUHJlc3MgZW50ZXIgdG8gc3VibWl0Li4uJyk7XG4gICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1pbnB1dCcpXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtYmFyJykuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtpZihlLmtleSA9PSAnRW50ZXInKSB7RXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2goJ2NyZWF0ZSBwcm9qZWN0JywgaW5wdXQudmFsdWUpOyB0b2dnbGVBZGRQcm9qZWN0SW5wdXQoKX07fSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVUb2RvUHJpb3JpdHkgPSAocHJpb3JpdHlDb250YWluZXIsIHVwZGF0ZSkgPT5cbiAgICB7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gcHJpb3JpdHlDb250YWluZXIuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQ7XG5cbiAgICAgICAgaWYodXBkYXRlID09ICdpbmNyZWFzZScpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN3aXRjaChwcmlvcml0eSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYXNlICdsb3cgcHJpb3JpdHknOlxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUNvbnRhaW5lci5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9ICdtZWRpdW0gcHJpb3JpdHknO1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdwcmlvcml0eS1sb3cnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdtZWRpdW0gcHJpb3JpdHknOlxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUNvbnRhaW5lci5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9ICdoaWdoIHByaW9yaXR5JztcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgncHJpb3JpdHktbWVkJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih1cGRhdGUgPT0gJ2RlY3JlYXNlJylcbiAgICAgICAge1xuICAgICAgICAgICAgc3dpdGNoKHByaW9yaXR5KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhc2UgJ21lZGl1bSBwcmlvcml0eSc6XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5Q29udGFpbmVyLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gJ2xvdyBwcmlvcml0eSc7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3ByaW9yaXR5LW1lZCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hpZ2ggcHJpb3JpdHknOlxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUNvbnRhaW5lci5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9ICdtZWRpdW0gcHJpb3JpdHknO1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdwcmlvcml0eS1oaWdoJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHByaW9yaXR5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY29udmVydFByaW9yaXR5VG9DbGFzcyhwcmlvcml0eUNvbnRhaW5lci5jaGlsZHJlblswXS50ZXh0Q29udGVudCkpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnZlcnRQcmlvcml0eVRvQ2xhc3MgPSBwcmlvcml0eSA9PlxuICAgIHtcbiAgICAgICAgc3dpdGNoKHByaW9yaXR5KVxuICAgICAgICB7XG4gICAgICAgICAgICBjYXNlICdsb3cgcHJpb3JpdHknOlxuICAgICAgICAgICAgICAgIHJldHVybiAncHJpb3JpdHktbG93JztcbiAgICAgICAgICAgIGNhc2UgJ21lZGl1bSBwcmlvcml0eSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdwcmlvcml0eS1tZWQnO1xuICAgICAgICAgICAgY2FzZSAnaGlnaCBwcmlvcml0eSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdwcmlvcml0eS1oaWdoJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVRvZG9DaGVja2JveENvbnRhaW5lciA9ICh0b2RvLCBjb21wbGV0ZSwgcHJpb3JpdHkpID0+XG4gICAge1xuICAgICAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWNoZWNrYm94LWNvbnRhaW5lcicpO1xuICAgICAgICBjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNvbnZlcnRQcmlvcml0eVRvQ2xhc3MocHJpb3JpdHkpKTtcbiAgICAgICAgdG9kby5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJpb3JpdHlTdGF0dXMuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktc3RhdHVzJyk7XG4gICAgICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5U3RhdHVzKTtcbiAgICAgICAgcHJpb3JpdHlTdGF0dXMudGV4dENvbnRlbnQgPSBwcmlvcml0eTtcblxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCd0b2RvLWNoZWNrYm94Jyk7XG4gICAgICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAgICAgICBjb25zdCBjaGVja21hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2hlY2ttYXJrLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY2hlY2ttYXJrJyk7XG4gICAgICAgIGlmKGNvbXBsZXRlID09IGZhbHNlKSBjaGVja21hcmsudG9nZ2xlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgY2hlY2tib3guYXBwZW5kQ2hpbGQoY2hlY2ttYXJrKTtcblxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNoZWNrbWFyay50b2dnbGVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgcmVjb3JkVG9kb3MoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5QnV0dG9ucyk7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlEZWNyZWFzZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBwcmlvcml0eURlY3JlYXNlQnV0dG9uLnRleHRDb250ZW50ID0gJzwnO1xuICAgICAgICBwcmlvcml0eURlY3JlYXNlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWJ1dHRvbicpO1xuICAgICAgICBwcmlvcml0eUJ1dHRvbnMuYXBwZW5kQ2hpbGQocHJpb3JpdHlEZWNyZWFzZUJ1dHRvbik7XG4gICAgICAgIHByaW9yaXR5RGVjcmVhc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB1cGRhdGVUb2RvUHJpb3JpdHkoY2hlY2tib3hDb250YWluZXIsICdkZWNyZWFzZScpO1xuICAgICAgICAgICAgcmVjb3JkVG9kb3MoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlJbmNyZWFzZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBwcmlvcml0eUluY3JlYXNlQnV0dG9uLnRleHRDb250ZW50ID0gJz4nO1xuICAgICAgICBwcmlvcml0eUluY3JlYXNlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWJ1dHRvbicpO1xuICAgICAgICBwcmlvcml0eUJ1dHRvbnMuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbmNyZWFzZUJ1dHRvbik7XG4gICAgICAgIHByaW9yaXR5SW5jcmVhc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB1cGRhdGVUb2RvUHJpb3JpdHkoY2hlY2tib3hDb250YWluZXIsICdpbmNyZWFzZScpO1xuICAgICAgICAgICAgcmVjb3JkVG9kb3MoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlVG9kb05hbWUgPSAodG9kbywgbmFtZSkgPT5cbiAgICB7XG4gICAgICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdG9kb05hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciB0b2RvIG5hbWUgaGVyZS4uLicpO1xuICAgICAgICB0b2RvTmFtZS5jbGFzc0xpc3QuYWRkKCd0b2RvLW5hbWUnKTtcbiAgICAgICAgdG9kb05hbWUudmFsdWUgPSBuYW1lO1xuICAgICAgICB0b2RvTmFtZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHJlY29yZFRvZG9zKTtcbiAgICAgICAgdG9kby5hcHBlbmRDaGlsZCh0b2RvTmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlVG9kb0Rlc2NyaXB0aW9uID0gKHRvZG8sIGRlc2NyaXB0aW9uKSA9PlxuICAgIHtcbiAgICAgICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW50ZXIgdG9kbyBkZXNjcmlwdGlvbiBoZXJlLi4uJyk7XG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbi52YWx1ZSA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0b2RvRGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCByZWNvcmRUb2Rvcyk7XG4gICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb0Rlc2NyaXB0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUb2RvRHVlRGF0ZSA9ICh0b2RvLCBkdWVEYXRlKSA9PlxuICAgIHtcbiAgICAgICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0RhdGUuY2xhc3NMaXN0LmFkZCgndG9kby1kYXRlJyk7XG4gICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb0RhdGUpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdG9kb0J1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0J1dHRvbnMuY2xhc3NMaXN0LmFkZCgndG9kby1idXR0b25zJyk7XG4gICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb0J1dHRvbnMpO1xuXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBcbiAgICAgICAgaWYoZHVlRGF0ZSA9PSBudWxsKSBcbiAgICAgICAge1xuICAgICAgICAgICAgZHVlRGF0ZSA9IHt9O1xuICAgICAgICAgICAgZHVlRGF0ZS5kYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgICAgIGR1ZURhdGUubW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICAgICAgICBkdWVEYXRlLnllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkYXkuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xuICAgICAgICBkYXkuc2V0QXR0cmlidXRlKCdtaW4nLCAxKTtcbiAgICAgICAgZGF5LnNldEF0dHJpYnV0ZSgnbWF4JywgMzEpO1xuICAgICAgICBkYXkuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGR1ZURhdGUuZGF5KTtcblxuICAgICAgICBjb25zdCBtb250aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIG1vbnRoLnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcbiAgICAgICAgbW9udGguc2V0QXR0cmlidXRlKCdtaW4nLCAxKTtcbiAgICAgICAgbW9udGguc2V0QXR0cmlidXRlKCdtYXgnLCAxMik7XG4gICAgICAgIG1vbnRoLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkdWVEYXRlLm1vbnRoKTtcblxuICAgICAgICBjb25zdCB5ZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgeWVhci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XG4gICAgICAgIHllYXIuc2V0QXR0cmlidXRlKCdtaW4nLCAxOTg1KTtcbiAgICAgICAgeWVhci5zZXRBdHRyaWJ1dGUoJ21heCcsIDk5OTkpO1xuICAgICAgICB5ZWFyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkdWVEYXRlLnllYXIpO1xuXG4gICAgICAgIHRvZG9EYXRlLmlubmVySFRNTCA9ICdEdWUgZGF0ZTogJyArIGRheS5vdXRlckhUTUwgKyAnLScgKyBtb250aC5vdXRlckhUTUwgKyAnLScgKyB5ZWFyLm91dGVySFRNTDtcblxuICAgICAgICBBcnJheS5mcm9tKHRvZG9EYXRlLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgcmVjb3JkVG9kb3MoKTtcbiAgICAgICAgICAgIGlmKGlzRGF0ZUluVGhlUGFzdCh7XG4gICAgICAgICAgICAgICAgZGF5OiB0b2RvRGF0ZS5jaGlsZHJlblswXS52YWx1ZSxcbiAgICAgICAgICAgICAgICBtb250aDogdG9kb0RhdGUuY2hpbGRyZW5bMV0udmFsdWUsXG4gICAgICAgICAgICAgICAgeWVhcjogdG9kb0RhdGUuY2hpbGRyZW5bMl0udmFsdWVcbiAgICAgICAgICAgIH0pKSB0b2RvRGF0ZS5jbGFzc0xpc3QuYWRkKCdsYXRlJyk7XG4gICAgICAgICAgICBlbHNlIHRvZG9EYXRlLmNsYXNzTGlzdC5yZW1vdmUoJ2xhdGUnKTtcbiAgICAgICAgfSkpO1xuXG5cbiAgICAgICAgaWYoaXNEYXRlSW5UaGVQYXN0KGR1ZURhdGUpKSB0b2RvRGF0ZS5jbGFzc0xpc3QuYWRkKCdsYXRlJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZW1vdmVUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHJlbW92ZVRvZG9CdXR0b24uY2xhc3NMaXN0LmFkZCgndG9kby1idXR0b24nKTtcbiAgICAgICAgcmVtb3ZlVG9kb0J1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgICAgICB0b2RvQnV0dG9ucy5hcHBlbmRDaGlsZChyZW1vdmVUb2RvQnV0dG9uKTtcbiAgICAgICAgcmVtb3ZlVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRvZG8ucmVtb3ZlKCk7XG4gICAgICAgICAgICByZWNvcmRUb2RvcygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUb2RvID0gKG5hbWUgPSBcIlwiLCBkZXNjcmlwdGlvbiA9IFwiXCIsIGNvbXBsZXRlID0gZmFsc2UsIGR1ZURhdGUgPSBudWxsLCBwcmlvcml0eSA9ICdsb3cgcHJpb3JpdHknKSA9PlxuICAgIHtcbiAgICAgICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcblxuICAgICAgICBjcmVhdGVUb2RvQ2hlY2tib3hDb250YWluZXIodG9kbywgY29tcGxldGUsIHByaW9yaXR5KTtcblxuICAgICAgICBjcmVhdGVUb2RvTmFtZSh0b2RvLCBuYW1lKTtcblxuICAgICAgICBjcmVhdGVUb2RvRGVzY3JpcHRpb24odG9kbywgZGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGNyZWF0ZVRvZG9EdWVEYXRlKHRvZG8sIGR1ZURhdGUpO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2Rvcy1jb250YWluZXInKS5hcHBlbmRDaGlsZCh0b2RvKTtcblxuICAgICAgICByZWNvcmRUb2RvcygpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlY29yZFRvZG9zID0gKCkgPT5cbiAgICB7XG4gICAgICAgIGNvbnN0IHRvZG9zRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kbycpO1xuICAgICAgICBjb25zdCBuZXdUb2RvcyA9IEFycmF5LmZyb20odG9kb3NFbGVtZW50cykubWFwKHRvZG8gPT4ge1xuICAgICAgICAgICAgbGV0IG5ld1RvZG8gPSB7fTtcbiAgICAgICAgICAgIEFycmF5LmZyb20odG9kby5jaGlsZHJlbikuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoKHRydWUpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygndG9kby1uYW1lJyk6XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdUb2RvLm5hbWUgPSBjaGlsZC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2RvLWRlc2NyaXB0aW9uJyk6XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdUb2RvLmRlc2NyaXB0aW9uID0gY2hpbGQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygndG9kby1jaGVja2JveC1jb250YWluZXInKTpcbiAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20oY2hpbGQuY2hpbGRyZW4pLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCh0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tY2hlY2tib3gnKTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RvZG8uY29tcGxldGUgPSBjaGlsZC5jaGlsZHJlblswXS5nZXRBdHRyaWJ1dGUoJ2hpZGRlbicpID09IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygncHJpb3JpdHktc3RhdHVzJyk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUb2RvLnByaW9yaXR5ID0gY2hpbGQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygndG9kby1kYXRlJyk6XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdUb2RvLmR1ZURhdGUgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RvZG8uZHVlRGF0ZS5kYXkgPSBjaGlsZC5jaGlsZHJlblswXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RvZG8uZHVlRGF0ZS5tb250aCA9IGNoaWxkLmNoaWxkcmVuWzFdLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VG9kby5kdWVEYXRlLnllYXIgPSBjaGlsZC5jaGlsZHJlblsyXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3VG9kbztcbiAgICAgICAgfSk7XG4gICAgICAgIEV2ZW50QWdncmVnYXRvci5wdWJsaXNoKCd1cGRhdGUgcHJvamVjdCcsIGdldFNlbGVjdGVkUHJvamVjdElkKCkse3RvZG9zOiBuZXdUb2Rvc30pO1xuICAgIH1cblxuICAgIEV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoJ3ZpZXcgcHJvamVjdCcsIChpZCwgbmFtZSwgZGVzY3JpcHRpb24sIHRvZG9zKSA9PiB7XG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpICE9IG51bGwpIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbmF2IGxpW2RhdGEtaWQ9XCIke2lkfVwiXWApXG4gICAgICAgIHNlbGVjdGVkLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RIZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaGVhZGluZycpO1xuICAgICAgICBwcm9qZWN0SGVhZGluZy52YWx1ZSA9IG5hbWU7XG4gICAgICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIHByb2plY3REZXNjcmlwdGlvbi52YWx1ZSA9IGRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvJykuZm9yRWFjaCh0b2RvID0+IHRvZG8ucmVtb3ZlKCkpO1xuXG4gICAgICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgICAgICBjcmVhdGVUb2RvKHRvZG8ubmFtZSwgdG9kby5kZXNjcmlwdGlvbiwgdG9kby5jb21wbGV0ZSwgdG9kby5kdWVEYXRlLCB0b2RvLnByaW9yaXR5KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBFdmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKCd1cGRhdGUgbmF2JywgKGlkLCBuYW1lKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYG5hdiBsaVtkYXRhLWlkPVwiJHtpZH1cIl1gKS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge2luaXRIVE1MfVxufSkoKVxuXG5cbmV4cG9ydCBkZWZhdWx0IERpc3BsYXllckNvbnRyb2xsZXIiLCJjb25zdCBFdmVudCA9IG5hbWUgPT4gXG57XG4gICAgY29uc3QgX2hhbmRsZXJzID0gW11cblxuICAgIGNvbnN0IHByb3RvID0ge1xuICAgICAgICBmaXJlOiAoLi4ubXNnKSA9PiBfaGFuZGxlcnMuZm9yRWFjaChmID0+IGYoLi4ubXNnKSksXG4gICAgICAgIGFkZEhhbmRsZXI6IGhhbmRsZXIgPT4gX2hhbmRsZXJzLnB1c2goaGFuZGxlciksXG4gICAgICAgIGdldE5hbWU6ICgpID0+IHtyZXR1cm4gbmFtZTt9XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5jcmVhdGUocHJvdG8pXG59XG5cbmNvbnN0IEV2ZW50QWdncmVnYXRvciA9ICgoKSA9PiBcbntcbiAgICBjb25zdCBfZXZlbnRzID0gW107XG5cbiAgICBjb25zdCBfY2hlY2tGb3JFdmVudCA9IG5hbWUgPT5cbiAgICB7XG4gICAgICAgIHJldHVybiBfZXZlbnRzLmZpbmRJbmRleChldmVudCA9PiBuYW1lID09IGV2ZW50LmdldE5hbWUoKSk7XG4gICAgfVxuXG4gICAgY29uc3QgcHVibGlzaCA9IChuYW1lLCAuLi5tc2cpID0+IFxuICAgIHtcbiAgICAgICAgbGV0IGV2ZW50SW5kZXggPSBfY2hlY2tGb3JFdmVudChuYW1lKTtcbiAgICAgICAgaWYoZXZlbnRJbmRleCA9PSAtMSlcbiAgICAgICAge1xuICAgICAgICAgICAgX2V2ZW50cy5wdXNoKEV2ZW50KG5hbWUpKVxuICAgICAgICAgICAgZXZlbnRJbmRleCA9IF9ldmVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKF9ldmVudHNbZXZlbnRJbmRleF0uZ2V0TmFtZSgpKTtcbiAgICAgICAgX2V2ZW50c1tldmVudEluZGV4XS5maXJlKC4uLm1zZyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3Vic2NyaWJlID0gKG5hbWUsIGhhbmRsZXIpID0+XG4gICAge1xuICAgICAgICBsZXQgZXZlbnRJbmRleCA9IF9jaGVja0ZvckV2ZW50KG5hbWUpO1xuICAgICAgICBpZihldmVudEluZGV4ID09IC0xKVxuICAgICAgICB7XG4gICAgICAgICAgICBfZXZlbnRzLnB1c2goRXZlbnQobmFtZSkpO1xuICAgICAgICAgICAgZXZlbnRJbmRleCA9IF9ldmVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKF9ldmVudHNbZXZlbnRJbmRleF0uZ2V0TmFtZSgpKTtcbiAgICAgICAgX2V2ZW50c1tldmVudEluZGV4XS5hZGRIYW5kbGVyKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB7cHVibGlzaCwgc3Vic2NyaWJlfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEFnZ3JlZ2F0b3I7IiwiaW1wb3J0IERpc3BsYXlDb250cm9sbGVyIGZyb20gJy4vZGlzcGxheUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0IEV2ZW50QWdncmVnYXRvciBmcm9tICcuL2V2ZW50LmpzJztcbmltcG9ydCB7IHN0b3JhZ2VBdmFpbGFibGUsIGluaXRMb2NhbFN0b3JhZ2VMaXN0ZW5lciwgbG9hZFByb2plY3RzIH0gZnJvbSAnLi9zdG9yYWdlLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5EaXNwbGF5Q29udHJvbGxlci5pbml0SFRNTCgpO1xuXG5pZihzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSlcbntcbiAgICBpbml0TG9jYWxTdG9yYWdlTGlzdGVuZXIoKTtcbiAgICBpZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpXG4gICAge1xuICAgICAgICBkZWZhdWx0SW5pdCgpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBsb2FkUHJvamVjdHMoKTtcbiAgICB9XG59XG5lbHNlXG57XG4gICAgaW5pdCgpO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0SW5pdCgpXG57XG4gICAgRXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2goJ2NyZWF0ZSBwcm9qZWN0JywgJ0RlZmF1bHQnKTtcbiAgICBFdmVudEFnZ3JlZ2F0b3IucHVibGlzaCgnc2VsZWN0IHByb2plY3QnLCAwKTtcbn0iLCJpbXBvcnQgRXZlbnRBZ2dyZWdhdG9yIGZyb20gXCIuL2V2ZW50XCI7XG5cbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIHZhciBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgIHZhciB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB3cml0ZVByb2plY3RzVG9TdG9yYWdlKHByb2plY3RzKVxue1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG59XG5cbmZ1bmN0aW9uIGluaXRMb2NhbFN0b3JhZ2VMaXN0ZW5lcigpXG57XG4gICAgRXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZSgnd3JpdGUgc3RvcmFnZScsIHdyaXRlUHJvamVjdHNUb1N0b3JhZ2UpO1xufVxuXG5mdW5jdGlvbiBsb2FkUHJvamVjdHMoKVxue1xuICAgIGNvbnN0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgRXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2goJ2FkZCBwcm9qZWN0JywgcHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICBFdmVudEFnZ3JlZ2F0b3IucHVibGlzaCgnc2VsZWN0IHByb2plY3QnLCAwKTtcbn1cblxuZXhwb3J0IHtzdG9yYWdlQXZhaWxhYmxlLCBpbml0TG9jYWxTdG9yYWdlTGlzdGVuZXIsIGxvYWRQcm9qZWN0c30iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=