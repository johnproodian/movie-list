//import sequelize constructor from library
const Sequelize = require('sequelize');

require('dotenv').config();

//create connection to our database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 33006
});

module.exports = sequelize;