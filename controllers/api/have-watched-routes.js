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

// Add 

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






module.exports = router;
