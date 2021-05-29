/**
 * Lists all available routes for the app.
 */

const express = require("express");
const passport = require("passport");
const router = express.Router();
const controller = require("../controllers/puff");
require("../config/passport");

router.post("/puff", controller.newPuff);
router.get("/puff", controller.getPuff);

/**
 * Google authentication endpoint. Used to present the Google consent page.
 */
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"], // specifying what information we want from Google
  })
);

/**
 * Google redirect endpoint. After consenting to the login, it redirects to this endpoint.
 */
router.get(
  "/auth/google/redirect",
  passport.authenticate("google"),
  controller.handleRedirect
);
module.exports = router;
