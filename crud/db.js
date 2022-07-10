const {MongoClient}=require('mongodb');
const url= 'mongodb+srv://satyam:satyam123@cluster0.pxfed.mongodb.net/student?retryWrites=true&w=majority';
const mydb='student'
const client= new MongoClient(url);

async function dbConnect()
{
    let result = await client.connect();
    db= result.db(mydb);
   return db.collection('studentdata');


}
module.exports=dbConnect;



