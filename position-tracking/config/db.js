require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
});

const DivPositionModel = require('../models/DivPosition');
const DivPosition = DivPositionModel(sequelize, DataTypes); 

module.exports = { sequelize, DivPosition };
