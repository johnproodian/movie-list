const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class movie extends Model{}

movie.init(
    {
        id: {
            type: Datatypes.INTENGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true
        },
        movieName: {
            type: Datatypes.STRING,
            allowNull: false
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
        modelName: 'movie'
    }
);

module.exports = movie;