const mongoose=require('mongoose');
const productSchema1 = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
  
  });
  module.exports=mongoose.model("students",productSchema1);