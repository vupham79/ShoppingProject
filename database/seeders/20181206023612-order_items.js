'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('order_items', 
    [
      {
        id: 'OI001',
        order_id: 'O001',
        product_id: 'P001',
        quantity: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'OI002',
        order_id: 'O001',
        product_id: 'P002',
        quantity: '4',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('order_items', null, {});
  }
};
