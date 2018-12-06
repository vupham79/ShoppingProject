'use strict';
module.exports = (sequelize, DataTypes) => {
  const logins = sequelize.define('logins', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  });
  logins.associate = function(models) {
    logins.belongsTo(models.customers);
  };
  return logins;
};