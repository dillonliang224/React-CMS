var express = require('express');

var app = express();

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/src');
app.set('view engine', 'html');

var isDev = process.env.NODE_ENV !== 'production';

if (isDev) {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('../webpack.config');

  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true,
    stats: {
      colors: true
    }
  }));

  app.use(webpackHotMiddleware(compiler));
  app.use(express.static(__dirname + '/public'));

  const router = require('./router.js')
  app.use('/', router);
  app.listen('3000', function() {
    console.log('game being');
  })
}
