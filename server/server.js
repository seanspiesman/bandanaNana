const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const path = require("path");
const { getAlbumImages, fosterInfo } = require("./db");

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

app.get("/fosterinfo", (req, res) => {
  fosterInfo((err, results) => {
    if (err) console.log(err);
    else {
      res.send(results);
      console.log(results[0].name);
    }
  });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
