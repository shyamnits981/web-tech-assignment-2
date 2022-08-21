const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    customer_id:{
        type: String,
        required:true,
        unique:true
    
    },
    customer_name:{
        type:String,
    },
    customer_email:{
        type:String,
        required:true,
        unique:true
  
    }
})

mongoose.model("User",userSchema);