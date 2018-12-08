'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('customers', 
    [
      {
        id: 'C001',
        forename: 'Vu',
        surname: 'Pham',
        add1: '1 Nguyen Thai Binh',
        add2: '2 Nguyen Thai Binh',
        add3: '3 Nguyen Thai Binh',
        postcode: '70000',
        phone: '0906426802',
        email: 'vuph79@gmail.com',
        registered: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('customers', null, {});
  }
};
