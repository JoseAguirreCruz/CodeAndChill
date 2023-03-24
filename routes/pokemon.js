const express = require('express')
const router = express.Router();

const pokemonCtrl = require('../controllers/pokemons')

router.get('/', pokemonCtrl.index)

router.get('/new', pokemonCtrl.new)

module.exports = router;