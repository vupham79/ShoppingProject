'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('admins', 
    [
      {
        id: '1',
        username: 'vuph',
        password: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2',
        username: 'henry',
        password: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '3',
        username: 'peter',
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