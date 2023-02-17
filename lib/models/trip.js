"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = function _default(sequelize, DataTypes) {
  var Trip = sequelize.define('Trip', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fare: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    currentCapacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      allowIncrement: true
    },
    maximumCapacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 20
    }
  });
  Trip.associate = function (models) {
    Trip.hasMany(models.Booking, {
      foreignKey: 'tripId'
    });
  };
  return Trip;
};
exports["default"] = _default;