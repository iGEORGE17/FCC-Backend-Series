/******************************************************
 * PLEASE DO NOT EDIT THIS FILE
 * the verification process may break
 * ***************************************************/
 
 var bGround = require('fcc-express-bground');
 var myApp = require('./myApp');
 var express = require('express');
 var app = express();
require('dotenv').config();
 
 if (!process.env.DISABLE_XORIGIN) {
   app.use(function(req, res, next) {
     var allowedOrigins = ['https://narrow-plane.gomix.me', 'https://www.freecodecamp.com'];
     var origin = req.headers.origin || '*';
     if(!process.env.XORIG_RESTRICT || allowedOrigins.indexOf(origin) > -1){
          console.log(origin);
          res.setHeader('Access-Control-Allow-Origin', origin);
          res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     }
     next();
   });
 }

 app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip)
  next();
 })


 app.use(express.static(__dirname + "/public"))
 app.use("/public", express.static(__dirname + "/public"))
 


 app.get('/', (req, res) => {
   res.sendFile(__dirname + '/views/index.html')
 })

 app.get('/json', (req, res) => {
  if(process.env.MESSAGE_STYLE === "uppercase") {
      res.json({
        "message": "HELLO JSON"
    })    
  } else {
    res.json({
        "message": "Hello json"
    })
  }
  })

  function getCurrentTimeString() {
    return new Date().toString();
  }
  
  app.get("/now", (req, res, next) => {
    req.time = getCurrentTimeString();
    next();
  }, (req, res) => {
    res.json({ "time": req.time });
  });
 
 var port = process.env.PORT || 3000;
 bGround.setupBackgroundApp(app, myApp, __dirname).listen(port, function(){
   bGround.log('Node is listening on port '+ port + '...')
 });
 
 /******************************************************
  * PLEASE DO NOT EDIT THIS FILE
  * the verification process may break
  * ***************************************************/