 import { DataTypes } from 'sequelize';
 import sequelize from '../config/database';

 const Booking = sequelize.define('Booking', {
   id: {
  type: DataTypes.UUID,
   allowNull: false,
   primaryKey: true,
   defaultValue: DataTypes.UUIDV4,
},
  userId: {
  type: DataTypes.UUID,
 allowNull: false,
},
  tripId: {
  type: DataTypes.UUID,
  allowNull: false,
},
 numberOfSeats: {
  type: DataTypes.INTEGER,
  allowNull: false,
},
});
sequelize.sync()
Booking.associate = (models) => {
Booking.belongsTo(models.Trip, { foreignKey: 'tripId' });
Booking.belongsTo(models.User, { foreignKey: 'userId' });
};

export default Booking;
