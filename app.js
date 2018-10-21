var app = express();
var express = require('express');
var exphbs  = require('express-handlebars');
var http = require('http');
var giphy = require('giphy-api')();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', function (req, res) {
    let search_term = req.query.term || "crazy rich asians"
    giphy.search(search_term, function (err, response) {
      res.render('home', {gifs: response.data})
    });
  });

app.listen(port, function () {
  console.log('Gif Search listening on port localhost:3000!');
});