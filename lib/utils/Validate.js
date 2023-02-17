"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Validate = /*#__PURE__*/function () {
  function Validate() {
    _classCallCheck(this, Validate);
  }
  _createClass(Validate, null, [{
    key: "isEmail",
    value:
    /**
     * Check if provided email has a valid email address formatting
     * @param {string} email - email address to be validated
     * @returns {boolean} - true is email is properly formatted, false if otherwise
     */
    function isEmail(email) {
      var re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/ig;
      return re.test(email);
    }
  }, {
    key: "isValidParamsLength",
    value: function isValidParamsLength(param, length) {
      return param.length < length;
    }
  }, {
    key: "checkEmpty",
    value: function checkEmpty(input) {
      var re = /^$/;
      var testBody = re.test(input);
      return testBody;
    }
  }, {
    key: "containsNumber",
    value: function containsNumber(name) {
      var re = /[0-9]/g;
      var testName = re.test(name);
      return testName;
    }
  }, {
    key: "validImage",
    value: function validImage(image) {
      var re = /(.jpg|.jpeg|.png|.gif)$/g;
      return image.match(re);
    }
  }, {
    key: "isMatchingPassword",
    value: function isMatchingPassword(password, confirmPassword) {
      return password === confirmPassword;
    }
  }, {
    key: "itsaNumber",
    value: function itsaNumber(item) {
      var re = /^[-+]?\d*$/;
      return re.test(item);
    }
  }, {
    key: "isValidDestination",
    value: function isValidDestination(destination) {
      var re = /^[a-zA-Z]{1,12}$/;
      return re.test(destination);
    }
  }]);
  return Validate;
}();
var _default = Validate;
exports["default"] = _default;