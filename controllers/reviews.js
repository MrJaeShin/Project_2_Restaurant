var Restaurant = require('../models/restaurant');
const restaurants = require('./restaurants');

module.exports = {
  create,
  delete: deleteReview,
};

function create(req, res) {
  Restaurant.findById(req.params.id, function(err, restaurant) {
    restaurant.reviews.push(req.body);
    restaurant.save(function(err) {
      res.redirect(`/restaurants/${restaurant._id}`);
    });
  });
}

function deleteReview(req, res) {
    Restaurant.findOne({"reviews._id" : req.params.id}, function(err, restaurant) {
        restaurant.reviews.id(req.params.id).remove();
        restaurant.save(function(err) {
            res.redirect(`/restaurants/${restaurant._id}`);
        });
    });
}