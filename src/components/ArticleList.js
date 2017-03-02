require('normalize.css/normalize.css');
require('styles/App.css');

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions/articles.js';

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
            articles.forEach(function (article, index) {
                let articleURL = '/p/' + article._id;
                articleNodes.push(
                  <li key={'dillon-' + index}>
                    <a href={articleURL}>
                      {index + 1}. {article.title} -- {article._id}
                    </a>
                  </li>
                )
            });
        }

        return (
            <section className='mod-articles'>
              <ul>
                  <header>简书</header>
                  {articleNodes}
              </ul>
            </section>
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
