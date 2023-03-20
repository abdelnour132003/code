// imports

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const httpStatus = require('http-status');
require('dotenv').config();

const app = express();


// middlewares

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // rest api (application/json)
app.use(express.urlencoded({extended: true})); // x-www-form urlencoded

// to allow all clients with diffrent domain names to use the Api

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,PATCH,PUT')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
});

// error handler

const errorHandler = (err,req,res,next) => {
    console.log(err);
    const status = err.status || httpStatus.INTERNAL_SERVER_ERROR;
    res.status(status).json({
        message: err.message,
        status: err.status
    });
};

// routes


app.use(errorHandler);


app.listen(8080, () => console.log('connected'));