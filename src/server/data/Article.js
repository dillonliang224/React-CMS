var Article = require('./database/index.js');

/*
 this file is used to handle Article database
*/
exports.save = function (article) {
  new Article(article).save(article, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('save article successfully');
    }
  })
}

exports.saveArticle = function (article) {
  Article.insert(article, function (err, data) {
    if (!err) {
      callback(data)
    } else {
      console.log('dillon: you need to know, save article has error: ' + err);
    }
  })
}

exports.findArticles = function (callback) {
  Article.find({}, function (err, articles) {
    if (!err) {
      console.log('articles: get article data done');
      callback(articles);
    } else {
      console.log('dillon: you need to know, get articles has error: ' + err);
    }
  })
}

exports.findArticleById = function (articleId, callback) {
  Article.find({"_id": articleId}, function (err, article) {
    if (!err) {
      console.log('get article with article id: ' + articleId);
      callback(article);
    } else {
      console.log('dillon: you need to know, get article failed with articleId: ' +　articleId + '====' + err);
    };
  })
}

exports.deleteArticleById = function (articleId, callback) {
  Article.remove({"_id": articleId}, function (err, data) {
    if (!err) {
      callback(data);
    } else {
      console.log('dillon: you need to know, delete article failed with articleId: ' + articleId + '====' + err);
    }
  })
}

exports.updateArticleById = function (articleId, callback) {

  console.log('update article');
}
