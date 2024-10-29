const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    // put objects
    text: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('ToDo', todoSchema)