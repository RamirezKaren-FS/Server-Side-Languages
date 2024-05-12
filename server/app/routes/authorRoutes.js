const router = require("express").Router();
const { v4: uuidv4 } = require('uuid');

const authors = [  {
    "id": "7527779d-8060-4126-9554-6f664d38b2c8",
    "name": "Chris Thompson",
    "age": 45,
    "category": "horror"
},
{
    "id": "3e67b49f-2141-4cc2-bc32-e588dd555617",
    "name": "Jacob Hills",
    "age": 45,
    "category": "comedy"
},
{
    "id": "03aa8571-7a68-478d-91f9-705cf261b3b0",
    "name": "Henry Stanton",
    "age": 36,
    "category": "fiction"
}];

router.get("/", (req,res) => {
    res.status(200).json({
        success: true,
        message: `${req.method} - Author quest`, 
        data: authors
    });
});

router.get("/:id", (req,res) => {
    const id =req.params.id
    const selected = authors.find(authors => authors.id === id)
    const author = selected
    res.status(200).json({
        success: true, 
        message: `${req.method} - Author quest`, 
        data: author
    });
});

router.post("/", (req,res) => {
    console.log("request", req.body);
    const author = { id: uuidv4(), ...req.body}
    authors.push(author);
    res
    .status(200)
    .json({
        success: true, 
        message: `${req.method} - Author quest`, 
        data: authors[authors.length-1]
    });
});

router.put("/:id", (req,res) => {
    const id =req.params.id
    const selected = authors.find(authors => authors.id === id)
    let author = selected;
    let updatedAuthor = author = req.body
    res
    .status(200)
    .json({success: true, message: `${req.method} - Author quest`, data: updatedAuthor});
});

router.delete("/:id", (req,res) => {
    const id =req.params.id
    const selected = authors.find(authors => authors.id === id)
    res
    .status(200)
    .json({success: true, message: `${req.method} - Deleted Author`});
});

module.exports = router;