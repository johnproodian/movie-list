const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');


router.get('/', (req, res) => {
    console.log('======================');
    if (!req.session.loggedIn) {
        res.redirect('/login');
        return;
    }
    res.render('home', {
    // posts,
    // loggedIn: req.session.loggedIn
    });
});

router.get('/signup', (req, res) => {
    console.log('======================');
    res.render('signup', {
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    console.log('======================');
    
    res.render('login', {
    });
});

module.exports = router;

