const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
require("./models/User"); //load model before passport!
require("./services/passport");

// new instance of express server named app
const app = express();

//body parser middleware
app.use(bodyParser.json());

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
require("./routes/billingRoutes")(app);

if (process.env.NODE_ENV === "production") {
  /* express will serve up production assets like 
  our main.js or main.css. */
  app.use(express.static("client/build"));

  /* this will only be returned if express hasn't
  already returned the static assets above */
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//dynamic port configuration. Use Heroku's env var or use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
