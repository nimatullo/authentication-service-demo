/**
 * Controller class with business logic
 */

const newPuff = (req, res, next) => {
  res.json({
    message: "PUFF POST",
  });
};

const getPuff = (req, res, next) => {
  res.json({
    message: "PUFF GET",
  });
};

const checkUserLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
};

const getMe = (req, res, next) => {
  res.json({
    message: `Welcome ${req.user.displayName}`,
  });
};

const logOut = (req, res, next) => {
  req.session = null;
  req.logout();
  res.redirect("/");
};

/**
 * Business logic for the /auth/google/redirect endpoint.
 * It builds the response by setting the email and name
 * that was retrieved after successful login.
 */
const handleRedirect = (req, res) => {
  console.log(req.user);
  res.json({
    email: req.user.emails[0].value,
    name: req.user.displayName,
  });
};

module.exports = {
  newPuff,
  getPuff,
  handleRedirect,
  checkUserLoggedIn,
  getMe,
  logOut,
};
