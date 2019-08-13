var mongoose = require('mongoose');

//SCHEMA SETUP
var beritaSchema = new mongoose.Schema({
    name: String,
    image: String,
    imageId: String,
    description: String,
    createdAt: { type: Date, default: Date.now },
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
});

var Berita = mongoose.model('berita', beritaSchema);

module.exports = Berita;