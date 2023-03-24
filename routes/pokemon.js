const express = require('express')
const router = express.Router();

const pokemonCtrl = require('../controllers/pokemons')

router.route('/')
.get(pokemonCtrl.index)
.post(pokemonCtrl.create)

router.get('/new', pokemonCtrl.new)

router.route('/:id')
.get(pokemonCtrl.show)
.delete(pokemonCtrl.delete)

module.exports = router;