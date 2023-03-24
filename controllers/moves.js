const Move = require('../models/Move')

module.exports = {
    create
}

function create(req, res){
    Move.create({
        name: req.body.name,
        damage: req.body.damage,
        pokemon: req.params.id
    })
    .then(function(move){
        res.redirect(`/pokemon/${req.params.id}`)
    })
    .catch(function(err){
        console.log(err)
    })
}