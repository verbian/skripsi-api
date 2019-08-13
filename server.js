require('dotenv').config();

const express = require('express');
const app = express();
const server = require('http').Server(app);
var io = require('socket.io')(server);
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const methodOverride = require('method-override');
const Article = require('./models/article');
const Comment = require('./models/comment');
const Event = require('./models/event');
const Berita = require('./models/berita');
const seedDB = require('./seeds');
const flash = require('connect-flash');
const User = require('./models/user');

//REQUIRING ROUTES
var commentRoutes = require('./routes/comments'),
    articleRoutes = require('./routes/articles'),
    indexRoutes = require('./routes/index'),
    eventRoutes = require('./routes/events'),
    beritaRoutes = require('./routes/beritas'),
    kesehatanRoutes = require('./routes/kalkulator'),
    idxRoutes = require('./routes/idx'),
    daftarAhliRoutes = require('./routes/daftarAhli');

mongoose.connect('mongodb://localhost:27017/yourhealth', { useNewUrlParser: true });
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());
app.locals.moment = require('moment');

//Seed DB
// seedDB();

//set port and ip
app.set("port", process.env.PORT || 3000);
app.set("ip", process.env.IP || "0.0.0.0");
// PASSPORT CONFIGURATION
app.use(require('express-session')({
    secret: 'Skripsi',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(async (req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    next();
})

app.use('/', indexRoutes);
app.use('/articles', articleRoutes);
app.use('/articles/:id/comments', commentRoutes);
app.use('/events', eventRoutes);
app.use('/beritas', beritaRoutes);
app.use('/kalkulator', kesehatanRoutes);
app.use('/idx', idxRoutes);
app.use('/users', daftarAhliRoutes);


// SOCKET / IO SETUP
io.on('connection', async (socket) => {
    console.log('made socket connection', socket.id);
    socket.on('chat', async (data) => {
        io.emit('chat', data);
    })

    socket.on('typing', async(data) => {
        socket.broadcast.emit('typing', data)
    })
});

server.listen(app.get('port'), app.get('ip'), async (err) => {
    if (err) {
        console.error(err + " Couldn't start the server, due to technical issue.");
    } else {
        let port = server.address().port;
        console.log("Server is running on port " + port);
    }
});

