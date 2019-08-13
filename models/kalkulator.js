var mongoose = require('mongoose');

var kaulkulatorSchema = mongoose.Schema({
    weight: String,
    height: String,
})

module.exports = mongoose.model('Comment', commentSchema);