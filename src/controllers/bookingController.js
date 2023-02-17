import { Booking } from '../models';
import { Trip } from '../models';
import { User } from '../models';

class BookingController {
  async create(req, res) {
    try {
      const { tripId, userId, numberOfSeats } = req.body;
      const trip = await Trip.findOne({ where: { id: tripId } });
      const user = await User.findOne({ where: { id: userId } });
      if (!trip || !user) {
        return res.status(404).send({
          message: 'Trip or User not found',
        });
      }
      const existingBookings = await Booking.findAll({ where: { tripId } });
      const totalSeatsBooked = existingBookings.reduce((acc, booking) => acc + booking.numberOfSeats, 0);
      if (totalSeatsBooked + numberOfSeats > trip.maximumCapacity) {
        return res.status(400).send({
          message: 'Not enough seats available',
        });
      }
      if (numberOfSeats > 20) {
       return res.status(400).send({
          message: 'No enough seats'
        })
      }
      if (trip.currentCapacity + numberOfSeats > trip.maximumCapacity) {
        return res.status(400).send({
          message: 'The trip is fully booked',
        });
      }
      const booking = await Booking.create({ tripId, userId, numberOfSeats });
     trip.currentCapacity += numberOfSeats;
     await trip.save();
      const result = await Booking.findOne({
      where: { id: booking.id },
      include: [{
        model: Trip,
        as: 'Trip',
      }],
      attributes: { exclude: ['tripId'] }
    });
      return res.status(201).send({
        message: 'Booking created successfully',
        data: result,
      });
    } catch (error) {
      console.log(error)
      return res.status(500).send({
        message: 'Error creating booking',
        error
      });
    }
  }
  async findAll(req, res) {
    try {
      const bookings = await Booking.findAll({
        include: [{
          model: Trip,
          as: 'Trip',
        }],
        attributes: { exclude: ['tripId'] },
      });
      return res.status(200).send({
        message: 'Bookings retrieved successfully',
        data: bookings,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        message: 'Error retrieving bookings',
        error,
      });
    }
  }
 async deleteBooking(req, res) {
  try {
    const { id } = req.params;
    const booking = await Booking.findByPk(id);
    if (!booking) {
      return res.status(404).send({
        message: 'Booking not found',
      });
    }
    await booking.destroy();
    return res.status(200).send({
      message: 'Booking deleted successfully',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: 'Error deleting booking',
      error,
    });
  }
}
async findOne(req, res) {
  try {
    const { id } = req.params;
    const booking = await Booking.findOne({
      where: { id },
      include: [{
        model: Trip,
        as: 'Trip',
      }],
      attributes: { exclude: ['tripId'] }
    });
    if (!booking) {
      return res.status(404).send({
        message: 'Booking not found',
      });
    }
    return res.status(200).send({
      message: 'Booking retrieved successfully',
      data: booking,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: 'Error retrieving booking',
      error,
    });
  }
}
async updateBooking(req, res) {
    const { bookingId } = req.params;
    const updates = req.body;

    try {
      const booking = await Booking.findByPk(bookingId);
      if (!booking) {
        return res.status(404).send({
          message: 'Booking not found',
        });
      }
      await booking.update(updates);
      return res.status(200).send({
        message: 'Booking updated successfully',
        data: booking,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        message: 'Error updating booking',
        error,
      });
    }
  }


}

export default new BookingController();
