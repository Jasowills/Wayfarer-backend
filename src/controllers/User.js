import User from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class UserController {
  static async signUp(req, res) {
    try {
      const { firstName, lastName, isAdmin, email, password } = req.body;

      const existingUser = await User.findOne({ where: { email } });

      if (existingUser) {
        return res.status(409).send({
          error: 'This email is already in use. Please login.',
          success: false,
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        firstName,
        lastName,
        email,
        isAdmin,
        password: hashedPassword,
      });

      const payload = {
        email: newUser.email,
        isAdmin: newUser.isAdmin,
        id: newUser.id,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET);

      return res.status(201).send({
        message: 'User created successfully.',
        success: true,
        token,
        user: {
          id: newUser.id,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
          isAdmin: newUser.isAdmin,
        },
      });
    } catch (err) {
      console.error(err);
      return res.status(500).send({
        error: 'Internal server error',
        success: false,
      });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(404).send({
          error: 'No user found with this email.',
          success: false,
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).send({
          error: 'Incorrect password.',
          success: false,
        });
      }

      const payload = {
        email: user.email,
        isAdmin: user.isAdmin,
        id: user.id,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET);

      return res.status(200).send({
        message: 'User logged in successfully.',
        success: true,
        token,
        user: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          isAdmin: user.isAdmin,
        },
      });
    } catch (err) {
      console.error(err);
      return res.status(500).send({
        error: 'Internal server error',
        success: false,
      });
    }
  }
}

export default UserController;
