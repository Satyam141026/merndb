const mongose = require("mongoose");
const express = require("express");
const config=require('./config')
const A = require("./mongose/A");
const app=express();
const cors=require("cors")
const multer = require('multer');
var bodyParser = require('body-parser');
/* app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true})); */
app.use(express.json());
app.use(cors());
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads')
        },

        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }
        
    })
}).single('file_name');


app.post("/post",upload, async (req,resp) => {
    console.log(req.file.filename)
     let user=new A({
    name:req.body.name,
    email:req.body.email,
    password:req.body.name,
    img:req.file.filename  
   }); //This line for retrive data from postmen
   let result = await user.save();
   resp.send(result)  
   console.log(result)
});




app.listen(5000)