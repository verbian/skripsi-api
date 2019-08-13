var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');
var Article = require('../models/article');
var server = require('http').Server(router);
var io = require('socket.io')(server);
var middleware = require('../middleware');

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
// ROOT ROUTE
router.get('/', function (req, res) {
    res.render('landing');
});

// CHAT ROUTE
router.get('/konsultasi', async (req, res) => {
    res.render('../public/chat.ejs');
});

io.on('chat', async (data) => {
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>'
})

// =====================
// AUTH ROUTES 
// =====================

//Show register form
router.get('/register', async (req, res) => {
    res.render('register');
});

//Handle sign up
router.post('/register', async (req, res) => {
    var newUser = new User({
        username: req.body.username,
        fullName: req.body.fullName,
        avatar: req.body.avatar,
        spesialisasi: req.body.spesialisasi,
        bio: req.body.bio
    });
    if (req.body.adminCode === 'secretcode') {
        newUser.isAdmin = true;
    }
    if (!req.body.avatar) {
        newUser.avatar = 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'
    }
    User.register(newUser, req.body.password,
        async (err, user) => {
            if (err) {
                req.flash('error', err.message)
                return res.render('register')
            }
            passport.authenticate('local')(req, res, async () => {
                req.flash('success', 'Welcome ' + user.username);
                res.redirect('/events');
            })
        })
});

//SHOW LOGIN FORM
router.get('/login', async (req, res) => {
    res.render('login');
})

//LOGGING IN
router.post('/login', passport.authenticate('local',
    {
        successRedirect: '/idx',
        failureRedirect: '/login',
        failureFlash: true,
        successFlash: 'Successfully logged in'
    }), async (req, res) => {

    });

//USERS PROFILES
router.get('/users/:id', async (req, res) => {
    User.findById(req.params.id, async (err, foundUser) => {
        if (err) {
            req.flash('error', 'No such user')
            return res.redirect('/');
        }
        Article.find().where('author.id').equals(foundUser._id).exec(async (err, articles) => {
            if (err) {
                req.flash('error', 'something went wrong');
                return res.redirect('/')
            }
            res.render('profiles/show', { user: foundUser, articles: articles });
        })
    })
})

//EDIT USER PROFILE
router.get('/users/:id/edit', async (req, res) => {
    User.findById(req.params.id, (err, foundUser) => {
        res.render('profiles/edit', { user: foundUser });
    });
});

// Find and Update the correct user
router.put('/users/:id', async (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body.profile, async (err, updatedUser) => {
        if (err) {
            req.flash("error", err.message);
            return res.redirect('/users');
        } else {
            req.flash("success", updatedUser.fullName);
            res.redirect("/users/" + req.params.id);
        }
    })
});

// router.put('/users/:id', upload.single('image'), async (req, res) => {
//     User.findById(req.params.id, req.body.user, async (req, user) => {
//         if (err) {
//             req.flash("error", err.message);
//             return res.redirect('/users');
//         } else {
//             if (req.file) {
//                 try {
//                     await cloudinary.v2.uploader.destroy(user.imageId);
//                     var result = await cloudinary.v2.uploader.upload(req.file.path);
//                     user.imageId = result.public_id;
//                     user.avatar = result.secure_url
//                 } catch (err) {
//                     req.flash("error", err.message);
//                     return res.redirect("back");
//                 }
//             }
//             // user.fullName = req.body.user.fullName;
//             // user.bio = req.body.user.bio;
//             // user.spesialisasi = req.body.user.spesialisasi;
//             user.save()
//             req.flash("success", "Successfully Updated!");
//             res.redirect("/users/" + user._id);
//         }
//     })
// });
// =====================
// DASHBOARD ROUTES 
// =====================

router.get('/dashboard/users', async (req, res) => {
    User.find().where('isAhli').equals(false).exec(async (err, foundUser) => {
        if (err) {
            req.flash('error', 'something went wrong');
            return res.redirect('/')
        }
        res.render('dashboards/pendingUser.ejs', { users: foundUser });
    })
});

router.put('/pendingUsers/:id', async (req, res) => {
    User.findByIdAndUpdate(req.params.id, { 'isAhli': true }, (err, updatedUser) => {
        req.flash("success", `${updatedUser.fullName} is upgraded`);
        res.redirect('/dashboard/users');
    });

})

router.delete('/pendingUsers/:id', async (req, res) => {
    User.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            res.redirect('/articles');
        } else {
            res.redirect('/articles')
        }
    })
})

router.get('/dashboard/articles', async (req, res) => {
    res.render('dashboards/pendingArticle.ejs');
});

router.get('/dashboard/events', async (req, res) => {
    res.render('dashboards/pendingEvent.ejs');
});


//GET BERGABUNG SEBAGAI AHLI PAGE
router.get('/join', async (req, res) => {
    res.render('join');
})

//LOGOUT
router.get('/logout', async (req, res) => {
    req.logOut();
    req.flash('success', 'Logged you out!')
    res.redirect('/events');
})

module.exports = router;