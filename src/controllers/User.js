import models from "../models";
import bcrypt from "bcrypt";
import user from "../models/user";
import Authentication from "../utils/authentication";
import _ from 'lodash'
import { clearConfigCache } from "prettier";

const { User, } = models;
class UserController {

  static async signUp(req, res) {
    try {
      // Get the request body
      const { firstname, lastname, isAdmin, email, password } = req.body;
      
      const hashedpwd = await bcrypt.hash(password, 10);

      // create the user using sequelize's `findOrCreate` method
      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: {
          firstName: firstname,
          lastName: lastname,
          email,
          isAdmin,
          password: hashedpwd
        }
      });

      if (!created) {
        return res.status(409).send({
          error: "This user already exists. Please login.",
          success: false
        });
      }

      return res.status(201).send({
  message: "User created successfully.",
  success: true,
  user: user.dataValues
});

    } catch (err) {
      console.log(err);
      return res.status(500).send({
        error: "Internal server error",
        success: false
      });
    }
  }


    static async login(req, res) {
    try {
      // Get the request body
      const { email, password } = req.body;

      // Find the user by email
      const user = await User.findOne({
        where: { email }
      });

      // If no user is found with the provided email, return an error
      if (!user) {
        return res.status(404).send({
          error: "No user found with this email.",
          success: false
        });
      }

      // Compare the provided password with the hashed password stored in the database
      const isMatch = await bcrypt.compare(password, user.password);

      // If the passwords do not match, return an error
      if (!isMatch) {
        return res.status(401).send({
          error: "Incorrect password.",
          success: false
        });
      }

      // Create a JSON web token

      const payload = {
        email: user.dataValues.email,
        isAdmin: user.dataValues.isAdmin,
        id: user.dataValues.id
      }

      const token = await Authentication.getToken(payload);
      console.log(token)
     
      // Return the token and user data in the response
      return res.status(200).send({
        message: "User logged in successfully.",
        success: true,
        token,
      user: _.pick(user.dataValues, ['email', 'firstName', 'lastName', 'isAdmin'])

      });
    } catch (err) {
      console.log(err);
      return res.status(500).send({
        error: "Internal server error",
        success: false
      });
    }
    }

  }


export default UserController;