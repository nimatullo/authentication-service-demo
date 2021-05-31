const express = require("express");
const router = express.Router();
const controller = require("../controllers/jwt");
const passport = require("passport");
require("../config/jwt_passport");

router.post("/token", controller.getToken);
router.get(
  "/secret",
  passport.authenticate("jwt", { session: false }),
  controller.secret
);

module.exports = router;
