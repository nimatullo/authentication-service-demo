const PORT = 8000;

const express = require("express");
const googleAuthRouter = require("./routes/google");
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
const jwtAuthRouter = require("./routes/jwt");
app.use(passport.initialize());
app.use(passport.session());

// Express
app.use(express.json());
app.use("/", googleAuthRouter);
app.use("/auth", jwtAuthRouter);

const listener = app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
