const Movie = require("../models/movie")

exports.getAllMovies = async (req,res) => {
    const movies = await Movie.find({})
    res.status(200).json({
        success: true,
        message: `${req.method} - Movie quest`,
        data: movies,
    });
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
    }
};

exports.postMovie = async (req,res) => {
    try {
        const postMovie= await Movie.create(req.body)
    console.log("saved >>>", postMovie);
    res.status(200).json({
        success: true,
        message: `${req.method} - Movie created`,
        data: postMovie,
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
    }
    
};

exports.deleteMovie = async (req,res) => {
    const {id} = req.params;
    const deleteMovie = await Movie.findByIdAndDelete(id)
    res.status(200).json({
        success: true,
        message: `${req.method} - Movie Deleted`,
        data: deleteMovie,
    });
};
