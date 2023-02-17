"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _User = _interopRequireDefault(require("../controllers/User"));
var _User2 = _interopRequireDefault(require("../middlewares/User"));
var _tripController = _interopRequireDefault(require("../controllers/tripController"));
var _Trip = _interopRequireDefault(require("../middlewares/Trip"));
var _authorization = _interopRequireDefault(require("../middlewares/authorization"));
var _bookingController = _interopRequireDefault(require("../controllers/bookingController"));
var _booking = _interopRequireDefault(require("../middlewares/booking"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = (0, _express.Router)();
router.post("/api/v1/booking", _authorization["default"].checkToken, _bookingController["default"].create);
router.get("/api/v1/booking", _authorization["default"].checkToken, _bookingController["default"].findAll);
router["delete"]("/api/v1/booking/:id", _authorization["default"].checkToken, _bookingController["default"].deleteBooking);
router.get("/api/v1/booking/:id", _authorization["default"].checkToken, _bookingController["default"].findOne);
router.put("/api/v1/booking/:id", _authorization["default"].checkToken, _bookingController["default"].updateBooking);
router.post("/api/v1/trip", _authorization["default"].checkToken, _authorization["default"].confirmAdmin, _Trip["default"].createTrip, _tripController["default"].createTrip);
router.get("/api/v1/trips", _authorization["default"].checkToken, _authorization["default"].confirmAdmin, _tripController["default"].getAllTrips);
router.get("/api/v1/trips/:id", _authorization["default"].checkToken, _authorization["default"].confirmAdmin, _tripController["default"].getTripById);
router.put("/api/v1/trips/:id", _authorization["default"].checkToken, _authorization["default"].confirmAdmin, _Trip["default"].updateTrip, _tripController["default"].updateTrip);
router["delete"]("/api/v1/trips/:id", _authorization["default"].checkToken, _authorization["default"].confirmAdmin, _Trip["default"].deleteTrip, _tripController["default"].deleteTrip);
router.post("/api/v1/signup", _User2["default"].signup, _User["default"].signUp);
router.post("/api/v1/login", _User2["default"].login, _User["default"].login);
var _default = router;
exports["default"] = _default;