var contentful = require('contentful')
var token = process.env.CONTENTFUL_TOKEN;
var space = process.env.CONTENTFUL_SPACE;

var client = contentful.createClient({
  accessToken: token,
  space: space
})

exports.client = client
