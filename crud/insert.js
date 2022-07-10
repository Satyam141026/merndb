const dbConnect=require('./db');

async function insertData(){
    let collection=await dbConnect();
    let data=await collection.insertMany(
        [
            {name:'max 115',brand:'1micromax',price:4210,category:'11mobile'},
            {name:'max 116',brand:'1micromax',price:5210,category:'12mobile'},
            {name:'max 117',brand:'1micromax',price:6210,category:'13mobile'}
        ]
    )
    if(data.acknowledged){
        console.log('insert data  succesful')

    }

    console.log(data)
}
insertData()
