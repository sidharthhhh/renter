var express = require('express')
var router = express.Router()
const passport = require('passport')
const userModel = require('./users.js')
const propertiesModel = require('./properties.js')
const multer = require('multer')
const config = require('../config/config.js')

/* GET home page. */
const localStrategy = require("passport-local");
passport.use(new localStrategy(userModel.authenticate()));
const UserImageUpload = multer({storage:config.UserImageStorage});
const ProductImageUpload = multer({storage: config.ProductImageStorage});


// router.get('/', function(req, res, next) {
//   var details = {username:"", profilepic:""};
//   res.render('index' , details);
// });




//index page
router.get('/', function (req, res, next) {
  if (req.isAuthenticated()) {
    user.findOne({ username: req.user.username }, (err, user) => {
      var details = { username: user.username, profilepic: user.profilepic }
      res.render('index', details)
    })
  } else {
    var details = { username: '', profilepic: '' }
    res.render('index', details)
  }
});


//user register
router.post('/register' , function(req,res,next){
  var userDets = new userModel({
    name:req.body.name,
    username:req.body.username,
    isRental:req.body.isRental,
  })
userModel.register(userDets , req.body.password)
.then(function(registeredUser){
  passport.authenticate('local')(req,res,function(){
    res.redirect('/')
  });
});
});

router.get('/signup' , function(req,res){
  res.render("signup")
})

router.get('/login', function(req, res, next) {
   res.render('login');
});

// router.get('/success' , function(req,res,next){
//   res.send("login successfully");
// })
// router.post('/success' , isLoggedIn, async function(req,res){
//   var user = await userModel.findOne({username: req.session.passport.user});
//   var details = {username: user.username , profilepic:user.profileImg};
//   res.render('index' , details);
// })

router.post('/login' , passport.authenticate('local' , {
  successRedirect: '/',
  failureRedirect: '/login'
}),function(req,res,next){});

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

router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Express' })
})

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
  console.log(verified)
  res.render('profile', { data: user, verified: verified })
})

//on the profile page there will be a button to verify your account
router.get('/verify', isLoggedIn, async function (req, res) {
  var user = await userModel.findOne({ username: req.session.passport.user })
  res.render('verify', { data: user })
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

  await userModel.findOneAndUpdate({username:req.session.passport.user},data)
  res.redirect("/profile");
})


//to find products: for first page show first 6 elements
router.get('/find/properties' , async function(req,res){
      var properties = await propertiesModel.find().limit(6);
      res.send(properties);
     
})

//to find products on the basis of on which page u are
router.get('/find/properties/:pageno' , async function(req,res){
  var properties = await propertiesModel.find().skip(req.params.pageno*6).limit(6);
  res.send(properties);
})

//to upload property
router.post('/upload/property' , isLoggedIn,ProductImageUpload.array('images',4), async function(req,res){
  var user = userModel.findOne({username: req.session.passport.user});
  var data={
    ownerId: user._id,
    propertyDescription: req.body.propertyDescription,
    propertyAddress: req.body.propertyAddress,
    // LatitudeAndLongitude:{latitude:"", longitude:""},
    price:req.body.price,
    addOnAmenities:req.body.ammenities||[],
    propertyType:req.body.proprtyType,
    accessibility:req.body.accessibility,
    furnishedType:req.body.furnished,
    houseRules:req.body.houseRules,
    bedrooms:req.body.bedrooms,
    beds:req.body.beds,
    floor:req.body.floor,
    status:req.body.status,
    pics:req.files.map(elem=>elem.filename)
  }
  await propertiesModel.create(data);
  // res.send("You have succesfully uploaded your property");
 res.redirect('/profile')
})

//to display upload/property form
router.get('/upload/property' , isLoggedIn, function(req,res){
  res.render("property");
});

//on click of room filter finding property on the basis of no. of rooms
router.get('/filter/property/:roomno' , async function(req,res){
  var rooms = req.params.roomno;
  var properties = await propertiesModel.find({bedrooms: rooms});
  res.send(properties); res.send(rooms);
})

//on click of room filter finding property on the basis of price range
router.get('/filter/property/:minprice/:maxprice', async function(req,res){
    var minprice = req.params.minprice;
    var maxprice = req.params.maxprice;
    var properties = await propertiesModel.find({price:{$gt: minprice-1, $lt: maxprice+1}});
    res.send(properties);
})

router.get('/properties', (req, res, next) => {
  console.log(req.query)
  res.render('properties')
})

module.exports = router
