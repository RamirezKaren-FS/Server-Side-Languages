const express = require("express");
const cors = require("cors");
const morgan = require("morgan")
const app = express();
const routeHandler = require("./routes");



app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1", routeHandler);

app.use("/", (req,res)=> {
    res.status(200).send({message: "Service is up"});
});



app.use("*", (req,res)=> {
    res.status(404).send({success: false, message: "route not found"});
});

module.exports = app