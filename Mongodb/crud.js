const dbConnect=require('./db');
const express=require('express');
const app=express();

app.get("/",(async (req,recp)=>{
    let data=await dbConnect();
    data=await data.find({}).toArray();
    recp.send(data)
    console.log(data)

}))
app.post("/post",(async (req,recp)=>{
    let data=await dbConnect();
    data=await data.insertOne(   {name:'jaya',brand:'1micromax',price:4210,category:'11mobile'})
    if(data.acknowledged){
        recp.send(data)
        console.log('insert data  succesful')
    }
}))
app.put("/put",(async (req,recp)=>{
    let data=await dbConnect();
    data=await data.update({name:'jaya'},{$set:{name:'satyam sharma'}})
    if(data.acknowledged){
        recp.send(data)
        console.log('updat e data  succesful')
    }
  
    console.log(data)

}))


app.delete("/:_id",(async (req,recp)=>{

    console.log(req.params._id ,'done')
    let data=await dbConnect();
    data=await data.deleteOne({_id:req.params._id });
    recp.send(data)
    console.log(data) 
    recp.send('done')

}))
app.listen(5000)