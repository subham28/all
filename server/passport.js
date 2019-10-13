"use strict";

var passport = require("passport"),
  TwitterTokenStrategy = require("passport-twitter-token"),
  User = require("mongoose").model("User"),
  twitterConfig = require("./config/keys");

module.exports = function() {
  passport.use(
    new TwitterTokenStrategy(
      {
        consumerKey: twitterConfig.TWITTER_CONSUMER_KEY,
        consumerSecret: twitterConfig.TWITTER_CONSUMER_SECRET,
        includeEmail: true
      },
      function(token, tokenSecret, profile, done) {
        User.upsertTwitterUser(token, tokenSecret, profile, function(
          err,
          user
        ) {
          return done(err, user);
        });
      }
    )
  );
};
