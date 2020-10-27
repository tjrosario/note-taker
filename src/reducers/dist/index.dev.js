"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _notesReducer = _interopRequireDefault(require("./notesReducer"));

var _redux = require("redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducer = (0, _redux.combineReducers)({
  notesReducer: _notesReducer["default"]
});
var _default = rootReducer;
exports["default"] = _default;