import { sequelize, Sequelize } from "../index";
import Customers from "./customers";
import Order_Items from "./order_items";
import Delivery_Addresses from "./delivery_addresses";

const Orders = sequelize.define(
  "orders",
  {
    id: {
      primaryKey: true,
      allowNull: false,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1
    },
    customer_id: {
      type: Sequelize.UUID,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    registered: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    delivery_add_id: {
      type: Sequelize.UUID,
      allowNull: false
    },
    payment_type: {
      type: Sequelize.STRING,
      defaultValue: "Credit Card",
      values: ["Credit Card", "Cash", "COD"],
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    date: {
      type: Sequelize.DATE,
      defaultValue: new Date(),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    status: {
      type: Sequelize.STRING,
      defaultValue: "Pending",
      values: ["Pending", "Delivered", "Paid"],
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    session: {
      type: Sequelize.STRING,
      allowNull: false
    },
    total: {
      type: Sequelize.FLOAT,
      defaultValue: 0,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  },
  {
    timestamp: true,
    paranoid: true
  }
);
Orders.associate = () => {
  Orders.hasMany(Order_Items, {
    foreignKey: "order_id"
  });
  // Orders.belongsTo(Customers, {
  //   foreignKey: "customer_id",
  //   as: "order_customer"
  // });
  Orders.belongsTo(Delivery_Addresses, {
    foreignKey: "delivery_add_id",
    as: "order_deliveryAddress"
  });
};
export default Orders;
