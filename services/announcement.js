var client = require('./contentfulClient').client;

function getAnnouncements() {
    query = {}
    query.content_type = 'announcement'
    return client.getEntries(query)
}

module.exports = { getAnnouncements };