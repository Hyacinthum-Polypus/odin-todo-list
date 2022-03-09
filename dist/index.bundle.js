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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    padding: 0;\n    margin: 0;\n    background-color: white;\n    font-family: sans-serif;\n}\n\n#content {\n    min-height: 100vh;\n    min-width: 100vw;\n\n    display: grid;\n    grid-template-columns: min(300px, 30%) 1fr;\n}\n\nmain {\n    padding: 100px;\n}\n\n.project-heading {\n    width: 100%;\n    font-size: 5rem;\n    border: none;\n    border-bottom: 10px solid black;\n    font-weight: bold;\n}\n\n.project-description {\n    width: 100%;\n    resize: none;\n    border: none;\n    border-bottom: 2px solid black;\n}\n\n#todos-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    column-gap: 20px;\n    flex-direction: column;\n    gap: 18px;\n    align-items: center;\n    margin-top: 18px;\n}\n\n#todo-container-buttons {\n    width: 100%;\n    background-color:lightgrey;\n    display: flex;\n    justify-content: flex-end;\n    padding: 8px;\n}\n\n#todo-container-buttons > button {\n    font-size: 30px;\n    padding: 5px 15px;\n}\n\n.todo {\n    display: grid;\n\n    height: 200px;\n\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 2fr 0.5fr 0.5fr;\n\n    border: 5px solid black;\n}\n\n.todo-checkbox-container {\n    grid-column: 1;\n    min-width: 50px;;\n    grid-row: span 4;\n    padding: 0 12px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    padding-top: 8px;\n}\n\n.priority-button {\n    border: none;\n    cursor: pointer;\n}\n\n.priority-low {\n    background-color: greenyellow\n}\n\n.priority-med {\n    background-color: orange;\n}\n\n.priority-high {\n    background-color: violet;\n}\n\n.todo-checkbox {\n    width: 50px;\n    height: 50px;\n    background-color: white;\n    border: 2px black solid;\n    cursor: pointer;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.todo-checkmark {\n    width: 50%;\n    height: 50%;\n    background-color: black;\n}\n\n.todo-name {\n    min-width: 0;\n    grid-column: 2;\n    grid-row: 1;\n    font-size: 1.5rem;\n    font-weight: bold;\n    background-color: black;\n    color: white;\n}\n\n.todo-description {\n    grid-column: 2;\n    grid-row: 2;\n    resize: none;\n}\n\n.todo-date {\n    text-align: center;\n}\n\n.late {\n    color: red;\n}\n\n.late * {\n    color: red;\n}\n\n.todo-buttons {\n    display: flex;\n    justify-content: center;\n    gap: 4px;\n}\n\n.todo-button {\n    border: none;\n}\n\n.sidebar {\n    background-color: whitesmoke;\n    padding: 20px;\n    overflow: hidden;\n}\n\nheader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 50px;\n}\n\nnav ul {\n    padding: 0;\n    display: grid;\n    grid-template-columns: 9fr 1fr;\n}\n\nnav ul button {\n    border: none;\n}\n\nnav li {\n    list-style: none;\n    padding: 12px 8px;\n    cursor: pointer;\n}\n\n.selected {\n    background-color: lightgray;\n}\n\n.toolbar {\n    background-color: lightgrey;\n    padding: 8px;\n    display: flex;\n    justify-content: flex-end;\n}\n\n.input-bar {\n    display: flex;\n    height: 30px;\n    width: 100%;\n}\n\n.input-bar > input {\n    border: none;\n    outline: none;\n}\n\n.add-project-input {\n    flex: 1 0 0;\n    background-color: white;\n    color: black;\n    margin: 5px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;;IAEhB,aAAa;IACb,0CAA0C;AAC9C;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,YAAY;IACZ,+BAA+B;IAC/B,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,4DAA4D;IAC5D,gBAAgB;IAChB,sBAAsB;IACtB,SAAS;IACT,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,0BAA0B;IAC1B,aAAa;IACb,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,aAAa;;IAEb,aAAa;;IAEb,8BAA8B;IAC9B,uCAAuC;;IAEvC,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI;AACJ;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,uBAAuB;IACvB,eAAe;;IAEf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,WAAW;IACX,iBAAiB;IACjB,iBAAiB;IACjB,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,QAAQ;AACZ;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,4BAA4B;IAC5B,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;IAC3B,YAAY;IACZ,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,YAAY;IACZ,WAAW;AACf","sourcesContent":["body {\n    padding: 0;\n    margin: 0;\n    background-color: white;\n    font-family: sans-serif;\n}\n\n#content {\n    min-height: 100vh;\n    min-width: 100vw;\n\n    display: grid;\n    grid-template-columns: min(300px, 30%) 1fr;\n}\n\nmain {\n    padding: 100px;\n}\n\n.project-heading {\n    width: 100%;\n    font-size: 5rem;\n    border: none;\n    border-bottom: 10px solid black;\n    font-weight: bold;\n}\n\n.project-description {\n    width: 100%;\n    resize: none;\n    border: none;\n    border-bottom: 2px solid black;\n}\n\n#todos-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    column-gap: 20px;\n    flex-direction: column;\n    gap: 18px;\n    align-items: center;\n    margin-top: 18px;\n}\n\n#todo-container-buttons {\n    width: 100%;\n    background-color:lightgrey;\n    display: flex;\n    justify-content: flex-end;\n    padding: 8px;\n}\n\n#todo-container-buttons > button {\n    font-size: 30px;\n    padding: 5px 15px;\n}\n\n.todo {\n    display: grid;\n\n    height: 200px;\n\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 2fr 0.5fr 0.5fr;\n\n    border: 5px solid black;\n}\n\n.todo-checkbox-container {\n    grid-column: 1;\n    min-width: 50px;;\n    grid-row: span 4;\n    padding: 0 12px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    padding-top: 8px;\n}\n\n.priority-button {\n    border: none;\n    cursor: pointer;\n}\n\n.priority-low {\n    background-color: greenyellow\n}\n\n.priority-med {\n    background-color: orange;\n}\n\n.priority-high {\n    background-color: violet;\n}\n\n.todo-checkbox {\n    width: 50px;\n    height: 50px;\n    background-color: white;\n    border: 2px black solid;\n    cursor: pointer;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.todo-checkmark {\n    width: 50%;\n    height: 50%;\n    background-color: black;\n}\n\n.todo-name {\n    min-width: 0;\n    grid-column: 2;\n    grid-row: 1;\n    font-size: 1.5rem;\n    font-weight: bold;\n    background-color: black;\n    color: white;\n}\n\n.todo-description {\n    grid-column: 2;\n    grid-row: 2;\n    resize: none;\n}\n\n.todo-date {\n    text-align: center;\n}\n\n.late {\n    color: red;\n}\n\n.late * {\n    color: red;\n}\n\n.todo-buttons {\n    display: flex;\n    justify-content: center;\n    gap: 4px;\n}\n\n.todo-button {\n    border: none;\n}\n\n.sidebar {\n    background-color: whitesmoke;\n    padding: 20px;\n    overflow: hidden;\n}\n\nheader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 50px;\n}\n\nnav ul {\n    padding: 0;\n    display: grid;\n    grid-template-columns: 9fr 1fr;\n}\n\nnav ul button {\n    border: none;\n}\n\nnav li {\n    list-style: none;\n    padding: 12px 8px;\n    cursor: pointer;\n}\n\n.selected {\n    background-color: lightgray;\n}\n\n.toolbar {\n    background-color: lightgrey;\n    padding: 8px;\n    display: flex;\n    justify-content: flex-end;\n}\n\n.input-bar {\n    display: flex;\n    height: 30px;\n    width: 100%;\n}\n\n.input-bar > input {\n    border: none;\n    outline: none;\n}\n\n.add-project-input {\n    flex: 1 0 0;\n    background-color: white;\n    color: black;\n    margin: 5px;\n}"],"sourceRoot":""}]);
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



const  DisplayerController = (() => {
    const initHTML = () =>
    {
        document.getElementById('content').innerHTML = `
        <div class="sidebar">
            <header>
                <img src="" alt="Logo">
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
        todoName.classList.add('todo-name');
        todoName.value = name;
        todoName.addEventListener('input', recordTodos);
        todo.appendChild(todoName);
    }

    const createTodoDescription = (todo, description) =>
    {
        const todoDescription = document.createElement('textarea');
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



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLHNEQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7OztBQUdULFdBQVcsc0RBQWU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1QsUUFBUSxzREFBdUIsMkNBQTJDLGdCQUFnQjtBQUMxRjs7QUFFQSxJQUFJLHdEQUF5QjtBQUM3QjtBQUNBLG1FQUFtRSxHQUFHO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMLElBQUksd0RBQXlCO0FBQzdCLGtEQUFrRCxHQUFHO0FBQ3JELEtBQUs7O0FBRUwsWUFBWTtBQUNaLENBQUM7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQzdWZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixDQUFDOztBQUVELGlFQUFlLGVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ25EeUI7QUFDZDtBQUMrQztBQUNuRTs7QUFFckIsc0VBQTBCOztBQUUxQixHQUFHLDZEQUFnQjtBQUNuQjtBQUNBLElBQUkscUVBQXdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQVk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHlEQUF1QjtBQUMzQixJQUFJLHlEQUF1QjtBQUMzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QnNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksd0RBQXlCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBdUI7QUFDL0IsS0FBSzs7QUFFTCxJQUFJLHNEQUF1QjtBQUMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2RhdGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4oMzAwcHgsIDMwJSkgMWZyO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgcGFkZGluZzogMTAwcHg7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRpbmcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jdG9kb3MtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDE4cHg7XFxufVxcblxcbiN0b2RvLWNvbnRhaW5lci1idXR0b25zIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmV5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbiN0b2RvLWNvbnRhaW5lci1idXR0b25zID4gYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXG59XFxuXFxuLnRvZG8ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAwLjVmciAwLjVmcjtcXG5cXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxufVxcblxcbi50b2RvLWNoZWNrYm94LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBtaW4td2lkdGg6IDUwcHg7O1xcbiAgICBncmlkLXJvdzogc3BhbiA0O1xcbiAgICBwYWRkaW5nOiAwIDEycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDhweDtcXG59XFxuXFxuLnByaW9yaXR5LWJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJpb3JpdHktbG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3dcXG59XFxuXFxuLnByaW9yaXR5LW1lZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2aW9sZXQ7XFxufVxcblxcbi50b2RvLWNoZWNrYm94IHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kby1jaGVja21hcmsge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi50b2RvLW5hbWUge1xcbiAgICBtaW4td2lkdGg6IDA7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kby1kZXNjcmlwdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4udG9kby1kYXRlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubGF0ZSB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5sYXRlICoge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4udG9kby1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4udG9kby1idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbm5hdiB1bCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOWZyIDFmcjtcXG59XFxuXFxubmF2IHVsIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxubmF2IGxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMTJweCA4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4udG9vbGJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uaW5wdXQtYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmlucHV0LWJhciA+IGlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtaW5wdXQge1xcbiAgICBmbGV4OiAxIDAgMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgbWFyZ2luOiA1cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCOztJQUVoQixhQUFhO0lBQ2IsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLCtCQUErQjtJQUMvQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNERBQTREO0lBQzVELGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhOztJQUViLGFBQWE7O0lBRWIsOEJBQThCO0lBQzlCLHVDQUF1Qzs7SUFFdkMsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsZUFBZTs7SUFFZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluKDMwMHB4LCAzMCUpIDFmcjtcXG59XFxuXFxubWFpbiB7XFxuICAgIHBhZGRpbmc6IDEwMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkaW5nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI3RvZG9zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgY29sdW1uLWdhcDogMjBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxOHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xcbn1cXG5cXG4jdG9kby1jb250YWluZXItYnV0dG9ucyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JleTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4jdG9kby1jb250YWluZXItYnV0dG9ucyA+IGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxufVxcblxcbi50b2RvIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICAgaGVpZ2h0OiAyMDBweDtcXG5cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMC41ZnIgMC41ZnI7XFxuXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udG9kby1jaGVja2JveC1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgbWluLXdpZHRoOiA1MHB4OztcXG4gICAgZ3JpZC1yb3c6IHNwYW4gNDtcXG4gICAgcGFkZGluZzogMCAxMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiA4cHg7XFxufVxcblxcbi5wcmlvcml0eS1idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5LWxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93XFxufVxcblxcbi5wcmlvcml0eS1tZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmlvbGV0O1xcbn1cXG5cXG4udG9kby1jaGVja2JveCB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBibGFjayBzb2xpZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8tY2hlY2ttYXJrIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udG9kby1uYW1lIHtcXG4gICAgbWluLXdpZHRoOiAwO1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvZG8tZGVzY3JpcHRpb24ge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLnRvZG8tZGF0ZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxhdGUge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4ubGF0ZSAqIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnRvZG8tYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLnRvZG8tYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDlmciAxZnI7XFxufVxcblxcbm5hdiB1bCBidXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbm5hdiBsaSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEycHggOHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLnRvb2xiYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmlucHV0LWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5pbnB1dC1iYXIgPiBpbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWlucHV0IHtcXG4gICAgZmxleDogMSAwIDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGlzRGF0ZUluVGhlUGFzdChvdGhlckRhdGUpXG57XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgaWYoZGF0ZS5nZXRGdWxsWWVhcigpID4gb3RoZXJEYXRlLnllYXIpXG4gICAge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IFxuICAgIGVsc2UgaWYoZGF0ZS5nZXRGdWxsWWVhcigpID09IG90aGVyRGF0ZS55ZWFyKVxuICAgIHtcbiAgICAgICAgaWYoZGF0ZS5nZXRNb250aCgpID4gb3RoZXJEYXRlLm1vbnRoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGRhdGUuZ2V0TW9udGgoKSA9PSBvdGhlckRhdGUubW9udGgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGRhdGUuZ2V0RGF0ZSgpID4gb3RoZXJEYXRlLmRheSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQge2lzRGF0ZUluVGhlUGFzdH07IiwiaW1wb3J0IEV2ZW50QWdncmVnYXRvciBmcm9tIFwiLi9ldmVudFwiO1xuaW1wb3J0IHsgaXNEYXRlSW5UaGVQYXN0IH0gZnJvbSBcIi4vZGF0ZVwiO1xuXG5jb25zdCAgRGlzcGxheWVyQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgaW5pdEhUTUwgPSAoKSA9PlxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyXCI+XG4gICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiTG9nb1wiPlxuICAgICAgICAgICAgICAgIDxoMT5Ub2RvIExpc3Q8L2gxPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbGJhclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYWRkLXByb2plY3QtYnV0dG9uXCI+KzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtYmFyXCI+PC9kaXY+XG4gICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgIDxoMz5Qcm9qZWN0czwvaDM+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiUHJvamVjdCB0aXRsZSBoZXJlLi4uXCIgdHlwZT1cInR5cGVcIiBjbGFzcz1cInByb2plY3QtaGVhZGluZ1wiPlxuICAgICAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPVwiUHJvamVjdCBkZXNjcmlwdGlvbiBoZXJlLi4uXCIgY2xhc3M9XCJwcm9qZWN0LWRlc2NyaXB0aW9uXCIgcm93cz1cIjEwXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ0b2RvLWNvbnRhaW5lci1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm5ldy10b2RvXCI+KzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwidG9kb3MtY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+YDtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVBZGRQcm9qZWN0SW5wdXQpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RIZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaGVhZGluZycpO1xuICAgICAgICBwcm9qZWN0SGVhZGluZy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIEV2ZW50QWdncmVnYXRvci5wdWJsaXNoKCd1cGRhdGUgcHJvamVjdCcsIGdldFNlbGVjdGVkUHJvamVjdElkKCksIHtuYW1lOiBwcm9qZWN0SGVhZGluZy52YWx1ZX0pO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJykudGV4dENvbnRlbnQgPSBwcm9qZWN0SGVhZGluZy52YWx1ZSA9PSAnJyA/ICdVbnRpdGxlZCBQcm9qZWN0JyA6IHByb2plY3RIZWFkaW5nLnZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1kZXNjcmlwdGlvbicpO1xuICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAgKCkgPT4gRXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2goJ3VwZGF0ZSBwcm9qZWN0JywgZ2V0U2VsZWN0ZWRQcm9qZWN0SWQoKSwge2Rlc2NyaXB0aW9uOiBwcm9qZWN0RGVzY3JpcHRpb24udmFsdWV9KSk7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10b2RvJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjcmVhdGVUb2RvKCkpXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U2VsZWN0ZWRQcm9qZWN0SWQgPSAoKSA9PlxuICAgIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFByb2plY3RUb05hdiA9IChwcm9qZWN0LCBpZCkgPT5cbiAgICB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICAgICAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZCk7XG4gICAgICAgIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge0V2ZW50QWdncmVnYXRvci5wdWJsaXNoKCdzZWxlY3QgcHJvamVjdCcsIGlkKTt9KTtcblxuICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsaXN0SXRlbS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3QucmVtb3ZlKCk7XG4gICAgICAgICAgICBFdmVudEFnZ3JlZ2F0b3IucHVibGlzaCgnZGVsZXRlIHByb2plY3QnLCBpZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBkZWxldGVQcm9qZWN0LnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJykuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3QpO1xuXG4gICAgfVxuICAgIEV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoJ3Byb2plY3QgY3JlYXRlZCcsIChwcm9qZWN0TmFtZSwgaWQpID0+IGFkZFByb2plY3RUb05hdihwcm9qZWN0TmFtZSwgaWQpKTtcblxuICAgIGNvbnN0IHRvZ2dsZUFkZFByb2plY3RJbnB1dCA9ICgpID0+XG4gICAge1xuICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtaW5wdXQnKSlcbiAgICAgICAge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWlucHV0JykucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QtaW5wdXQnKVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWJhcicpLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7aWYoZS5rZXkgPT0gJ0VudGVyJykge0V2ZW50QWdncmVnYXRvci5wdWJsaXNoKCdjcmVhdGUgcHJvamVjdCcsIGlucHV0LnZhbHVlKTsgdG9nZ2xlQWRkUHJvamVjdElucHV0KCl9O30pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlVG9kb1ByaW9yaXR5ID0gKHByaW9yaXR5Q29udGFpbmVyLCB1cGRhdGUpID0+XG4gICAge1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IHByaW9yaXR5Q29udGFpbmVyLmNoaWxkcmVuWzBdLnRleHRDb250ZW50O1xuXG4gICAgICAgIGlmKHVwZGF0ZSA9PSAnaW5jcmVhc2UnKVxuICAgICAgICB7XG4gICAgICAgICAgICBzd2l0Y2gocHJpb3JpdHkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbG93IHByaW9yaXR5JzpcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlDb250YWluZXIuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSAnbWVkaXVtIHByaW9yaXR5JztcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgncHJpb3JpdHktbG93Jyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbWVkaXVtIHByaW9yaXR5JzpcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlDb250YWluZXIuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSAnaGlnaCBwcmlvcml0eSc7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3ByaW9yaXR5LW1lZCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodXBkYXRlID09ICdkZWNyZWFzZScpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN3aXRjaChwcmlvcml0eSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYXNlICdtZWRpdW0gcHJpb3JpdHknOlxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUNvbnRhaW5lci5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9ICdsb3cgcHJpb3JpdHknO1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdwcmlvcml0eS1tZWQnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdoaWdoIHByaW9yaXR5JzpcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlDb250YWluZXIuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSAnbWVkaXVtIHByaW9yaXR5JztcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgncHJpb3JpdHktaGlnaCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBwcmlvcml0eUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNvbnZlcnRQcmlvcml0eVRvQ2xhc3MocHJpb3JpdHlDb250YWluZXIuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQpKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb252ZXJ0UHJpb3JpdHlUb0NsYXNzID0gcHJpb3JpdHkgPT5cbiAgICB7XG4gICAgICAgIHN3aXRjaChwcmlvcml0eSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2FzZSAnbG93IHByaW9yaXR5JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3ByaW9yaXR5LWxvdyc7XG4gICAgICAgICAgICBjYXNlICdtZWRpdW0gcHJpb3JpdHknOlxuICAgICAgICAgICAgICAgIHJldHVybiAncHJpb3JpdHktbWVkJztcbiAgICAgICAgICAgIGNhc2UgJ2hpZ2ggcHJpb3JpdHknOlxuICAgICAgICAgICAgICAgIHJldHVybiAncHJpb3JpdHktaGlnaCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUb2RvQ2hlY2tib3hDb250YWluZXIgPSAodG9kbywgY29tcGxldGUsIHByaW9yaXR5KSA9PlxuICAgIHtcbiAgICAgICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1jaGVja2JveC1jb250YWluZXInKTtcbiAgICAgICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZChjb252ZXJ0UHJpb3JpdHlUb0NsYXNzKHByaW9yaXR5KSk7XG4gICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5U3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByaW9yaXR5U3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LXN0YXR1cycpO1xuICAgICAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eVN0YXR1cyk7XG4gICAgICAgIHByaW9yaXR5U3RhdHVzLnRleHRDb250ZW50ID0gcHJpb3JpdHk7XG5cbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgndG9kby1jaGVja2JveCcpO1xuICAgICAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveCk7XG5cbiAgICAgICAgY29uc3QgY2hlY2ttYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNoZWNrbWFyay5jbGFzc0xpc3QuYWRkKCd0b2RvLWNoZWNrbWFyaycpO1xuICAgICAgICBpZihjb21wbGV0ZSA9PSBmYWxzZSkgY2hlY2ttYXJrLnRvZ2dsZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgIGNoZWNrYm94LmFwcGVuZENoaWxkKGNoZWNrbWFyayk7XG5cbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjaGVja21hcmsudG9nZ2xlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIHJlY29yZFRvZG9zKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUJ1dHRvbnMpO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5RGVjcmVhc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcHJpb3JpdHlEZWNyZWFzZUJ1dHRvbi50ZXh0Q29udGVudCA9ICc8JztcbiAgICAgICAgcHJpb3JpdHlEZWNyZWFzZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1idXR0b24nKTtcbiAgICAgICAgcHJpb3JpdHlCdXR0b25zLmFwcGVuZENoaWxkKHByaW9yaXR5RGVjcmVhc2VCdXR0b24pO1xuICAgICAgICBwcmlvcml0eURlY3JlYXNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdXBkYXRlVG9kb1ByaW9yaXR5KGNoZWNrYm94Q29udGFpbmVyLCAnZGVjcmVhc2UnKTtcbiAgICAgICAgICAgIHJlY29yZFRvZG9zKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5SW5jcmVhc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcHJpb3JpdHlJbmNyZWFzZUJ1dHRvbi50ZXh0Q29udGVudCA9ICc+JztcbiAgICAgICAgcHJpb3JpdHlJbmNyZWFzZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1idXR0b24nKTtcbiAgICAgICAgcHJpb3JpdHlCdXR0b25zLmFwcGVuZENoaWxkKHByaW9yaXR5SW5jcmVhc2VCdXR0b24pO1xuICAgICAgICBwcmlvcml0eUluY3JlYXNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdXBkYXRlVG9kb1ByaW9yaXR5KGNoZWNrYm94Q29udGFpbmVyLCAnaW5jcmVhc2UnKTtcbiAgICAgICAgICAgIHJlY29yZFRvZG9zKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVRvZG9OYW1lID0gKHRvZG8sIG5hbWUpID0+XG4gICAge1xuICAgICAgICBjb25zdCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRvZG9OYW1lLmNsYXNzTGlzdC5hZGQoJ3RvZG8tbmFtZScpO1xuICAgICAgICB0b2RvTmFtZS52YWx1ZSA9IG5hbWU7XG4gICAgICAgIHRvZG9OYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgcmVjb3JkVG9kb3MpO1xuICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRvZG9OYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUb2RvRGVzY3JpcHRpb24gPSAodG9kbywgZGVzY3JpcHRpb24pID0+XG4gICAge1xuICAgICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG9kby1kZXNjcmlwdGlvbicpO1xuICAgICAgICB0b2RvRGVzY3JpcHRpb24udmFsdWUgPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgcmVjb3JkVG9kb3MpO1xuICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbik7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlVG9kb0R1ZURhdGUgPSAodG9kbywgZHVlRGF0ZSkgPT5cbiAgICB7XG4gICAgICAgIGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9EYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGF0ZScpO1xuICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRvZG9EYXRlKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRvZG9CdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9CdXR0b25zLmNsYXNzTGlzdC5hZGQoJ3RvZG8tYnV0dG9ucycpO1xuICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRvZG9CdXR0b25zKTtcblxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIGlmKGR1ZURhdGUgPT0gbnVsbCkgXG4gICAgICAgIHtcbiAgICAgICAgICAgIGR1ZURhdGUgPSB7fTtcbiAgICAgICAgICAgIGR1ZURhdGUuZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgICAgICBkdWVEYXRlLm1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgICAgICAgICAgZHVlRGF0ZS55ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZGF5LnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcbiAgICAgICAgZGF5LnNldEF0dHJpYnV0ZSgnbWluJywgMSk7XG4gICAgICAgIGRheS5zZXRBdHRyaWJ1dGUoJ21heCcsIDMxKTtcbiAgICAgICAgZGF5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkdWVEYXRlLmRheSk7XG5cbiAgICAgICAgY29uc3QgbW9udGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBtb250aC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XG4gICAgICAgIG1vbnRoLnNldEF0dHJpYnV0ZSgnbWluJywgMSk7XG4gICAgICAgIG1vbnRoLnNldEF0dHJpYnV0ZSgnbWF4JywgMTIpO1xuICAgICAgICBtb250aC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZHVlRGF0ZS5tb250aCk7XG5cbiAgICAgICAgY29uc3QgeWVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHllYXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xuICAgICAgICB5ZWFyLnNldEF0dHJpYnV0ZSgnbWluJywgMTk4NSk7XG4gICAgICAgIHllYXIuc2V0QXR0cmlidXRlKCdtYXgnLCA5OTk5KTtcbiAgICAgICAgeWVhci5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZHVlRGF0ZS55ZWFyKTtcblxuICAgICAgICB0b2RvRGF0ZS5pbm5lckhUTUwgPSAnRHVlIGRhdGU6ICcgKyBkYXkub3V0ZXJIVE1MICsgJy0nICsgbW9udGgub3V0ZXJIVE1MICsgJy0nICsgeWVhci5vdXRlckhUTUw7XG5cbiAgICAgICAgQXJyYXkuZnJvbSh0b2RvRGF0ZS5jaGlsZHJlbikuZm9yRWFjaChjaGlsZCA9PiBjaGlsZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIHJlY29yZFRvZG9zKCk7XG4gICAgICAgICAgICBpZihpc0RhdGVJblRoZVBhc3Qoe1xuICAgICAgICAgICAgICAgIGRheTogdG9kb0RhdGUuY2hpbGRyZW5bMF0udmFsdWUsXG4gICAgICAgICAgICAgICAgbW9udGg6IHRvZG9EYXRlLmNoaWxkcmVuWzFdLnZhbHVlLFxuICAgICAgICAgICAgICAgIHllYXI6IHRvZG9EYXRlLmNoaWxkcmVuWzJdLnZhbHVlXG4gICAgICAgICAgICB9KSkgdG9kb0RhdGUuY2xhc3NMaXN0LmFkZCgnbGF0ZScpO1xuICAgICAgICAgICAgZWxzZSB0b2RvRGF0ZS5jbGFzc0xpc3QucmVtb3ZlKCdsYXRlJyk7XG4gICAgICAgIH0pKTtcblxuXG4gICAgICAgIGlmKGlzRGF0ZUluVGhlUGFzdChkdWVEYXRlKSkgdG9kb0RhdGUuY2xhc3NMaXN0LmFkZCgnbGF0ZScpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVtb3ZlVG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICByZW1vdmVUb2RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8tYnV0dG9uJyk7XG4gICAgICAgIHJlbW92ZVRvZG9CdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICAgICAgdG9kb0J1dHRvbnMuYXBwZW5kQ2hpbGQocmVtb3ZlVG9kb0J1dHRvbik7XG4gICAgICAgIHJlbW92ZVRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0b2RvLnJlbW92ZSgpO1xuICAgICAgICAgICAgcmVjb3JkVG9kb3MoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlVG9kbyA9IChuYW1lID0gXCJcIiwgZGVzY3JpcHRpb24gPSBcIlwiLCBjb21wbGV0ZSA9IGZhbHNlLCBkdWVEYXRlID0gbnVsbCwgcHJpb3JpdHkgPSAnbG93IHByaW9yaXR5JykgPT5cbiAgICB7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG5cbiAgICAgICAgY3JlYXRlVG9kb0NoZWNrYm94Q29udGFpbmVyKHRvZG8sIGNvbXBsZXRlLCBwcmlvcml0eSk7XG5cbiAgICAgICAgY3JlYXRlVG9kb05hbWUodG9kbywgbmFtZSk7XG5cbiAgICAgICAgY3JlYXRlVG9kb0Rlc2NyaXB0aW9uKHRvZG8sIGRlc2NyaXB0aW9uKTtcblxuICAgICAgICBjcmVhdGVUb2RvRHVlRGF0ZSh0b2RvLCBkdWVEYXRlKTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb3MtY29udGFpbmVyJykuYXBwZW5kQ2hpbGQodG9kbyk7XG5cbiAgICAgICAgcmVjb3JkVG9kb3MoKTtcbiAgICB9XG5cbiAgICBjb25zdCByZWNvcmRUb2RvcyA9ICgpID0+XG4gICAge1xuICAgICAgICBjb25zdCB0b2Rvc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8nKTtcbiAgICAgICAgY29uc3QgbmV3VG9kb3MgPSBBcnJheS5mcm9tKHRvZG9zRWxlbWVudHMpLm1hcCh0b2RvID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdUb2RvID0ge307XG4gICAgICAgICAgICBBcnJheS5mcm9tKHRvZG8uY2hpbGRyZW4pLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCh0cnVlKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tbmFtZScpOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VG9kby5uYW1lID0gY2hpbGQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygndG9kby1kZXNjcmlwdGlvbicpOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VG9kby5kZXNjcmlwdGlvbiA9IGNoaWxkLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tY2hlY2tib3gtY29udGFpbmVyJyk6XG4gICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGNoaWxkLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2godHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2RvLWNoZWNrYm94Jyk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUb2RvLmNvbXBsZXRlID0gY2hpbGQuY2hpbGRyZW5bMF0uZ2V0QXR0cmlidXRlKCdoaWRkZW4nKSA9PSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ3ByaW9yaXR5LXN0YXR1cycpOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VG9kby5wcmlvcml0eSA9IGNoaWxkLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tZGF0ZScpOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VG9kby5kdWVEYXRlID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdUb2RvLmR1ZURhdGUuZGF5ID0gY2hpbGQuY2hpbGRyZW5bMF0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdUb2RvLmR1ZURhdGUubW9udGggPSBjaGlsZC5jaGlsZHJlblsxXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RvZG8uZHVlRGF0ZS55ZWFyID0gY2hpbGQuY2hpbGRyZW5bMl0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1RvZG87XG4gICAgICAgIH0pO1xuICAgICAgICBFdmVudEFnZ3JlZ2F0b3IucHVibGlzaCgndXBkYXRlIHByb2plY3QnLCBnZXRTZWxlY3RlZFByb2plY3RJZCgpLHt0b2RvczogbmV3VG9kb3N9KTtcbiAgICB9XG5cbiAgICBFdmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKCd2aWV3IHByb2plY3QnLCAoaWQsIG5hbWUsIGRlc2NyaXB0aW9uLCB0b2RvcykgPT4ge1xuICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKSAhPSBudWxsKSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYG5hdiBsaVtkYXRhLWlkPVwiJHtpZH1cIl1gKVxuICAgICAgICBzZWxlY3RlZC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICBjb25zdCBwcm9qZWN0SGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWhlYWRpbmcnKTtcbiAgICAgICAgcHJvamVjdEhlYWRpbmcudmFsdWUgPSBuYW1lO1xuICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1kZXNjcmlwdGlvbicpO1xuICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24udmFsdWUgPSBkZXNjcmlwdGlvbjtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kbycpLmZvckVhY2godG9kbyA9PiB0b2RvLnJlbW92ZSgpKTtcblxuICAgICAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgY3JlYXRlVG9kbyh0b2RvLm5hbWUsIHRvZG8uZGVzY3JpcHRpb24sIHRvZG8uY29tcGxldGUsIHRvZG8uZHVlRGF0ZSwgdG9kby5wcmlvcml0eSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgRXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZSgndXBkYXRlIG5hdicsIChpZCwgbmFtZSkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBuYXYgbGlbZGF0YS1pZD1cIiR7aWR9XCJdYCkudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtpbml0SFRNTH1cbn0pKClcblxuXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5ZXJDb250cm9sbGVyIiwiY29uc3QgRXZlbnQgPSBuYW1lID0+IFxue1xuICAgIGNvbnN0IF9oYW5kbGVycyA9IFtdXG5cbiAgICBjb25zdCBwcm90byA9IHtcbiAgICAgICAgZmlyZTogKC4uLm1zZykgPT4gX2hhbmRsZXJzLmZvckVhY2goZiA9PiBmKC4uLm1zZykpLFxuICAgICAgICBhZGRIYW5kbGVyOiBoYW5kbGVyID0+IF9oYW5kbGVycy5wdXNoKGhhbmRsZXIpLFxuICAgICAgICBnZXROYW1lOiAoKSA9PiB7cmV0dXJuIG5hbWU7fVxuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuY3JlYXRlKHByb3RvKVxufVxuXG5jb25zdCBFdmVudEFnZ3JlZ2F0b3IgPSAoKCkgPT4gXG57XG4gICAgY29uc3QgX2V2ZW50cyA9IFtdO1xuXG4gICAgY29uc3QgX2NoZWNrRm9yRXZlbnQgPSBuYW1lID0+XG4gICAge1xuICAgICAgICByZXR1cm4gX2V2ZW50cy5maW5kSW5kZXgoZXZlbnQgPT4gbmFtZSA9PSBldmVudC5nZXROYW1lKCkpO1xuICAgIH1cblxuICAgIGNvbnN0IHB1Ymxpc2ggPSAobmFtZSwgLi4ubXNnKSA9PiBcbiAgICB7XG4gICAgICAgIGxldCBldmVudEluZGV4ID0gX2NoZWNrRm9yRXZlbnQobmFtZSk7XG4gICAgICAgIGlmKGV2ZW50SW5kZXggPT0gLTEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIF9ldmVudHMucHVzaChFdmVudChuYW1lKSlcbiAgICAgICAgICAgIGV2ZW50SW5kZXggPSBfZXZlbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhfZXZlbnRzW2V2ZW50SW5kZXhdLmdldE5hbWUoKSk7XG4gICAgICAgIF9ldmVudHNbZXZlbnRJbmRleF0uZmlyZSguLi5tc2cpO1xuICAgIH1cblxuICAgIGNvbnN0IHN1YnNjcmliZSA9IChuYW1lLCBoYW5kbGVyKSA9PlxuICAgIHtcbiAgICAgICAgbGV0IGV2ZW50SW5kZXggPSBfY2hlY2tGb3JFdmVudChuYW1lKTtcbiAgICAgICAgaWYoZXZlbnRJbmRleCA9PSAtMSlcbiAgICAgICAge1xuICAgICAgICAgICAgX2V2ZW50cy5wdXNoKEV2ZW50KG5hbWUpKTtcbiAgICAgICAgICAgIGV2ZW50SW5kZXggPSBfZXZlbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhfZXZlbnRzW2V2ZW50SW5kZXhdLmdldE5hbWUoKSk7XG4gICAgICAgIF9ldmVudHNbZXZlbnRJbmRleF0uYWRkSGFuZGxlcihoYW5kbGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3B1Ymxpc2gsIHN1YnNjcmliZX1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRBZ2dyZWdhdG9yOyIsImltcG9ydCBEaXNwbGF5Q29udHJvbGxlciBmcm9tICcuL2Rpc3BsYXlDb250cm9sbGVyLmpzJztcbmltcG9ydCBFdmVudEFnZ3JlZ2F0b3IgZnJvbSAnLi9ldmVudC5qcyc7XG5pbXBvcnQgeyBzdG9yYWdlQXZhaWxhYmxlLCBpbml0TG9jYWxTdG9yYWdlTGlzdGVuZXIsIGxvYWRQcm9qZWN0cyB9IGZyb20gJy4vc3RvcmFnZS5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuRGlzcGxheUNvbnRyb2xsZXIuaW5pdEhUTUwoKTtcblxuaWYoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpXG57XG4gICAgaW5pdExvY2FsU3RvcmFnZUxpc3RlbmVyKCk7XG4gICAgaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKVxuICAgIHtcbiAgICAgICAgZGVmYXVsdEluaXQoKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgbG9hZFByb2plY3RzKCk7XG4gICAgfVxufVxuZWxzZVxue1xuICAgIGluaXQoKTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEluaXQoKVxue1xuICAgIEV2ZW50QWdncmVnYXRvci5wdWJsaXNoKCdjcmVhdGUgcHJvamVjdCcsICdEZWZhdWx0Jyk7XG4gICAgRXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2goJ3NlbGVjdCBwcm9qZWN0JywgMCk7XG59IiwiaW1wb3J0IEV2ZW50QWdncmVnYXRvciBmcm9tIFwiLi9ldmVudFwiO1xuXG5mdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgICB2YXIgc3RvcmFnZTtcbiAgICB0cnkge1xuICAgICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgICB2YXIgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmIChcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICBlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InIHx8XG4gICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpICYmXG4gICAgICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICAgICAgKHN0b3JhZ2UgJiYgc3RvcmFnZS5sZW5ndGggIT09IDApO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gd3JpdGVQcm9qZWN0c1RvU3RvcmFnZShwcm9qZWN0cylcbntcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG5mdW5jdGlvbiBpbml0TG9jYWxTdG9yYWdlTGlzdGVuZXIoKVxue1xuICAgIEV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoJ3dyaXRlIHN0b3JhZ2UnLCB3cml0ZVByb2plY3RzVG9TdG9yYWdlKTtcbn1cblxuZnVuY3Rpb24gbG9hZFByb2plY3RzKClcbntcbiAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIEV2ZW50QWdncmVnYXRvci5wdWJsaXNoKCdhZGQgcHJvamVjdCcsIHByb2plY3QpO1xuICAgIH0pO1xuXG4gICAgRXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2goJ3NlbGVjdCBwcm9qZWN0JywgMCk7XG59XG5cbmV4cG9ydCB7c3RvcmFnZUF2YWlsYWJsZSwgaW5pdExvY2FsU3RvcmFnZUxpc3RlbmVyLCBsb2FkUHJvamVjdHN9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9