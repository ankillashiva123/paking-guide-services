const descriptionsController = require('./controllers/description.controller');
const config = require('../common/config/env.config');

exports.routesConfig = function (app) {
    app.post('/description', [
        descriptionsController.insert
    ]);
 }