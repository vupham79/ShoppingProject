"use strict";
const db = require("./../models");
const table_names = [
  "admins",
  "customers",
  "products",
  "orders",
  "order_items",
  "delivery_addresses",
  "logins",
  "categories"
];
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await db.sequelize.query("SET CONSTRAINTS ALL DEFERRED");
    await db.sequelize.transaction(function(t1) {
      return Promise.all(
        table_names.map(name => {
          return [
            queryInterface.changeColumn(
              name,
              "id",
              {
                primaryKey: true,
                allowNull: false,
                type: Sequelize.CHAR(36)
              },
              { transaction: t1 }
            )
          ];
        })
      );
    });
    return db.sequelize.query("SET CONSTRAINTS ALL IMMEDIATE");
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
