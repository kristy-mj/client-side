var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')
var satellite = require('./views/satellite.hbs')

var endpoint = 'https://api.wheretheiss.at/v1/satellites'

xhr.get(endpoint, function (err, data) {
  if (err) {
    console.error(err)
  }
  var satObj = JSON.parse(data.body)[0] 
  
  var target = document.getElementsByTagName('main')[0]
  target.innerHTML = greeting({name: 'Space'})

  var findData = document.getElementsByTagName('button')[0]
  var data = document.getElementById('data')

  findData.addEventListener('click', function(){
  	data.innerHTML = satellite(satObj)
  })
})


