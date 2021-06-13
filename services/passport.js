const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("users");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      //callback function after the user successfully auths
    },
    (accessToken, refreshToken, profile, done) => {
      //next we check if this user already exists in the DB
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          //we already have this guy, so lets call passports done function
          done(null, existingUser);
        } else {
          //this next bit creates a new user instance and saves it to the collection
          new User({ googleId: profile.id })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);
