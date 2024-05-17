const mongoose = require("mongoose")

const filmmakerSchema = new.mongoose.Schema({
    name: {
    type:String,
    required: [true, "Please enter filmmakers name."],
    unique: [true, "Name already in use."],
    maxlength: [50, "Name can be no longer than 50 characters."],
    trim: true,
    } ,
    birthYear:{
        type:Number,
        required: true,
    }, 
    birthplace: {
        type:String,
        required: [true, "Please enter filmmakers birthplace."],
        maxlength: [50, "Place can be no longer than 50 characters."],
        trim: true,
        },
    genre: {
        type:String,
        required: [true, "Please enter filmmakers genre."],
        maxlength: [50, "Genre can be no longer than 50 characters."],
        trim: true,
        }
})