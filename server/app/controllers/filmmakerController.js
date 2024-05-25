const filmmaker = require("../models/filmmaker");
const Filmmaker = require("../models/filmmaker")

// query 
exports.getAllFilmmakers = async (req,res) => {
    // console.log(">>>", req.query);
    // const filmmakers = await Filmmaker.find(req.query)

    let queryString = JSON.stringify(req.query);
    queryString = queryString.replace(
        /\b(gt|gte|lt|lte)\b/g,
        (match) => `$${match}`
    );
    console.log(queryString)
    let query = Movie.find(JSON.parse(queryString));
    const filmmakers = await query


    res.status(200).json({
        success: true,
        message: `${req.method} - Filmmaker quest`,
        data: filmmakers,
    });
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
        console.log(">>>", error)
        res.status(400).json({
            success: false,
            message: error,
        });
    }
};

exports.postFilmmaker = async (req,res) => {
    try {
        const filmmaker= await Filmmaker.create(req.body)
    console.log("saved >>>", filmmaker);
    res.status(200).json({
        success: true,
        message: `${req.method} - Filmmaker quest`
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
