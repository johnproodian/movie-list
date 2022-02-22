const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Vote } = require('../models');

// 
router.get('/', (req, res) => {
    console.log('======================');
    res.render('login', {
    // posts,
    // loggedIn: req.session.loggedIn
    });
});

router.get('/signup', (req, res) => {
    console.log('======================');
    res.render('signup', {});
});

router.get('/reset', (req, res) => {
    console.log('======================');
    res.render('reset', {});
});


module.exports = router;
