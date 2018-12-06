'use strict';
module.exports = (sequelize, DataTypes) => {
  const admins = sequelize.define('admins', {
    id: {
      primaryKey: true,
      type: DataTypes.STRING
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  });
  return admins;
};