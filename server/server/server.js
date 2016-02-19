///<reference path="./../typings/tsd.d.ts"/>
var express = require('express');
var app = express();
var port = process.env.PORT | 4000;
var server = app.listen(port, function () {
    var listening_port = server.address().port;
    console.log("Listening on:" + " " + listening_port);
});
app.set('views', './../../client');
//app.use(express.static(path.resolve(__dirname,'./../../client')));
app.use(express.static('./../../client'));
app.use(function (req, res, next) {
    console.log(req.url);
    next();
});
/*app.use('/',function(req,res,next)
{
    
})*/
app.get('/home', function (req, res) {
    console.log("Req URL:" + " " + req.url);
});
app.get('/about', function (req, res) {
    console.log("Req URL" + " " + req.url);
});
app.get('/contact', function (req, res) {
    console.log("Req URL" + " " + req.url);
});
