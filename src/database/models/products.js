import { sequelize, Sequelize } from "../index";
import Order_Items from "./order_items";
import Categories from "./categories";

const Products = sequelize.define(
  "products",
  {
    id: {
      primaryKey: true,
      allowNull: false,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: {
        arg: true,
        msg: "Product name duplicated"
      }
      // validate: {
      //   // notNull: {
      //   //   args: true,
      //   //   msg: 'Product name cannot be empty!'
      //   // },
      //   // notEmpty: true,
      // }
    },
    description: {
      type: Sequelize.STRING,
      defaultValue: "No description"
    },
    image: {
      type: Sequelize.STRING,
      validate: {
        isUrl: true
      }
    },
    price: {
      type: Sequelize.STRING(36),
      defaultValue: "0",
      allowNull: false,
      validate: {
        // notNull: true,
        notEmpty: true
      }
    }
  },
  {
    timestamp: true,
    paranoid: true
  }
);
Products.associate = () => {
  Products.hasMany(Order_Items, {
    foreignKey: "product_id"
  });
  Products.belongsTo(Categories, {
    foreignKey: "cat_id",
    as: "of_category"
  });
};
export default Products;
