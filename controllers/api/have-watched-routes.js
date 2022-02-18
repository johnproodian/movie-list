const router = require('express').Router();
const { haveWatched } = require('../../models');
// authgaurd? withAuth?

// GET all 
router.get('/', (req, res) => {
    haveWatched.findAll()
        .then(dbHaveWatchedData => res.json(dbHaveWatchedData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST movie to hasWatched db
router.post('/', (req, res) => {
    haveWatched.create({
        name: req.body.name,
        date: req.body.date,
        // should this req.session.user_id???
        user_id: req.body.user_id
    })
        .then(dbHaveWatchedData => res.json(dbHaveWatchedData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

// DELETE movie from hasWatched db
router.delete('/:id', (req, res) => {
    haveWatched.destroy({
        where:  {
            id: req.params.id
        }
    })
        .then(dbHaveWatchedData => {
            if (!dbHaveWatchedData) {
                res.status(404).json({ message: 'No movie found with this id!' });
                return;
            }
            res.json(dbHaveWatchedData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});






module.exports = router;
