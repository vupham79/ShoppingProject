import { sequelize, Sequelize } from "../index";
import Orders from "./orders";

const Delivery_Add_Id = sequelize.define(
  "delivery_add_id",
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
    }
  },
  {
    timestamp: true,
    paranoid: true
  }
);
Delivery_Add_Id.associate = () => {
  Delivery_Add_Id.hasMany(Orders, {
    foreignKey: "delivery_add_id"
  });
};
export default Delivery_Add_Id;
