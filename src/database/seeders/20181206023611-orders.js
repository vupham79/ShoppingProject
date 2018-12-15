"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "orders",
      [
        {
          id: "dacadaf0-fc2f-11e8-9268-4f05863b1424",
          customer_id: "056a8e80-fac9-11e8-8d1f-6dd5cb5995f7",
          registered: true,
          delivery_add_id: "ff233600-fc24-11e8-997c-93e49f55c445",
          payment_type: "Credit Card",
          date: new Date(),
          status: "Pending",
          session: "",
          total: "30",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "09901f30-fc30-11e8-8470-9faecdc0b0d2",
          customer_id: "2f24ab20-fc22-11e8-9152-1bac78af5d28",
          registered: true,
          delivery_add_id: "1d38a080-fc25-11e8-997c-93e49f55c445",
          payment_type: "Credit Card",
          date: new Date(),
          status: "Pending",
          session: "",
          total: "30",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("orders", null, {});
  }
};
