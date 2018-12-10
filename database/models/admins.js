"use strict";
module.exports = (sequelize, DataTypes) => {
  const admins = sequelize.define(
    "admins",
    {
      id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1
      },
      username: {
        type: DataTypes.STRING(32)
      },
      password: {
        type: DataTypes.STRING(50)
      }
    },
    {
      timestamp: true,
      paranoid: true
    }
  );
  return admins;
};
