var client = require('./contentfulClient').client;

function getCampusArt() {
    query = {}
    query.content_type = 'campusArt'
    return client.getEntries(query)
}

function getMoodyArt() {
    query = {}
    query.content_type = 'moodyArt'
    return client.getEntries(query)
}

module.exports = { getCampusArt, getMoodyArt };