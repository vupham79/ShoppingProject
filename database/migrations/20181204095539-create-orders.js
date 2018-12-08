'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      customer_id: {
        type: Sequelize.STRING,
        references: {
          model: 'customers',
          key: 'id'
        },
        allowNull: false
      },
      registered: {
        type: Sequelize.BOOLEAN,
      },
      delivery_add_id: {
        type: Sequelize.STRING,
        references: {
          model: 'delivery_addresses',
          key: 'id',
        }
      },
      payment_type: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      session: {
        type: Sequelize.STRING
      },
      total: {
        type: Sequelize.FLOAT
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
        type: Sequelize.DATE,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orders');
  }
};