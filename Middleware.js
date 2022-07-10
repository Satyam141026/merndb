const express=require('express')
const app=express()

const reqFilter=require('./sepmiddle')

//app.use(reqFilter)
app.get('/',(req,resp)=>{
    resp.send('welcome the home page of website of nodejs');
})
app.get('/home',reqFilter,(req,resp)=>{
    resp.send('welcome the home page of website of nodejs');
})
app.get('/about',reqFilter,(req,resp)=>{
    resp.send('welcome the home page of website of nodejs');
})
app.listen(2111)
