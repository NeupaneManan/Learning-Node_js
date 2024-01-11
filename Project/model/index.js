const dbconfig = require("../dbconfig/dbconfig.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  dbconfig.db,
  dbconfig.username,
  dbconfig.password,
  {
    host: dbconfig.host,
    dialect: dbconfig.dialect,
    pool: {
      max: dbconfig.pool.max,
      min: dbconfig.pool.min,
      accurate: dbconfig.pool.accurate, // Corrected property name
      idle: dbconfig.pool.idle,
    },
  }
);

const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connectDatabase();

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.blogs = require("../model/blog.js")(sequelize, Sequelize);

module.exports = db;
