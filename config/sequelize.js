const { Sequelize } = require('sequelize');
require('dotenv').config();

const connection = new Sequelize({
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host:process.env.DB_HOST,
        dialect: 'mysql'
    }
)

module.exports = connection;