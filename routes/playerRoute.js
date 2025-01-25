const express = require('express');
const { getPlayer, addPlayer, updatePlayer, deletePlayer} = require('../controllers/playerController');
const play = express.Router();

play.get('/get-players', getPlayer)

play.post('/add-players', addPlayer)

play.put('/update-players/:id', updatePlayer)

play.delete('/delete-players/:id', deletePlayer)
    

module.exports = play;
