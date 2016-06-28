var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')
// var issData = require('./views/issData.hbs')

var endpoint = 'https://api.wheretheiss.at/v1/satellites'

xhr.get(endpoint, function (err, data) {
  if (err) {
    console.error(err)
  }

  var satellite = data.body
  console.log(JSON.parse(satellite)) 

  // Replace 'Space' below with the response
  var target = document.getElementsByTagName('main')[0]
  target.innerHTML = greeting({name: 'Space'})

  // var target = document.getElementsByTagName('main')[0]
  // target.innerHTML = issData({satellite})
})
