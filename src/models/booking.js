module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    tripId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'trip',
        key: 'id',
      },
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    status: {
      type: DataTypes.ENUM('pending', 'confirmed', 'cancelled'),
      allowNull: false,
      defaultValue: 'pending',
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

  return Booking;
};
