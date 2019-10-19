var express = require('express');
var router = express.Router();
var artPiece = require('../services/artPiece');

router.route('/allArt')
    .get((req, res) => {
        Promise.all([artPiece.getCampusArt(), artPiece.getMoodyArt()])
            .then(results =>
                console.log(results)
            )
            .catch(error =>
                console.log(error)
            )

    })

module.exports = router;