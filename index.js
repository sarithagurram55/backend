const express = require("express");
const connectdb = require("./config/db");
const player = require('./models/playerModel');
const plays = require('./routes/playerRoute');
const app = express();

app.use(express.json());
app.use('/api/v1/players/', plays);



app.get("/" , async (req,res)=>{
    // const data = await new player({
    //     first_name: "virat",
    //     last_name: "kohli",
    //     email: "virat@gmail.com",
    //     phone: 9876543210,
    //     role: "batsman",
    //     Available: true
    // }).save
    // res.send({
    //     data
    // })
    res.status(200).json({message:'hello everyone'})
})

app.listen(3000,()=>{
    console.log("Server is listening on the port 3000");
})
connectdb();

//password: VFgZaKdkEhgegVP3
//string : mongodb+srv://sarithagurram55:<db_password>@cluster0.4rnqi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0