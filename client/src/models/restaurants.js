var Restaurant = require('./restaurant');

var Restaurants = function() {

  var restaurant1 = new Restaurant({
    name: "Khushi's",
    cuisine: "Indian",
    stars: 5
  });

  var restaurant2 = new Restaurant({
    name: "McDonalds",
    cuisine: "Fast Food",
    stars: 2
  });


  return [restaurant1, restaurant2]
}



module.exports = Restaurants;