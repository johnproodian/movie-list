const { Model, Datatypes } = require('sequelize');

const sequelize = require('../config/connection');

class hasWatched extends Model {}

hasWatched.init(
    {
        id: {
            type: Datatypes.INTENGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        movieName:{
            type: Datatypes.STRING,
            allowNull: false
        },
        // date: {}, not sure how to make date model
        user_id: {
            type: Datatypes.INTENGER,
            references: {
                model: 'user',
                key: "id"
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'hasWatched'
    }
);

module.exports = hasWatched

// sugestion for future addON 1.catagorize by genre