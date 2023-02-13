var express = require('express');
var router = express.Router();
const passport = require('passport')
const userModel  = require('./users.js')
/* GET home page. */


const localStrategy = require("passport-local");
passport.use(new localStrategy(userModel.authenticate()));

router.get('/', function(req, res, next) {
  var details = {username:"", profilepic:""};
  res.render('index' , details);
});

router.post('/register' , function(req,res,next){
  var userDets = new userModel({
    name:req.body.name,
    username:req.body.username,
    isRental:req.body.isRental,
  })
userModel.register(userDets , req.body.password)
.then(function(registeredUser){
  passport.authenticate('local')(req,res,function(){
    res.redirect('/success')
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
router.post('/success' , isLoggedIn, async function(req,res){
  var user = await userModel.findOne({username: req.session.passport.user});
  var details = {username: user.username , profilepic:user.profileImg};
  res.render('index' , details);
})

router.post('/login' , passport.authenticate('local' , {
  successRedirect: '/success',
  failureRedirect: '/loginpage'
}),function(req,res,next){});


function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  else{
    res.redirect('/');
  }
}

router.get('/logout', function(req,res,next){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });

})

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});


module.exports = router;
