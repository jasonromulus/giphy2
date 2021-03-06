var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();
// var http = require('http');
var giphy = require('giphy-api')();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

//Root Route Renders my home file since I called it.
app.get('/', function (req, res) {
    let search_term = req.query.term || "i feel a chance to start again"
    giphy.search(search_term, function (err, response) {
      res.render('home', {gifs: response.data})
    });
  });

//This tells my computer what port it need to listen on.
app.listen(port, function () {
  console.log('Gif Search listening on port localhost:3000!');
});
