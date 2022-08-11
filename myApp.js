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
    res.json({ echo: req.params.word })
})






 module.exports = app;