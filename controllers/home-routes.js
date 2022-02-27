const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Movie } = require('../models');


router.get('/', (req, res) => {
    console.log('======================');
    if (!req.session.loggedIn) {
        res.redirect('/login');
        return;
    }

    let wwMovies;
    let hwMovies;

    Movie.findAll({
        where: {
            willWatch: true
        },
        attributes: [
            'id',
            'movieName',
        ]
    })
        .then(dbMovieData => {
            wwMovies = dbMovieData.map(wwMovie => wwMovie.get({ plain: true }));
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

    Movie.findAll({
        where: {
            haveWatched: true
        },
        attributes: [ 'id', 'movieName' ]
    })
        .then(dbMovieData => {
            hwMovies = dbMovieData.map(hwMovie => hwMovie.get({ plain: true}));
            console.log('wwMovies: ' + wwMovies, 'hwMovies: ' + hwMovies);
            res.render('home', { 
                wwMovies,
                hwMovies,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    
});

router.get('/signup', (req, res) => {
    console.log('======================');
    res.render('signup', {
        login: true
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    console.log('======================');
    
    res.render('login', {
        login: true
    });
});


module.exports = router;

