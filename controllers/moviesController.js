const asyncHandler = require('express-async-handler');
const movieModel = require('../models/movieModel');

// For getting all the movies
const getMovies = asyncHandler(async (req, res) => {
    const movies = await movieModel.find();
    if (!movies) {
        throw new Error('Movies not found!')
    }

    res.status(200).json(movies);
})

// For getting only one movie
const getSingleMovie = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const movie = await movieModel.findById(id);
    if (!movie) {
        throw new Error('The movie you are looking for is not in the our database.')
    }
    res.status(200).json(movie);
})

// For adding a new movie to the database
const addMovie = asyncHandler(async (req, res) => {
    const { movieName } = req.body;
    if (!movieName) {
        res.status(400)
        throw new Error('Movie name is required!')
    }
    const movie = await movieModel.create({ movieName });
    res.status(201).json(movie)
})

// For update a movie in the database
const updateMovie = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const movie = await movieModel.findById(id);

    if (!movie) {
        res.status(400);
        throw new Error('Movie not found!')
    }

    const updatedMovie = await movieModel.findByIdAndUpdate(id, { movieName: req.body.movieName });
    res.status(200).json(updatedMovie)
})

// For deleteing a movie
const deleteMovie = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const movie = await movieModel.findById(req.params.id);
    if (!movie) {
        res.status(400);
        throw new Error('The movie you are trying to delete does not exits!')
    }

    await movie.remove();
    res.status(200).json({ id });
})

module.exports = {
    getMovies,
    addMovie,
    getSingleMovie,
    updateMovie,
    deleteMovie
}