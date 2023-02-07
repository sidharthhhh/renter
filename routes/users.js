const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const plm  = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost/renter");

var userSchema = mongoose.Schema({
  name: String,
  userName:String,
  //user is rental (renting some property)
  isRental:Boolean,
  contact: Number,
  profileImg:String,
  profileDescription: String,
  address:{
    type:String,
    default:""
  },
  properties:[{
    type:mongoose.Types.ObjectId,
    ref:Properties
  }],
  idProof:{
    type:{
      idType:String,
      idNumber:String // pancard no. contains character
    }
  }
});

userSchema.plugin(plm);
module.exports = mongoose.model("user" , userSchema);
