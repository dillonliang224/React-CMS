var EventEmitter = require('events').EventEmitter;

class Store_Article extends EventEmitter {
    constructor() {
        super();
        this.allData = null;
    }

    getArticleById(callback) {
        var self = this;
        fetch ("/api/article/")
        .then(function (res) {
            // todo
        }, function (e) {
            console.log('dillon: you need to know, fetch article with article id failed!', e);
        });
    }

    getArticles (callback) {
        var self = this;
        fetch ('/api/articles/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        })
        .then(function (res) {
            if (res.ok) {
                res.json().then(function (data) {
                    self.articles = data;
                    callback(self.articles);
                });
            }
        }, function (e) {
            console.log('dillon: you need to know, fetch articles failed!', e);
        });
    }
}

module.exports = new Store_Article();
