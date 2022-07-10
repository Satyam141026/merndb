const express = require('express');
const multer = require('multer');
const app = express();
const config=require('./mongose/config')

const upload=multer({
storage:multer.diskStorage({
destination: function (req,file,cb){ 
    cb(null,"uploads")
},
filename: function(req,file,cb){
    cb(null, file.fieldname + "-" + Date.now() + ".jpg")
}
})
}).any('file_name');    //.single('file_name'); 

app.post("/upload", upload, (req, resp) => {
    resp.send('file upload')
});
app.listen(5000)