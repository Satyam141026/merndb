const express = require("express");
const config = require("./config");
const productSchema = require("./productSchema");
const app = express();
app.use(express.json());
app.post("/post", async (req, recp) => {
/*   let data = new productSchema({
    name: "Jaya aam sharma",
    brand: "medium",
    price: "String",
    category: "String",
  }); */
   let data=new productSchema(req.body); // This line for retrive data from postmen
  data = await data.save();
  recp.send(req.body);
  console.log(req.body);
  //console.log(data)
});
app.get("/", async (req, recp) => {
  let data = await productSchema.find({});
  recp.send(data);
  console.log(data);
  //console.log(data)
});

app.get("/search/:key",async (req, resp) => {
  console.log(req.params.key);
  let data=await productSchema.find(
   { "$or":[
       {name:{$regex:req.params.key}},
       {brand:{$regex:req.params.key}}
   ]
   }
  )
 resp.send(data);
 });



app.put("/update/:_id",async (req, resp) => {
    console.log(req.params)
    console.log(req.body)
  let data = await productSchema.updateOne(req.params,
  {$set: req.body});
  resp.send(data)
  console.log(data)
});
app.delete("/delete/:_id",async (req, resp) => {
    console.log(req.params)
  let data = await productSchema.deleteOne(req.params);
  resp.send(data)
  console.log(data)
});
app.listen(5000);
