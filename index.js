var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')


var endpoint = 'https://api.wheretheiss.at/v1/satellites'

xhr.get(endpoint, function (err, data) {
  if (err) {
    console.error(err)
  }

  var satellite = JSON.parse(data.body) 
  
  console.log(satellite[0])

  // Replace 'Space' below with the response
  var target = document.getElementsByTagName('main')[0]
  target.innerHTML = greeting({name: 'Space'}, satellite)

})
