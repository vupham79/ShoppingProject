import { sequelize, Sequelize } from "../index";
import Orders from "./order_items";

const Customers = sequelize.define(
  "customers",
  {
    id: {
      primaryKey: true,
      allowNull: false,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1
    },
    forename: {
      allowNull: false,
      type: Sequelize.STRING(16)
    },
    surname: {
      allowNull: false,
      type: Sequelize.STRING(16)
    },
    add1: {
      type: Sequelize.STRING(60)
    },
    add2: {
      type: Sequelize.STRING(60)
    },
    add3: {
      type: Sequelize.STRING(60)
    },
    postcode: {
      type: Sequelize.STRING(10)
    },
    phone: {
      type: Sequelize.STRING(16)
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: {
        arg: true,
        msg: "Email duplicated"
      },
      validate: {
        isEmail: true
      }
    },
    registered: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },
  {
    timestamp: true,
    paranoid: true
  }
);

Customers.associate = () => {
  Customers.hasMany(Orders, {
    foreignKey: "customer_id"
  });
};

export default Customers;
