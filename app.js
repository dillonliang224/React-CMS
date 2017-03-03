'use strict';

require('babel-register');
require('babel-polyfill');

var express = require('express');
//import express = require('express');
var app = express();

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/src');
app.set('view engine', 'html');

var isDev = process.env.NODE_ENV !== 'production';

if (isDev) {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('./webpack.config');

  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true,
    stats: {
      colors: true
    },
    headers: {
         'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS"
    },
  }));

  app.use(webpackHotMiddleware(compiler));
  app.use(express.static(__dirname + '/public'));

  app.all("*", function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
  });

  const router = require('./src/server/routes.js');
  // const apiRouter = require('./server/routes/apiRouter');
  // const frontRouter = require('./server/routes/frontRouter');
  // app.use('/api', apiRouter);
  // app.use('*', frontRouter);
  app.use('/', router)
  app.listen('8000', function() {
    console.log('dillon: start server at port 8000');
  })
}
