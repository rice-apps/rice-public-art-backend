var express = require('express');
var router = express.Router();
var artPiece = require('../services/artPiece');

router.route('/allArt')
    .get((req, res) => {
        artPiece.getCampusArt()
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