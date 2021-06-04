// common module because node does not support 
const express = require('express'); 

// new instance of express server named app
const app = express(); 

//route handler
app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

//dynamic port configuration. Use Heroku's env var or use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT); 