"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clone;
function clone(arr) {
  return JSON.parse(JSON.stringify(arr));
}