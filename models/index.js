const User = require('./User');


// associations

User.hasMany(hasWatched, {
    foreignKey: 'hasWatched_movieID'
});

User.hasMany(willWatch, {
    foreignKey: 'willWatch_movieID'
});




module.exports = { User, hasWatched, willWatch }