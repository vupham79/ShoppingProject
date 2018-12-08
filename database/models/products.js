'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {
    timestamp: true,
  });
  products.associate = function(models) {
    products.hasOne(models.order_items, {
      foreignKey: 'product_id',
    });
    products.belongsTo(models.categories, {
      foreignKey: 'cat_id',
    });
  };
  return products;
};