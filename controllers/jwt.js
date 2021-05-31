const jwt = require("jsonwebtoken");

genToken = () => {
  return jwt.sign(
    {
      iss: "Sherzod",
      sub: "PL9982",
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 1),
    },
    "pufferlabs"
  );
};

const getToken = (req, res, next) => {
  const { email, password } = req.body;
  const token = genToken();

  res.status(200).json({ token });
};

const secret = (req, res, next) => {
  res.json({ secret: "yessir" });
};

module.exports = {
  getToken,
  secret,
};
