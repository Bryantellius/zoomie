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

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar uuid_1 = __webpack_require__(/*! uuid */ \"uuid\");\nvar router = express.Router();\nrouter.get(\"/join\", function (req, res, next) {\n    res.json({ link: uuid_1.v4() });\n});\nexports.default = router;\n\n\n//# sourceURL=webpack://starter_template/./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar cors = __webpack_require__(/*! cors */ \"cors\");\nvar socket_io_1 = __webpack_require__(/*! socket.io */ \"socket.io\");\nvar http = __webpack_require__(/*! http */ \"http\");\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\");\nvar app = express();\nvar server = http.createServer(app);\nvar io = new socket_io_1.Server(server);\nio.on(\"connection\", function (socket) {\n    console.log(\"socket established\");\n    socket.on(\"join-room\", function (userData) {\n        var roomID = userData.roomID, userID = userData.userID;\n        socket.join(roomID);\n        socket.to(roomID).broadcast.emit(\"new-user-connect\", userData);\n        socket.on(\"disconnect\", function () {\n            socket.to(roomID).broadcast.emit(\"user-disconnected\", userID);\n        });\n        socket.on(\"broadcast-message\", function (message) {\n            socket\n                .to(roomID)\n                .broadcast.emit(\"new-broadcast-messsage\", __assign(__assign({}, message), { userData: userData }));\n        });\n        // socket.on('reconnect-user', () => {\n        //     socket.to(roomID).broadcast.emit('new-user-connect', userData);\n        // });\n        socket.on(\"display-media\", function (value) {\n            socket.to(roomID).broadcast.emit(\"display-media\", { userID: userID, value: value });\n        });\n        socket.on(\"user-video-off\", function (value) {\n            socket.to(roomID).broadcast.emit(\"user-video-off\", value);\n        });\n    });\n});\napp.use(cors());\napp.use(express.json());\napp.use(express.urlencoded({ extended: true }));\napp.use(express.static(\"public\"));\napp.use(routes_1.default);\napp.use(function (err, req, res, next) {\n    res.status(500).json({ name: err.name, msg: err.message });\n});\nvar port = 3000;\napp.listen(port, function () { return console.log(\"Server listening on port \" + port); });\n\n\n//# sourceURL=webpack://starter_template/./src/server/server.ts?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");;

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socket.io");;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.ts");
/******/ 	
/******/ })()
;