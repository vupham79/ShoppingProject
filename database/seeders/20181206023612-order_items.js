'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('order_items', 
    [
      {
        id: '36ec0f70-fc30-11e8-b397-1dc5512efb47',
        order_id: 'dacadaf0-fc2f-11e8-9268-4f05863b1424',
        product_id: '73161030-fc27-11e8-9ff6-555720754048',
        quantity: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '437f3500-fc30-11e8-b397-1dc5512efb4',
        order_id: '09901f30-fc30-11e8-8470-9faecdc0b0d2',
        product_id: '893b7760-fc27-11e8-a869-957f4105090f',
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
