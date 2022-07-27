const express = require('express');
const multer = require('multer');
const config=require('./mongose/config')
const app = express();
const productSchema=require('./mongose/productSchema')
/* const bodyParser=require("body-Parser")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json()) */




/* var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true})); */
/* app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'})); */
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

app.post("/upload", upload, (req, resp) => {
    //console.log(req.file)
    resp.send("file upload")
});



app.listen(5000)