var express = require('express')
var router = express.Router()
const passport = require('passport')
const userModel = require('./users.js')
const propertiesModel = require('./properties.js')
const mongoose = require('mongoose')
const multer = require('multer')
const config = require('../config/config.js')

var db
var mongoCLient = mongoose.connect('mongodb://0.0.0.0/renter').then(() => {
  db = mongoose.connection.db
})

/* GET home page. */
const localStrategy = require('passport-local')
passport.use(new localStrategy(userModel.authenticate()))
const UserImageUpload = multer({ storage: config.UserImageStorage })
const ProductImageUpload = multer({ storage: config.ProductImageStorage })
var GoogleStrategy = require('passport-google-oidc')
require('dotenv').config()

async function getLatLng(address) {
  var ltg = {}
  const axios = require('axios')

  const options = {
    method: 'GET',
    url: 'https://trueway-geocoding.p.rapidapi.com/Geocode',
    params: {
      address: address,
      language: 'en',
    },
    headers: {
      'X-RapidAPI-Key': 'c93b060f90mshff7101bea4f72d1p19f697jsn72262717a843',
      'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com',
    },
  }

  await axios
    .request(options)
    .then(function (response) {
      ltg = response.data.results[0].location
    })
    .catch(function (error) {
      console.error(error)
    })
  return ltg
}
function trimEmail(email) {
  const username = email.slice(0, email.indexOf('@'))

  const trimmedUsername = username.replace(/\d/g, '')

  const trimmedEmail = trimmedUsername

  return trimmedEmail
}

//index page
router.get('/', function (req, res, next) {
  if (req.isAuthenticated()) {
    userModel.findOne({ username: req.user.username }, (err, user) => {
      var details = {
        username: trimEmail(user.username),
        profilepic: user.profilepic,
      }
      res.render('index', details)
    })
  } else {
    var details = { username: '', profilepic: '' }
    res.render('index', details)
  }
})

//user register
router.post('/register', function (req, res, next) {
  var userDets = new userModel({
    name: req.body.name,
    username: req.body.username,
    isRental: req.body.isRental,
  })
  userModel
    .register(userDets, req.body.password)
    .then(function (registeredUser) {
      passport.authenticate('local')(req, res, function () {
        res.redirect('/')
      })
    })
})

router.get('/signup', function (req, res) {
  res.render('signup')
})

router.get('/login', function (req, res, next) {
  res.render('login')
})

router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
  }),
  function (req, res, next) {},
)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  } else {
    res.redirect('/')
  }
}

router.get('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err)
    }
    res.redirect('/')
  })
})

// signup with google
router.get('/login/federated/google', passport.authenticate('google'))

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env['GOOGLE_CLIENT_ID'],
      clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
      callbackURL: '/oauth2/redirect/google',
      scope: ['email', 'profile'],
    },
    function verify(issuer, profile, cb) {
      userModel.findOne({ username: profile.emails[0].value }, function (
        err,
        user,
      ) {
        if (err) {
          return err
        }
        if (user) {
          return cb(null, user)
        }
        userModel
          .create({
            name: profile.displayName,
            username: profile.emails[0].value,
          })
          .then((user) => {
            return cb(null, user)
          })
      })
    },
  ),
)

router.get(
  '/oauth2/redirect/google',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login',
  }),
)

//there will be a option to see profile page
var ignore = ['properties']
router.get('/profile', isLoggedIn, async function (req, res) {
  var verified = true
  var user = await userModel.findOne({ username: req.session.passport.user })
  var ans = user.toJSON()
  for (let prop in ans) {
    if (ignore.indexOf(prop) === -1 && ans[prop].length === 0) {
      verified = false
    }
  }
  if (req.isAuthenticated()) {
    userModel.findOne({ username: req.user.username }, (err, user) => {
      res.render('profile', {
        data: user,
        verified: verified,
        username: trimEmail(user.username),
        profilepic: user.profilepic,
      })
    })
  } else {
    var details = { username: '', profilepic: '' }
    res.render('profile', {
      data: user,
      verified: verified,
      username: '',
      profilepic: '',
    })
  }
})

//here user will enter all his details, upload profile pic and after verifying will again go back to profile page
router.post(
  '/verify',
  isLoggedIn,
  UserImageUpload.single('image'),
  async function (req, res) {
    var data = {
      // username:req.body.username,
      name: req.body.name.trim(),
      address: req.body.address.trim(),
      contact: req.body.contact.trim(),
      idProof: {
        idType: req.body.idType.trim(),
        idNumber: req.body.idNumber.trim(),
      },
      profileImg: req.file.filename,
    }

    await userModel.findOneAndUpdate(
      { username: req.session.passport.user },
      data,
    )
    res.redirect('/profile')
  },
)

// creating properties here
router.post(
  '/upload/properties',
  isLoggedIn,
  ProductImageUpload.array('images', 4),
  async function (req, res) {
    var user = await userModel.findOne({ username: req.user.username })
    var loc = await getLatLng(req.body.propertyAddress)
    console.log(loc)
    var data = {
      title: req.body.title || '',
      ownerId: user._id,
      propertyDescription: req.body.propertyDescription,
      propertyAddress: req.body.propertyAddress,
      // LatitudeAndLongitude:{latitude:"", longitude:""},
      price: parseInt(req.body.price.replace(/,/g, ''), 10),
      addOnAmenities: req.body.ammenities || [],
      propertyType: req.body.proprtyType,
      accessibility: req.body.accessibility,
      furnishedType: req.body.furnished,
      houseRules: req.body.houseRules,
      bedrooms: req.body.bedrooms,
      beds: req.body.beds,
      floor: req.body.floor,
      status: req.body.status,
      pics: req.files.map((elem) => elem.filename),
      latitudeAndLongitude: loc,
    }
    console.log(data)
    var property = await propertiesModel.create(data)
    user.properties.push(property._id)
    await user.save()
    res.redirect('/profile')
  },
)
// creating properties here

//to find products on the basis of on which page u are
router.get('/find/properties/:pageno', async function (req, res) {
  var properties = await propertiesModel
    .find()
    .skip(req.params.pageno * 6)
    .limit(6)
  res.send(properties)
})

//to display upload/property form
router.get('/upload/property', isLoggedIn, function (req, res) {
  res.render('property')
})

//to show properties on index page
router.get('/show/properties', async function (req, res) {
  var properties = await propertiesModel.find().limit(8)
  res.send(properties)
})

// Filter for search
router.post('/filter', async function (req, res) {
  var minprice = req.body.minPrice
  var maxprice = req.body.maxPrice
  let query = {}
  if (req.body.proprtyType) {
    query.propertyType = req.body.proprtyType
  }
  if (req.body.bedrooms) {
    query.bedrooms = req.body.bedrooms
  }
  if (req.body.beds) {
    query.beds = req.body.beds
  }
  if (req.body.floor) {
    query.floor = req.body.floor
  }
  if (req.body.ammenities) {
    query.ammenities = req.body.ammenities
  }
  if (req.body.accessibility) {
    query.accessibility = req.body.accessibility
  }
  if (req.body.furnished) {
    query.furnishedType = req.body.furnished
  }
  console.log(query)
  var ans = new Array()
  var searchResults = await propertiesModel.find(query)
  searchResults.forEach(function (property) {
    if (property.price >= minprice && property.price <= maxprice) {
      ans.push(property)
    }
  })
  res.send(ans)
})

// Search property by location
router.post('/properties', async (req, res, next) => {
  var minprice = req.body.minPrice || 0
  var maxprice = req.body.maxPrice || 30000
  let query = {}
  if (req.body.proprtyType) {
    query.propertyType = req.body.proprtyType
  }
  if (req.body.bedrooms) {
    query.bedrooms = req.body.bedrooms
  }
  if (req.body.beds) {
    query.beds = req.body.beds
  }
  if (req.body.floor) {
    query.floor = req.body.floor
  }
  if (req.body.ammenities) {
    query.ammenities = req.body.ammenities
  }
  if (req.body.accessibility) {
    query.accessibility = req.body.accessibility
  }
  if (req.body.furnished) {
    query.furnishedType = req.body.furnished
  }
  console.log(query)
  var ans = new Array()

  await db.collection('properties').createIndex({ propertyAddress: 'text' })

  var add = await propertiesModel
    .find({ $text: { $search: '88' } }, { score: { $meta: 'textScore' } })
    .sort({ score: { $meta: 'textScore' } })
    .limit(8)

  var searchResults = await propertiesModel.find(query)
  searchResults.forEach(function (property) {
    if (property.price >= minprice && property.price <= maxprice) {
      ans.push(property)
    }
  })
  console.log(ans)
  res.render('properties', { properties: ans })
})

module.exports = router
