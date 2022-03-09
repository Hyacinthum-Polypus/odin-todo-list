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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    padding: 0;\n    margin: 0;\n    background-color: white;\n    font-family: sans-serif;\n}\n\n#content {\n    min-height: 100vh;\n    min-width: 100vw;\n\n    display: grid;\n    grid-template-columns: min(300px, 30%) 1fr;\n}\n\nmain {\n    padding: 100px;\n}\n\n.project-heading {\n    width: 100%;\n    font-size: 5rem;\n    border: none;\n    border-bottom: 10px solid black;\n    font-weight: bold;\n}\n\n.project-description {\n    width: 100%;\n    resize: none;\n    border: none;\n    border-bottom: 2px solid black;\n}\n\n#todos-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(259px, 1fr));\n    column-gap: 20px;\n    flex-direction: column;\n    gap: 18px;\n    align-items: center;\n    margin-top: 18px;\n}\n\n#todo-container-buttons {\n    width: 100%;\n    background-color:lightgrey;\n    display: flex;\n    justify-content: flex-end;\n    padding: 8px;\n}\n\n#todo-container-buttons > button {\n    font-size: 30px;\n    padding: 5px 15px;\n}\n\n.todo {\n    display: grid;\n\n    height: 200px;\n\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 2fr 0.5fr 0.5fr;\n\n    border: 5px solid black;\n}\n\n.todo-checkbox-container {\n    grid-column: 1;\n    min-width: 50px;;\n    grid-row: span 4;\n    padding: 0 12px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    padding-top: 8px;\n}\n\n.priority-button {\n    border: none;\n    cursor: pointer;\n}\n\n.priority-low {\n    background-color: greenyellow\n}\n\n.priority-med {\n    background-color: orange;\n}\n\n.priority-high {\n    background-color: violet;\n}\n\n.todo-checkbox {\n    width: 50px;\n    height: 50px;\n    background-color: white;\n    border: 2px black solid;\n    cursor: pointer;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.todo-checkmark {\n    width: 50%;\n    height: 50%;\n    background-color: black;\n}\n\n.todo-name {\n    min-width: 0;\n    grid-column: 2;\n    grid-row: 1;\n    font-size: 1.5rem;\n    font-weight: bold;\n    background-color: black;\n    color: white;\n}\n\n.todo-description {\n    grid-column: 2;\n    grid-row: 2;\n    resize: none;\n}\n\n.todo-date {\n    text-align: center;\n}\n\n.late {\n    color: red;\n}\n\n.late * {\n    color: red;\n}\n\n.todo-buttons {\n    display: flex;\n    justify-content: center;\n    gap: 4px;\n}\n\n.todo-button {\n    border: none;\n}\n\n.sidebar {\n    background-color: whitesmoke;\n    padding: 20px;\n    overflow: hidden;\n}\n\nheader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 50px;\n}\n\nnav ul {\n    padding: 0;\n    display: grid;\n    grid-template-columns: 9fr 1fr;\n}\n\nnav ul button {\n    border: none;\n}\n\nnav li {\n    list-style: none;\n    padding: 12px 8px;\n    cursor: pointer;\n}\n\n.selected {\n    background-color: lightgray;\n}\n\n.toolbar {\n    background-color: lightgrey;\n    padding: 8px;\n    display: flex;\n    justify-content: flex-end;\n}\n\n.input-bar {\n    display: flex;\n    height: 30px;\n    width: 100%;\n}\n\n.input-bar > input {\n    border: none;\n    outline: none;\n}\n\n.add-project-input {\n    flex: 1 0 0;\n    background-color: white;\n    color: black;\n    margin: 5px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;;IAEhB,aAAa;IACb,0CAA0C;AAC9C;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,YAAY;IACZ,+BAA+B;IAC/B,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,4DAA4D;IAC5D,gBAAgB;IAChB,sBAAsB;IACtB,SAAS;IACT,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,0BAA0B;IAC1B,aAAa;IACb,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,aAAa;;IAEb,aAAa;;IAEb,8BAA8B;IAC9B,uCAAuC;;IAEvC,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI;AACJ;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,uBAAuB;IACvB,eAAe;;IAEf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,WAAW;IACX,iBAAiB;IACjB,iBAAiB;IACjB,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,QAAQ;AACZ;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,4BAA4B;IAC5B,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;IAC3B,YAAY;IACZ,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,YAAY;IACZ,WAAW;AACf","sourcesContent":["body {\n    padding: 0;\n    margin: 0;\n    background-color: white;\n    font-family: sans-serif;\n}\n\n#content {\n    min-height: 100vh;\n    min-width: 100vw;\n\n    display: grid;\n    grid-template-columns: min(300px, 30%) 1fr;\n}\n\nmain {\n    padding: 100px;\n}\n\n.project-heading {\n    width: 100%;\n    font-size: 5rem;\n    border: none;\n    border-bottom: 10px solid black;\n    font-weight: bold;\n}\n\n.project-description {\n    width: 100%;\n    resize: none;\n    border: none;\n    border-bottom: 2px solid black;\n}\n\n#todos-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(259px, 1fr));\n    column-gap: 20px;\n    flex-direction: column;\n    gap: 18px;\n    align-items: center;\n    margin-top: 18px;\n}\n\n#todo-container-buttons {\n    width: 100%;\n    background-color:lightgrey;\n    display: flex;\n    justify-content: flex-end;\n    padding: 8px;\n}\n\n#todo-container-buttons > button {\n    font-size: 30px;\n    padding: 5px 15px;\n}\n\n.todo {\n    display: grid;\n\n    height: 200px;\n\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 2fr 0.5fr 0.5fr;\n\n    border: 5px solid black;\n}\n\n.todo-checkbox-container {\n    grid-column: 1;\n    min-width: 50px;;\n    grid-row: span 4;\n    padding: 0 12px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    padding-top: 8px;\n}\n\n.priority-button {\n    border: none;\n    cursor: pointer;\n}\n\n.priority-low {\n    background-color: greenyellow\n}\n\n.priority-med {\n    background-color: orange;\n}\n\n.priority-high {\n    background-color: violet;\n}\n\n.todo-checkbox {\n    width: 50px;\n    height: 50px;\n    background-color: white;\n    border: 2px black solid;\n    cursor: pointer;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.todo-checkmark {\n    width: 50%;\n    height: 50%;\n    background-color: black;\n}\n\n.todo-name {\n    min-width: 0;\n    grid-column: 2;\n    grid-row: 1;\n    font-size: 1.5rem;\n    font-weight: bold;\n    background-color: black;\n    color: white;\n}\n\n.todo-description {\n    grid-column: 2;\n    grid-row: 2;\n    resize: none;\n}\n\n.todo-date {\n    text-align: center;\n}\n\n.late {\n    color: red;\n}\n\n.late * {\n    color: red;\n}\n\n.todo-buttons {\n    display: flex;\n    justify-content: center;\n    gap: 4px;\n}\n\n.todo-button {\n    border: none;\n}\n\n.sidebar {\n    background-color: whitesmoke;\n    padding: 20px;\n    overflow: hidden;\n}\n\nheader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 50px;\n}\n\nnav ul {\n    padding: 0;\n    display: grid;\n    grid-template-columns: 9fr 1fr;\n}\n\nnav ul button {\n    border: none;\n}\n\nnav li {\n    list-style: none;\n    padding: 12px 8px;\n    cursor: pointer;\n}\n\n.selected {\n    background-color: lightgray;\n}\n\n.toolbar {\n    background-color: lightgrey;\n    padding: 8px;\n    display: flex;\n    justify-content: flex-end;\n}\n\n.input-bar {\n    display: flex;\n    height: 30px;\n    width: 100%;\n}\n\n.input-bar > input {\n    border: none;\n    outline: none;\n}\n\n.add-project-input {\n    flex: 1 0 0;\n    background-color: white;\n    color: black;\n    margin: 5px;\n}"],"sourceRoot":""}]);
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
    console.log(projects);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLHNEQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7OztBQUdULFdBQVcsc0RBQWU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1QsUUFBUSxzREFBdUIsMkNBQTJDLGdCQUFnQjtBQUMxRjs7QUFFQSxJQUFJLHdEQUF5QjtBQUM3QjtBQUNBLG1FQUFtRSxHQUFHO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMLElBQUksd0RBQXlCO0FBQzdCLGtEQUFrRCxHQUFHO0FBQ3JELEtBQUs7O0FBRUwsWUFBWTtBQUNaLENBQUM7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQzdWZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixDQUFDOztBQUVELGlFQUFlLGVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ25EeUI7QUFDZDtBQUMrQztBQUNuRTs7QUFFckIsc0VBQTBCOztBQUUxQixHQUFHLDZEQUFnQjtBQUNuQjtBQUNBLElBQUkscUVBQXdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQVk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHlEQUF1QjtBQUMzQixJQUFJLHlEQUF1QjtBQUMzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QnNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx3REFBeUI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUF1QjtBQUMvQixLQUFLOztBQUVMLElBQUksc0RBQXVCO0FBQzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvZGF0ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9ldmVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbigzMDBweCwgMzAlKSAxZnI7XFxufVxcblxcbm1haW4ge1xcbiAgICBwYWRkaW5nOiAxMDBweDtcXG59XFxuXFxuLnByb2plY3QtaGVhZGluZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbiN0b2Rvcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNTlweCwgMWZyKSk7XFxuICAgIGNvbHVtbi1nYXA6IDIwcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMThweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMThweDtcXG59XFxuXFxuI3RvZG8tY29udGFpbmVyLWJ1dHRvbnMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZXk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuI3RvZG8tY29udGFpbmVyLWJ1dHRvbnMgPiBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIGhlaWdodDogMjAwcHg7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDAuNWZyIDAuNWZyO1xcblxcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRvZG8tY2hlY2tib3gtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIG1pbi13aWR0aDogNTBweDs7XFxuICAgIGdyaWQtcm93OiBzcGFuIDQ7XFxuICAgIHBhZGRpbmc6IDAgMTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xcbn1cXG5cXG4ucHJpb3JpdHktYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcmlvcml0eS1sb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvd1xcbn1cXG5cXG4ucHJpb3JpdHktbWVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZpb2xldDtcXG59XFxuXFxuLnRvZG8tY2hlY2tib3gge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLWNoZWNrbWFyayB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRvZG8tbmFtZSB7XFxuICAgIG1pbi13aWR0aDogMDtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi50b2RvLWRhdGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5sYXRlIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmxhdGUgKiB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi50b2RvLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi50b2RvLWJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxubmF2IHVsIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5ZnIgMWZyO1xcbn1cXG5cXG5uYXYgdWwgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5uYXYgbGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAxMnB4IDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi50b29sYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5pbnB1dC1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW5wdXQtYmFyID4gaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5hZGQtcHJvamVjdC1pbnB1dCB7XFxuICAgIGZsZXg6IDEgMCAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBtYXJnaW46IDVweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7O0lBRWhCLGFBQWE7SUFDYiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0lBQ1osK0JBQStCO0lBQy9CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0REFBNEQ7SUFDNUQsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7O0lBRWIsYUFBYTs7SUFFYiw4QkFBOEI7SUFDOUIsdUNBQXVDOztJQUV2Qyx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixlQUFlOztJQUVmLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4oMzAwcHgsIDMwJSkgMWZyO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgcGFkZGluZzogMTAwcHg7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRpbmcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jdG9kb3MtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjU5cHgsIDFmcikpO1xcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDE4cHg7XFxufVxcblxcbiN0b2RvLWNvbnRhaW5lci1idXR0b25zIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmV5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbiN0b2RvLWNvbnRhaW5lci1idXR0b25zID4gYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXG59XFxuXFxuLnRvZG8ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAwLjVmciAwLjVmcjtcXG5cXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxufVxcblxcbi50b2RvLWNoZWNrYm94LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBtaW4td2lkdGg6IDUwcHg7O1xcbiAgICBncmlkLXJvdzogc3BhbiA0O1xcbiAgICBwYWRkaW5nOiAwIDEycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDhweDtcXG59XFxuXFxuLnByaW9yaXR5LWJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJpb3JpdHktbG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3dcXG59XFxuXFxuLnByaW9yaXR5LW1lZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2aW9sZXQ7XFxufVxcblxcbi50b2RvLWNoZWNrYm94IHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kby1jaGVja21hcmsge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi50b2RvLW5hbWUge1xcbiAgICBtaW4td2lkdGg6IDA7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kby1kZXNjcmlwdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4udG9kby1kYXRlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubGF0ZSB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5sYXRlICoge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4udG9kby1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4udG9kby1idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbm5hdiB1bCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOWZyIDFmcjtcXG59XFxuXFxubmF2IHVsIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxubmF2IGxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMTJweCA4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4udG9vbGJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uaW5wdXQtYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmlucHV0LWJhciA+IGlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtaW5wdXQge1xcbiAgICBmbGV4OiAxIDAgMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgbWFyZ2luOiA1cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gaXNEYXRlSW5UaGVQYXN0KG90aGVyRGF0ZSlcbntcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBpZihkYXRlLmdldEZ1bGxZZWFyKCkgPiBvdGhlckRhdGUueWVhcilcbiAgICB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gXG4gICAgZWxzZSBpZihkYXRlLmdldEZ1bGxZZWFyKCkgPT0gb3RoZXJEYXRlLnllYXIpXG4gICAge1xuICAgICAgICBpZihkYXRlLmdldE1vbnRoKCkgPiBvdGhlckRhdGUubW9udGgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZGF0ZS5nZXRNb250aCgpID09IG90aGVyRGF0ZS5tb250aClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoZGF0ZS5nZXREYXRlKCkgPiBvdGhlckRhdGUuZGF5KSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7aXNEYXRlSW5UaGVQYXN0fTsiLCJpbXBvcnQgRXZlbnRBZ2dyZWdhdG9yIGZyb20gXCIuL2V2ZW50XCI7XG5pbXBvcnQgeyBpc0RhdGVJblRoZVBhc3QgfSBmcm9tIFwiLi9kYXRlXCI7XG5cbmNvbnN0ICBEaXNwbGF5ZXJDb250cm9sbGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBpbml0SFRNTCA9ICgpID0+XG4gICAge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXJcIj5cbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJMb2dvXCI+XG4gICAgICAgICAgICAgICAgPGgxPlRvZG8gTGlzdDwvaDE+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhZGQtcHJvamVjdC1idXR0b25cIj4rPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1iYXJcIj48L2Rpdj5cbiAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgPGgzPlByb2plY3RzPC9oMz5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJQcm9qZWN0IHRpdGxlIGhlcmUuLi5cIiB0eXBlPVwidHlwZVwiIGNsYXNzPVwicHJvamVjdC1oZWFkaW5nXCI+XG4gICAgICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJQcm9qZWN0IGRlc2NyaXB0aW9uIGhlcmUuLi5cIiBjbGFzcz1cInByb2plY3QtZGVzY3JpcHRpb25cIiByb3dzPVwiMTBcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPGRpdiBpZD1cInRvZG8tY29udGFpbmVyLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwibmV3LXRvZG9cIj4rPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ0b2Rvcy1jb250YWluZXJcIj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5gO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUFkZFByb2plY3RJbnB1dCk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdEhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1oZWFkaW5nJyk7XG4gICAgICAgIHByb2plY3RIZWFkaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgRXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2goJ3VwZGF0ZSBwcm9qZWN0JywgZ2V0U2VsZWN0ZWRQcm9qZWN0SWQoKSwge25hbWU6IHByb2plY3RIZWFkaW5nLnZhbHVlfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKS50ZXh0Q29udGVudCA9IHByb2plY3RIZWFkaW5nLnZhbHVlID09ICcnID8gJ1VudGl0bGVkIFByb2plY3QnIDogcHJvamVjdEhlYWRpbmcudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIHByb2plY3REZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICAoKSA9PiBFdmVudEFnZ3JlZ2F0b3IucHVibGlzaCgndXBkYXRlIHByb2plY3QnLCBnZXRTZWxlY3RlZFByb2plY3RJZCgpLCB7ZGVzY3JpcHRpb246IHByb2plY3REZXNjcmlwdGlvbi52YWx1ZX0pKTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRvZG8nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNyZWF0ZVRvZG8oKSlcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTZWxlY3RlZFByb2plY3RJZCA9ICgpID0+XG4gICAge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkUHJvamVjdFRvTmF2ID0gKHByb2plY3QsIGlkKSA9PlxuICAgIHtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gICAgICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKTtcbiAgICAgICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7RXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2goJ3NlbGVjdCBwcm9qZWN0JywgaWQpO30pO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxpc3RJdGVtLnJlbW92ZSgpO1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdC5yZW1vdmUoKTtcbiAgICAgICAgICAgIEV2ZW50QWdncmVnYXRvci5wdWJsaXNoKCdkZWxldGUgcHJvamVjdCcsIGlkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRlbGV0ZVByb2plY3QudGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwnKS5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJykuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdCk7XG5cbiAgICB9XG4gICAgRXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZSgncHJvamVjdCBjcmVhdGVkJywgKHByb2plY3ROYW1lLCBpZCkgPT4gYWRkUHJvamVjdFRvTmF2KHByb2plY3ROYW1lLCBpZCkpO1xuXG4gICAgY29uc3QgdG9nZ2xlQWRkUHJvamVjdElucHV0ID0gKCkgPT5cbiAgICB7XG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1pbnB1dCcpKVxuICAgICAgICB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtaW5wdXQnKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1pbnB1dCcpXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtYmFyJykuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtpZihlLmtleSA9PSAnRW50ZXInKSB7RXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2goJ2NyZWF0ZSBwcm9qZWN0JywgaW5wdXQudmFsdWUpOyB0b2dnbGVBZGRQcm9qZWN0SW5wdXQoKX07fSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVUb2RvUHJpb3JpdHkgPSAocHJpb3JpdHlDb250YWluZXIsIHVwZGF0ZSkgPT5cbiAgICB7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gcHJpb3JpdHlDb250YWluZXIuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQ7XG5cbiAgICAgICAgaWYodXBkYXRlID09ICdpbmNyZWFzZScpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN3aXRjaChwcmlvcml0eSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYXNlICdsb3cgcHJpb3JpdHknOlxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUNvbnRhaW5lci5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9ICdtZWRpdW0gcHJpb3JpdHknO1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdwcmlvcml0eS1sb3cnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdtZWRpdW0gcHJpb3JpdHknOlxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUNvbnRhaW5lci5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9ICdoaWdoIHByaW9yaXR5JztcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgncHJpb3JpdHktbWVkJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih1cGRhdGUgPT0gJ2RlY3JlYXNlJylcbiAgICAgICAge1xuICAgICAgICAgICAgc3dpdGNoKHByaW9yaXR5KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhc2UgJ21lZGl1bSBwcmlvcml0eSc6XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5Q29udGFpbmVyLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gJ2xvdyBwcmlvcml0eSc7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3ByaW9yaXR5LW1lZCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hpZ2ggcHJpb3JpdHknOlxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUNvbnRhaW5lci5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9ICdtZWRpdW0gcHJpb3JpdHknO1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdwcmlvcml0eS1oaWdoJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHByaW9yaXR5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY29udmVydFByaW9yaXR5VG9DbGFzcyhwcmlvcml0eUNvbnRhaW5lci5jaGlsZHJlblswXS50ZXh0Q29udGVudCkpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnZlcnRQcmlvcml0eVRvQ2xhc3MgPSBwcmlvcml0eSA9PlxuICAgIHtcbiAgICAgICAgc3dpdGNoKHByaW9yaXR5KVxuICAgICAgICB7XG4gICAgICAgICAgICBjYXNlICdsb3cgcHJpb3JpdHknOlxuICAgICAgICAgICAgICAgIHJldHVybiAncHJpb3JpdHktbG93JztcbiAgICAgICAgICAgIGNhc2UgJ21lZGl1bSBwcmlvcml0eSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdwcmlvcml0eS1tZWQnO1xuICAgICAgICAgICAgY2FzZSAnaGlnaCBwcmlvcml0eSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdwcmlvcml0eS1oaWdoJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVRvZG9DaGVja2JveENvbnRhaW5lciA9ICh0b2RvLCBjb21wbGV0ZSwgcHJpb3JpdHkpID0+XG4gICAge1xuICAgICAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWNoZWNrYm94LWNvbnRhaW5lcicpO1xuICAgICAgICBjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNvbnZlcnRQcmlvcml0eVRvQ2xhc3MocHJpb3JpdHkpKTtcbiAgICAgICAgdG9kby5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJpb3JpdHlTdGF0dXMuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktc3RhdHVzJyk7XG4gICAgICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5U3RhdHVzKTtcbiAgICAgICAgcHJpb3JpdHlTdGF0dXMudGV4dENvbnRlbnQgPSBwcmlvcml0eTtcblxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCd0b2RvLWNoZWNrYm94Jyk7XG4gICAgICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAgICAgICBjb25zdCBjaGVja21hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2hlY2ttYXJrLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY2hlY2ttYXJrJyk7XG4gICAgICAgIGlmKGNvbXBsZXRlID09IGZhbHNlKSBjaGVja21hcmsudG9nZ2xlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgY2hlY2tib3guYXBwZW5kQ2hpbGQoY2hlY2ttYXJrKTtcblxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNoZWNrbWFyay50b2dnbGVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgcmVjb3JkVG9kb3MoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5QnV0dG9ucyk7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlEZWNyZWFzZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBwcmlvcml0eURlY3JlYXNlQnV0dG9uLnRleHRDb250ZW50ID0gJzwnO1xuICAgICAgICBwcmlvcml0eURlY3JlYXNlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWJ1dHRvbicpO1xuICAgICAgICBwcmlvcml0eUJ1dHRvbnMuYXBwZW5kQ2hpbGQocHJpb3JpdHlEZWNyZWFzZUJ1dHRvbik7XG4gICAgICAgIHByaW9yaXR5RGVjcmVhc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB1cGRhdGVUb2RvUHJpb3JpdHkoY2hlY2tib3hDb250YWluZXIsICdkZWNyZWFzZScpO1xuICAgICAgICAgICAgcmVjb3JkVG9kb3MoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlJbmNyZWFzZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBwcmlvcml0eUluY3JlYXNlQnV0dG9uLnRleHRDb250ZW50ID0gJz4nO1xuICAgICAgICBwcmlvcml0eUluY3JlYXNlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWJ1dHRvbicpO1xuICAgICAgICBwcmlvcml0eUJ1dHRvbnMuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbmNyZWFzZUJ1dHRvbik7XG4gICAgICAgIHByaW9yaXR5SW5jcmVhc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB1cGRhdGVUb2RvUHJpb3JpdHkoY2hlY2tib3hDb250YWluZXIsICdpbmNyZWFzZScpO1xuICAgICAgICAgICAgcmVjb3JkVG9kb3MoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlVG9kb05hbWUgPSAodG9kbywgbmFtZSkgPT5cbiAgICB7XG4gICAgICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdG9kb05hbWUuY2xhc3NMaXN0LmFkZCgndG9kby1uYW1lJyk7XG4gICAgICAgIHRvZG9OYW1lLnZhbHVlID0gbmFtZTtcbiAgICAgICAgdG9kb05hbWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCByZWNvcmRUb2Rvcyk7XG4gICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb05hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVRvZG9EZXNjcmlwdGlvbiA9ICh0b2RvLCBkZXNjcmlwdGlvbikgPT5cbiAgICB7XG4gICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbi52YWx1ZSA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0b2RvRGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCByZWNvcmRUb2Rvcyk7XG4gICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb0Rlc2NyaXB0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUb2RvRHVlRGF0ZSA9ICh0b2RvLCBkdWVEYXRlKSA9PlxuICAgIHtcbiAgICAgICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0RhdGUuY2xhc3NMaXN0LmFkZCgndG9kby1kYXRlJyk7XG4gICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb0RhdGUpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdG9kb0J1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0J1dHRvbnMuY2xhc3NMaXN0LmFkZCgndG9kby1idXR0b25zJyk7XG4gICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb0J1dHRvbnMpO1xuXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBcbiAgICAgICAgaWYoZHVlRGF0ZSA9PSBudWxsKSBcbiAgICAgICAge1xuICAgICAgICAgICAgZHVlRGF0ZSA9IHt9O1xuICAgICAgICAgICAgZHVlRGF0ZS5kYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgICAgIGR1ZURhdGUubW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICAgICAgICBkdWVEYXRlLnllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkYXkuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xuICAgICAgICBkYXkuc2V0QXR0cmlidXRlKCdtaW4nLCAxKTtcbiAgICAgICAgZGF5LnNldEF0dHJpYnV0ZSgnbWF4JywgMzEpO1xuICAgICAgICBkYXkuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGR1ZURhdGUuZGF5KTtcblxuICAgICAgICBjb25zdCBtb250aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIG1vbnRoLnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcbiAgICAgICAgbW9udGguc2V0QXR0cmlidXRlKCdtaW4nLCAxKTtcbiAgICAgICAgbW9udGguc2V0QXR0cmlidXRlKCdtYXgnLCAxMik7XG4gICAgICAgIG1vbnRoLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkdWVEYXRlLm1vbnRoKTtcblxuICAgICAgICBjb25zdCB5ZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgeWVhci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XG4gICAgICAgIHllYXIuc2V0QXR0cmlidXRlKCdtaW4nLCAxOTg1KTtcbiAgICAgICAgeWVhci5zZXRBdHRyaWJ1dGUoJ21heCcsIDk5OTkpO1xuICAgICAgICB5ZWFyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkdWVEYXRlLnllYXIpO1xuXG4gICAgICAgIHRvZG9EYXRlLmlubmVySFRNTCA9ICdEdWUgZGF0ZTogJyArIGRheS5vdXRlckhUTUwgKyAnLScgKyBtb250aC5vdXRlckhUTUwgKyAnLScgKyB5ZWFyLm91dGVySFRNTDtcblxuICAgICAgICBBcnJheS5mcm9tKHRvZG9EYXRlLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgcmVjb3JkVG9kb3MoKTtcbiAgICAgICAgICAgIGlmKGlzRGF0ZUluVGhlUGFzdCh7XG4gICAgICAgICAgICAgICAgZGF5OiB0b2RvRGF0ZS5jaGlsZHJlblswXS52YWx1ZSxcbiAgICAgICAgICAgICAgICBtb250aDogdG9kb0RhdGUuY2hpbGRyZW5bMV0udmFsdWUsXG4gICAgICAgICAgICAgICAgeWVhcjogdG9kb0RhdGUuY2hpbGRyZW5bMl0udmFsdWVcbiAgICAgICAgICAgIH0pKSB0b2RvRGF0ZS5jbGFzc0xpc3QuYWRkKCdsYXRlJyk7XG4gICAgICAgICAgICBlbHNlIHRvZG9EYXRlLmNsYXNzTGlzdC5yZW1vdmUoJ2xhdGUnKTtcbiAgICAgICAgfSkpO1xuXG5cbiAgICAgICAgaWYoaXNEYXRlSW5UaGVQYXN0KGR1ZURhdGUpKSB0b2RvRGF0ZS5jbGFzc0xpc3QuYWRkKCdsYXRlJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZW1vdmVUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHJlbW92ZVRvZG9CdXR0b24uY2xhc3NMaXN0LmFkZCgndG9kby1idXR0b24nKTtcbiAgICAgICAgcmVtb3ZlVG9kb0J1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgICAgICB0b2RvQnV0dG9ucy5hcHBlbmRDaGlsZChyZW1vdmVUb2RvQnV0dG9uKTtcbiAgICAgICAgcmVtb3ZlVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRvZG8ucmVtb3ZlKCk7XG4gICAgICAgICAgICByZWNvcmRUb2RvcygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUb2RvID0gKG5hbWUgPSBcIlwiLCBkZXNjcmlwdGlvbiA9IFwiXCIsIGNvbXBsZXRlID0gZmFsc2UsIGR1ZURhdGUgPSBudWxsLCBwcmlvcml0eSA9ICdsb3cgcHJpb3JpdHknKSA9PlxuICAgIHtcbiAgICAgICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcblxuICAgICAgICBjcmVhdGVUb2RvQ2hlY2tib3hDb250YWluZXIodG9kbywgY29tcGxldGUsIHByaW9yaXR5KTtcblxuICAgICAgICBjcmVhdGVUb2RvTmFtZSh0b2RvLCBuYW1lKTtcblxuICAgICAgICBjcmVhdGVUb2RvRGVzY3JpcHRpb24odG9kbywgZGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGNyZWF0ZVRvZG9EdWVEYXRlKHRvZG8sIGR1ZURhdGUpO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2Rvcy1jb250YWluZXInKS5hcHBlbmRDaGlsZCh0b2RvKTtcblxuICAgICAgICByZWNvcmRUb2RvcygpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlY29yZFRvZG9zID0gKCkgPT5cbiAgICB7XG4gICAgICAgIGNvbnN0IHRvZG9zRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kbycpO1xuICAgICAgICBjb25zdCBuZXdUb2RvcyA9IEFycmF5LmZyb20odG9kb3NFbGVtZW50cykubWFwKHRvZG8gPT4ge1xuICAgICAgICAgICAgbGV0IG5ld1RvZG8gPSB7fTtcbiAgICAgICAgICAgIEFycmF5LmZyb20odG9kby5jaGlsZHJlbikuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoKHRydWUpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygndG9kby1uYW1lJyk6XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdUb2RvLm5hbWUgPSBjaGlsZC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2RvLWRlc2NyaXB0aW9uJyk6XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdUb2RvLmRlc2NyaXB0aW9uID0gY2hpbGQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygndG9kby1jaGVja2JveC1jb250YWluZXInKTpcbiAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20oY2hpbGQuY2hpbGRyZW4pLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCh0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tY2hlY2tib3gnKTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RvZG8uY29tcGxldGUgPSBjaGlsZC5jaGlsZHJlblswXS5nZXRBdHRyaWJ1dGUoJ2hpZGRlbicpID09IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygncHJpb3JpdHktc3RhdHVzJyk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUb2RvLnByaW9yaXR5ID0gY2hpbGQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygndG9kby1kYXRlJyk6XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdUb2RvLmR1ZURhdGUgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RvZG8uZHVlRGF0ZS5kYXkgPSBjaGlsZC5jaGlsZHJlblswXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RvZG8uZHVlRGF0ZS5tb250aCA9IGNoaWxkLmNoaWxkcmVuWzFdLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VG9kby5kdWVEYXRlLnllYXIgPSBjaGlsZC5jaGlsZHJlblsyXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3VG9kbztcbiAgICAgICAgfSk7XG4gICAgICAgIEV2ZW50QWdncmVnYXRvci5wdWJsaXNoKCd1cGRhdGUgcHJvamVjdCcsIGdldFNlbGVjdGVkUHJvamVjdElkKCkse3RvZG9zOiBuZXdUb2Rvc30pO1xuICAgIH1cblxuICAgIEV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoJ3ZpZXcgcHJvamVjdCcsIChpZCwgbmFtZSwgZGVzY3JpcHRpb24sIHRvZG9zKSA9PiB7XG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpICE9IG51bGwpIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbmF2IGxpW2RhdGEtaWQ9XCIke2lkfVwiXWApXG4gICAgICAgIHNlbGVjdGVkLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RIZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaGVhZGluZycpO1xuICAgICAgICBwcm9qZWN0SGVhZGluZy52YWx1ZSA9IG5hbWU7XG4gICAgICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIHByb2plY3REZXNjcmlwdGlvbi52YWx1ZSA9IGRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvJykuZm9yRWFjaCh0b2RvID0+IHRvZG8ucmVtb3ZlKCkpO1xuXG4gICAgICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgICAgICBjcmVhdGVUb2RvKHRvZG8ubmFtZSwgdG9kby5kZXNjcmlwdGlvbiwgdG9kby5jb21wbGV0ZSwgdG9kby5kdWVEYXRlLCB0b2RvLnByaW9yaXR5KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBFdmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKCd1cGRhdGUgbmF2JywgKGlkLCBuYW1lKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYG5hdiBsaVtkYXRhLWlkPVwiJHtpZH1cIl1gKS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge2luaXRIVE1MfVxufSkoKVxuXG5cbmV4cG9ydCBkZWZhdWx0IERpc3BsYXllckNvbnRyb2xsZXIiLCJjb25zdCBFdmVudCA9IG5hbWUgPT4gXG57XG4gICAgY29uc3QgX2hhbmRsZXJzID0gW11cblxuICAgIGNvbnN0IHByb3RvID0ge1xuICAgICAgICBmaXJlOiAoLi4ubXNnKSA9PiBfaGFuZGxlcnMuZm9yRWFjaChmID0+IGYoLi4ubXNnKSksXG4gICAgICAgIGFkZEhhbmRsZXI6IGhhbmRsZXIgPT4gX2hhbmRsZXJzLnB1c2goaGFuZGxlciksXG4gICAgICAgIGdldE5hbWU6ICgpID0+IHtyZXR1cm4gbmFtZTt9XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5jcmVhdGUocHJvdG8pXG59XG5cbmNvbnN0IEV2ZW50QWdncmVnYXRvciA9ICgoKSA9PiBcbntcbiAgICBjb25zdCBfZXZlbnRzID0gW107XG5cbiAgICBjb25zdCBfY2hlY2tGb3JFdmVudCA9IG5hbWUgPT5cbiAgICB7XG4gICAgICAgIHJldHVybiBfZXZlbnRzLmZpbmRJbmRleChldmVudCA9PiBuYW1lID09IGV2ZW50LmdldE5hbWUoKSk7XG4gICAgfVxuXG4gICAgY29uc3QgcHVibGlzaCA9IChuYW1lLCAuLi5tc2cpID0+IFxuICAgIHtcbiAgICAgICAgbGV0IGV2ZW50SW5kZXggPSBfY2hlY2tGb3JFdmVudChuYW1lKTtcbiAgICAgICAgaWYoZXZlbnRJbmRleCA9PSAtMSlcbiAgICAgICAge1xuICAgICAgICAgICAgX2V2ZW50cy5wdXNoKEV2ZW50KG5hbWUpKVxuICAgICAgICAgICAgZXZlbnRJbmRleCA9IF9ldmVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKF9ldmVudHNbZXZlbnRJbmRleF0uZ2V0TmFtZSgpKTtcbiAgICAgICAgX2V2ZW50c1tldmVudEluZGV4XS5maXJlKC4uLm1zZyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3Vic2NyaWJlID0gKG5hbWUsIGhhbmRsZXIpID0+XG4gICAge1xuICAgICAgICBsZXQgZXZlbnRJbmRleCA9IF9jaGVja0ZvckV2ZW50KG5hbWUpO1xuICAgICAgICBpZihldmVudEluZGV4ID09IC0xKVxuICAgICAgICB7XG4gICAgICAgICAgICBfZXZlbnRzLnB1c2goRXZlbnQobmFtZSkpO1xuICAgICAgICAgICAgZXZlbnRJbmRleCA9IF9ldmVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKF9ldmVudHNbZXZlbnRJbmRleF0uZ2V0TmFtZSgpKTtcbiAgICAgICAgX2V2ZW50c1tldmVudEluZGV4XS5hZGRIYW5kbGVyKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB7cHVibGlzaCwgc3Vic2NyaWJlfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEFnZ3JlZ2F0b3I7IiwiaW1wb3J0IERpc3BsYXlDb250cm9sbGVyIGZyb20gJy4vZGlzcGxheUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0IEV2ZW50QWdncmVnYXRvciBmcm9tICcuL2V2ZW50LmpzJztcbmltcG9ydCB7IHN0b3JhZ2VBdmFpbGFibGUsIGluaXRMb2NhbFN0b3JhZ2VMaXN0ZW5lciwgbG9hZFByb2plY3RzIH0gZnJvbSAnLi9zdG9yYWdlLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5EaXNwbGF5Q29udHJvbGxlci5pbml0SFRNTCgpO1xuXG5pZihzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSlcbntcbiAgICBpbml0TG9jYWxTdG9yYWdlTGlzdGVuZXIoKTtcbiAgICBpZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpXG4gICAge1xuICAgICAgICBkZWZhdWx0SW5pdCgpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBsb2FkUHJvamVjdHMoKTtcbiAgICB9XG59XG5lbHNlXG57XG4gICAgaW5pdCgpO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0SW5pdCgpXG57XG4gICAgRXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2goJ2NyZWF0ZSBwcm9qZWN0JywgJ0RlZmF1bHQnKTtcbiAgICBFdmVudEFnZ3JlZ2F0b3IucHVibGlzaCgnc2VsZWN0IHByb2plY3QnLCAwKTtcbn0iLCJpbXBvcnQgRXZlbnRBZ2dyZWdhdG9yIGZyb20gXCIuL2V2ZW50XCI7XG5cbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIHZhciBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgIHZhciB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB3cml0ZVByb2plY3RzVG9TdG9yYWdlKHByb2plY3RzKVxue1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG5mdW5jdGlvbiBpbml0TG9jYWxTdG9yYWdlTGlzdGVuZXIoKVxue1xuICAgIEV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoJ3dyaXRlIHN0b3JhZ2UnLCB3cml0ZVByb2plY3RzVG9TdG9yYWdlKTtcbn1cblxuZnVuY3Rpb24gbG9hZFByb2plY3RzKClcbntcbiAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIEV2ZW50QWdncmVnYXRvci5wdWJsaXNoKCdhZGQgcHJvamVjdCcsIHByb2plY3QpO1xuICAgIH0pO1xuXG4gICAgRXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2goJ3NlbGVjdCBwcm9qZWN0JywgMCk7XG59XG5cbmV4cG9ydCB7c3RvcmFnZUF2YWlsYWJsZSwgaW5pdExvY2FsU3RvcmFnZUxpc3RlbmVyLCBsb2FkUHJvamVjdHN9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9