const {MongoClient} = require('mongodb')
const url= 'mongodb+srv://satyam:satyam123@cluster0.pxfed.mongodb.net/student?retryWrites=true&w=majority';
const databaseName='student'
const client= new MongoClient(url);

async function dbConnect()
{
    let result = await client.connect();
    db= result.db(databaseName);
    return db.collection('studentdata');
  
}
module.exports= dbConnect;