import { sequelize, Sequelize } from "../index";
import Customers from "./customers";

const Logins = sequelize.define(
  "logins",
  {
    id: {
      primaryKey: true,
      allowNull: false,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1
    },
    username: {
      type: Sequelize.STRING(16)
    },
    password: {
      type: Sequelize.STRING(50)
    }
  },
  {
    timestamp: true,
    paranoid: true
  }
);
Logins.associate = () => {
  Logins.belongsTo(Customers);
};
export default Logins;
