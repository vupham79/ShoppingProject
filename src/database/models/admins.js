import { sequelize, Sequelize } from "../index";

const Admins = sequelize.define(
  "admins",
  {
    id: {
      primaryKey: true,
      allowNull: false,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1
    },
    username: {
      allowNull: false,
      type: Sequelize.STRING(32)
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING(50)
    }
  },
  {
    timestamp: true,
    paranoid: true
  }
);

Admins.associate = () => {};

export default Admins;
