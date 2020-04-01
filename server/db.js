const mysql = require("mysql");

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "BandanaNana"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected to DB!");
});

const getAllItems = callback => {
  db.query(`Select * from images`, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = { db, getAllItems };
