const express = require("express");
const config = require("./config");
const productSchema = require("./productSchema");
const app = express();
app.use(express.json());

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
  app.listen(5003)
  