const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types
const postSchema = new mongoose.Schema({
   itemname:String,
   quantity:String,
   itemid:String,
   type:String,
   aviablity:String,
   quantity:String


})

mongoose.model("Post", postSchema)