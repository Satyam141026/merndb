const express=require('express')
const app=express()
const route= express.Router();


// app.use(reqFilter);

const reqFilter=(req,resp,next)=>{

    if (!req.query.age) {
        resp.send("Please provide your age")
    }
    else if (req.query.age<18) {
        resp.send("You are under aged")
    }
    else {
        next();
    }


}
route.use(reqFilter)
app.use(reqFilter)
app.get('/',(req,resp)=>{
    resp.send('welcome the home page of website of nodejs');
})
route.get('/home',(req,resp)=>{
    resp.send('welcome the home page of website of nodejs');
})
route.get('/about',(req,resp)=>{
    resp.send('welcome the home page of website of nodejs');
})
app.use('/',route)
app.listen(2101)
