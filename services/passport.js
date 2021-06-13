const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = mongoose.model('users');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
    //callback function after the user successfully auths
}, (accessToken, refreshToken, profile, done) => {
    //this next bit creates a new user instance and saves it to the collection
    new User({ googleId: profile.id }).save();
}));