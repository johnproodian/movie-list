const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');
const movieSeeds = require('../seeds/movie-seeds')

router.get('/', (req, res) => {
    console.log('======================');
    res.render('login', {
    });
});

router.get('/signup', (req, res) => {
    console.log('======================');
    res.render('signup', {
    });
});

router.get('/home', (req, res) => {
    console.log('======================');
    res.render('home', {
    // loggedIn: req.session.loggedIn
    movies: movieSeeds
    });
});

module.exports = router;

