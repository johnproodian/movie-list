const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');


class willWatch extends Model {}

willWatch.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        movieName: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        userId: {
            type: Datatypes.INTEGER,
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

module.exports = willWatch