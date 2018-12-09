'use strict';
module.exports = (sequelize, DataTypes) => {
  const customers = sequelize.define('customers', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1
    },
    forename: {
      type: DataTypes.STRING(16),
    },
    surname: {
      type: DataTypes.STRING(16),
    },
    add1: {
      type: DataTypes.STRING(60),
    },
    add2: {
      type: DataTypes.STRING(60),
    },
    add3: {
      type: DataTypes.STRING(60),
    },
    postcode: {
      type: DataTypes.STRING(10),
    },
    phone: {
      type: DataTypes.STRING(16),
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      }
    },
    registered: {
      type: DataTypes.BOOLEAN,
      validate: {
        notNull: true,
        notEmpty: true,
      }
    },
  }, {
    timestamp: true,
    paranoid: true,
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