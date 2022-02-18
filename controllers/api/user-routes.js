const router = require('express').Router();
const { User, haveWatched, willWatch } = require('../../models');
// need to create this file...
const sequelize = require('../config/connection');

