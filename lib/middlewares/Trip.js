"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Validate = _interopRequireDefault(require("../utils/Validate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var TripSanitizer = /*#__PURE__*/function () {
  function TripSanitizer() {
    _classCallCheck(this, TripSanitizer);
  }
  _createClass(TripSanitizer, null, [{
    key: "createTrip",
    value: function createTrip(req, res, next) {
      var _req$body = req.body,
        name = _req$body.name,
        origin = _req$body.origin,
        startDate = _req$body.startDate,
        endDate = _req$body.endDate,
        destination = _req$body.destination;
      var response = function response(error, code) {
        return res.status(code).send({
          status: 'error',
          error: error
        });
      };
      if (_Validate["default"].checkEmpty(name)) return response('Trip name cannot be empty', 400);
      if (!_Validate["default"].isValidDestination(destination)) {
        return res.status(400).json({
          message: 'destination should be not more than 12 characters long and only alphabet'
        });
      }
      if (_Validate["default"].checkEmpty(origin)) return response('Origin cannot be empty', 400);
      if (_Validate["default"].checkEmpty(startDate)) return response('Start date cannot be empty', 400);
      if (_Validate["default"].checkEmpty(endDate)) return response('End date cannot be empty', 400);
      if (_Validate["default"].checkEmpty(destination)) return response('Destination cannot be empty', 400);
      if (_Validate["default"].isValidParamsLength(name, 5)) return response('Trip name must be greater than five characters', 422);
      if (_Validate["default"].isValidParamsLength(origin, 5)) return response('Origin must be greater than five characters', 422);
      if (_Validate["default"].isValidParamsLength(destination, 5)) return response('Destination must be greater than five characters', 422);
      if (startDate > endDate) return response('Start date must be before end date', 422);
      next();
    }
  }, {
    key: "updateTrip",
    value: function updateTrip(req, res, next) {
      var _req$body2 = req.body,
        name = _req$body2.name,
        origin = _req$body2.origin,
        startDate = _req$body2.startDate,
        endDate = _req$body2.endDate,
        destination = _req$body2.destination;
      var response = function response(error, code) {
        return res.status(code).send({
          status: 'error',
          error: error
        });
      };
      if (name && _Validate["default"].isValidParamsLength(name, 5)) return response('Trip name must be greater than five characters', 422);
      if (origin && _Validate["default"].isValidParamsLength(origin, 5)) return response('Origin must be greater than five characters', 422);
      if (destination && _Validate["default"].isValidParamsLength(destination, 5)) return response('Destination must be greater than five characters', 422);
      if (startDate && endDate && startDate > endDate) return response('Start date must be before end date', 422);
      next();
    }
  }, {
    key: "getAllTrips",
    value: function getAllTrips(req, res, next) {
      var _req$body3 = req.body,
        name = _req$body3.name,
        origin = _req$body3.origin,
        destination = _req$body3.destination,
        startDate = _req$body3.startDate,
        endDate = _req$body3.endDate;
      var response = function response(error, code) {
        return res.status(code).send({
          status: 'error',
          error: error
        });
      };
      if (name && _Validate["default"].isValidParamsLength(name, 5)) return response('Trip name must be greater than five characters', 422);
      if (origin && _Validate["default"].isValidParamsLength(origin, 5)) return response('Origin must be greater than five characters', 422);
      if (destination && _Validate["default"].isValidParamsLength(destination, 5)) return response('Destination must be greater than five characters', 422);
      if (startDate && endDate && startDate > endDate) return response('Start date must be before end date', 422);
      next();
    }
  }, {
    key: "getTripById",
    value: function getTripById(req, res, next) {
      var _req$body4 = req.body,
        name = _req$body4.name,
        origin = _req$body4.origin,
        destination = _req$body4.destination,
        startDate = _req$body4.startDate,
        endDate = _req$body4.endDate;
      var response = function response(error, code) {
        return res.status(code).send({
          status: 'error',
          error: error
        });
      };
      if (name && _Validate["default"].isValidParamsLength(name, 5)) return response('Trip name must be greater than five characters', 422);
      if (origin && _Validate["default"].isValidParamsLength(origin, 5)) return response('Origin must be greater than five characters', 422);
      if (destination && _Validate["default"].isValidParamsLength(destination, 5)) return response('Destination must be greater than five characters', 422);
      if (startDate && endDate && startDate > endDate) return response('Start date must be before end date', 422);
      next();
    }
  }, {
    key: "deleteTrip",
    value: function deleteTrip(req, res, next) {
      var _req$body5 = req.body,
        name = _req$body5.name,
        origin = _req$body5.origin,
        destination = _req$body5.destination,
        startDate = _req$body5.startDate,
        endDate = _req$body5.endDate;
      var response = function response(error, code) {
        return res.status(code).send({
          status: 'error',
          error: error
        });
      };
      if (name && _Validate["default"].isValidParamsLength(name, 5)) return response('Trip name must be greater than five characters', 422);
      if (origin && _Validate["default"].isValidParamsLength(origin, 5)) return response('Origin must be greater than five characters', 422);
      if (destination && _Validate["default"].isValidParamsLength(destination, 5)) return response('Destination must be greater than five characters', 422);
      if (startDate && endDate && startDate > endDate) return response('Start date must be before end date', 422);
      next();
    }
  }]);
  return TripSanitizer;
}();
var _default = TripSanitizer;
exports["default"] = _default;