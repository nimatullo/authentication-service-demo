const PORT = 8000;

const express = require("express");
const googleRouter = require("./routes/puff");
const cookieSession = require("cookie-session");
const app = express();

// Config
app.use(
  cookieSession({
    name: "session-name",
    keys: ["key1", "key2"],
  })
);

// Passport
const passport = require("passport");
const router = require("./routes/jwt");
app.use(passport.initialize());
app.use(passport.session());

// Express
app.use(express.json());
app.use("/", googleRouter);
app.use("/auth", router);

const listener = app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
