'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orders', 
    [
      {
        id: 'O001',
        customer_id: 'C001',
        registered: true,
        delivery_add_id: 'A002',
        payment_type: 'Credit Card',
        date: new Date(),
        status: 'Pending',
        session: '',
        total: '30',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', null, {});
  }
};
