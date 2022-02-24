const { Movies } = require('../models')

const moviesData = [
    {
        movieName: 'Forest Gump'
    },
    {
        movieName: 'Mean Girls'
    },
    {
        movieName: 'A New Hope'
    },
    {
        movieName: 'Spaceballs'
    },
    {
        movieName: 'The Fifth Element'
    },
    {
        movieName: 'Death Becomes Her'
    },
    {
        movieName: 'The Breakfast Club'
    },
    {
        movieName: 'Clueless'
    },
    {
        movieName: 'The Wedding Singer'
    },
    {
        movieName: '10 Things I Hate About You'
    },
    {
        movieName: 'Scream'
    },
    {
        movieName: 'Twister'
    },
];

// const seedMovies = () => Movies.bulkCreate(moviesData);

module.exports = moviesData;