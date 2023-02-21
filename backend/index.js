const express= require('express');
const app=express();
const cors=require('cors');
const port=3000
const mongodb=require("./db");
app.use(
    cors({
        origin:"http://localhost:3000/api/createuser"
    })
)

app.use((req,res,next)=>{
    res.setHeader("Access-control-Allow-Origin","http://localhost:3001");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
app.use(express.json())
app.use('/api',require("./Routes/CreateUser"))
app.listen(port,()=>{
    console.log("miiaaaun");
})