const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
  type: {
    type: String, 
    enum: ['Fire', 'Water', 'Grass', 'Normal', 'Electric', 'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dark', 'Dragon', 'Steel', 'Fairy']
  },
  pokeDexNo: {
    type: Number, 
    max: 9999,
    match: /\d{4}/,
  },
  name: {
    type: String
  }
})

module.exports = new mongoose.model('Pokemon', pokemonSchema)