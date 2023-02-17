import Validator from "../utils/Validate"
class BookingSanitizer {
    static createBooking(req, res, next) {
        const { tripId, userId, seatNumber, bookingDate } = req.body;
        const response = (error, code) => res.status(code).send({ status: 'error', error });
        if (Validator.checkEmpty(tripId)) return response('Trip Id cannot be empty', 400);
        if (Validator.checkEmpty(userId)) return response('User Id cannot be empty', 400);
        if (Validator.checkEmpty(bookingDate)) return response('bookingDate cannot be empty')
        if (Validator.checkEmpty(seatNumber)) return response('Seat number cannot be empty', 400);
        if (Validator.isValidParamsLength(seatNumber, 3)) return response('Seat number must be greater than three characters', 422);
        next();
    }
    static updateBooking(req, res, next) {
    const { tripId, userId, seatNumber } = req.body;
    const response = (error, code) => res.status(code).send({ status: 'error', error });
    if (tripId && Validator.isValidParamsLength(tripId, 5)) return response('Trip Id must be greater than five characters', 422);
    if (userId && Validator.isValidParamsLength(userId, 5)) return response('User Id must be greater than five characters', 422);
    if (seatNumber && Validator.isValidParamsLength(seatNumber, 3)) return response('Seat number must be greater than three characters', 422);
    next();
}
   static getAllBookings(req, res, next) {
    const { tripId, userId, seatNumber } = req.body;
    const response = (error, code) => res.status(code).send({ status: 'error', error });
    if (tripId && Validator.isValidParamsLength(tripId, 5)) return response('Trip Id must be greater than five characters', 422);
    if (userId && Validator.isValidParamsLength(userId, 5)) return response('User Id must be greater than five characters', 422);
    if (seatNumber && Validator.isValidParamsLength(seatNumber, 3)) return response('Seat number must be greater than three characters', 422);
    next();
    } 
    static getBookingById(req, res, next) {
    const { tripId, userId, seatNumber } = req.body;
    const response = (error, code) => res.status(code).send({ status: 'error', error });
    if (tripId && Validator.isValidParamsLength(tripId, 5)) return response('Trip Id must be greater than five characters', 422);
    if (userId && Validator.isValidParamsLength(userId, 5)) return response('User Id must be greater than five characters', 422);
    if (seatNumber && Validator.isValidParamsLength(seatNumber, 3)) return response('Seat number must be greater than three characters', 422);
    next();
    }
    static deleteBooking(req, res, next) {
const response = (error, code) => res.status(code).send({ status: 'error', error });
if (Validator.checkEmpty(req.params.bookingId)) return response('Booking ID cannot be empty', 400);
if (!Validator.isValidId(req.params.bookingId)) return response('Invalid booking ID', 422);
next();
}
}
export default BookingSanitizer