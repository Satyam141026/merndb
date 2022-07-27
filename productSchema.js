const mongoose=require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: String,
    category: String,
    rimg:String
  });
  module.exports=mongoose.model("students",productSchema);