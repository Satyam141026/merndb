
    const express=require('express')
    const app=express()
    const path=require('path')
    
    const publicPath=path.join(__dirname,'public')
    console.log(publicPath,"sdlfhskjdfh")
    app.get('',(req,resp)=>{
        resp.sendFile(`${publicPath}/index.html`)
        })
    
    app.get('/homes',(req,resp)=>{
        resp.sendFile(`${publicPath}/home.html`)
        })
    
    app.get('/abouts',(req,resp)=>{
        resp.sendFile(`${publicPath}/about.html`)
        })
    
    
    app.get('*',(req,resp)=>{
        resp.sendFile(`${publicPath}/page404.html`)
        })
    
    
    
    /* const publicPath=path.join(__dirname,'public')
    
    app.use(express.static(publicPath)); */
    
    app.listen(5005); 
    