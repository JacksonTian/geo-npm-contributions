var _ = require('lodash'),
    turf = require('turf'),
    fs = require('fs')

console.log('reading')
fs.readFile('./modulesArray.json', function(err,modules){
  var cities = JSON.parse(modules)
  _.each(cities, function(city){
    //console.log(city.city.split(',')[0])
    city.capsCity = city.city.split(',')[0]
  })
  console.log(cities)
  fs.writeFile('./formattedCity.json', JSON.stringify(cities), function(err){
    console.log('complete')
  })
})
