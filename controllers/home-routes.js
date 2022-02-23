const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');


router.get('/', (req, res) => {
    console.log('======================');
    res.render('login', {
    // posts,
    // loggedIn: req.session.loggedIn
    });
});

router.get('/signup', (req, res) => {
    console.log('======================');
    res.render('signup', {
    });
});

router.get('/home', (req, res) => {
    console.log('======================');
    res.render('home', {
    });
});

module.exports = router;

