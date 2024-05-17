exports.getAllFilmmakers = async (req,res) => {
    res.status(200).json({
        success: true,
        message: `${req.method} - Filmmaker quest`
    });
};

exports.getFilmmaker = async (req,res) => {
    const {id} = req.params;
    res.status(200).json({
        success: true,
        message: `${req.method} - Filmmaker quest`
    });
};

exports.postFilmmaker = async (req,res) => {
    res.status(200).json({
        success: true,
        message: `${req.method} - Filmmaker quest`
    });
};

exports.updateFilmmaker = async (req,res) => {
    const {id} = req.params;
    res.status(200).json({
        success: true,
        message: `${req.method} - Filmmaker quest`
    });
};

exports.deleteFilmmaker = async (req,res) => {
    const {id} = req.params;
    res.status(200).json({
        success: true,
        message: `${req.method} - Filmmaker quest`
    });
};

// module.exports = {getAllFilmmakers}