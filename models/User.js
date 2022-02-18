const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypyt = require('bcrypt');

// Create user model

class User extends Model {
    checkpassword(loginpw) {
        return bcrypyt.compareSync(loginPw, this.password);
    }
};

User.init (
    {
        
    }
)