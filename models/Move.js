const mongoose = require('mongoose')


const moveSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    damage: {
      type: Number
    },
    pokemon: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pokemon'
    }]
})


module.exports = new mongoose.model('Move', moveSchema)