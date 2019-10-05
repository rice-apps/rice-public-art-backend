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
        Art.findOne({ name: req.body.name }).then(piece => {
            if (!piece) {
                let artPiece = new Art();
                artPiece.name = req.body.name;
                artPiece.description = req.body.description;
                artPiece.image = req.body.image;
                artPiece.save().then(data => {
                    return res.send({
                        success: true,
                    })
                    .catch(err => {
                        console.log(err)
                        return res.send({
                            success: false,
                        })
                    })
                })
            } else {
                return res.send({
                    success: true,
                })
            }
        })
        .catch(error => {
            console.log(error)
            return res.send({
                success: false,
            })
        })
        
    })

module.exports = router;