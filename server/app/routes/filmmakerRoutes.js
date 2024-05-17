const router = require("express").Router();
const {getAllFilmmakers, getFilmmaker, postFilmmaker, updateFilmmaker, deleteFilmmaker} = require("../controllers/filmmakerController")


router.get("/", getAllFilmmakers);

router.get("/:id", getFilmmaker);

router.post("/", postFilmmaker);

router.put("/:id", updateFilmmaker);

router.delete("/:id", deleteFilmmaker);

module.exports = router;