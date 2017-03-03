import React from 'react';
import { connect } from 'react-redux';

class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <section>
        <header>Article Detail Page</header>
      </section>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return;
}

export default Article;
