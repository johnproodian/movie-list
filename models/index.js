const User = require('./User');

// associations

User.hasMany(hasWatched, {
    foreignKey: id
});

User.hasMany(willWatch, {
    foreignKey: id
});

User.hasMany(movie, {
    foreignKey:id
});

hasWatched.belongsTo(User, {
    foreignKey: 'user_id'
});

hasWatched.belongsTo(User, {
    foreignKey: 'user_id'
});




module.exports = { User }