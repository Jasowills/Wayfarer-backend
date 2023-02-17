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
var BookingSanitizer = /*#__PURE__*/function () {
  function BookingSanitizer() {
    _classCallCheck(this, BookingSanitizer);
  }
  _createClass(BookingSanitizer, null, [{
    key: "createBooking",
    value: function createBooking(req, res, next) {
      var _req$body = req.body,
        tripId = _req$body.tripId,
        userId = _req$body.userId,
        seatNumber = _req$body.seatNumber,
        bookingDate = _req$body.bookingDate;
      var response = function response(error, code) {
        return res.status(code).send({
          status: 'error',
          error: error
        });
      };
      if (_Validate["default"].checkEmpty(tripId)) return response('Trip Id cannot be empty', 400);
      if (_Validate["default"].checkEmpty(userId)) return response('User Id cannot be empty', 400);
      if (_Validate["default"].checkEmpty(bookingDate)) return response('bookingDate cannot be empty');
      if (_Validate["default"].checkEmpty(seatNumber)) return response('Seat number cannot be empty', 400);
      if (_Validate["default"].isValidParamsLength(seatNumber, 3)) return response('Seat number must be greater than three characters', 422);
      next();
    }
  }, {
    key: "updateBooking",
    value: function updateBooking(req, res, next) {
      var _req$body2 = req.body,
        tripId = _req$body2.tripId,
        userId = _req$body2.userId,
        seatNumber = _req$body2.seatNumber;
      var response = function response(error, code) {
        return res.status(code).send({
          status: 'error',
          error: error
        });
      };
      if (tripId && _Validate["default"].isValidParamsLength(tripId, 5)) return response('Trip Id must be greater than five characters', 422);
      if (userId && _Validate["default"].isValidParamsLength(userId, 5)) return response('User Id must be greater than five characters', 422);
      if (seatNumber && _Validate["default"].isValidParamsLength(seatNumber, 3)) return response('Seat number must be greater than three characters', 422);
      next();
    }
  }, {
    key: "getAllBookings",
    value: function getAllBookings(req, res, next) {
      var _req$body3 = req.body,
        tripId = _req$body3.tripId,
        userId = _req$body3.userId,
        seatNumber = _req$body3.seatNumber;
      var response = function response(error, code) {
        return res.status(code).send({
          status: 'error',
          error: error
        });
      };
      if (tripId && _Validate["default"].isValidParamsLength(tripId, 5)) return response('Trip Id must be greater than five characters', 422);
      if (userId && _Validate["default"].isValidParamsLength(userId, 5)) return response('User Id must be greater than five characters', 422);
      if (seatNumber && _Validate["default"].isValidParamsLength(seatNumber, 3)) return response('Seat number must be greater than three characters', 422);
      next();
    }
  }, {
    key: "getBookingById",
    value: function getBookingById(req, res, next) {
      var _req$body4 = req.body,
        tripId = _req$body4.tripId,
        userId = _req$body4.userId,
        seatNumber = _req$body4.seatNumber;
      var response = function response(error, code) {
        return res.status(code).send({
          status: 'error',
          error: error
        });
      };
      if (tripId && _Validate["default"].isValidParamsLength(tripId, 5)) return response('Trip Id must be greater than five characters', 422);
      if (userId && _Validate["default"].isValidParamsLength(userId, 5)) return response('User Id must be greater than five characters', 422);
      if (seatNumber && _Validate["default"].isValidParamsLength(seatNumber, 3)) return response('Seat number must be greater than three characters', 422);
      next();
    }
  }, {
    key: "deleteBooking",
    value: function deleteBooking(req, res, next) {
      var response = function response(error, code) {
        return res.status(code).send({
          status: 'error',
          error: error
        });
      };
      if (_Validate["default"].checkEmpty(req.params.bookingId)) return response('Booking ID cannot be empty', 400);
      if (!_Validate["default"].isValidId(req.params.bookingId)) return response('Invalid booking ID', 422);
      next();
    }
  }]);
  return BookingSanitizer;
}();
var _default = BookingSanitizer;
exports["default"] = _default;