/**
 * Created by jefri on 03/04/16.
 */
var express = require('express'),
    http = require('http'),
    swig = require('swig'),
    passport = require('passport'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');
var server = express();
var server_socket = http.createServer(server).listen(8000);

swig.setDefaults({
    cache : false
});

// Conf de express
server.use(bodyParser.urlencoded({
    extended : true
}));
server.use(bodyParser.json());
server.use(cookieParser());
//server.use(session({secret : 'mi clave'}));

// Config Swig
server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views', __dirname + '/app');

server.get('/', function(req, res) {
    console.log("init");
    res.render('index');
    //res.send('Bonjour tout le monde!');
});
server.use(express.static('./public'));