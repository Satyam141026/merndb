const mongoose=require('mongoose');
const A = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    img:String
  
  });
  
  module.exports=mongoose.model("student",A);