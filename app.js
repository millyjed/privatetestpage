var express = require('express');
var app = express();

var router = require('./routes/testR')(app);


//app.get('/', function(req, res) {
//  res.send('Hello');
//});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(8000, function() {
  console.log('Express server listening on port ' + server.address().port);
});
