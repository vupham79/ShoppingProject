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
  });
  products.associate = function(models) {
    products.hasMany(models.order_items, {
      foreignKey: 'product_id',
    });
    products.belongsTo(models.categories);
  };
  return products;
};