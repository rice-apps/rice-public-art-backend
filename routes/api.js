var express = require('express');
var router = express.Router();
var Art = require('../models/art');

router.route('/art')
    .get((req, res) => {
        Art.find()
            .then(art => {
                return res.send({
                    success: true,
                    data: art
                })
            })
            .catch(error => {
                return res.send({
                    success: false,
                    error: error
                })
            })
    })

module.exports = router;