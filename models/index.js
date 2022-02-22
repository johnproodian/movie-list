const User = require('./User');
const hasWatched = require('./hasWatched');
const willWatch = require('./willWatch');
const Movie = require('./movie');

// associations

User.hasMany(hasWatched, {
    foreignKey: 'id'
});

User.hasMany(willWatch, {
    foreignKey: 'id'
});

User.hasMany(Movie, {
    foreignKey: 'id'
});

hasWatched.belongsTo(User, {
    foreignKey: 'user_id'
});

hasWatched.belongsTo(User, {
    foreignKey: 'user_id'
});




module.exports = { User }