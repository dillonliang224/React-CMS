require('normalize.css/normalize.css');
require('styles/App.css');

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions/articles.js';

let yeomanImage = require('../images/yeoman.png');

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
                <img src={yeomanImage} alt="Yeoman Generator" />
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

ArticleList.defaultProps = {};

function mapStateToProps (state) {
    const isFetching_articles = state.articles.isFetching || false;
    const articlesData = state.articles.articles || [
      {
          title: '20170301 test 01',
          publish_time: 20170301
      },
      {
          title: '20170301 test 02',
          publish_time: 20170301
      }
    ];

    return {
        page: 1,
        isFetching: isFetching_articles,
        articles: articlesData
    };
}

export default connect(mapStateToProps)(ArticleList);
