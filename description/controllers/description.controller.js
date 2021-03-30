const DescriptionModel = require('../models/description.model');

exports.insert = (req, res) => {
    
    DescriptionModel.createDescription(req.body)
        .then((result) => {
            res.status(201).send({ result});
        });
 };