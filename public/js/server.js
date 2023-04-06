const express = require('express');

const app = express();

const port = 1337;

var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express(__dirname + '/public'));
app.use(express.static('public/img'));

app.get('/', function(request, response){
  response.render('index');
});

app.get('/artists', function(request, response){
  response.render('artists');
});

app.get('/songs', function(request, response){
  response.render('songs');
});

app.get('/genres', function(request, response){
  response.render('genres');
});

app.use(function(req, res){
  res.status(404);
  res.render('404')
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(port, function(){
  console.log('Express started on http://localhost:' + port + " press Ctrl+C to quit...");
});
