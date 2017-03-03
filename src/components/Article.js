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
      <section>
        <h3>{ article.title }</h3>
        <div dangerouslySetInnerHTML={{__html: article.content}}></div>
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
