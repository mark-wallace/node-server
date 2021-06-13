const express = require('express'); 
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User'); //load model before passport!
require('./services/passport');

// new instance of express server named app
const app = express(); 
console.log("Server Started");

//authRoutes just needs to be started and it requires  the express server
//so we require it, get a function back, then immediately pass in the app object
require('./routes/authRoutes')(app);

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

//dynamic port configuration. Use Heroku's env var or use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT); 