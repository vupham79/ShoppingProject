'use strict';
module.exports = (sequelize, DataTypes) => {
  const customers = sequelize.define('customers', {
    id: {
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
    email: DataTypes.STRING,
    registered: DataTypes.BOOLEAN,
  }, {
    timestamp: true,
  });
  customers.associate = (models) => {
    customers.hasMany(models.orders, {
      foreignKey: 'customer_id',
    });
    customers.hasMany(models.orders, {
      foreignKey: 'registered',
    });
  };
  return customers;
};