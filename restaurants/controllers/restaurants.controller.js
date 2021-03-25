const RestaurantModel = require('../models/restaurants.model');

exports.insert = (req, res) => {
    
    RestaurantModel.createRestaurant(req.body)
        .then((result) => {
            res.status(201).send({ result});
        });
 };