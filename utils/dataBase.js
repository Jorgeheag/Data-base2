const { Sequelize, DataTypes } = require('sequelize');


const db = new Sequelize({
    dialect:'postgres',
    host:'localhost',
    username:'postgres',
    password:'jorgehh1989',
    port: 5432,
    database: 'Entregable 2',
    logging: false
});

module.exports = { db, DataTypes };