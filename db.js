const {MongoClient} = require('mongodb')
const url= 'mongodb+srv://satyam:satyam123@cluster0.pxfed.mongodb.net/student?retryWrites=true&w=majority';
const databaseName='student'
const client= new MongoClient(url);

async function getData()
{
    let result = await client.connect();
    db= result.db(databaseName);
    collection = db.collection('studentdata');
    let data = await collection.find({}).toArray();
    console.log(data[0],data[1])
}

getData();