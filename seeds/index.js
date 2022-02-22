const seedMovies = require('./movie-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedMovies();

    process.exit(0);
};

seedAll();