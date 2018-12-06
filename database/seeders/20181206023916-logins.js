'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('logins', 
    [
      {
      id: 'L001',
      customer_id: 'C001',
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
