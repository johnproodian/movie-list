const router = require('express').Router();
// const { json } = require('express/lib/response');
const { Movie } = require('../../models');

// POST new movies to the movies db
router.post('/', (req, res) => {
    Movie.create({
        movieName: req.body.movieName
    })
        .then(dbMovieData => {
            res.json(dbMovieData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

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
router.get('/willWatch', (req, res) => {
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
        willWatch: true,
        haveWatched: false
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
router.put('/haveWatched/', (req, res) => {
    Movie.update({
        willWatch: false,
        haveWatched: true
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
router.put('/haveWatchedFalse', (req, res) => {
    Movie.update({
        haveWatched: false
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

// Other routes:
    // PUT --> straight to haveWatched (make sure to make willWatch false)
    // GET --> haveWAtched? But it might be better just to call both with the get all


module.exports = router;