const mysql = require("mysql");

var db = mysql.createPool({
  host: "34.70.126.133",
  user: "root",
  password: "password",
  database: "bandananana",
});

// db.connect(function (err) {
//   if (err) console.log(err);
//   console.log("Connected to DB!");
// });

// function handleDisconnect() {
//   db.connect(function (err) {
//     if (err) {
//       console.log("error when connecting to db:", err);
//       setTimeout(handleDisconnect, 2000);
//     }
//   });
//   db.on("error", function (err) {
//     console.log("db error", err);
//     if (err.code === "PROTOCOL_CONNECTION_LOST") {
//       handleDisconnect();
//     } else {
//       throw err;
//     }
//   });
// }

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
    `Insert into users (username, password) values (?, ?)`,
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

const loadQueue = (username, callback) => {
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

const placeInQueue = (username, queue, callback) => {
  var newQueue = JSON.stringify(queue);
  db.query(
    "Update users set queue = ? where username = ?",
    [newQueue, username],
    (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    }
  );
};

const totalQueue = (callback) => {
  db.query("Select username, queue from users", (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const BuildQueue = (user, queue, callback) => {
  db.query(
    "Insert into buildqueue (name, queue) values (?, ?)",
    [user, queue],
    (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    }
  );
};

const selectBQ = (callback) => {
  db.query("Select * from buildqueue", (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const removeFromBQ = (username, callback) => {
  db.query(
    "delete from buildqueue where name = ?",
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
  loadQueue,
  placeInQueue,
  totalQueue,
  BuildQueue,
  selectBQ,
  removeFromBQ,
};
