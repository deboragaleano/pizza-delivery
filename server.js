const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const dotenv = require('dotenv'); 

const app = express(); 

//Bodyparser Middleware
app.use(bodyParser.json()); 

// DB Config 
dotenv.config(); 
const db = process.env.MONGO_URI; 

//Connect to Mongo 
//this is promise based so .then .catch
mongoose.connect(db, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
    //if the promise fulfills then..
    .then(() => console.log('MongoDB connected'))
    //if the promise rejects then show error
    .catch(error => console.log(error))

/* DEFINE HOW TO RUN A SERVER */
// Since we're deploying to Heroku we need to set it to process.env.PORT (this is an environmental variable - like the Weather API -key that I used)
// or local 5000
const port = process.env.PORT || 5000 

app.listen(port, () => console.log(`Server started on port ${port}`))


