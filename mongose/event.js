const mongose = require("mongoose");

const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();

const EventEmiter=require('events');
const event=new EventEmiter();
let count=0;
event.on("counterApi",()=>{
count++;
console.log('event called',count)

})


const db = `mongodb+srv://satyam:satyam123@cluster0.pxfed.mongodb.net/student?retryWrites=true&w=majority`;

mongose.connect(db);

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: String,
  category: String,
});
const insertData = async () => {
    event.emit("counterApi")
  const productModal = mongoose.model("students", productSchema);
  let data = new productModal({
    name: "String",
    brand: "String",
    price: "String",
    category: "String",
  });
  let result = await data.save();
  console.log(result, "result");
};
const findData = async () => {
    event.emit("counterApi")
  const productModal = mongoose.model("students", productSchema);
  const result= await productModal.find({});

  console.log(result, "result");
};
const deleteData = async () => {
    event.emit("counterApi")
  const productModal = mongoose.model("students", productSchema);
  let data =await productModal.deleteMany({category:"String"});

  console.log(data, "result");
};
const updateData =async () => {
    event.emit("counterApi")
   const productModal=mongoose.model("students",productSchema);
   let data=await productModal.updateMany({brand:"String"},
   {$set:{name:'satyam sharma'}})
   console.log(data)
};

/* insertData();
updateData();
deleteData(); */
findData()
findData()
findData()
findData()
findData()
findData()
findData()
findData()
findData()
findData()

app.listen(5000);
