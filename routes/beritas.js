var express = require('express');
var router = express.Router();
var Berita = require('../models/berita');
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

//INDEX - SHOW ALL BERITA
router.get('/', async (req, res) => {
    var perPage = 8;
    var pageQuery = parseInt(req.query.page);
    var pageNumber = pageQuery ? pageQuery : 1;
    if (req.query.search) {
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        Berita.find({ name: regex }).skip((perPage * pageNumber) - perPage).limit(perPage).exec(async (err, foundBerita) => {
            Berita.countDocuments({ name: regex }).exec(async (err, count) => {
                if (err) {
                    console.log(err)
                    res.redirect('back');
                } else {
                    res.render('beritas/index', {
                        beritas: foundBerita,
                        current: pageNumber,
                        pages: Math.ceil(count / perPage),
                        search: req.query.search
                    });
                }
            })
        })
    } else {
        Berita.find({}).skip((perPage * pageNumber) - perPage).limit(perPage).exec(async (err, foundBerita) => {
            Berita.countDocuments().exec(async (err, count) => {
                if (err) {
                    console.log(err)
                } else {
                    res.render('beritas/index', {
                        beritas: foundBerita,
                        current: pageNumber,
                        pages: Math.ceil(count / perPage),
                        search: req.query.search
                    })
                }
            });
        })
    }
})

//CREATE - ADD NEW BERITA
router.post("/", middleware.isLoggedIn, upload.single("image"), async (req, res) => {
    cloudinary.v2.uploader.upload(req.file.path, async (err, result) => {
        if (err) {
            req.flash('error', err.message);
            return res.redirect('back');
        }
        // add cloudinary url for the image to the berita object under image property
        req.body.berita.image = result.secure_url;
        req.body.berita.imageId = result.public_id;
        // add author to berita
        req.body.berita.author = {
            id: req.user._id,
            username: req.user.username
        }
        Berita.create(req.body.berita, async (err, berita) => {
            if (err) {
                req.flash('error', err.message);
                return res.redirect('back');
            }
            res.redirect('/beritas/' + berita.id);
        });
    });
});

//NEW - NEW FORM TO CREATE NEW BERITA
router.get('/new', middleware.isLoggedIn, async (req, res) => {
    res.render('beritas/new');
});

//SHOW - SHOW INFO ABOUT SELECTED BERITA
router.get('/:id', async (req, res) => {
    //Find event with provided id
    Berita.findById(req.params.id).populate('comments').exec(async (err, foundBerita) => {
        if (err) {
            console.log(err)
        } else {
            console.log(foundEvent);
            res.render('beritas/show', { berita: foundBerita });
        }
    })
});

//EDIT BERITA ROUTE
router.get('/:id/edit', middleware.checkBeritaOwnership, async (req, res) => {
    Berita.findById(req.params.id, (err, foundBerita) => {
        res.render('beritas/edit', { berita: foundBerita });
    });
});

//UPDATE BERITA ROUTE
router.put('/:id', middleware.checkBeritaOwnership, upload.single('image'), async (req, res) => {
    geocoder.geocode(req.body.location, async (err, data) => {
        if (err || !data.length) {
            req.flash('error', 'Invalid address');
            return res.redirect('back');
        }
        req.body.berita.lat = data[0].latitude;
        req.body.berita.lng = data[0].longitude;
        req.body.berita.location = data[0].formattedAddress;

        Berita.findByIdAndUpdate(req.params.id, req.body.berita, async (err, berita) => {
            if (err) {
                req.flash("error", err.message);
                res.redirect("back");
            } else {
                req.flash("success", "Successfully Updated!");
                res.redirect("/beritas/" + berita._id);
            }
        });
    });
});

//DESTROY BERITA ROUTE
router.delete('/:id', middleware.checkBeritaOwnership, async (req, res) => {
    Berita.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            res.redirect('/beritas');
        } else {
            res.redirect('/beritas')
        }
    })
})


module.exports = router;