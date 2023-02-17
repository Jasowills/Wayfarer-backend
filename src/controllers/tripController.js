import { clearConfigCache } from "prettier"
const { Trip } = require('../models');


class TripController {
  static async createTrip(req, res) {
    try {
      const { name, origin, destination, startDate, endDate, fare } = req.body;
      const newTrip = await Trip.create({ name, origin, destination, startDate, endDate, fare });
      return res.status(201).send({
        message: "Trip created successfully.",
        success: true,
        trip: newTrip
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send({
        error: "Internal server error",
        success: false
      });
    }
  }

  static async getAllTrips(req, res) {
    try {
      const trips = await Trip.findAll();
      return res.status(200).send({
        message: "All trips retrieved successfully.",
        success: true,
        trips
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send({
        error: "Internal server error",
        success: false
      });
    }
  }

  static async getTripById(req, res) {
    try {
      const { id } = req.params;
      const trip = await Trip.findByPk(id);
      if (!trip) {
        return res.status(404).send({
          message: "Trip not found.",
          success: false
        });
      }
      return res.status(200).send({
        message: "Trip retrieved successfully.",
        success: true,
        trip
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send({
        error: "Internal server error",
        success: false
      });
    }
  }
  
   static async updateTrip(req, res) {
    try {
      const { id } = req.params;
      const { name, origin, destination, startDate, endDate } = req.body;
      const [updated] = await Trip.update({ name, origin, destination, startDate, endDate }, { where: { id } });
      if (!updated) {
        return res.status(404).send({
          message: "Trip not found.",
          success: false
        });
      }
      const updatedTrip = await Trip.findByPk(id);
      return res.status(200).send({
        message: "Trip updated successfully.",
        success: true,
        trip: updatedTrip
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send({
        error: "Internal server error",
        success: false
      });
    }
  }

  static async deleteTrip(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Trip.destroy({ where: { id } });
      if (!deleted) {
        return res.status(404).send({
          message: "Trip not found.",
          success: false
        });
      }
      return res.status(200).send({
        message: "Trip deleted successfully.",
        success: true
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


export default TripController;