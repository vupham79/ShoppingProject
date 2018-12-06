'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    id: {
      primaryKey: true,
      type: DataTypes.STRING
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    timestamp: true,
  });
  categories.associate = (models) => {
    categories.hasMany(models.products, {
      foreignKey: 'cat_id',
    });
  };
  return categories;
};