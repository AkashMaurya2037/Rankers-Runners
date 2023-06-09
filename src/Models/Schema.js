const mongoose = require("mongoose")

const rankerSchema = new mongoose.Schema({
    ranking:{ 
        type:Number,
        required:true,
        unique:true,
     },
     name:{
        type:String,
        required:true,
        trim:true,
     },
     country:{
        type:String,
        required:true,
        trim:true,
     },
     score:{
        type:Number,
        required:true,
        trim:true,
     },
     event:{
        type:String,
        default:"100m"
     }
})

// Creating new collection
const Rankers = new mongoose.model("Rankers",rankerSchema)

module.exports = Rankers;