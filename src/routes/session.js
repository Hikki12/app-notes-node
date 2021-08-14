const express = require('express');
const passport = require('passport');
const router = express.Router();

router.post('/login', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
    // passport.authenticate('local', (err, user, info) => {
    //     if(err){ return next(err); }
    //     if(!user){ return res.redirect('/login'); }
    //     req.logIn(user, (err) => {
    //         return res.redirect('/note/' + user.username);
    //     });
    // });
});

module.exports = router;