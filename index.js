const PORT = 8000;

const express = require("express");
const routes = require("./routes/puff");
const app = express();

// Passport
const passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());

// Express
app.use(express.json());
app.use("/", routes);

const listener = app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
