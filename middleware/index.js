var Article = require('../models/article');
var Comment = require('../models/comment');
var Event   = require('../models/event');
var Berita  = require('../models/berita');

//All the middleware goes here
var middlewareObj = {};

middlewareObj.checkArticleOwnership = (req, res, next) => {
    if (req.isAuthenticated()) {
        //does use own the article
        Article.findById(req.params.id, (err, foundArticle) => {
            if (err) {
                res.redirect('back')
            } else {
                if (foundArticle.author.id.equals(req.user._id) || req.user.isAdmin) {
                    next();
                } else {
                    req.flash('error', 'You don\'t have permission to do that');
                    res.redirect('back');
                }
            }
        })
    } else {
        req.flash('error', 'You need to be logged in to do that')
        res.redirect('back')
    }
}

middlewareObj.checkEventOwnership = (req, res, next) => {
    if (req.isAuthenticated()) {
        //does use own the article
        Event.findById(req.params.id, (err, foundEvent) => {
            if (err) {
                res.redirect('back')
            } else {
                if (foundEvent.author.id.equals(req.user._id) || req.user.isAdmin) {
                    next();
                } else {
                    req.flash('error', 'You don\'t have permission to do that');
                    res.redirect('back');
                }
            }
        })
    } else {
        req.flash('error', 'You need to be logged in to do that')
        res.redirect('back')
    }
}

middlewareObj.checkCommentOwnership = (req, res, next) => {
    if (req.isAuthenticated()) {
        //does use own the article
        Comment.findById(req.params.comment_id, (err, foundComment) => {
            if (err) {
                res.redirect('back')
            } else {
                //Does user own the comment
                if (foundComment.author.id.equals(req.user._id) || req.user.isAdmin) {
                    next();
                } else {
                    req.flash('error', 'You don\'t have permission to do that');
                    res.redirect('back');
                }
            }
        })
    } else {
        res.redirect('back')
    }
}

middlewareObj.checkBeritaOwnership = (req, res, next) => {
    if (req.isAuthenticated()) {
        //does use own the berita
        Berita.findById(req.params.id, (err, foundBerita) => {
            if (err) {
                res.redirect('back')
            } else {
                if (foundBerita.author.id.equals(req.user._id) || req.user.isAdmin) {
                    next();
                } else {
                    req.flash('error', 'You don\'t have permission to do that');
                    res.redirect('back');
                }
            }
        })
    } else {
        req.flash('error', 'You need to be logged in to do that')
        res.redirect('back')
    }
}

middlewareObj.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash('error', 'You are not logged in, please Login first');
    res.redirect('/login');
}

module.exports = middlewareObj //undefined obj