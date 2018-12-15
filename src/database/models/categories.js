import { sequelize, Sequelize } from "../index";
import Products from "./products";

const Categories = sequelize.define(
  "categories",
  {
    id: {
      primaryKey: true,
      allowNull: false,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1
    },
    name: {
      type: Sequelize.STRING(100),
      allowNull: false,
      unique: {
        arg: true,
        msg: "Category name duplicated"
        // validate: {
        //   notNull: true,
        //   notEmpty: true,
        // }
      }
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
    }
  },
  {
    timestamp: true,
    paranoid: true,
    uniqueKeys: {
      fields: ["name"]
    }
  }
);
Categories.associate = () => {
  Categories.hasMany(Products, {
    foreignKey: "cat_id"
  });
};
export default Categories;
