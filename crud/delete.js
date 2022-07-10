const dbConnect=require('./db')
console.log(dbConnect)

async function deleteData(){
    const collection=await dbConnect();
     let  data= await collection.deleteMany({name:"max 7"})
      console.log(data)



}
deleteData();