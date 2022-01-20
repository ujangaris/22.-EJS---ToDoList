const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
  var today = new Date();
  var currentDay = today.getDay();

  //   if (today.getDay() === 6 || today.getDay() === 0) {
  if (currentDay === 6 || currentDay === 0) {
    res.write("<h1>Yay it's the weekend!</h1>");
  } else {
    // res.write('<p>it is not the weekend.</p>');
    // res.write('<h1>Boo! Ihave to work!</h1>');
    // res.send();
    res.sendFile(__dirname + '/index.html');
  }
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
