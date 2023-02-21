const mongoose = require('mongoose')
var plm = require('passport-local-mongoose')


var propertiesSchema = mongoose.Schema({
  title: {
    type: String,
    default: '',
  },
  ownerId: {
    type: mongoose.Types.ObjectId,
    ref: 'user',
  },
  propertyDescription: {
    type: String,
    default: '',
  },
  propertyAddress: {
    type: String,
    default: '',
  },
  latitudeAndLongitude: {
    lat: Number,
    lng: Number,
  },
  //monthly price
  price: Number,
  addOnAmenities: [
    {
      type: String,
    },
  ],
  propertyType: {
    type: String,
    default: 'House',
  },
  wishlist: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'user',
    },
  ],
  //accessibilty for disable
  accessibility: {
    type: Boolean,
    default: false,
  },
  //nonfurnished,semi-furnished,well-furnished
  furnishedType: String,
  reviewAndRatings: [
    {
      rating_author: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
      },
      review: String,
      rating: Number,
    },
  ],
  houseRules: String,
  bedrooms: {
    type: Number,
    default: 0,
  },
  beds: {
    type: Number,
    default: 0,
  },
  floor: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    default: 'Available',
  },
  pics: [
    {
      type: String,
    },
  ],
})

module.exports = mongoose.model('Properties', propertiesSchema)
