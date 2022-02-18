const router = require('express').Router();

const userRoutes = require('./user-routes');
const willWatchRoutes = require('./will-watch-routes');
const haveWatchedRoutes = require('./have-watched-routes');

router.use('/user', userRoutes);
router.use('/willWatch', willWatchRoutes);
router.use('/haveWatched', haveWatchedRoutes);

module.exports = router;
