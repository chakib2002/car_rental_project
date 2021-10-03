require('dotenv').config()

const dotenv = process.env;

const config = {
  db: { 
    multipleStatements:true,
    connectionLimit :5, 
    password: dotenv.DB_PASSWORD, 
    user: dotenv.DB_USER, 
    database: dotenv.DB_DATABASE, 
    host: dotenv.DB_HOST,
    port: dotenv.DB_PORT 
  }
};
module.exports = config;