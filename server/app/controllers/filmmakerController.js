const filmmaker = require("../models/filmmaker");
const Filmmaker = require("../models/filmmaker")

// query 
exports.getAllFilmmakers = async (req,res) => {
    try {
        let filmmakers = await Filmmaker.find({})

        if(req.query.movies){
            filmmakers = await Filmmaker.find({}).populate("movies") 
        }
    
    if(req.query.select){
        console.log("before>> ", req.query.select);
        const filmers = req.query.select.split(",").join("  ");
        console.log("after >>", filmers);
        filmmakers = Filmmaker.find({}).select(filmers);
    }
    if(req.query.sort){
        console.log("before>> ", req.query.sort);
        const filmers = req.query.sort.split(",").join("  ");
        console.log("after >>", filmers);
        filmmakers = Filmmaker.find({}).sort(filmers);
    }

    filmmakers =  Filmmaker.find({}) 
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const skip = (page-1) * limit;

    filmmakers.skip(skip).limit(limit);

    const film = await filmmakers 

    res.status(200).json({
        success: true,
        message: `${req.method} - Filmmaker by id quest`,
        data: film,
    });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error,
        });
    }
};

exports.getFilmmaker = async (req,res) => {
    try {
        const {id} = req.params;
        const filmmaker = await Filmmaker.findById(id)
    res.status(200).json({
        success: true,
        message: `${req.method} - Filmmaker by id quest`,
        data: filmmaker,
    });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error,
        });
    }
};

exports.postFilmmaker = async (req,res) => {
    try {
        const filmmaker= await Filmmaker.create(req.body)
    res.status(200).json({
        success: true,
        message: `${req.method} - Filmmaker quest`,
        data:filmmaker
    });
    } 
    catch (error) {
        res.status(400).json({
        success: false,
        message: error,
        });  
    };
};

exports.updateFilmmaker = async (req,res) => {
    try {
        const {id} = req.params;
    const updateFilmmaker = await Filmmaker.findByIdAndUpdate(id, req.body, {new: true})
    res.status(200).json({
        success: true,
        message: `${req.method} - Filmmaker quest`,
        data: updateFilmmaker,
    });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error,
        });
    }
    
};

exports.deleteFilmmaker = async (req,res) => {
    const {id} = req.params;
    const deleteFilmmaker = await Filmmaker.findByIdAndDelete(id)
    res.status(200).json({
        success: true,
        message: `${req.method} - Filmmaker Deleted`,
        data: deleteFilmmaker,
    });
};
