const mongose = require("mongoose");
const express = require("express");
const config=require('./config')
const product = require("./product");
const productSchema1 = require("./productSchema1");
//const productlist = require("./productlist");
const app=express();
const cors=require("cors")
const Jwt = require('jsonwebtoken');
const jwtKey = 'e-com';

app.use(express.json());
app.use(cors());
app.post("/post", async (req,resp) => {
   let user=new productSchema1(req.body); //This line for retrive data from postmen
   let result = await user.save();
   result = result.toObject();
   delete result.password
   Jwt.sign({result}, jwtKey, {expiresIn:"2h"},(err,token)=>{
       if(err){
           resp.send("Something went wrong")  
       }
       resp.send({result,auth:token})
   })
});
app.post("/product",verifyToken, async (req, recp) => {
   let data=new product(req.body); //This line for retrive data from postmen
  data = await data.save();
  /* data=data.toObject();
  delete data.password */
  recp.send(data);
  console.log(data);
  console.log(data)
});
app.post("/login", async (req,resp) => {
/*   let data=await productSchema1.findOne(req.body); //This line for retrive data from postmen
  recp.send(data);
  console.log(data) */
  let data=await productSchema1.findOne(req.body).select("-password");
  
    if(data){
      Jwt.sign({data},jwtKey,{expiresIn:'2h'},(err,token)=>{

       
        if(err){
          resp.send({result:"Something is wrong"})

        }
        resp.send({data,auth:token});
      })
    
    }
    else{
      resp.send("data is not match");
    }
});

app.get("/productlist",verifyToken, async (req, recp) => {
    let data = await product.find({})
    recp.send(data);
    
  });
app.get("/getsingle/:_id",verifyToken, async (req, recp) => {
    let data = await product.find({_id:req.params._id})
    recp.send(data);
    
  });
  app.delete("/productlist/:_id",verifyToken,(async(req,recp)=>{
      let data=await product.deleteOne({_id:req.params._id})
      data= await data;


    recp.send(data)


  }))

app.put("/update/:_id", verifyToken ,( async (req,recp)=>{
  let data=await product.updateOne(req.params.id,{$set:req.body}) 
  recp.send(data)

}))
app.get("/search/:key", verifyToken , async (req, recp) => {
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
function verifyToken(req,resp,next){
let token=req.headers['authentication'];


if(token){
  token=token.split(' ')[1];
 console.warn('midllwarecalled if',token)
 // console.warn('midllwarecalled if',token)
  Jwt.verify(token,jwtKey,(err, valid)=>{
    if(valid){
      //resp.send({result:'token match'})
   next();
    }
    else{
      resp.status(401).send({result:'please provide valid token'})
      
    }

  })

}else{
resp.status(403).send({result:'please add token with header'})
}

  
}





app.listen(5000);