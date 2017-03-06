import express from 'express';
const router = express.Router();
import ArticleAction from './action/Article';

// 对所有(/)URL或路由返回index.html
router.get('/', function (req, res) {
    res.render('index');
});
// 新增接口路由 用来获取指定ID的articl
router.get('/api/article/:articleId', function (req, res, next) {
    ArticleAction.findArticleById(req, res);
});
// 新增接口路由 用来获取所有articles
router.get('/api/articles', function (req, res, next) {
    ArticleAction.findArticles(req, res);
});
// 新建article
router.post('/api/article/', function (req, res, next) {
    console.log('add new article');
    //ArticleAction.saveArticle(req, res);
});
// 更新article
router.put('/api/article/:articleId', function (req, res, next) {
  res.send('update article');
});
// 删除article
router.delete('/api/article/:articleId', function (req, res, next) {
  ArticleAction.deleteArticleById(req, res);
});
// 对于其他无法识别的统统转到首页
router.get('*', function (req, res) {
    res.render('index');
});

module.exports = router;

/*
  define app router and action.
*/
