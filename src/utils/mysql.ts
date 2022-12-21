const Sequelize = require('sequelize');

export const sequelize = new Sequelize(
  process.env.MYSQL_DB,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWD,
  {
    dialect: 'mysql',
    host: process.env.MYSQL_HOST,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);
