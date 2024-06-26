const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message : 'prompt were fetched'
    });
});

router.post('/', (req, res, next) => {
    const data= {
        prompt_data : req.body.prompt_data,
        content_id : req.body.content_id,
    }
    res.status(201).json({
        message : 'prompt were received ',
        data : data
    });
    console.log(data);
});

module.exports = router