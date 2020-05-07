const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

const winston = require("winston");

const {
  getAlbumImages,
  creatorInfo,
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
} = require("./db");

const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
});

app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../dist")));

app.get("/albumImages", (req, res) => {
  getAlbumImages((err, results) => {
    if (err) {
      res.send();
      logger.error(err);
    } else {
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
    if (err) {
      logger.error(err);
      res.send();
    } else {
      res.send(results);
    }
  });
});

app.get("/fosterinfo", (req, res) => {
  fosterInfo((err, results) => {
    if (err) {
      logger.error(err);
      res.send();
    } else {
      res.send(results);
    }
  });
});

app.post("/adduser", (req, res) => {
  // logger.info(req.body);
  newUser(req.body.username, req.body.password, (err, results) => {
    if (err) {
      logger.error(err);
      res.send();
    } else {
      res.send(results);
    }
  });
});

app.post("/checkforuser", (req, res) => {
  checkForUser(req.body.username, (err, results) => {
    if (err) {
      logger.error(err);
      res.send();
    } else {
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
    if (err) {
      logger.error(err);
      res.send();
    } else {
      if (results.length !== 0) {
        if (results[0].password === req.body.password) {
          res.send("Success");
        } else {
          res.send("Failure");
        }
      } else {
        res.send("Failure");
      }
    }
  });
});

app.post("/placeInQueue", (req, res) => {
  placeInQueue(req.body.username, req.body.queue, (err, results) => {
    if (err) {
      logger.error(err);
      res.send();
    } else {
      logger.info(results);
      res.send();
    }
  });
});

app.get("/queueItems", (req, res) => {
  loadQueue(req.query.id, (err, results) => {
    if (err) {
      logger.error(err);
      res.send();
    } else {
      res.send(results[0].queue);
    }
  });
});

app.get("/allQueueItems", (req, res) => {
  totalQueue((err, results) => {
    if (err) {
      logger.error(err);
      res.send("Error");
    } else {
      res.send(results);
    }
  });
});

app.post("/buildQueue", (req, res) => {
  for (var user of req.body.newState) {
    BuildQueue(user.name, JSON.stringify(user.queue), (err, results) => {
      if (err) {
        logger.error(err);
        res.send();
      } else {
        logger.info(results);
      }
    });
  }
});

app.get("/buildQueue", (req, res) => {
  selectBQ((err, results) => {
    if (err) {
      logger.error(err);
      res.send();
    } else {
      res.send(results);
    }
  });
});

app.post("/removeFromBuild", (req, res) => {
  removeFromBQ(req.body.username, (err, results) => {
    if (err) {
      logger.error(err);
      res.send();
    } else {
      res.send(results);
    }
  });
});

app.listen(port, () => logger.info(`App listening on port ${port}!`));
