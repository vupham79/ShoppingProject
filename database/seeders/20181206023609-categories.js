'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', 
    [
      {
        id: 'CAT1',
        name: 'Vegetables',
        description: 'Imported from Sahara',
        image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/12_powerhouse_vegetables_slideshow/intro_cream_of_crop.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'CAT2',
        name: 'Vegetables',
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
