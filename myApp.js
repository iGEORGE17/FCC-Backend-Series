let express = require('express');
let app = express();


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






 module.exports = app;