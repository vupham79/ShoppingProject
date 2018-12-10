'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', 
    [
      {
        id: '63a85c60-fbc4-11e8-8f2a-0762d5266293',
        name: 'Vegetable',
        description: 'Imported from Sahara',
        image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/12_powerhouse_vegetables_slideshow/intro_cream_of_crop.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '3483ff30-fc27-11e8-ae56-4dc9cbe6076',
        name: 'Meat',
        description: 'Imported from North Pole',
        image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/12_powerhouse_vegetables_slideshow/intro_cream_of_crop.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
