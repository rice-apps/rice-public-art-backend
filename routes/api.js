var express = require('express');
var router = express.Router();
var artPiece = require('../services/artPiece');

router.route('/art')
    .get((req, res) => {
        artPiece.getArt()
        .then(art => {
            return res.send({
                success: true,
                data: art.items[0].fields
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