// database.js

const { Sequelize } = require('sequelize');

// Create a new Sequelize instance and configure it with your database settings
const database = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  database: 'marketplace',
  username: 'root',
  password: '',
});

module.exports = database;
