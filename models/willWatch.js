const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class willWatch extends Model {}

willWatch.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        movieName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        moduleName: 'willWatch'
    }
);

module.exports = willWatch;