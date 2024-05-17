const router = require("express").Router();
const {getAllMovies, getMovie, postMovie, updateMovie, deleteMovie} =require("../controllers/movieController");

router.get("/", getAllMovies);

router.get("/:id", getMovie);

router.post("/", postMovie);

router.put("/:id", updateMovie);

router.delete("/:id", deleteMovie);

module.exports = router;