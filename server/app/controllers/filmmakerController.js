const Filmaker = require("../models/filmmaker")

exports.getAllFilmmakers = async (req,res) => {
    const filmmakers = await Filmaker.find({})
    res.status(200).json({
        success: true,
        message: `${req.method} - Filmmaker quest`,
        data: filmmakers,
    });
};

exports.getFilmmaker = async (req,res) => {
    try {
        const {id} = req.params;
        const filmmaker = await Filmaker.findById(id)
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
        const filmmaker= await Filmaker.create(req.body)
    console.log("saved >>>", filmmaker);
    res.status(200).json({
        success: true,
        message: `${req.method} - Filmmaker quest`
    });
    } catch (error) {
        console.log(">>>", error)
        res.status(400).json({
            success: false,
            message: error,
        });
    }
};

exports.updateFilmmaker = async (req,res) => {
    const {id} = req.params;
    const updateFilmmaker = await Filmaker.findByIdAndUpdate(id, req.body)
    res.status(200).json({
        success: true,
        message: `${req.method} - Filmmaker quest`,
        data: updateFilmmaker,
    });
};

exports.deleteFilmmaker = async (req,res) => {
    const {id} = req.params;
    res.status(200).json({
        success: true,
        message: `${req.method} - Filmmaker quest`
    });
};
