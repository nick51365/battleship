/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body{\\n    background-color: rgba(1, 1, 1, 0.842);\\n}\\n\\n#gameWrapper{\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-around;\\n    flex-flow: row wrap;\\n    margin: auto;\\n    margin-top: 100px;\\n    border: 1px solid red;\\n    height: 80vh;\\n    width: 90vw;\\n}\\n.boardWrapper{\\n    border: 1px solid blue;\\n    height: 40vw;\\n    width: 40vw;\\n    min-height: 30vh;\\n    min-width: 30vh;\\n    max-height: 50vh;\\n    max-width: 50vh;\\n    \\n}\\n.gameBoard{\\n    display: absolute;\\n    margin: 0;\\n    height: 100%;\\n    width: 100%;\\n}\\ntd{\\n    border: 1px solid green;\\n}\\n\\n#compBoard td{\\n    cursor: pointer;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://bs2/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://bs2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://bs2/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://bs2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://bs2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://bs2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://bs2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://bs2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://bs2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderPage\": () => (/* binding */ renderPage)\n/* harmony export */ });\n/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLoop */ \"./src/gameLoop.js\");\n\n\n\nlet renderPage = () => {\n\n\n    //Create flexbox for entire game display\n    let gameWrapper = document.createElement(\"div\");\n    gameWrapper.id = \"gameWrapper\";\n    document.body.append(gameWrapper);\n\n    //Create player's board\n    let playerWrapper = document.createElement(\"div\");\n    playerWrapper.className = \"boardWrapper\";\n    gameWrapper.append(playerWrapper);\n    let playerBoard = document.createElement(\"table\");\n    playerBoard.id = \"playerBoard\";\n    playerBoard.className = \"gameBoard\";\n    playerWrapper.append(playerBoard);\n\n    //Create 10 x 10 grid on player's board\n    for(let i = 0; i < 10; i++){\n        let row = document.createElement(\"tr\");\n        playerBoard.append(row);\n        for(let j = 0; j < 10; j++){\n\n            //Generate two-digit ID number for cell\n            let ID = ((i * 10) + j).toString();\n            if (ID.length === 1){\n                ID = \"0\" + ID;\n            }\n\n            let cell = document.createElement(\"td\");\n            cell.id = \"player\" + ID;\n            row.append(cell);\n        }\n    }\n\n    //Create computer player's board\n    let compWrapper = document.createElement(\"div\");\n    compWrapper.className = \"boardWrapper\";\n    gameWrapper.append(compWrapper);\n    let compBoard = document.createElement(\"table\");\n    compBoard.id = \"compBoard\";\n    compBoard.className = \"gameBoard\";\n    compWrapper.append(compBoard);\n\n    //Create 10 X 10 grid on computer's board\n    for(let i = 0; i < 10; i++){\n        let row = document.createElement(\"tr\");\n        compBoard.append(row);\n        for(let j = 0; j < 10; j++){\n\n            //Generate two-digit ID number for cell\n            let ID = ((i * 10) + j).toString();\n            if (ID.length === 1){\n                ID = \"0\" + ID;\n            }\n\n            let cell = document.createElement(\"td\");\n            cell.id = \"comp\" + ID;\n            row.append(cell);\n\n\n            //When cell is clicked, attack corresponding space on board.spaces\n            cell.addEventListener(\"click\", () => {\n                let gameBoard = _gameLoop__WEBPACK_IMPORTED_MODULE_0__.mainLoop.array[1].board;           \n                let attack = gameBoard.receiveAttack(ID[0],ID[1]);\n                    if(attack == \"hit\"){\n                        cell.style.backgroundColor = \"red\";\n                    }\n\n                console.log(ID[0],ID[1]);\n                console.log(gameBoard);\n            });        \n        }\n    }\n};\n\n\n\n//# sourceURL=webpack://bs2/./src/displayController.js?");

/***/ }),

/***/ "./src/gameLoop.js":
/*!*************************!*\
  !*** ./src/gameLoop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mainLoop\": () => (/* binding */ mainLoop)\n/* harmony export */ });\n/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController */ \"./src/displayController.js\");\n/* harmony import */ var _playerFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerFactory */ \"./src/playerFactory.js\");\n/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipFactory */ \"./src/shipFactory.js\");\n\n\n\n\n\n//Object containing players array and function to add players\nlet playerListFactory = () => {\n    let array = [];\n\n    let addPlayers = (player1,player2) => {\n        array.push(player1,player2);\n    }\n\n    return {array, addPlayers};\n};\n\n//Add ships to both game boards\nlet addShips = (players) => {\n    players.array[1].board.placeShip((0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.shipFactory)(2), \"horizontal\",0,0);\n    players.array[1].board.placeShip((0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.shipFactory)(2), \"horizontal\",1,0);\n    players.array[1].board.placeShip((0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.shipFactory)(2), \"horizontal\",2,0);\n    players.array[1].board.placeShip((0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.shipFactory)(2), \"horizontal\",3,0);\n    players.array[1].board.placeShip((0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.shipFactory)(2), \"horizontal\",4,0);\n    players.array[1].board.placeShip((0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.shipFactory)(2), \"horizontal\",5,0);\n\n    players.array[0].board.placeShip((0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.shipFactory)(2), \"horizontal\",0,0);\n    players.array[0].board.placeShip((0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.shipFactory)(2), \"horizontal\",1,0);\n    players.array[0].board.placeShip((0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.shipFactory)(2), \"horizontal\",2,0);\n    players.array[0].board.placeShip((0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.shipFactory)(2), \"horizontal\",3,0);\n    players.array[0].board.placeShip((0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.shipFactory)(2), \"horizontal\",4,0);\n    players.array[0].board.placeShip((0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.shipFactory)(2), \"horizontal\",5,0);\n};\n\n//Main game loop, immediately invoked\nlet mainLoop = (() => {\n\n    //Initialize new game\n    let players = playerListFactory();\n    players.addPlayers((0,_playerFactory__WEBPACK_IMPORTED_MODULE_1__.playerFactory)(1), (0,_playerFactory__WEBPACK_IMPORTED_MODULE_1__.playerFactory)(2));\n\n    (0,_displayController__WEBPACK_IMPORTED_MODULE_0__.renderPage)();\n\n    addShips(players);\n    \n    //Player who makes the next move\n    let whosTurn = players.array[0];\n\n\n\n\n    return players;\n})();\n\n \n\n//# sourceURL=webpack://bs2/./src/gameLoop.js?");

/***/ }),

/***/ "./src/gameboardFactory.js":
/*!*********************************!*\
  !*** ./src/gameboardFactory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameboardFactory\": () => (/* binding */ gameboardFactory)\n/* harmony export */ });\nlet gameboardFactory = () => {\n\n    //10x10 grid of booleans to represent board spaces\n    //true = space occupied by a ship, false = space not occupied\n    let spaces = [];\n    for (let i = 0; i < 10; i++){\n        let row = [];\n        spaces.push(row);\n        for(let j = 0; j < 10; j++){\n            row.push(false);\n        }\n    };\n\n    //Array of all ships currently on the board\n    let currentShips = [];\n\n    //false = ships remain on board, true = all ships are sunk\n    let allSunk = {status: false};\n\n    //Coordinates of all spaces that have been attacked\n    let takenShots = [];\n\n    //Place a ship on the board\n    let placeShip = (ship, orientation, row, column) => {\n        if(orientation === \"horizontal\"){\n            for(let i = 0; i < ship.length; i++){\n                spaces[row][column + i] = true;\n                ship.shipSpaces.push([row,column + i]);\n            }\n            currentShips.push(ship);\n        }else if(orientation === \"vertical\"){\n            for(let i = 0; i < ship.length; i++){\n                spaces[row + i][column] = true;\n                ship.shipSpaces.push([row + i,column]);\n            }\n            currentShips.push(ship);\n        };\n    };\n\n    //Take a pair of coordinates and attack that board space\n    let receiveAttack = (row, column) => {\n\n        //If attack hits a ship\n        if(spaces[row][column] === true){\n            \n            //Iterate through currentShips to find ship containing attacked coordinates\n            //Mark that space in ship.hits as true\n            for(let i = 0;i < currentShips.length; i++){\n                for(let j = 0; j < currentShips[i].shipSpaces.length; j++){\n                    //If shipSpaces(j) matches attacked coordinates\n                    if(currentShips[i].shipSpaces[j][0] == row &&\n                        currentShips[i].shipSpaces[j][1] == column){\n                            currentShips[i].hit(j);\n                            spaces[row][column] = false;\n                    }                    \n                }\n                //If ship is sunk, remove from currentShips\n                if(currentShips[i].isSunk() === true){\n                    currentShips.splice(i,1);\n\n                    //If no ships remain, change allSunk.status to true\n                    if(currentShips.length === 0){\n                        allSunk.status = true;\n                    }\n                }                \n            };\n            //Push attacked coordinates to takenShots array\n            takenShots.push([row, column]);\n            return \"hit\";\n\n        //If attack does not hit a ship    \n        }else if(spaces[row][column] === false){\n\n            //Push attacked coordinates to takenShots array\n            takenShots.push([row, column]);\n            return \"miss\";\n        }\n    };\n\n    return{spaces,takenShots,currentShips,allSunk,placeShip,receiveAttack};\n};\n\n\n\n//# sourceURL=webpack://bs2/./src/gameboardFactory.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboardFactory */ \"./src/gameboardFactory.js\");\n/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameLoop */ \"./src/gameLoop.js\");\n/* harmony import */ var _playerFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playerFactory */ \"./src/playerFactory.js\");\n/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shipFactory */ \"./src/shipFactory.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://bs2/./src/index.js?");

/***/ }),

/***/ "./src/playerFactory.js":
/*!******************************!*\
  !*** ./src/playerFactory.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"playerFactory\": () => (/* binding */ playerFactory)\n/* harmony export */ });\n/* harmony import */ var _gameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboardFactory */ \"./src/gameboardFactory.js\");\n\n\n\nlet playerFactory = (id) => {\n\n    //game board belonging to this player\n    let board = (0,_gameboardFactory__WEBPACK_IMPORTED_MODULE_0__.gameboardFactory)();\n\n    //send an attack to enemy's board\n    let sendAttack = (players, row, column) => {\n        //Find enemy player in playerList and attack\n        for(let i = 0; i < players.array.length; i++){\n            if (players.array[i].id != id){\n                players.array[i].board.receiveAttack(row, column);\n            }\n        }\n    };\n\n    //send a computer attack\n    let compAttack = (players) => {\n\n        //Generate random coordinates\n        let row = Math.floor(Math.random() * 10);\n        let column = Math.floor(Math.random() * 10);\n        let coords = [row, column];\n   \n        //Iterate through player list\n        for(let i = 0; i < players.array.length; i++){\n\n            //When enemy is found\n            if (players.array[i].id != id){  \n\n                //Iterate through enemy's takenShots array\n                for(let j = 0; j < players.array[i].board.takenShots.length; j++){\n\n                    //If space has already been attacked, pick new coords\n                    if (arraysMatch(players.array[i].board.takenShots[j], coords)){\n                            compAttack(players);\n                        }\n                    }\n                    players.array[i].board.receiveAttack(row, column);  \n                    return [row, column];  \n            }      \n        };\n    };\n\n    //Returns true if arrays match or false if not\n    var arraysMatch = function (arr1, arr2) {\n\n        for (let i = 0; i < arr1.length; i++) {\n            if (arr1[i] !== arr2[i]) return false;\n        }\n    \n        return true;\n    };\n\n    return{id,board,sendAttack,compAttack};\n};\n\n\n\n//# sourceURL=webpack://bs2/./src/playerFactory.js?");

/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shipFactory\": () => (/* binding */ shipFactory)\n/* harmony export */ });\nlet shipFactory = (length) => {\n    \n    //\"hits\" array contains one boolean value for each ship space.\n    //false = not hit, true = hit\n    let hits = [];\n    let buildHitsArray = (() => {\n        for(let i = 0; i < length; i++){\n            hits.push(false);\n        }\n    })();\n\n    //Contains all coordinates ship is occupying\n    let shipSpaces = [];\n    \n    //Takes a position and marks it as hit\n    let hit = (pos) => {\n        hits[pos] = true;\n    };\n\n    //Returns true if ship is sunk or false if not sunk\n    let isSunk = () => {\n        if (hits.includes(false)){\n            return false;\n        }else{\n            return true;\n        }\n    };\n\n    return {length,hits,shipSpaces,hit,isSunk};\n};\n\n\n\n\n//# sourceURL=webpack://bs2/./src/shipFactory.js?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;