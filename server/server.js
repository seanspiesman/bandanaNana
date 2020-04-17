const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const path = require("path");
const {
  getAlbumImages,
  creatorInfo,
  fosterInfo,
  newUser,
  checkForUser,
  logIn,
  loadQueue,
  placeInQueue,
} = require("./db");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../dist")));

app.get("/albumImages", (req, res) => {
  getAlbumImages((err, results) => {
    if (err) console.log(err);
    else {
      var imageArr = [];
      for (var i = 0; i < results.length; i++) {
        imageArr.push(results[i].image);
      }
      res.send(imageArr);
    }
  });
});

app.get("/creatorinfo", (req, res) => {
  creatorInfo((err, results) => {
    if (err) console.log(err);
    else {
      res.send(results);
    }
  });
});

app.get("/fosterinfo", (req, res) => {
  fosterInfo((err, results) => {
    if (err) console.log(err);
    else {
      res.send(results);
    }
  });
});

app.post("/adduser", (req, res) => {
  // console.log(req.body);
  newUser(req.body.username, req.body.password, (err, results) => {
    if (err) console.log(err);
    else {
      res.send(results);
    }
  });
});

app.post("/checkforuser", (req, res) => {
  checkForUser(req.body.username, (err, results) => {
    if (err) console.log(err);
    else {
      if (results.length === 0) {
        res.send("Available");
      } else {
        res.send("NotAvailable");
      }
    }
  });
});

app.post("/login", (req, res) => {
  logIn(req.body.username, (err, results) => {
    if (err) console.log(err);
    else {
      if (results.length !== 0) {
        if (results[0].password === req.body.password) {
          console.log("Success");
          res.send("Success");
        } else {
          console.log("Failure");
          res.send("Failure");
        }
      } else {
        res.send("Failure");
      }
    }
  });
});

app.post("/placeInQueue", (req, res) => {
  console.log(req.body);
  placeInQueue(req.body.username, req.body.queue, (err, results) => {
    if (err) console.log(err);
    else {
      console.log(results);
    }
  });
  res.send();
});

app.get("/queueItems", (req, res) => {
  loadQueue(req.query.id, (err, results) => {
    if (err) res.send("Error");
    else {
      res.send(results[0].queue);
    }
  });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
