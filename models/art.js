var mongoose = require('mongoose');

var Art = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true }
})

module.exports = mongoose.model('Art', Art);