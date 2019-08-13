var express = require('express');
var router = express.Router();
var User = require('../models/user');

//GET AHLI
router.get('/', async (req, res) => {
    User.find().where('isAhli').equals(true).exec(async (err, foundUser) => {
        if (err) {
            req.flash('error', 'something went wrong');
            return res.redirect('/')
        }
        res.render('daftarAhli/index.ejs', { users: foundUser });
    })
});

router.get('/:id', async (req, res) => {
    User.findById(req.params.id, async (err, foundUser) => {
        if (err) {
            req.flash('error', 'No such user')
            return res.redirect('/users');
        }
    });
});

module.exports = router;
