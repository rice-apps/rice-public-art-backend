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
    .post((req, res) => {
        console.log(req.body);
        // let artPiece = new Art();
        // artPiece.name = req.body.name;
        // artPiece.description = req.body.description;
        // artPiece.image = req.body.image;
        // artPiece.save()
        //     .catch(err => {
        //         console.log(err)
        //     })
        console.log(req)
        return res.send({
            success: true,
            data: req.body
        })
    })

module.exports = router;