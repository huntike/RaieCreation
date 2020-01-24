var bodyParser = require('body-parser');
var express = require('express');
var routes = require('./route.js');


var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(__dirname + '/public'));

routes.init(app);

var port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server listening on port " + port);
});
