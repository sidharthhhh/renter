const crypto = require("crypto");
const path = require("path");
const multer = require("multer");

const UserImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
          cb(null, 'public/images/uploads/userImages')
    },
    filename: function (req, file, cb) {
          crypto.randomBytes(14 , function(err, buf){
            const fn = buf.toString("hex") + path.extname(file.originalname);
            cb(null, fn);
          })    
    }
}) 

const ProductImageStorage = multer.diskStorage({
      destination: function (req, file, cb) {
            cb(null, 'public/images/uploads/productImages')
      },
      filename: function (req, file, cb) {
            crypto.randomBytes(14 , function(err, buf){
              const fn = buf.toString("hex") + path.extname(file.originalname);
              cb(null, fn);
            })    
      }
  }) 

module.exports = {UserImageStorage, ProductImageStorage};