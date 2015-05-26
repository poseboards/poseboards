var express        = require('express');
var methodOverride = require('method-override');
var logger         = require('morgan');
var bodyParser     = require('body-parser');
var cookieParser   = require('cookie-parser');
var mongoose       = require('mongoose');
var db             = require('./config/db')(mongoose);
var passport       = require('passport');
var hbs            = require('./config/handlebars');
var LocalStrategy  = require('passport-local').Strategy;

var app = express();

var root = __dirname + '/public';

// Handlebars
app.set('view engine', 'hbs');
app.set('views', 'views');
app.engine('hbs', hbs.engine);

// Express Configuration
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method
    delete req.body._method
    return method
  }
}));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'DJ Django D\'jenkins',
  resave: false,
  saveUninitialized: false
}));
app.use(express.static(root));

var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Server is running on port: Andre Tré-th000usand");
});