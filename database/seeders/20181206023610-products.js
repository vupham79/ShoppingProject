'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', 
    [
      {
        id: 'P001',
        cat_id: 'CAT1',
        name: 'Broccoli',
        description: 'Green',
        image: 'https://cdn.deliciousmeetshealthy.com/wp-content/uploads/2017/07/Cucumber-Salad-Recipe-2.jpg',
        price: '5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'P002',
        cat_id: 'CAT2',
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
