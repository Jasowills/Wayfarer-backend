"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var HelperMethods = /*#__PURE__*/function () {
  function HelperMethods() {
    _classCallCheck(this, HelperMethods);
  }
  _createClass(HelperMethods, null, [{
    key: "serverError",
    value:
    /**
     * A method used to send server errors
     * @param {object} res - HTTP response object
     * @param {String} message - The error message you want to set.
     * @returns {object} res - The HTTP response object
     */
    function serverError(res, message) {
      return res.status(500).json({
        success: false,
        message: message || 'Internal server error'
      });
    }

    /**
     * A method used to send client-side errors
     * @param {object} res - HTTP response object
     * @param {String} message - The error message you want to set.
     * @param {number} status = Status code of the client error
     * @returns {object} res - The HTTP response object
     */
  }, {
    key: "clientError",
    value: function clientError(res, message) {
      var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 400;
      return res.status(status).json({
        success: false,
        message: message
      });
    }

    /**
     * A method used to confirm that a request was successful
     * @param {object} res - HTTP response object
     * @param {object} payload - data we want to send to the front-end
     * @param {number} status = Status code of the successful request
     * @returns {object} res - HTTP response object
     */
  }, {
    key: "requestSuccessful",
    value: function requestSuccessful(res, payload) {
      var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
      return res.status(status).json({
        data: _objectSpread({}, payload)
      });
    }

    /* eslint-enable no-useless-escape */
    /**
     * @param {object} err - error object
     * @param {object} req - Request object
     * @param {object} res - Response object
     * @param {callback} next - The callback that passes the request to the next handler
     * @returns {object} res - Response object when query is invalid
     * @memberof Validate
     */
  }, {
    key: "checkExpressErrors",
    value: function checkExpressErrors(err, req, res, next) {
      res.status(500).json({
        message: 'Something failed',
        success: false
      });
      next();
    }

    /**
     * A method used to send sequelize validation error
     * @param {object} res - HTTP response object
     * @param {object} error - The error object from sequelize.
     * @returns {object} res - The HTTP response object
     */
  }, {
    key: "sequelizeValidationError",
    value: function sequelizeValidationError(res, error) {
      if (error.errors[0].type === 'notNull Violation') {
        res.status(400).json({
          success: false,
          message: "The \"".concat(error.errors[0].path, "\" field is required")
        });
      }
    }
  }]);
  return HelperMethods;
}();
var _default = HelperMethods;
exports["default"] = _default;