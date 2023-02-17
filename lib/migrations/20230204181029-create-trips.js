"use strict";

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Trips', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      origin: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fare: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      destination: {
        type: Sequelize.STRING,
        allowNull: false
      },
      startDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      endDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      currentCapacity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        allowIncrement: true
      },
      maximumCapacity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 20
      }
    });
  },
  down: function down(queryInterface) {
    return queryInterface.dropTable('Trips');
  }
};