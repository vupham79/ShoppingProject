'use strict';
module.exports = (sequelize, DataTypes) => {
  const order_items = sequelize.define('order_items', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    // order_id: DataTypes.STRING,
    // product_id: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  });
  order_items.associate = function(models) {
    order_items.belongsTo(models.orders);
    order_items.belongsTo(models.products);
  };
  return order_items;
};