const express = require("express");
const router = express.Router();
const filmmakerRoutes = require("./filmmakerRoutes")
const movieRoutes = require("./movieRoutes")

router.get("/", (req,res) => {
    res.status(200).json({success: true});
});

router.use("/filmmakers", filmmakerRoutes);

router.use("/movies", movieRoutes);

module.exports = router;