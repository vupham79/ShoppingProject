'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('delivery_addresses', 
    [
      {
        id: 'ff233600-fc24-11e8-997c-93e49f55c445',
        forename: 'Kevin',
        surname: 'Iowa',
        add1: '1 Ho Ba Phan',
        add2: '2 Ho Ba Phan',
        add3: '3 Ho Ba Phan',
        postcode: '70000',
        phone: '0906426802',
        email: 'vuph79@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '1d38a080-fc25-11e8-997c-93e49f55c445',
        forename: 'Kevin',
        surname: 'Iowa',
        add1: '1 Ho Ba Phan',
        add2: '2 Ho Ba Phan',
        add3: '3 Ho Ba Phan',
        postcode: '70000',
        phone: '0906426802',
        email: 'vuph@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('delivery_addresses', null, {});
  }
};
