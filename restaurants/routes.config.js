const restaurantsController = require('./controllers/restaurants.controller');
const config = require('../common/config/env.config');

exports.routesConfig = function (app) {
    app.post('/restaurants', [
        restaurantsController.insert
    ]);
 }