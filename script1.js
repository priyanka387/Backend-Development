// var data =  require("./script.js");
// console.log(data);

// var oneLinerJoke = require('one-liner-joke');

// console.log(oneLinerJoke.getRandomJoke());

// var figlet = require("figlet");

// figlet("Priyanka", function (err, data) {
//     if (err) {
//       console.log("Something went wrong...");
//       console.dir(err);
//       return;
//     }
//     console.log(data);
//   });

const express = require('express')
const app = express()

app.use(function(req, res, next) {
    console.log("hello from middleware");
    next();
});

app.use(function(req, res, next) {
    console.log("hello from middleware 2");
    next();
});


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/profile/:username', function (req, res) {
    res.send(`hell ${username}`)
  })

app.listen(3000)



