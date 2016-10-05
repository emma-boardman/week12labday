var RestaurantApi = function(app){
  var restaurants = [
  { name: "Khushi's",
    cuisine: "Indian",
    stars: 5
    },

    { name: "McDonalds",
      cuisine: "Fast Food",
      stars: 2
      }
  ];

app.get('/restaurants/:id', function(req, res){
  res.json({data:restaurants[req.params.id]});
});


app.get('/restaurants', function(req, res) {
  res.json({data:restaurants});
});

}

module.exports = RestaurantApi;