///<reference path="./../typings/tsd.d.ts"/>

import express = require('express');
import mongoose = require('mongoose');
import bodyparser = require('body-parser');
import session = require('express-session');
import path = require('path');
import url = require('url');

var app : express.Express = express();

var port = process.env.PORT|4000;
var server = app.listen(port,function()
{
    var listening_port = server.address().port;
    console.log("Listening on:"+" "+listening_port);
})

app.set('views','./../../client')

//app.use(express.static(path.resolve(__dirname,'./../../client')));

app.use(express.static('./../../client'));

app.use(function(req,res,next)
{
    console.log(req.url);
    next();
})

/*app.use('/',function(req,res,next)
{
    
})*/

app.get('/home',function(req,res)
{
    console.log("Req URL:"+" "+req.url);
})

app.get('/about',function(req,res)
{
    console.log("Req URL"+" "+req.url)
})

app.get('/contact',function(req,res)
{
    console.log("Req URL"+" "+req.url)
})

