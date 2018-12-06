'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('delivery_addresses', 
    [
      {
        id: 'A001',
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
        id: 'A002',
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
        id: 'A003',
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
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('delivery_addresses', null, {});
  }
};
