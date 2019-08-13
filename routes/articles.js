var express = require('express');
var router = express.Router();
var Article = require('../models/article');
var middleware = require('../middleware');
var Comment = require('../models/comment');

var multer = require('multer');
var storage = multer.diskStorage({
    filename: function (req, file, callback) {
        callback(null, Date.now() + file.originalname);
    }
});

var imageFilter = ((req, file, cb) => {
    // accept image files only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
});

var upload = multer({ storage: storage, fileFilter: imageFilter })

var cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: 'ddz8e1nwd',
    api_key: '784466175292249',
    api_secret: 'RipxzpkvvbMiiX1hIh4QZ--Yo5U'
});

escapeRegex = (text) => {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

//INDEX - SHOW ALL ARTICLE
router.get('/', async (req, res) => {
    var perPage = 8;
    var pageQuery = parseInt(req.query.page);
    var pageNumber = pageQuery ? pageQuery : 1;
    if (req.query.search) {
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        Article.find({ name: regex }).skip((perPage * pageNumber) - perPage).limit(perPage).exec(async (err, foundArticle) => {
            Article.countDocuments({ name: regex }).exec(async (err, count) => {
                if (err) {
                    console.log(err)
                    res.redirect('back');
                } else {
                    res.render('articles/articles', {
                        articles: foundArticle,
                        current: pageNumber,
                        pages: Math.ceil(count / perPage),
                        search: req.query.search
                    });
                }
            })
        })
    } else {
        Article.find({}).skip((perPage * pageNumber) - perPage).limit(perPage).exec(async (err, foundArticle) => {
            Article.countDocuments().exec(async (err, count) => {
                if (err) {
                    console.log(err)
                } else {
                    res.render('articles/articles', {
                        articles: foundArticle,
                        current: pageNumber,
                        pages: Math.ceil(count / perPage),
                        search: req.query.search
                    })
                }
            });
        })
    }
})

//CREATE - ADD NEW ARTICLE
router.post("/", middleware.isLoggedIn, upload.single("image"), async (req, res) => {
    cloudinary.v2.uploader.upload(req.file.path, async (err, result) => {
        if (err) {
            req.flash('error', err.message);
            return res.redirect('back');
        }
        // add cloudinary url for the image to the article object under image property
        req.body.article.image = result.secure_url;
        req.body.article.imageId = result.public_id;
        // add author to article
        req.body.article.author = {
            id: req.user._id,
            username: req.user.username
        }
        Article.create(req.body.article, async (err, article) => {
            if (err) {
                req.flash('error', err.message);
                return res.redirect('back');
            }
            res.redirect('/articles/' + article.id);
        });
    });
});
// get data from form and add to article array

// });cloudinary.v2.uploader.upload(req.file.path, async (err, result) => {
//     if (err) {
//         req.flash('error', err.message);
//         return res.redirect('back');
//     }
//     // add cloudinary url for the image to the article object under image property
//     req.body.article.image = result.secure_url;
//     req.body.article.imageId = result.public_id;
//     // add author to article
//     req.body.article.author = {
//         id: req.user._id,
//         username: req.user.username
//     }
//     Article.create(req.body.article, async (err, article) => {
//         if (err) {
//             req.flash('error', err.message);
//             return res.redirect('back');
//         }
//         res.redirect('/articles/' + article.id);
//     });
// });



//CREATE - add new article to DB
// var name = req.body.name;
// var image = req.body.image;
// var desc = req.body.description;
// var author = {
//     id: req.user._id,
//     username: req.user.username
// }
// var newArticle = {
//     name: name,
//     image: image,
//     description: desc,
//     author: author
// }
// //Create a new article and save to DB
// Article.create(newArticle, async (err, newlyCreated) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(newlyCreated);
//         res.redirect('/articles')
//     }
// })
// // redirect back to article page
// res.redirect('/articles');

// })

//NEW - NEW FORM TO CREATE NEW ARTICLE
router.get('/new', middleware.isLoggedIn, async (req, res) => {
    res.render('articles/new');
});

//SHOW - SHOW INFO ABOUT SELECTED ARTICLE
router.get('/:id', async (req, res) => {
    //Find article with provided id
    Article.findById(req.params.id).populate('comments').exec(async (err, foundArticle) => {
        if (err) {
            console.log(err)
        } else {
            console.log(foundArticle);
            res.render('articles/show', { article: foundArticle });
        }
    })
});


//EDIT ARTICLE ROUTE
router.get('/:id/edit', middleware.checkArticleOwnership, async (req, res) => {
    Article.findById(req.params.id, (err, foundArticle) => {
        res.render('articles/edit', { article: foundArticle });
    });
});

//UPDATE ARTICLE ROUTE
router.put('/:id', middleware.checkArticleOwnership, upload.single('image'), async (req, res) => {
    // Find and Update the correct article
    Article.findById(req.params.id, async (err, article) => {
        if (err) {
            req.flash("error", err.message);
            res.redirect('/articles/');
        } else {
            if (req.file) {
                try {
                    await cloudinary.v2.uploader.destroy(article.imageId);
                    var result = await cloudinary.v2.uploader.upload(req.file.path);
                    article.imageId = result.public_id;
                    article.image = result.secure_url
                } catch (err) {
                    req.flash("error", err.message);
                    return res.redirect("back");
                }
            }
            article.name = req.body.article.name;
            article.description = req.body.article.description;
            article.save()
            req.flash("success", "Successfully Updated!");
            res.redirect("/articles/" + article._id);
        }
    })
});
    // geocoder.geocode(req.body.location, async (err, data) => {
    //     if (err || !data.length) {
    //         req.flash('error', 'Invalid address');
    //         return res.redirect('back');
    //     }
    //     req.body.article.lat = data[0].latitude;
    //     req.body.article.lng = data[0].longitude;
    //     req.body.article.location = data[0].formattedAddress;

    //     Article.findByIdAndUpdate(req.params.id, req.body.article, async (err, article) => {
    //         if (err) {
    //             req.flash("error", err.message);
    //             res.redirect("back");
    //         } else {
    //             req.flash("success", "Successfully Updated!");
    //             res.redirect("/articles/" + article._id);
    //         }
    //     });
    // });




//DESTROY ARTICLE ROUTE
router.delete('/:id', middleware.checkArticleOwnership, async (req, res) => {
    Article.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            res.redirect('/articles');
        } else {
            res.redirect('/articles')
        }
    })
})

module.exports = router;