var contentful = require('contentful')
var token = process.env.CONTENTFUL_TOKEN || "-Pq24yYVvWTVETtcK5FwyLO2p-itvXZ0K6fgDBRC-tw";
var space = process.env.CONTENTFUL_SPACE || "gun5e44bet0l";

var client = contentful.createClient({
  accessToken: token,
  space: space
})

exports.client = client
