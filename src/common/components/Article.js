import React from 'react';
import { connect } from 'react-redux';

class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { articles, params } = this.props;
    let article = articles.filter((item) => item._id === params.id)[0];
    console.log(article.title);
    return (
      <section className='mod-article-detail'>
        <h1 className='title'>{ article.title } </h1>
        <div className='show-content' dangerouslySetInnerHTML={{__html: article.content}}></div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  const articlesData = state.articles.articles;
  return {
    articles: articlesData
  };
}

export default connect(mapStateToProps)(Article);
