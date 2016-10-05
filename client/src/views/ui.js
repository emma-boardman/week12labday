var Restaurants = require('../models/restaurants');

var UI = function(){
  var restaurants = new Restaurants();
  this.render(restaurants);
}

UI.prototype = {

  createText: function(text, label){
    var p = document.createElement("p");
    p.innerText = label+text;
    return p;
  },

  appendText: function(element, text, label){
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  createRestaurant: function(li, restaurant) {
    this.appendText(li, restaurant.name, "Name: ");
    this.appendText(li, restaurant.cuisine, "Cuisine: ");
    this.appendText(li, restaurant.stars, "Stars: ");

  },
  
  render: function(restaurants) {
    var container = document.getElementById("restaurants");
    for(var restaurant of restaurants) {

      console.log(restaurant)
      var li = document.createElement("li");
      this.createRestaurant(li, restaurant);
      container.appendChild(li);
    }
    
  }

}


module.exports = UI;