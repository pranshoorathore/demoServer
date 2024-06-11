const express = require('express');
const connectDB = require('./config/MongoDB')
const bodyParser = require('body-parser');

const app = express();

// connectDB();

app.use(bodyParser.json());

app.use('/', require('./routers/home.router'));

app.listen(3000, ()=>{
    console.log("Server started at port 3000")
});