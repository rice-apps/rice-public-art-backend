var express = require('express');
var router = express.Router();
var artPiece = require('../services/artPiece');

router.get('/allArt', (req, res) => {
    artPiece.getMoodyArt()
        .then(art => {
            let data = art.items
            data = data.map(item => {
                let result = item.fields;
                result.image = "https:"+result.image.fields.file.url;
                return result;
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