const dbConnect=require('./db')
console.log(dbConnect);
async function readData(){
let collection= await dbConnect();
let data = await collection.find({}).toArray();
console.log(data)
}
readData()