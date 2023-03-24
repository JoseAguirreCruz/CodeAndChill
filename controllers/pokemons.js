// const Pokemon = require('')

module.exports = {
  index,
  new: newPokemon,

}

function index(req, res) {
  res.render('pokemon/index', {})
}

function newPokemon(req, res) {
  res.render('pokemon/new')
}