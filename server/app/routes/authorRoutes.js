const router = require("express").Router();



router.get("/", (req,res) => {
    res.status(200).json({
        success: true,
        message: `${req.method} - Author quest`
    });
});

router.get("/:id", (req,res) => {
    res.status(200).json({
        success: true, 
        message: `${req.method} - Author quest`
    });
});

router.post("/", (req,res) => {
    res
    .status(200)
    .json({
        success: true, 
        message: `${req.method} - Author quest`
    });
});

router.put("/:id", (req,res) => {
    res
    .status(200)
    .json({
        success: true, 
        message: `${req.method} - Author quest`
    });
});

router.delete("/:id", (req,res) => {
    res
    .status(200)
    .json({
        success: true, 
        message: `${req.method} - Deleted Author`
    });
});

module.exports = router;