const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types
const orderSchema = new mongoose.Schema({
   itemname:String,
   quantity:String,
   itemid:String,
   type:String,
   aviablity:String,
  product:{
    type:String,
    default:1
  }


})

mongoose.model("Order", orderSchema)