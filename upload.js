const express = require('express');
const multer = require('multer');
const config=require('./mongose/config')
const app = express();
const productSchema=require('./mongose/productSchema')

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
    resp.send("file upload")
});
app.get("/", async (req, recp) => {
    let data = await productSchema.find({});
    recp.send(data);
    console.log(data);
    //console.log(data)
  });



app.listen(5000)