const express = require('express');
const passport = require('passport');
const path = require('path');
const morgan = require('morgan');
const config = require('./config/index');

const viewRouter = require('./routes/views');
const sessionRouter = require('./routes/session');


const app = express();

// Settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', config.port);

// Middlewares
app.use(morgan('dev')); 
app.use(express.json());
//Routes
app.use(viewRouter);
app.use(sessionRouter);

//
app.use(passport.initialize());
app.use(passport.session()); 

// Static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(config.port, ()=> {
    console.log(`Server is running on port ${config.port}`)
});


