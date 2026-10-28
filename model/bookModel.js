const mongoose = require("mongoose")
const bookSchema = mongoose.Schema({
    title:{
        type:String,
        requirement:true
    },
    author:{
        type:String,
        requirement:true
    },
    category:{
        type:String,
        requirement:true
    },
    availability:{
        type:Boolean,
        requirement:true

    },
    creationDate:{
        type:Date,
        requirement:true
    }
})
const bookModel = mongoose.model("bookModel",bookSchema)
module.exports = bookModel