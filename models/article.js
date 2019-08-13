var mongoose = require('mongoose');

//SCHEMA SETUP
var articleSchema = new mongoose.Schema({
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

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;