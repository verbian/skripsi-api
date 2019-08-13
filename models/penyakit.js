var mongoose = require('mongoose');

//SCHEMA SETUP
var penyakitSchema = new mongoose.Schema({
    name: String,
    image: String,
    // imageId: String,
    description: String,
});

var Penyakit = mongoose.model('penyakit', penyakitSchema);

module.exports = Penyakit;