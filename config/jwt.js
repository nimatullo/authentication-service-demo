const passport = require("passport");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "pufferlabs",
    },
    function (jwtPayload, done) {
      console.log(jwtPayload.sub);
      done(null, jwtPayload.sub);
    }
  )
);
