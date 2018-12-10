"use strict";
module.exports = (sequelize, DataTypes) => {
  const delivery_addresses = sequelize.define(
    "delivery_addresses",
    {
      id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1
      },
      forename: {
        type: DataTypes.STRING(16)
      },
      surname: {
        type: DataTypes.STRING(16)
      },
      add1: {
        type: DataTypes.STRING(60)
      },
      add2: {
        type: DataTypes.STRING(60)
      },
      add3: {
        type: DataTypes.STRING(60)
      },
      postcode: {
        type: DataTypes.STRING(10)
      },
      phone: {
        type: DataTypes.STRING(16)
      },
      email: {
        type: DataTypes.STRING,
        unique: {
          arg: true,
          msg: "Email duplicated"
        },
        validate: {
          isEmail: true
        }
      }
    },
    {
      timestamp: true,
      paranoid: true
    }
  );
  delivery_addresses.associate = function(models) {
    delivery_addresses.hasMany(models.orders, {
      foreignKey: "delivery_add_id"
    });
  };
  return delivery_addresses;
};
