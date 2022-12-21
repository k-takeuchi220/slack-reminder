module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWD,
    database: process.env.MYSQL_DB,
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    logging: false,
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWD,
    database: process.env.MYSQL_DB,
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    logging: false,
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWD,
    database: process.env.MYSQL_DB,
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
