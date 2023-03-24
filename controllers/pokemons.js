const Pokemon = require('../models/pokemon')

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
  .then(function(allPokemon){
    res.render('pokemon/index', {
      title: 'Pokemon List',
      allPokemon
    })
  })
  .catch(function(err){
    console.log(err)
  })

 
}

function newPokemon(req, res) {
  res.render('pokemon/new', {
    title: 'Add A Pokemon'
  })
}

function create(req,res){
  Pokemon.create(req.body)
  .then(function(pokemon){
    res.redirect('/pokemon')
  })
  .catch(function(err){
    console.log(err)
    res.redirect('/pokemon')
  })
}

function show(req, res){
  Pokemon.findById(req.params.id)
  .then(function(pokemon){
    res.render('pokemon/show',{
      title: `${pokemon.name}`,
      pokemon
    })
  })
  .catch(function(err){
    console.log(err)
  })
}

function destroyPokemon(req,res){
  Pokemon.findByIdAndDelete(req.params.id)
  .then(function(deletedPoke){
    res.redirect('/pokemon')
  })
  .catch(function(err){
    console.log(err)
  })
}

function update (req, res){
  const filter = {_id: `${req.params.id}`}
  const update = {
    name: req.body.name,
    type: req.body.type,
    pokeDexNo: req.body.pokeDexNo
  }


  Pokemon.findOneAndUpdate(filter, update)
  .then(function(pokemon){
    res.redirect('/pokemon')
  })
}