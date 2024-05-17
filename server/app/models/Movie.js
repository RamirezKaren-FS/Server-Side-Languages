const mongoose = require("mongoose")

const movieSchema = new.mongoose.Schema({
    name: {
    type:String,
    required: [true, "Please enter movie name."],
    unique: [true, "Name already in use."],
    maxlength: [50, "Name can be no longer than 50 characters."],
    trim: true,
    } ,
    dateReleased:{
        type: String,
        required: true,
    }, 
    duration: {
        type: Number,
        required: true,
        },
    filmmaker: {
        type:String,
        required: [true, "Please enter filmmakers name."],
        maxlength: [50, "Name can be no longer than 50 characters."],
        trim: true,
        }
})

module.exports = mongoose.model("Movie", movieSchema);