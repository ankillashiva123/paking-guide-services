const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;
const restaurantsSchema = new Schema({
    storeName: String,
    address: String,
    Longitude: String,
    Latitude: String,
    imagesPath:String,
    mallName:String
 });

 const restaurants = mongoose.model('restaurants', restaurantsSchema);

 exports.createRestaurant = (restaurentData) => {
    const user = new restaurants(restaurentData);
    return user.save();
};
    
