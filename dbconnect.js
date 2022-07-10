const mongose = require("mongoose");

const express = require("express");
const app = express();

const db = `mongodb+srv://satyam:satyam123@cluster0.pxfed.mongodb.net/student?retryWrites=true&w=majority`;
mongose
  .connect(db)
  .then(() => {
    console.log("succesful");
  })
  .catch(() => {
    console.log("fail");
  });

app.listen(2101);
/* {
    useCreateIndex: true, 
    useFindAndModify: false, 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
} */
