const mongoose = require("mongoose");

var propertiesSchema = mongoose.Schema({
    ownerId:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    },
    propertyDescription:{
        type:String,
        default:""
    },
    propertyAddress:{
        type:String,
        default:""
    },
    latitudeAndLongitude:{
       type: {
            latitude:Number,
            longitude:Number
        }
    },
    //monthly price
    price:Number,
    addOnAmenities:[{
        type:String
    }],
    propertyType:{
        type:String,
        default:"House"
    },
    wishlist:[{
        type: mongoose.Types.ObjectId,
        ref:"users"
    }],
    //accessibilty for disable
    accessibility:{
        type:Boolean,
        default:true
    },
    //nonfurnished,semi-furnished,well-furnished
    furnishedType:String,
    reviewAndRatings:[{
        type:{
            rating_author:mongoose.Types.ObjectId,
            ref:"user",
            review:String,
            rating:Number
        }
    }],
    houseRules:[{
        type:String
    }]
});

module.exports = mongoose.model("properties" , propertiesSchema);