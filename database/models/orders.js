'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    // customer_id: DataTypes.STRING,
    // registered: DataTypes.BOOLEAN,
    // delivery_add_id: DataTypes.STRING,
    payment_type: DataTypes.STRING,
    date: DataTypes.DATE,
    status: DataTypes.STRING,
    session: DataTypes.STRING,
    total: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    }
  }, {
    timestamp: true,
  });
  orders.associate = function(models) {
    orders.hasMany(models.order_items, {
      foreignKey: "order_id",
    });
    orders.belongsTo(models.customers, {
      foreignKey: "customer_id",
    });
    orders.belongsTo(models.customers, {
      foreignKey: "registered",
    })
    orders.belongsTo(models.delivery_addresses, {
      foreignKey: "delivery_add_id",
    });
  };
  return orders;
};