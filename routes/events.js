var express         = require('express');
var router          = express.Router();
var Event           = require('../models/event');
var middleware      = require('../middleware');
var NodeGeocoder    = require('node-geocoder');
var options         = {
    provider: 'google',
    httpAdapter: 'https',
    apiKey: process.env.GEOCODER_API_KEY,
    formatter: null
};

var geocoder        = NodeGeocoder(options);

var multer          = require('multer');
var storage         = multer.diskStorage({
    filename: function (req, file, callback) {
        callback(null, Date.now() + file.originalname);
    }
});
var imageFilter     = ((req, file, cb) => {
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

//INDEX - SHOW ALL EVENT
router.get('/', async (req, res) => {
    var perPage = 8;
    var pageQuery = parseInt(req.query.page);
    var pageNumber = pageQuery ? pageQuery : 1;
    if (req.query.search) {
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        Event.find({ name: regex }).skip((perPage * pageNumber) - perPage).limit(perPage).exec(async (err, foundEvent) => {
            Event.countDocuments({ name: regex }).exec(async (err, count) => {
                if (err) {
                    console.log(err)
                    res.redirect('back');
                } else {
                    res.render('events/index', {
                        events: foundEvent,
                        current: pageNumber,
                        pages: Math.ceil(count / perPage),
                        search: req.query.search
                    });
                }
            })
        })
    } else {
        Event.find({}).skip((perPage * pageNumber) - perPage).limit(perPage).exec(async (err, foundEvent) => {
            Event.countDocuments().exec(async (err, count) => {
                if (err) {
                    console.log(err)
                } else {
                    res.render('events/index', {
                        events: foundEvent,
                        current: pageNumber,
                        pages: Math.ceil(count / perPage),
                        search: req.query.search
                    })
                }
            });
        })
    }
})

//CREATE - ADD NEW EVENT
router.post("/", middleware.isLoggedIn, upload.single("image"), async (req, res) => {
    // get data from form and add to events array
    var name = req.body.event.name;
    // var image = req.body.image;
    var price = req.body.event.price;
    var desc = req.body.event.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    };

    geocoder.geocode(req.body.location, async (err, data) => {
        if (err || !data.length) {
            console.log(err);
            req.flash('error', 'Invalid address');
            return res.redirect('back');
        }
        // add cloudinary url for the image to the event object under image property
        cloudinary.v2.uploader.upload(req.file.path, async (err, result) => {
            if (err) {
                req.flash("error", err.message);
                return res.redirect("back");
            }
            var image = result.secure_url;
            var imageId = result.public_id;

            var lat = data[0].latitude;
            var lng = data[0].longitude;
            var location = data[0].formattedAddress;
            var newEvent = {
                name: name,
                image: image,
                price: price,
                imageId: imageId,
                description: desc,
                author: author,
                location: location,
                lat: lat,
                lng: lng
            };

            // Create a new event and save to DB
            Event.create(newEvent, function (err, newlyCreated) {
                if (err) {
                    req.flash("error", err.message);
                    return res.redirect("back");
                } else {
                    //redirect back to event page
                    console.log(newlyCreated);
                    res.redirect("/events/" + newlyCreated._id);
                }
            });
        });
    });
});

//NEW - NEW FORM TO CREATE NEW event
router.get('/new', middleware.isLoggedIn, async (req, res) => {
    res.render('events/new');
});

//SHOW - SHOW INFO ABOUT SELECTED event
router.get('/:id', async (req, res) => {
    //Find event with provided id
    Event.findById(req.params.id).populate('comments').exec(async (err, foundEvent) => {
        if (err) {
            console.log(err)
        } else {
            console.log(foundEvent);
            res.render('events/show', { event: foundEvent });
        }
    })
});


//EDIT EVENT ROUTE
router.get('/:id/edit', middleware.checkEventOwnership, async (req, res) => {
    Event.findById(req.params.id, (err, foundEvent) => {
        if(err) {
            req.flash('err', err.message);
        } else {
            res.render('events/edit', { event: foundEvent });
        }
    });
});

//UPDATE EVENT ROUTE
router.put('/:id', middleware.checkEventOwnership, upload.single('image'), async (req, res) => {
    geocoder.geocode(req.body.location, async (err, data) => {
        if (err || !data.length) {
            req.flash('error', 'Invalid address');
            return res.redirect('back');
        }
        req.body.event.lat = data[0].latitude;
        req.body.event.lng = data[0].longitude;
        req.body.event.location = data[0].formattedAddress;

        Event.findByIdAndUpdate(req.params.id, req.body.event, async (err, event) => {
            if (err) {
                req.flash("error", err.message);
                res.redirect("back");
            } else {
                req.flash("success", "Successfully Updated!");
                res.redirect("/events/" + event._id);
            }
        });
    });
});

//DESTROY EVENT ROUTE
router.delete('/:id', middleware.checkEventOwnership, async (req, res) => {
    Event.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            res.redirect('/events');
        } else {
            res.redirect('/events')
        }
    })
})

module.exports = router;