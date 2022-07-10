const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require('./db/User');
const productSchema1=require('./productSchema1')
const Jwt = require('jsonwebtoken');
const jwtKey = 'e-com';
const app = express();
app.use(express.json());
app.use(cors());

app.post("/post", async (req, resp) => {
    let user = new productSchema1(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password
    Jwt.sign({result}, jwtKey, {expiresIn:"2h"},(err,token)=>{
        if(err){
            resp.send("Something went wrong")  
        }
        resp.send({result,auth:token})
    })
})

app.listen(5000);