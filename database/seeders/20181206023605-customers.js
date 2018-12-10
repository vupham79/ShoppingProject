'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('customers', 
    [
      {
        id: '056a8e80-fac9-11e8-8d1f-6dd5cb5995f7',
        forename: 'Vu',
        surname: 'Pham',
        add1: '1 Nguyen Thai Binh',
        add2: '2 Nguyen Thai Binh',
        add3: '3 Nguyen Thai Binh',
        postcode: '70000',
        phone: '0906426802',
        email: 'vuph@gmail.com',
        registered: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2f24ab20-fc22-11e8-9152-1bac78af5d28',
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
      {
        id: '57154720-fc22-11e8-b900-23bfd5baccb2',
        forename: 'Vu',
        surname: 'Pham',
        add1: '1 Nguyen Thai Binh',
        add2: '2 Nguyen Thai Binh',
        add3: '3 Nguyen Thai Binh',
        postcode: '70000',
        phone: '0906426802',
        email: 'vuph123@gmail.com',
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
