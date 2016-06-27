var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')
var issData = ('./views/issData.hbs')

var endpoint = 'https://api.wheretheiss.at/v1/satellites'

xhr.get(endpoint, function (err, data) {
  if (err) {
    console.error(err)
  }

  // In case you're curious
  console.log(JSON.parse(data.body)) // FYI: data.body is a string

  // Replace 'Space' below with the response
  var target = document.getElementsByTagName('main')[0]
  target.innerHTML = greeting({name: 'Space'})
})
