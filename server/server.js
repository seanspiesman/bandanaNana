const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const path = require("path");
const { db, getAllItems } = require("./db");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../dist")));

app.get("/albumImages", (req, res) => {
  getAllItems((err, results) => {
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

app.listen(port, () => console.log(`App listening on port ${port}!`));
