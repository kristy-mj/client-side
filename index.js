var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')

var endpoint = 'https://api.wheretheiss.at/v1/coordinates/37.795517,-122.393693'

xhr.get(endpoint, function (err, data) {
  if (err) {
    console.error(err)
  }
  console.log(JSON.parse(data.body)) // FYI: data.body is a string
  console.log(JSON.parse(data.body[0]))
  var satellite = data.body

  // Replace 'Space' below with the response
  var target = document.getElementsByTagName('main')[0]
  target.innerHTML = greeting({name: 'Space', data: satellite})
})
