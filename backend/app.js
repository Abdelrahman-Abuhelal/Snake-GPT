
const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const contentRoutes = require('./api/routes/content');
const promptRoutes = require('./api/routes/prompt');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');





app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method === 'OPTIONS'){
        res.header("Access-Control-Allow-Methods", "GET, POST");
        return res.status(200).json({});
    }
    next();
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Routes
app.use('/content', contentRoutes);
app.use('/prompt', promptRoutes);


app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});


app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error : {
            message : error.message
        }
    });
});


module.exports = app;



