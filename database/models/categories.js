'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1
    },
    name: {
      type: DataTypes.STRING(100),
      unique: {
        arg: true,
        msg: "Category name duplicated",
      // validate: {
      //   notNull: true,
      //   notEmpty: true,
      // }
    }},
    description: {
      type: DataTypes.STRING,
      defaultValue: 'No description',
    },
    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      }
    }
  }, {
      timestamp: true,
      paranoid: true,
      uniqueKeys: {
        fields: ['name']
      }
    });
  categories.associate = (models) => {
    categories.hasMany(models.products, {
      foreignKey: 'cat_id',
    });
  };
  return categories;
};