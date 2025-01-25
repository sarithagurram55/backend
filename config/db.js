const mongoose = require('mongoose')
const connectdb = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://sarithagurram55:VFgZaKdkEhgegVP3@cluster0.4rnqi.mongodb.net/saritha')
        console.log('Database connected');
    }catch(err){
        console.log(err);
    }
}
module.exports = connectdb;