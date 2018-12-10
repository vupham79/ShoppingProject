'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1
    },
    name: {
      type: DataTypes.STRING,
      unique: {
        arg: true,
        msg: "Product name duplicated",
      },
      // validate: {
      //   // notNull: {
      //   //   args: true,
      //   //   msg: 'Product name cannot be empty!'
      //   // },
      //   // notEmpty: true,
      // }
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: 'No description',
    },
    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      }
    },
    price: {
      type: DataTypes.STRING(36),
      defaultValue: '0',
      validate: {
        // notNull: true,
        // notEmpty: true,
      }
    },
  }, {
      timestamp: true,
      paranoid: true,
    });
  products.associate = function (models) {
    products.hasMany(models.order_items, {
      foreignKey: 'product_id',
    });
    products.belongsTo(models.categories, {
      foreignKey: 'cat_id',
      as: 'of_category'
    });
  };
  return products;
};