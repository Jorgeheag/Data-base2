const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv')

dotenv.config({path:'./config.env'})


const db = new Sequelize({
    dialect:'postgres',
    host: process.env.DB_HOST,
    username:process.env.DB_USER,
    password:process.env.DB_PASWWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DB

});

module.exports = { db, DataTypes };