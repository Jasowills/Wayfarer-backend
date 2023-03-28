import {  DataTypes } from 'sequelize';
import db from "../database/database";
 
const Booking = db.define('Booking', {
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


Booking.associate = (models) => {
  Booking.belongsTo(models.Trip, { foreignKey: 'tripId' });
  Booking.belongsTo(models.User, { foreignKey: 'userId' });
};
db.sync()
export default Booking;
