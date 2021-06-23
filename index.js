const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User"); //load model before passport!
require("./services/passport");

// new instance of express server named app
const app = express();

//tell express to use cookies
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //30days expressed as miliseconds
    keys: [keys.cookieKey], //its an array because you could provide multiple keys, and it will pick one at random
  })
);

app.use(passport.initialize());
app.use(passport.session());

//authRoutes just needs to be started and it requires  the express server
//so we require it, get a function back, then immediately pass in the app object
require("./routes/authRoutes")(app);

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//dynamic port configuration. Use Heroku's env var or use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
