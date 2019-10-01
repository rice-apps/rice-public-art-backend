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
    })

module.exports = router;