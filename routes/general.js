var express = require('express');
var router = express.Router();
var artPiece = require('../services/artPiece');
var event = require('../services/event')

router.get('/allArt', (req, res) => {
    Promise.all([artPiece.getMoodyArt(), artPiece.getCampusArt()])
        .then(results => {
            let moodyArt = results[0].items.map(item => {
                let result = item.fields;
                result.image = "https:" + result.image.fields.file.url;
                return result;
            })
            let campusArt = results[1].items.map(item => {
                let result = item.fields;
                result.image = "https:" + result.image.fields.file.url;
                return result;
            })
            return res.send({
                success: true,
                // data: moodyArt.concat(campusArt)
                data: { "moodyArt": moodyArt, "campusArt": campusArt }
            })
        })
        .catch(error => {
            return res.send({
                success: false,
                error: error
            })
        })
})

router.get('/events', (req, res) => {
    event.getEvents()
        .then(events => {
            let result = events.items.map(item => item.fields)
            return res.send({
                success: true,
                data: result
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