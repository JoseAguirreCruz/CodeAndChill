const Pokemon = require('../models/pokemon')
const Move = require('../models/Move')

module.exports = {
  index,
  new: newPokemon,
  create,
  show,
  delete: destroyPokemon,
  update,

}

function index(req, res) {
  Pokemon.find({})
    .then(function (allPokemon) {
      res.render('pokemon/index', {
        title: 'Pokemon List',
        allPokemon
      })
    })
    .catch(function (err) {
      console.log(err)
    })


}

function newPokemon(req, res) {
  res.render('pokemon/new', {
    title: 'Add A Pokemon'
  })
}

function create(req, res) {
  Pokemon.create(req.body)
    .then(function (pokemon) {
      res.redirect('/pokemon')
    })
    .catch(function (err) {
      console.log(err)
      res.redirect('/pokemon')
    })
}

function show(req, res) {
  let allMoves, currPokemon;
  Pokemon.findById(req.params.id)
    .then(function (pokemon) {
      currPokemon = pokemon
      return Move.find({ pokemon: `${req.params.id}` })
    })
    .then(function (moves) {
          allMoves = moves;

          res.render('pokemon/show', {
            title: `${currPokemon.name}`,
            pokemon: currPokemon,
            moves: allMoves
          })
    })
    .catch(function (err) {
      console.log(err)
    })
}

function destroyPokemon(req, res) {
  Pokemon.findByIdAndDelete(req.params.id)
    .then(function (deletedPoke) {
      res.redirect('/pokemon')
    })
    .catch(function (err) {
      console.log(err)
    })
}

function update(req, res) {
  const filter = { _id: `${req.params.id}` }
  const update = {
    name: req.body.name,
    type: req.body.type,
    pokeDexNo: req.body.pokeDexNo
  }


  Pokemon.findOneAndUpdate(filter, update)
    .then(function (pokemon) {
      res.redirect('/pokemon')
    })
}