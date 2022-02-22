const { Movies } = require('../models')

const moviesData = [
    {

    }
];

const seedMovies = () => Movies.bulkCreate(moviesData);

module.exports = seedMovies;