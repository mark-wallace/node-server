const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("users");

//user.id is the id automatically generated by Mogodb. It is not the google ID.
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//id is the mogodb ID coming back to our app via a cookie. we need to associate it to a user
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true, //this bit allows us to pass thru heroku's proxy on https
      //callback function after the user successfully auths
    },
    async (accessToken, refreshToken, profile, done) => {
      //next we check if this user already exists in the DB
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        //we already have this guy, so lets call passports done function
        done(null, existingUser);
      } else {
        //this next bit creates a new user instance and saves it to the collection
        const user = await new User({ googleId: profile.id }).save();
        done(null, user);
      }
    }
  )
);

passport.initialize();
