const router = require('express').Router();

const userRoutes = require('./user-routes');
// const willWatchRoutes = require('./will-watch-routes');
// const haveWatchedRoutes = require('./have-watched-routes');
const movieRoutes = require('./movie-routes');

router.use('/users', userRoutes);
// router.use('/willWatch', willWatchRoutes);
// router.use('/haveWatched', haveWatchedRoutes);
router.use('/movies', movieRoutes);

module.exports = router;
