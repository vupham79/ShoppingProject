'use strict';
module.exports = (sequelize, DataTypes) => {
  const delivery_addresses = sequelize.define('delivery_addresses', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    forename: DataTypes.STRING,
    surname: DataTypes.STRING,
    add1: DataTypes.STRING,
    add2: DataTypes.STRING,
    add3: DataTypes.STRING,
    postcode: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    timestamp: true,
  });
  delivery_addresses.associate = function(models) {
    delivery_addresses.hasMany(models.orders, {
      foreignKey: 'delivery_add_id',
    });
  };
  return delivery_addresses;
};