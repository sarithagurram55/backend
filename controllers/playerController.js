const model = require("../models/playerModel");
const getPlayer = async (req,res)=>{
    try{
        const data = await model.find({});
        res.status(200).send({
            success: true,
            message:"Data of Players",
            data
        })

    }catch(err){
        console.log(err);
        res.status(500).send({
            success:false,
            message:"INTERNAL SERVER ERROR",
            err
        })
    }
}

const addPlayer = async (req,res) =>{
    try{
        //console.log(req.body);
        const {first_name, last_name, email, phone, role, Available} = req.body
        await model ({
        first_name, 
        last_name, 
        email, 
        phone, 
        role, 
        Available
    }).save()
        res.status(200).send({
            success: true,
            message:"Data added Successfully"
        })
    }catch(err){
        console.log(err);
        res.status(500).send({
            success:false,
            message:"INTERNAL SERVER ERROR",
            err
        })
    }
}

const updatePlayer = async (req,res) =>{
    try{
        const playerr_id = req.params.id;
        await model.updateOne({_id:playerr_id},{$set:req.body});
        res.status(200).send({
            success: true,
            message:"Data added Successfully"
        })
    }catch(err){
        console.log(err);
        res.status(500).send({
            success:false,
            message:"INTERNAL SERVER ERROR",
            err
        })
    }
}

const deletePlayer = async (req,res) =>{
    try{
        const player_id = req.params.id;
        await model.deleteOne({_id:player_id});
        res.status(200).send({
            success: true,
            message:"Data added Successfully"
        })
    }catch(err){
        console.log(err);
        res.status(500).send({
            success:false,
            message:"INTERNAL SERVER ERROR",
            err
        })
    }
}

module.exports = {getPlayer, addPlayer, updatePlayer, deletePlayer}