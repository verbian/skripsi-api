var express = require('express');
var router = express.Router({ mergeParams: true });
var Event = require('../models/event');
var Article = require('../models/article');
var Comment = require('../models/comment');
var middleware = require('../middleware');
// ========================
// COMMENTS ROUTE
// ========================

//COMMENT NEW
router.get('/new', middleware.isLoggedIn, async (req, res) => {
    //Find aritlce by id
    Article.findById(req.params.id, async (err, article) => {
        if (err) {
            console.log(err)
        } else {
            res.render('comments/new', { article: article })
        }
    })
})

//COMMENTS CREATE
router.post('/', middleware.isLoggedIn, async (req, res) => {
    //lookup aticles using id
    Article.findById(req.params.id, async (err, article) => {
        if (err) {
            console.log(err);
            res.redirect('/articles');
        } else {
            Comment.create(req.body.comment, (err, comment) => {
                if (err) {
                    console.log(err);
                } else {
                    //Add username and id to comment
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    //Save comment
                    comment.save();
                    article.comments.push(comment);
                    article.save();
                    console.log(comment);
                    req.flash('success', 'Successfully added comment');
                    res.redirect('/articles/' + article._id);
                }
            })
        }
    })
});
//COMMENTS EDIT ROUTE
router.get('/:comment_id/edit', middleware.checkCommentOwnership, async (req, res) => {
    Comment.findById(req.params.comment_id, (err, foundComment) => {
        if (err) {
            res.redirect('back');
        } else {
            res.render('comments/edit', { article_id: req.params.id, comment: foundComment });
        }
    })
})

//COMMENTS UPDATE ROUTE
router.put('/:comment_id', middleware.checkCommentOwnership, async (req, res) => {
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, (err, updatedComment) => {
        if (err) {
            res.redirect('back');
        } else {
            res.redirect('/articles/' + req.params.id);
        }
    })
})

//COMMENTS DESTROY ROUTE
router.delete('/:comment_id', middleware.checkCommentOwnership, async (req, res) => {
    //find by id and remove
    Comment.findByIdAndDelete(req.params.comment_id, async (err) => {
        if (err) {
            res.redirect('back')
        } else {
            req.flash('success', 'Commet deleted');
            res.redirect('/articles/' + req.params.id);
        }
    })
})


module.exports = router;