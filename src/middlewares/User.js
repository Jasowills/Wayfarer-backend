import { clearConfigCache } from 'prettier';
import Validator from '../utils/Validate';
import User from '../models/user'
class UserSanitizer {

   static signup(req, res, next) {
       
       const {
      firstname, lastname, password, email, isAdmin,  confirmPassword,
    } = req.body;
    const response = (error, code) => res.status(code).send({ status: 'error', error });

    if (Validator.checkEmpty(email)) return response('email cannot be empty', 400);
    if (Validator.checkEmpty(lastname)) return response('lastname cannot be empty', 400);
    if (Validator.checkEmpty(password)) return response('password cannot be empty', 400);
    if (Validator.checkEmpty(confirmPassword)) return response('confirm password cannot be empty', 400);
    if (Validator.checkEmpty(firstname)) return response('firstname cannot be empty', 400);
    if (!Validator.isEmail(email)) return response('invalid email', 422);
    if (Validator.isValidParamsLength(firstname, 2)) return response('firstname must be atleast two characters long', 422);
    if (Validator.isValidParamsLength(lastname, 2)) return response('lastname must be atleast two characters long', 422);
    if (Validator.isValidParamsLength(password, 5)) return response('password must be greater than five characters', 422);
    if (Validator.containsNumber(firstname)) return response('firstname cannot  contain number', 422);
    if (Validator.containsNumber(lastname)) return response('lastname cannot contain numbers', 422);


  next();
}


   static login(req, res, next) {
    const {
      password, email,
    } = req.body;
    const response = (error, code) => res.status(code).send({ status: 'error', error });
    if (Validator.checkEmpty(email)) return response('email cannot be empty', 400);
    if (Validator.checkEmpty(password)) return response('password cannot be empty', 400);
    if (!Validator.isEmail(email)) return response('invalid email', 422);

 return next();
}  
}
export default UserSanitizer;