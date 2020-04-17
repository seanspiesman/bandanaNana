const mysql = require("mysql");

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "BandanaNana",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected to DB!");
});

const getAlbumImages = (callback) => {
  db.query(`Select * from images`, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const creatorInfo = (callback) => {
  db.query(`Select * from creatorinfo`, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const fosterInfo = (callback) => {
  db.query(`Select * from fosterinfo`, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const newUser = (username, password, callback) => {
  db.query(
    `Insert into users (username, password) values (?, ?) `,
    [username, password],
    (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    }
  );
};

const checkForUser = (username, callback) => {
  db.query(
    `Select * from users where username = ?`,
    username,
    (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    }
  );
};

const logIn = (username, callback) => {
  db.query(
    `Select * from users where username = ?`,
    username,
    (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    }
  );
};

module.exports = {
  creatorInfo,
  getAlbumImages,
  fosterInfo,
  newUser,
  checkForUser,
  logIn,
};
