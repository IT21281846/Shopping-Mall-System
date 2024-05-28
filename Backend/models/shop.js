const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const shopSchema = new Schema({

    shopName : {
        type:String,
        required: true
    },
    shopId : {
        type:String,
        required: true
    },
    location : {
        type:String,
        required: true
    },
    contact : {
        type:String,
        required: true
    },
    description : {
        type:String,
    },
    image: {
        type: String,
        required: true
      }
    
})

const Shop = mongoose.model("Shop",shopSchema);
module.exports = Shop;