const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const express = require("express");
const router = express.Router();
router.use(passport.initialize());
const googleModel = require("../model/googleModel");
const jwt = require("jsonwebtoken");
const config = require("config");

//GOOGLE LOGIN
passport.use(
  new GoogleStrategy(
    {
      clientID: "11823993192-dphup2fub2sgjlbj8vu852u0dv8rhcpu.apps.googleusercontent.com",
      clientSecret: "fjbjS9zIWoLgTCGTwC-PGGX_",
      callbackURL: "/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
      googleModel.findOne({ googleid: profile.id }).then(currentUser => {
        if (currentUser) {
          console.log("user is: ", currentUser);
          cb(null, currentUser);
        } else {
          const newUser = new googleModel({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleid: profile.id
          })
            .save()
            .then(newUser => {
              console.log("new user created: ", newUser);
            });
          cb(null, newUser);
        }
      });
    }
  )
);

router.get(
  "/",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get("/callback", passport.authenticate("google"), (req, res, cb) => {
  let token = jwt.sign({ id: req.user.id }, config.get("secret"), { expiresIn: "1h" });

  res.redirect("http://localhost:3000?token=" + token);

  cb(null, res);
});

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  googleModel.findById(id).then(user => {
    cb(null, user);
  });
});

module.exports = router;
