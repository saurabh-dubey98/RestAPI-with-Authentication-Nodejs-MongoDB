const express = require('express');
const router = express.Router();

const { getMovies, addMovie, getSingleMovie, updateMovie, deleteMovie } = require('../controllers/moviesController');

router.route('/')
    .get(getMovies)
    .post(addMovie)

router.route('/:id')
    .get(getSingleMovie)
    .put(updateMovie)
    .delete(deleteMovie)

module.exports = router;