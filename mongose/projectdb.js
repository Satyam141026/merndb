const mongose = require("mongoose");
const express = require("express");
const config=require('./config')
const product = require("./product");
const productSchema1 = require("./productSchema1");
//const productlist = require("./productlist");
const app=express();
const cors=require("cors")
const Jwt=require('jsonwebtoken')
const jwtKey='e-comm';

app.use(express.json());
app.use(cors());
app.post("/post", async (req, recp) => {
   let data=new productSchema1(req.body); //This line for retrive data from postmen
  data = await data.save();
  data=data.toObject();
  delete data.password
  Jwt.sign({data}, jwtKey, {expiresIn:"2h"},(err,token)=>{
    if(err){
        resp.send("Something went wrong")  
    }
    resp.send({data,auth:token})
})
});
app.post("/product", async (req, recp) => {
   let data=new product(req.body); //This line for retrive data from postmen
  data = await data.save();
  /* data=data.toObject();
  delete data.password */
  recp.send(data);
  console.log(data);
  console.log(data)
});
app.post("/login", async (req, recp) => {
/*   let data=await productSchema1.findOne(req.body); //This line for retrive data from postmen
  recp.send(data);
  console.log(data) */
  let data=await productSchema1.findOne(req.body).select("-password");
  
    if(data){
      Jwt.sign({data},jwtKey,{expiresIn:'2h'},(error,token)=>{

       
        if(err){
          resp.send({result:"Something is wrong"})

        }
        recp.send({data,auth:token});
      })
    
    }
    else{
      recp.send("data is not match");
    }
});

app.get("/productlist", async (req, recp) => {
    let data = await product.find({})
    recp.send(data);
    
  });
app.get("/getsingle/:_id", async (req, recp) => {
    let data = await product.find({_id:req.params._id})
    recp.send(data);
    
  });
  app.delete("/productlist/:_id",(async(req,recp)=>{
      let data=await product.deleteOne({_id:req.params._id})
      data= await data;


    recp.send(data)


  }))

app.put("/update/:_id",( async (req,recp)=>{
  let data=await product.updateOne(req.params.id,{$set:req.body}) 
  recp.send(data)

}))
app.get("/search/:key", async (req, recp) => {
  let data = await product.find({

    "$or":[
      {name:{$regex:req.params.key}},
      {price:{$regex:req.params.key}},
      {category:{$regex:req.params.key}}, 
      {company:{$regex:req.params.key}},
      
    ]
  })
  recp.send(data);
  
});






app.listen(5000);