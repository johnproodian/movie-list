const router = require('express').Router();
const { Movie } = require('../../models');

// GET willWatch = true movies from movies table

// PUT route that changes movie willWatch to true
router.put('/willWatch', (req, res) => {
    Movie.update({
        willWatch: true
    },
    {
        where: {
            movieName: req.body.movieName
        }
    })
});

// PUT route that changes movie willWatch to false, hasWatched to true
router.put('/hasWatched', (req, res) => {
    Movie.update({
        willWatch: false,
        hasWatched: true
    },
    {
        where: {
            movieName: req.body.movieName
        }
    });
});

// PUT route that removes hasWatched
router.put('/hasWatchedFalse', (req, res) => {
    Movie.update({
        willWatch: false
    },
    {
        where: {
            movieName: req.body.movieName
        }
    });
});

// PUT route that removes willWatch w/o adding it to hasWatched
router.put('/willWatchFalse', (req, res) => {
    Movie.update({
        hasWatched: false
    },
    {
        where: {
            movieName: req.body.movieName
        }
    });
});


module.exports = router;