'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('logins',
      [
        {
          id: '42f24a20-fc22-11e8-9152-1bac78af5d28',
          customer_id: '2f24ab20-fc22-11e8-9152-1bac78af5d28',
          username: 'vuph',
          password: '123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('logins', null, {});
  }
};
