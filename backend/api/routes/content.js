const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router = express.Router();



//router.get('/', (req, res, next) => {
//    res.status(200).json({
//        message : 'Handling GET requests to /content'
//    });
//});

router.post('/', (req, res, next) => {
    const data= {
        content_id : req.body.content_id,
        content_data: req.body.content_data,
    }
    res.status(201).json({
        message : 'Handling POST requests to /content',
        data : data
      
    });
    console.log(data)
});





module.exports = router