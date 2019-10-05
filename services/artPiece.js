var client = require('./contentfulClient').client;

function getArt() {
    query = {}
    query.content_type = 'artPiece'
    return client.getEntries(query)
}

module.exports = { getArt };