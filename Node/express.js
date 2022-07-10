const express=require('express')
const app=express()


app.get('/',(req,recp)=>{
    recp.send('this is the home page of hte site')

})
app.get('/admin',(req,recp)=>{
    recp.send('this is the ')

})
app.get('/about',(req,recp)=>{
    recp.send('this is the about page of the about site')

})
app.get('/data',(req,recp)=>{
    recp.send(`<h2>this is the data site of the admin of </h2>`)
  

})





app.listen(2000)