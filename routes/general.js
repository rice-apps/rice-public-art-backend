var express = require('express');
var router = express.Router();
var artPiece = require('../services/artPiece');
var announcement = require('../services/announcement')

router.get('/allArt', (req, res) => {
    Promise.all([artPiece.getMoodyArt(), artPiece.getCampusArt()])
        .then(results => {
            let moodyArt = results[0].items.map(item => {
                let result = item.fields;
                result.image = result.image.fields.file.url;
                return result;
            })
            let campusArt = results[1].items.map(item => {
                let result = item.fields;
                result.image = result.image.fields.file.url;
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

router.route('/announcements')
    .get((req, res) => {
        announcement.getAnnouncements()
            .then(announcements => {
                return res.send({
                    success: true,
                    data: announcements.items[0].fields
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