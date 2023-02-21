const mongoose=require('mongoose');
const mongourl='mongodb+srv://shreesilks:Anukutty%40123@cluster0.ny4wyuz.mongodb.net/shreesilks?retryWrites=true&w=majority';
const mongodb=async()=>{
    await mongoose.connect(mongourl,{useNewUrlParser : true},async(err,result)=>{
    if(err)console.log("---",err);
    else{
    console.log("connected");
    mongoose.set('strictQuery', true);
    const data1 =  await mongoose.connection.db.collection("sample")
        data1.find({}).toArray(function(err,data){
            if(err)console.log(err);
            else console.log(data);
        })
}
})}
module.exports = mongodb;