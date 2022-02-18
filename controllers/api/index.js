const router = require('express').Router();

const userRoutes = require('./user-routes');
const toWatchRoutes = require('./will-watch-routes');
const haveWatchedRoutes = require('./have-watched-routes');

router.use('/user', userRoutes);
router.use('/toWatch', toWatchRoutes);
router.use('/haveWatched', haveWatchedRoutes);

module.exports = router;
