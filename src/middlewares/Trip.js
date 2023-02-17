import Validator from '../utils/Validate';

class TripSanitizer {
    static createTrip(req, res, next) {
        const { name, origin, startDate, endDate, destination } = req.body;
        const response = (error, code) => res.status(code).send({ status: 'error', error });
        if (Validator.checkEmpty(name)) return response('Trip name cannot be empty', 400);
       if (!Validator.isValidDestination(destination)) {
    return res.status(400).json({
      message: 'destination should be not more than 12 characters long and only alphabet'
    });
  }
        if (Validator.checkEmpty(origin)) return response('Origin cannot be empty', 400);
        if (Validator.checkEmpty(startDate)) return response('Start date cannot be empty', 400);
        if (Validator.checkEmpty(endDate)) return response('End date cannot be empty', 400);
        if (Validator.checkEmpty(destination)) return response('Destination cannot be empty', 400);
        if (Validator.isValidParamsLength(name, 5)) return response('Trip name must be greater than five characters', 422);
        if (Validator.isValidParamsLength(origin, 5)) return response('Origin must be greater than five characters', 422);
        if (Validator.isValidParamsLength(destination, 5)) return response('Destination must be greater than five characters', 422);
        if (startDate > endDate) return response('Start date must be before end date', 422);
        next();
    }
    static updateTrip(req, res, next) {
        const { name, origin, startDate, endDate, destination } = req.body;
        const response = (error, code) => res.status(code).send({ status: 'error', error });
        if (name && Validator.isValidParamsLength(name, 5)) return response('Trip name must be greater than five characters', 422);
        if (origin && Validator.isValidParamsLength(origin, 5)) return response('Origin must be greater than five characters', 422);
        if (destination && Validator.isValidParamsLength(destination, 5)) return response('Destination must be greater than five characters', 422);
        if (startDate && endDate && startDate > endDate) return response('Start date must be before end date', 422);
        next();
    }
    static getAllTrips(req, res, next) {
        const {name, origin, destination, startDate, endDate} = req.body
        const response = (error, code) => res.status(code).send({ status: 'error', error });
        if (name && Validator.isValidParamsLength(name, 5)) return response('Trip name must be greater than five characters', 422);
        if (origin && Validator.isValidParamsLength(origin, 5)) return response('Origin must be greater than five characters', 422);
        if (destination && Validator.isValidParamsLength(destination, 5)) return response('Destination must be greater than five characters', 422);
        if (startDate && endDate && startDate > endDate) return response('Start date must be before end date', 422);
        next();
    }
    static getTripById(req, res, next) {
        const {name, origin, destination, startDate, endDate} = req.body
        const response = (error, code) => res.status(code).send({ status: 'error', error });
        if (name && Validator.isValidParamsLength(name, 5)) return response('Trip name must be greater than five characters', 422);
        if (origin && Validator.isValidParamsLength(origin, 5)) return response('Origin must be greater than five characters', 422);
        if (destination && Validator.isValidParamsLength(destination, 5)) return response('Destination must be greater than five characters', 422);
        if (startDate && endDate && startDate > endDate) return response('Start date must be before end date', 422);
        next();

    }

    static deleteTrip(req, res, next) {
        const {name, origin, destination, startDate, endDate} = req.body
        const response = (error, code) => res.status(code).send({ status: 'error', error });
        if (name && Validator.isValidParamsLength(name, 5)) return response('Trip name must be greater than five characters', 422);
        if (origin && Validator.isValidParamsLength(origin, 5)) return response('Origin must be greater than five characters', 422);
        if (destination && Validator.isValidParamsLength(destination, 5)) return response('Destination must be greater than five characters', 422);
        if (startDate && endDate && startDate > endDate) return response('Start date must be before end date', 422);
        next()
    }
}


export default TripSanitizer
