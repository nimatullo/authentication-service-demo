/**
 * Passport.JS configurations with Google OAuth
 */

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./keys");

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

/**
 * The function that .use takes in passes the user object to /auth/google/redirect.
 */
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: "/auth/google/redirect",
    },
    (accessToken, refreshToken, user, cb) => {
      console.log("access token: ", accessToken);
      return cb(null, user);
    }
  )
);

module.exports = { passport };
