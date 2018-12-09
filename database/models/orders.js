'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1
    },
    customer_id: {
      type: DataTypes.UUID,
      validate: {
        notNull: true,
        notEmpty: true,
      }
    },
    registered: {
      type: DataTypes.BOOLEAN,
      validate: {
        notNull: true,
        notEmpty: true,
      }
    },
    delivery_add_id: {
      type: DataTypes.UUID,
      validate: {
        notNull: true,
        notEmpty: true,
      }
    },
    payment_type: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: true,
      }
    },
    date: {
      type: DataTypes.DATE,
      validate: {
        notNull: true,
        notEmpty: true,
      }
    },
    status: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: true,
      }
    },
    session: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: true,
      }
    },
    total: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      validate: {
        notNull: true,
        notEmpty: true,
      }
    }
  }, {
    timestamp: true,
    paranoid: true,
  });
  orders.associate = function(models) {
    orders.hasMany(models.order_items, {
      foreignKey: "order_id",
    });
    orders.belongsTo(models.customers, {
      foreignKey: "customer_id",
      as: 'order_customer'
    });
    orders.belongsTo(models.delivery_addresses, {
      foreignKey: "delivery_add_id",
      as: 'order_deliveryAddress'
    });
  };
  return orders;
};