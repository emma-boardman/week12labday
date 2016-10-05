var Restaurant = require('./restaurant');

var Restaurants = function() {
  var restaurant1 = new Restaurant({
    name: "Khushi's",
    cuisine: "Indian",
    stars: 5
  });
  return [restaurant1]
}




module.exports = Restaurants;