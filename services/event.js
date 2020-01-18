var client = require('./contentfulClient').client;

function getEvents() {
    query = {}
    query.content_type = 'event'
    return client.getEntries(query)
}

module.exports = { getEvents };