import { sequelize, Sequelize } from "../index";
import Orders from "./orders";
import Products from "./products";

const Order_Items = sequelize.define(
  "order_items",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1
    },
    order_id: {
      allowNull: false,
      type: Sequelize.UUID
    },
    product_id: {
      allowNull: false,
      type: Sequelize.UUID
    },
    quantity: {
      allowNull: false,
      type: Sequelize.INTEGER,
      defaultValue: 0
    }
  },
  {
    timestamp: true,
    paranoid: true
  }
);
Order_Items.associate = () => {
  Order_Items.belongsTo(Orders, {
    foreignKey: "order_id",
    as: "order"
  });
  Order_Items.belongsTo(Products, {
    foreignKey: "product_id",
    as: "product"
  });
};
export default Order_Items;
