const imdbRoutes =require('./imdb');
const router = require('express').Router();

router.use('/imdb', imdbRoutes); 

module.exports = router;
