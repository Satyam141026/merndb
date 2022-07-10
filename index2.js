
    const express=require('express')
    const app=express()
    const path=require('path')
    
    const publicPath=path.join(__dirname,'public')
    console.log(publicPath,"sdlfhskjdfh")

    app.set('view engine','ejs')
    app.get('',(req,resp)=>{
        resp.sendFile(`${publicPath}/index.html`)
        })
    
    app.get('/profile',(req,resp)=>{
        const user={
            "name":'SATYAM',
            "fname":'sharma',
            "city":['a','b','c','d']
        }
resp.render('profile',{user})
        })
    app.get('/login',(req,resp)=>{
      
resp.render('login')
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
    