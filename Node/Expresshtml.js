 const express=require('express')
const app=express()
const path=require('path')

const publicPath=path.join(__dirname,'public')
console.log(publicPath,"sdlfhskjdfh")
app.use(express.static(publicPath)); 



/* const publicPath=path.join(__dirname,'public')

app.use(express.static(publicPath)); */

app.listen(5005); 
