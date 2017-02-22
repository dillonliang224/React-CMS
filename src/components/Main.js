require('normalize.css/normalize.css');
require('styles/App.css');

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions/articles.js';

//let yeomanImage = require('../images/yeoman.png');
//
//var data = {
//    jianshu: {
//        articles: [
//            {
//                title: 'i love you',
//                publish_time: 11111
//            },
//            {
//                title: 'game over',
//                publish_time: 22222
//            }
//        ]
//    }
//};

//class AppComponent extends React.Component {
//  render() {
//    var articles = data.jianshu.articles;
//    return (
//      <div className="index">
//        <img src={yeomanImage} alt="Yeoman Generator" />
//        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
//        <h2>ddd</h2>
//        <ArticleList articles={articles} isFetching={false}></ArticleList>
//      </div>
//    );
//  }
//}

class ArticleList extends React.Component {
    constructor(props){
        super(props)
    }

    componentWillMount(){
        const { dispatch } = this.props;

        dispatch(fetchArticles());
    }

    render() {
        const { articles, isFetching } = this.props;
        const articleNodes = [];

        if (articles) {
            articles.forEach(function (article, i) {
                articleNodes.push(<ArticleLi key={i} article={article} />)
            });
        }

        return (
            <ul className='cms-article-list'>
                {articleNodes}
            </ul>
        )
    }
}

class ArticleLi extends React.Component {
    render() {
        const { article } = this.props;

        return (
            <li>
                <h3>{article.title}</h3>
                <span>{article.publish_time}</span>
            </li>
        )
    }
}

ArticleList.displayName = 'ArticleList';

ArticleList.propTypes = {
    page: PropTypes.number,
    articles: PropTypes.array,
    isFetchting: PropTypes.bool,
    dispatch: PropTypes.func
};

ArticleList.defaultProps = {
};

function mapStateToProps (state) {
    const { articlesReducer } = state;

    const {
        isFetching,
        articles: articles
    } = articlesReducer['all'] || {
        isFetching: true,
        articles: []
    };
    return {
        page: 1,
        isFetching: isFetching,
        articles: articles
    };
}

export default connect(mapStateToProps)(ArticleList);
