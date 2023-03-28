import  Booking  from '../models/Booking';
import  Trip  from '../models/Trip';
import  User  from '../models/User';

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

      if (numberOfSeats > trip.maximumCapacity) {
        return res.status(400).send({
          message: 'Not enough seats available',
        });
      }

      if (totalSeatsBooked + numberOfSeats > trip.maximumCapacity) {
        return res.status(400).send({
          message: 'Not enough seats available',
        });
      }

      if (trip.currentCapacity + numberOfSeats > trip.maximumCapacity) {
        return res.status(400).send({
          message: 'The trip is fully booked',
        });
      }
const fare = trip.fare;
    const totalFare = numberOfSeats * fare;
      const booking = await Booking.create({ tripId, userId, numberOfSeats, totalFare });
      
      trip.currentCapacity += numberOfSeats;
      await trip.save();

      const result = {
        id: booking.id,
        tripId: booking.tripId,
        userId: booking.userId,
        numberOfSeats: booking.numberOfSeats,
        createdAt: booking.createdAt,
        updatedAt: booking.updatedAt,
        totalFare,
        Trip: trip,
      };

      return res.status(201).send({
        message: 'Booking created successfully',
        data: result,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        message: 'Error creating booking',
        error,
      });
    }
  }

 async findAll(req, res) {
  try {
    const bookings = await Booking.findAll({
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
  async  findUserBookings(req, res) {
  const { userId } = req.params;
  try {
    const bookings = await Booking.findAll({
      where: { userId },
      attributes: { include: ['tripId'] },
    });
    const tripIds = bookings.map(booking => booking.tripId);
    if (tripIds.length === 0) {
      return res.status(200).send({
        message: 'User has no bookings',
        data: [],
      });
    }
    console.log(bookings.tripId)
    const trips = await Trip.findAll({
      where: { id: tripIds },
    });
    const data = bookings.map(booking => {
      const trip = trips.find(trip => trip.id === booking.tripId);
      if (trip) {
        return {
          id: booking.id,
          status: booking.status,
          tripOrigin: trip.origin,
          tripDestination: trip.destination,
          tripPrice: trip.fare,
          tripStartDate: trip.startDate,
          tripEndDate: trip.endDate,
        };
      }
      return null;
    }).filter(Boolean); // filter out null values
    return res.status(200).send({
      message: 'User bookings retrieved successfully',
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: 'Error retrieving user bookings',
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
