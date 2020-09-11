const express = require('express');                 // import packages           
const cors = require('cors');                       // import packages
const mongoose = require('mongoose');

require('dotenv').config();                         // configures the environment in the dotenv file

const app = express();                              // create our express server with the port
const port = process.env.port || 5000;

app.use(cors());                                    // This is the CORS middleware
app.use(express.json());                            // allow to parse JSON. Server is sending & receiving in JSON

// Setup the DB connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }        
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log ("MongoDB connection has established successfully!!!");
})
//// 

// Require the files and use the files
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);    // if someone access localhost/exercises it will load everything in /routes/exercises file
app.use('/users', usersRouter)

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});

