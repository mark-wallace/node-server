// common module because node does not support 
const express = require('express'); 

//auth modules
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./config/keys');

// new instance of express server named app
const app = express(); 

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, accessToken => {
    console.log(accessToken);
}));

//route handler
app.get('/auth/google',
passport.authenticate('google', {
    scope: ['profile', 'email']
}))

//dynamic port configuration. Use Heroku's env var or use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT); 