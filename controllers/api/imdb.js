require('dotenv').config();
const imdb = require("imdb-api");
const router = require('express').Router();

router.get('/', (req,res) => {
    (async function() {
        const movie = await imdb.get({name: "Toxic Avenger"}, {apiKey: process.env.IMDB_KEY, baseURL: "http://localhost:3001"});
        console.log(movie);
        res.status(200).json(movie);
    })()
})

module.exports = router;
