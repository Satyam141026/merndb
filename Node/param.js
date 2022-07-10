const express = require('express');
const app = express();


app.get("",(req,resp)=>{
    console.log(req.query.name)
    resp.send("Welcome,"+req.query.name); 
    });
 
app.get('/admin',(req,resp)=>{

    console.log(req.query.name)
    resp.send("admin Page,"+req.query.name);
})
app.get('/about',(req,resp)=>{
    recp.send('this is the about page of the about site',req.query.name)

})
app.get('/data',(req,resp)=>{
    resp.send("<h2>this is the data site of the admin of </h2>")
  

})





app.listen(5003)