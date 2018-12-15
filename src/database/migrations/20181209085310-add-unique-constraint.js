"use strict";
const db = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await db.sequelize.query("SET CONSTRAINTS ALL DEFERRED");
    Promise.all([
      queryInterface.addConstraint("categories", ["name"], {
        type: "unique",
        name: "category_name_index"
      }),
      queryInterface.addConstraint("products", ["name"], {
        type: "unique",
        name: "product_name_index"
      }),
      queryInterface.addConstraint("customers", ["email"], {
        type: "unique",
        name: "customer_email_index"
      }),
      queryInterface.addConstraint("delivery_addresses", ["email"], {
        type: "unique",
        name: "delivery_address_email_index"
      }),
      queryInterface.addConstraint("orders", ["customer_id", "session"], {
        type: "unique",
        name: "order_customerID_session_index"
      }),
      queryInterface.addConstraint("order_items", ["order_id", "product_id"], {
        type: "unique",
        name: "item_orderID_productID_index"
      }),
      queryInterface.addConstraint("logins", ["username"], {
        type: "unique",
        name: "login_username_index"
      }),
      queryInterface.addConstraint("admins", ["username"], {
        type: "unique",
        name: "admin_username_index"
      })
    ]);
    return db.sequelize.query("SET CONSTRAINTS ALL IMMEDIATE");
  },

  // queryInterface.addIndex('products', ['name']);
  // queryInterface.addIndex('admins', ['username']);
  // queryInterface.addIndex('customers', ['email']);
  // queryInterface.addIndex('delivery_addresses', ['email']);
  // queryInterface.addIndex('logins', ['username']);

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
 
      Example:
      return queryInterface.dropTable('users');
    */
  }
};
