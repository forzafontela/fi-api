var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('index', { message: '/forzafontela' });
});

var server = app.listen(3000, function () {});
