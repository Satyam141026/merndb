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
    resp.send(` Name of the tutior of hte
    <input type="text" placeholder="type here" />
    <input type="text" placeholder="type here" />
    <input type="text" placeholder="type here" />
    <input type="text" placeholder="type here" />
    <button>click here</button>
    <button>click here</button>
    <button>click here</button>
    <button>click here</button>
    <button>click here</button>
    <button>click here</button>
    <button>click here</button>
    `)

})
app.get('/data',(req,resp)=>{
    resp.send(
      [ 
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       },
        {
        "name1":"satyam sharma",
        "name2":"satyam sharma",
        "name3":"satyam sharma",
        "name4":"satyam sharma"
       }
    ]
    )
  

})





app.listen(5004)