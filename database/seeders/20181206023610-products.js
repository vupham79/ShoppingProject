'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', 
    [
      {
        id: '73161030-fc27-11e8-9ff6-555720754048',
        cat_id: '63a85c60-fbc4-11e8-8f2a-0762d5266293',
        name: 'Broccoli',
        description: 'Green',
        image: 'https://cdn.deliciousmeetshealthy.com/wp-content/uploads/2017/07/Cucumber-Salad-Recipe-2.jpg',
        price: '5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '893b7760-fc27-11e8-a869-957f4105090f',
        cat_id: '63a85c60-fbc4-11e8-8f2a-0762d5266293',
        name: 'Cucumber',
        description: 'Fresh',
        image: 'https://cdn.deliciousmeetshealthy.com/wp-content/uploads/2017/07/Cucumber-Salad-Recipe-2.jpg',
        price: '4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};
