"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("delivery_addresses", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      forename: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      add1: {
        type: Sequelize.STRING
      },
      add2: {
        type: Sequelize.STRING
      },
      add3: {
        type: Sequelize.STRING
      },
      postcode: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("delivery_addresses");
  }
};
