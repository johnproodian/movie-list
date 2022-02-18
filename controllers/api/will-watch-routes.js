const router = require('express').Router();
const { willWatch } = require('../../models');
// authgaurd? withAuth?

// GET all 
router.get('/', (req, res) => {
    willWatch.findAll()
        .then(dbWillWatchData => res.json(dbWillWatchData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST movie to willWatch db
router.post('/', (req, res) => {
    willWatch.create({
        name: req.body.name,
        date: req.body.date,
        // should this req.session.user_id???
        user_id: req.body.user_id
    })
        .then(dbWillWatchData => res.json(dbWillWatchData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

// DELETE movie from willWatch db
router.delete('/:id', (req, res) => {
    willWatch.destroy({
        where:  {
            id: req.params.id
        }
    })
        .then(dbWillWatchData => {
            if (!dbWillWatchData) {
                res.status(404).json({ message: 'No movie found with this id!' });
                return;
            }
            res.json(dbWillWatchData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});