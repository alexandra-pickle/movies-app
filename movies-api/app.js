var mysql = require("mysql");
var express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
var app = express();
app.use(cors());
app.use(bodyParser.json());

var con = mysql.createConnection({
  host: "movies-test.cch5a7d7kiro.us-east-1.rds.amazonaws.com",
  user: user,
  password: password,
  port: 3306,
});

app.listen(3000, () => {
  console.log("Server running");
});

/**
 * Web API fetches a list of movies from the database
 */
app.get("/movies", (req, res) => {
  con.connect(function (err) {
    con.query(`SELECT * FROM sys.Movies`, function (err, result) {
      if (err) res.send(err);
      if (result) res.send(result);
    });
  });
});

app.post("/movies", (req, res) => {
  con.connect(function (err) {
    const movie = req.body;
    const sql = "INSERT INTO sys.Movies SET ?";
    con.query(sql, movie, function (err, result) {
      if (err) res.send(err);
      if (result) res.send(result);
    });
  });
});
