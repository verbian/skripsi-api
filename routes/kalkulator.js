var express = require('express');
var router = express.Router();

//GET BERGABUNG SEBAGAI AHLI PAGE
router.get('/', async (req, res) => {
    res.render('kalkulator/kalkulator');
});

router.get('/bmi', async (req, res) => {
    res.render('kalkulator/bmi.ejs');
});

router.get('/haid', async (req, res) => {
    res.render('kalkulator/haid.ejs');
});

router.get('/donor', async (req, res) => {
    res.render('kalkulator/donor.ejs');
});

module.exports = router;