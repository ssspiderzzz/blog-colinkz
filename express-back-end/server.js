const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const morgan = require("morgan");
const PORT = 8080;
const { Pool } = require("pg");
require("dotenv").config();
const dbParams = require("./db_config");

const db = new Pool(dbParams);
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

App.get("/posts", (req, res) => {
  db.query(
    `SELECT id, title, email, description
    FROM blogs
    `
  ).then(data => {
    res.json({
      blogs: data
    });
  });
});

App.post("/posts/submit", (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  db.query(
    `
    INSERT INTO blogs (title, email, description)
    VALUES ($1, $2, $3)
    `,
    [req.body.title, req.body.email, req.body.description]
  ).then(() => {
    res.json({
      message: "New post submit."
    });
  });
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
