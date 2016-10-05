/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var UI = __webpack_require__(1);
	
	var app = function() {
	  new UI();
	}
	
	window.onload = app;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Restaurants = __webpack_require__(2);
	
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
	
	      console.log(restaurants)
	
	      var li = document.createElement("li");
	      this.createRestaurant(li, restaurant);
	      container.appendChild(li);
	    }
	    
	  }
	
	}
	
	
	module.exports = UI;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Restaurant = __webpack_require__(3);
	
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

/***/ },
/* 3 */
/***/ function(module, exports) {

	var Restaurant = function(options) {
	  this.name = options.name;
	  this.cuisine = options.cuisine;
	  this.stars = options.stars;
	}
	
	module.exports = Restaurant;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map