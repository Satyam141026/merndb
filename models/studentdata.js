
const mongose=require('mongoose')
let userSchema=new mongose.Schema({
    _id:mongose.Schema.Types.ObjectId,
    name:String,
    fname:String
});
module.exports=mongose.model('studentdata',userSchema);