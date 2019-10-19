var express = require('express');
var router = express.Router();
var artPiece = require('../services/artPiece');

router.route('/allArt')
    .get((req, res) => {
        let result = Promise.all([
            artPiece.getCampusArt(),
            artPiece.getMoodyArt()
        ])
        return res.send({
            success: true,
            data: result
        })
    })
    
module.exports = router;