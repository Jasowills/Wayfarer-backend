"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _prettier = require("prettier");
var _Validate = _interopRequireDefault(require("../utils/Validate"));
var _user = _interopRequireDefault(require("../models/user"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var UserSanitizer = /*#__PURE__*/function () {
  function UserSanitizer() {
    _classCallCheck(this, UserSanitizer);
  }
  _createClass(UserSanitizer, null, [{
    key: "signup",
    value: function signup(req, res, next) {
      var _req$body = req.body,
        firstname = _req$body.firstname,
        lastname = _req$body.lastname,
        password = _req$body.password,
        email = _req$body.email,
        isAdmin = _req$body.isAdmin,
        confirmPassword = _req$body.confirmPassword;
      var response = function response(error, code) {
        return res.status(code).send({
          status: 'error',
          error: error
        });
      };
      if (_Validate["default"].checkEmpty(email)) return response('email cannot be empty', 400);
      if (_Validate["default"].checkEmpty(lastname)) return response('lastname cannot be empty', 400);
      if (_Validate["default"].checkEmpty(password)) return response('password cannot be empty', 400);
      if (_Validate["default"].checkEmpty(confirmPassword)) return response('confirm password cannot be empty', 400);
      if (_Validate["default"].checkEmpty(firstname)) return response('firstname cannot be empty', 400);
      if (!_Validate["default"].isEmail(email)) return response('invalid email', 422);
      if (_Validate["default"].isValidParamsLength(firstname, 2)) return response('firstname must be atleast two characters long', 422);
      if (_Validate["default"].isValidParamsLength(lastname, 2)) return response('lastname must be atleast two characters long', 422);
      if (_Validate["default"].isValidParamsLength(password, 5)) return response('password must be greater than five characters', 422);
      if (_Validate["default"].containsNumber(firstname)) return response('firstname cannot  contain number', 422);
      if (_Validate["default"].containsNumber(lastname)) return response('lastname cannot contain numbers', 422);
      next();
    }
  }, {
    key: "login",
    value: function login(req, res, next) {
      var _req$body2 = req.body,
        password = _req$body2.password,
        email = _req$body2.email;
      var response = function response(error, code) {
        return res.status(code).send({
          status: 'error',
          error: error
        });
      };
      if (_Validate["default"].checkEmpty(email)) return response('email cannot be empty', 400);
      if (_Validate["default"].checkEmpty(password)) return response('password cannot be empty', 400);
      if (!_Validate["default"].isEmail(email)) return response('invalid email', 422);
      return next();
    }
  }]);
  return UserSanitizer;
}();
var _default = UserSanitizer;
exports["default"] = _default;