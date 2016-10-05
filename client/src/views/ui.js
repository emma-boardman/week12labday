var Restaurants = require('../models/restaurants');

var UI = function(){
  var restaurants = new Restaurants();
  this.render(restaurants);
}

UI.prototype = {
  createText: function(text){
    var p = document.createElement("p");
    p.innerText = text;
    return p;
  },
  
  appendText: function(element, text, label){
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },
  
  render: function(restaurants) {
    var container = document.getElementById("li");

    for(var restaurant of restaurants) {

      var li = document.createElement("li");
      this.appendText(li, restaurant.name, "Name: ");
      this.appendText(li, restaurant.cuisine, "Cuisine: ");
      this.appendText(li, restaurant.stars, "Stars: ");
      container.appendChild(li);
    }
    
  }

}

module.exports = UI;