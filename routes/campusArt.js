var express = require('express');
var router = express.Router();
var artPiece = require('../services/artPiece');

router.get('/allArt', (req, res) => {
    artPiece.getCampusArt()
        .then(art => {
            data = art.items.map(artData => {
                let fields = artData.fields
                fields.image = fields.image.fields.file.url
                return fields
            })
            return res.send({
                success: true,
                data: data
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