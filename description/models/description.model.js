const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;
const descriptionSchema = new Schema({
    storeName: String,
    storeID: String,
    description: String,
    Latitude: String,
    longitude:String,
    likes:String,
    dislikes:String

 });

 const descriptionModel = mongoose.model('descriptions', descriptionSchema);

 exports.createDescription = (descriptionData) => {
    const description = new descriptionModel(descriptionData);
    return description.save();
};
    