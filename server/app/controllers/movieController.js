const Movie = require("../models/movie")
const Filmmaker = require("../models/filmmaker");
const { query } = require("express");

exports.getAllMovies = async (req,res) => {
    try {
        let moviie = await Movie.find({})

        let queryString= JSON.stringify(req.query)
        queryString = queryString.replace(/\b(gt|gte|lt|lte)\b/g,(match) => `$${match}`);
        console.log(">>>", JSON.parse(queryString));
        const movies = await Movie.find(JSON.parse(queryString))

        if(req.query.select){
            console.log("before>> ", req.query.select);
            const movies = req.query.select.split(",").join("  ");
            console.log("after >>", movies);
            moviie = Movie.find({}).select(movies);
        }
        if(req.query.sort){
            console.log("before>> ", req.query.sort);
            const movies = req.query.sort.split(",").join("  ");
            console.log("after >>", movies);
            moviie = Movie.find({}).sort(movies);
        }

        moviie = await Movie.find({})

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 2;
        const skip = (page-1) * limit;

        moviie.skip(skip).limit(limit);

        const moviee = await moviie 


        res.status(200).json({
            success: true,
            message: `${req.method} - Movie quest`,
            data: moviee,
        });
    } catch (error) {
        console.log(">>>", error)
        res.status(400).json({
            success: false,
            message: error,
        });
    };
};

exports.getMovie = async (req,res) => {
    try {
        const {id} = req.params;
        const movie = await Movie.findById(id)
    res.status(200).json({
        success: true,
        message: `${req.method} - Movie by id quest`,
        data: movie,
    });
    } catch (error) {
        console.log(">>>", error)
        res.status(400).json({
            success: false,
            message: error,
        });
    };
};

exports.postMovie = async (req,res) => {
    try {
        const {movie} = req.body;
        const filmer = await Filmmaker.findById(movie.filmmaker);
        movie.filmmaker = filmer;
        const movieData = new Movie(movie);
        filmer.movies.push(movieData._id)
        const queries = [movieData.save(), filmer.save()]
        await Promise.all(queries);
        
        res.status(200).json({
            success: true,
            message: `${req.method} - Movie created`,
            data: movieData,
        });
    } 
    catch (error) {
        res.status(400).json({
            success: false,
            message: error,
        });  
    };
};

exports.updateMovie = async (req,res) => {
    try {
        const {id} = req.params;
        const updateMovie = await Movie.findByIdAndUpdate(id, req.body, {new: true})
        res.status(200).json({
            success: true,
            message: `${req.method} - Movie updated quest`,
            data: updateMovie,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error,
        });
    };
};

exports.deleteMovie = async (req,res) => {
    try {
        const {id} = req.params;
    const deleteMovie = await Movie.findByIdAndDelete(id)
    res.status(200).json({
        success: true,
        message: `${req.method} - Movie Deleted`,
        data: deleteMovie,
    });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error,
        });
    };
};
