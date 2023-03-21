import { application, Router} from "express"
import UserController from "../controllers/User";
import UserSanitizer from "../middlewares/User";
import TripController from "../controllers/tripController";
import tripSanitizer from "../middlewares/Trip"
import Auth from "../middlewares/authorization";
import bookingController from "../controllers/bookingController"
import bookingSanitizer from "../middlewares/booking";


const router = Router();



router.post("/api/v1/booking",  bookingController.create);
router.get("/api/v1/booking", Auth.checkToken, bookingController.findAll);
router.delete("/api/v1/booking/:id", Auth.checkToken, bookingController.deleteBooking);
router.get("/api/v1/booking/:id", Auth.checkToken, bookingController.findOne);
router.put("/api/v1/booking/:id", Auth.checkToken, bookingController.updateBooking);




router.post("/api/v1/trip", tripSanitizer.createTrip, TripController.createTrip)
router.get("/api/v1/trips",TripController.getAllTrips)
router.get("/api/v1/trips/:id",Auth.checkToken,Auth.confirmAdmin, TripController.getTripById)
router.put("/api/v1/trips/:id",Auth.checkToken,Auth.confirmAdmin, tripSanitizer.updateTrip, TripController.updateTrip)
router.delete("/api/v1/trips/:id", Auth.checkToken, Auth.confirmAdmin, tripSanitizer.deleteTrip, TripController.deleteTrip)



router.post("/api/v1/signup", UserSanitizer.signup, UserController.signUp)
router.post("/api/v1/login", UserSanitizer.login, UserController.login)

export default router;