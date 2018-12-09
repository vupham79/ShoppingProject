'use strict';
module.exports = (sequelize, DataTypes) => {
  const logins = sequelize.define('logins', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1
    },
    username: {
      type: DataTypes.STRING(16),
    },
    password: {
      type: DataTypes.STRING(50),
    }
  }, {
    timestamp: true,
    paranoid: true,
  });
  logins.associate = function(models) {
    logins.belongsTo(models.customers);
  };
  return logins;
};