"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isLeapYear = isLeapYear;

function isLeapYear(year) {
  return year % 4 === 0 ? year % 400 === 0 ? true : year % 100 === 0 ? false : true : false;
}

exports["default"] = isLeapYear;