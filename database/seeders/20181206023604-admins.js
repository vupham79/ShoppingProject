'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('admins', 
    [
      {
        id: 'ff233600-fc24-11e8-997c-93e49f55c445',
        username: 'vuph',
        password: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '1d38a080-fc25-11e8-997c-93e49f55c44',
        username: 'henry',
        password: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('admins', null, {});
  }
  
};