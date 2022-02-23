const router = require('express').Router();
// const { json } = require('express/lib/response');
const { Movie } = require('../../models');

// GET all movies
router.get('/', (req, res) => {
    Movie.findAll({
        attributes: [
            'id',
            'movieName',
            'willWatch',
            'haveWatched'
        ]
    })
        .then(dbMovieData => res.json(dbMovieData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET willWatch = true movies from movies table
router.get('/:id', (req, res) => {
    Movie.findOne({
        where: {
            willWatch: true
        },
        attribues: [
            'id',
            'movieName'
        ]
    }
)
    .then(dbMovieData => {
        if (!dbMovieData) {
            res.status(404).json({ message: 'No movies found with this name!' });
            return;
        }
        res.json(dbMovieData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});


// PUT api/movies/willWatch route that changes movie willWatch to true
router.put('/willWatch', (req, res) => {
    Movie.update({
        willWatch: true
    },
    {
        where: {
            movieName: req.body.movieName
        }
    }
)
    .then(dbMovieData => {
        if (!dbMovieData) {
            res.status(404).json({ message: 'No movie found with this name!' });
            return;
        }
        res.json(dbMovieData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// PUT route api/movies/hasWatched that changes movie willWatch to false, hasWatched to true
router.put('/hasWatched', (req, res) => {
    Movie.update({
        willWatch: false,
        hasWatched: true
    },
    {
        where: {
            movieName: req.body.movieName
        }
    }
)
    .then(dbMovieData => {
        if (!dbMovieData) {
            res.status(404).json({ message: 'No movie found with this name!' });
            return;
        }
        res.json(dbMovieData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// PUT route api/movies/hasWatchedFalse that removes hasWatched
router.put('/hasWatchedFalse', (req, res) => {
    Movie.update({
        hasWatched: false
    },
    {
        where: {
            movieName: req.body.movieName
        }
    }
)
    .then(dbMovieData => {
        if (!dbMovieData) {
            res.status(404).json({ message: 'No movie found with this name!' });
            return;
        }
        res.json(dbMovieData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// PUT route api/movies/willWatchFalse that removes willWatch w/o adding it to hasWatched
router.put('/willWatchFalse', (req, res) => {
    Movie.update({
        willWatch: false
    },
    {
        where: {
            movieName: req.body.movieName
        }
    }
)
    .then(dbMovieData => {
        if (!dbMovieData) {
            res.status(404).json({ message: 'No movie found with this name!' });
            return;
        }
        res.json(dbMovieData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});


module.exports = router;