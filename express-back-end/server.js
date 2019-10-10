const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const morgan = require("morgan");
const PORT = 8080;
const { Pool } = require("pg");
require("dotenv").config();

// Express Configuration
App.use(morgan("dev"));
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));

// Sample GET route
App.get("/api/data", (req, res) =>
  res.json({
    message: "Seems to work!"
  })
);

App.post("/posts/submit", (req, res) => {
  res.json({
    message: "Submit works!"
  });
});

App.get("/posts", (req, res) => {
  res.json({
    message: "Submit works!"
  });
});)

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
