let express = require('express');
let app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


app.get(
    "/now",
    (req, res, next) => {
      req.time = new Date().toString();
      next();
    },
    (req, res) => {
      res.send({
        time: req.time
      });
    }
  );


app.get("/:word/echo", (req, res) => {
    const { word } = req.params
    res.json({ echo: word })
})


app.get("/name", (req, res) => {
    var { first: firstname, last: lastname } = req.query;
    res.json({ name: `${firstname} ${lastname}` })
})



 module.exports = app;