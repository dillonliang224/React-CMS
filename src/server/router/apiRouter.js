const express = require('express');
const router = express.Router();

// 新增接口路由 用来获取指定ID的articl
router.get('/article/:articleId', function (req, res, next) {
    var Action = require('../action/Article').findArticleById;
    Action(req, res);
});

// 新增接口路由 用来获取所有articles
router.get('/articles', function (req, res, next) {
    var Action = require('../action/Article').findArticles;
    console.log('get articles');
    Action(req, res);
});

router.post('/articles/', function (req, res, next) {
    res.send('game');
});

router.put('/article/:articleId', function (req, res, next) {
  res.send('put');
});

router.delete('/article/:articleId', function (req, res, next) {
  res.send('delete');
});

module.exports = router;
/*
  define app router and action.
*/
