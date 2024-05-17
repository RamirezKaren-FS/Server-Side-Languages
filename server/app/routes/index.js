const express = require("express");
const router = express.Router();
const filmmakerRoutes = require("./filmmakerRoutes")

router.get("/", (req,res) => {
    res.status(200).json({success: true});
});

router.use("/filmmakers", filmmakerRoutes);

module.exports = router;