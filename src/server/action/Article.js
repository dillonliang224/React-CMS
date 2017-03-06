var Article = require('../data/Article.js');

/*
  this file is used to handle Article service
*/

var ArticleAction = {
  findArticleById: function (req, res) {
    var articleId = req.params.articleId;
    Article.findArticleById(articleId, function (data) {
      res.send(data);
    });
  },
  findArticles: function (req, res) {
    Article.findArticles(function (data) {
      res.send(data);
    });
  },
  saveArticle: function (req, res) {
    var article = req.params.article;
    Article.saveArticle(article, function (data) {
      res.send(data);
    });
  },
  deleteArticleById: function (req, res) {
    var articleId = req.params.articleId;
    Article.deleteArticleById(articleId, function (data) {
      console.log(data);
      res.send(data);
    });
  },
  updateArticleById: function (req, res) {
    var articleId = req.params.articleId;
    Article.updateArticleById(articleId, function (data) {
      console.log(data);
      res.send(data);
    })
  }
}

module.exports = ArticleAction;
