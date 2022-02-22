const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypyt = require('bcrypt');

// Create user model, This method runs on instance data per user to check password

class User extends Model {
    checkpassword(loginPw) {
        return bcrypyt.compareSync(loginPw, this.password);
    }
};

// this code defines table columns and config for the database. Id, username, email and password are columns. Password is encrypted.

User.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5]
            }
        }
    },
    {
        hooks: {
            // these hooks set up lifecycle hooks to encrypt passwords and update password through newUserData
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypyt.hash(newUserData.password, 10);
                return newUserData;
            },

            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypyt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },

        // table config options
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;