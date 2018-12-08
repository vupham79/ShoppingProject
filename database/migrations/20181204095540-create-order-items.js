'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('order_items', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      order_id: {
        type: Sequelize.STRING,
        references: {
          model: 'orders',
          key: 'id',
        }
      },
      product_id: {
        type: Sequelize.STRING,
        references: {
          model: 'products',
          key: 'id',
        }
      },
      quantity: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('order_items');
  }
};