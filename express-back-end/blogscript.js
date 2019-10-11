require("dotenv").config();
const { Pool } = require("pg");
const dbParams = require("./db_config");

const db = new Pool(dbParams);

db.connect((error, client) => {
  console.log(process.env.DB_HOST);
  if (error) {
    console.log(error);
  } else {
    console.log("connected");
  }
});

db.query(
  `
    SELECT title, email, description
    FROM blogs ORDER BY id DESC 
    LIMIT 5
    `
)
  .then(data => {
    data.rows.map(blog => console.log(blog));
    db.end();
    process.exit(0);
  })
  .catch(error => {
    console.log(error);
  });
