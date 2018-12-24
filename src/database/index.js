import {
  databaseHost,
  databaseName,
  databasePwd,
  databaseUser
} from "../config/config";

// const fs = require("fs");
// const path = require("path");
const Sequelize = require("sequelize");
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || "development";
const db = {};
const sequelize = new Sequelize(databaseName, databaseUser, databasePwd, {
  dialect: "postgres",
  host: databaseHost
});

// TEST CONNECTION
sequelize
  .authenticate()
  .then(() => {
    console.log("DB Connected");
  })
  .catch(e => {
    console.error("Unable to connect to the database:", e);
  });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;
export { sequelize, Sequelize };
