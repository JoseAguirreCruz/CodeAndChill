const express = require('express')
const router = express.Router();

const pokemonCtrl = require('../controllers/pokemons')

router.route('/')
.get(pokemonCtrl.index)
.post(pokemonCtrl.create)

router.get('/new', pokemonCtrl.new)

module.exports = router;