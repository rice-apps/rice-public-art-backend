var express = require('express');
var router = express.Router();
var artPiece = require('../services/artPiece');
var distance = require('../util/distance.js')

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

router.get('/closestArt', (req, res) => {
    let userCoords = {lat: parseFloat(req.query.lat), lon: parseFloat(req.query.lon)}
    artPiece.getCampusArt()
        .then(art => {
            data = art.items.map(artData => {
                let fields = artData.fields
                fields.image = fields.image.fields.file.url
                fields.distanceMiles = distance(userCoords.lat, userCoords.lon, fields.location.lat, fields.location.lon)
                return fields
            })
            data.sort((a, b) => a.distance - b.distance)
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