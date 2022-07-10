const dbConnect=require('./db')
async function updateData(){
    let collection=await dbConnect();
    let data=await collection.update({name:'max 115'},
    { 
        $set:{name:'satyam'}
    
    })
    if(data.modifiedCount){

    }
    console.log('data',data,'data is updated')


}
updateData();