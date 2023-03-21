import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize("postgres://wuwsymwj:McUtU3Hxw1AoJGldP759hyih1gux8NC1@snuffleupagus.db.elephantsql.com/wuwsymwj")
 
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


Booking.associate = (models) => {
  Booking.belongsTo(models.Trip, { foreignKey: 'tripId' });
  Booking.belongsTo(models.User, { foreignKey: 'userId' });
};
sequelize.sync()
export default Booking;
