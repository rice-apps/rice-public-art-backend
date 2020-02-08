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

router.get('/allEvents', (req, res) => {
    event.getEvents()
        .then(events => {
            data = events.items.map(event => {
                let fields = event.fields;
                fields.image = "https:" + fields.image.fields.file.url;
                return fields;
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

router.get('/events', (req, res) => {
    // Query Time Period
    var year = req.query.year
    var month = req.query.month.padStart(2, '0');

    // Today's Date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0
    var yyyy = today.getFullYear();
    var todayDateStr = yyyy + "-" + mm + "-" + dd;
    event.getEvents()
        .then(events => {
            data = events.items.map(event => {
                let fields = event.fields;
                fields.image = "https:" + fields.image.fields.file.url;
                fields.isPastEvent = fields.date.localeCompare(todayDateStr) < 0
                return fields;
            })
            data = data.filter(event => event.date.includes(year + "-" + month))
            data = data.sort((a, b) => a.isPastEvent < b.isPastEvent || a.date.localeCompare(b.date))
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