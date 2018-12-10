'use strict';
module.exports = (sequelize, DataTypes) => {
  const order_items = sequelize.define('order_items', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1
    },
    order_id: {
      type: DataTypes.UUID,
    },
    product_id: {
      type: DataTypes.UUID,
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    }
  }, {
    timestamp: true,
    paranoid: true,
  });
  order_items.associate = function(models) {
    order_items.belongsTo(models.orders, {
      foreignKey: 'order_id',
      as: 'order'
    });
    order_items.belongsTo(models.products, {
      foreignKey: 'product_id',
      as: 'product'
    });
  };
  return order_items;
};