import React from 'react';
var ReactMarkdown = require('react-markdown');

var input = '# This is a header\n\nAnd this is a paragraph';

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Edit Article Page</h2>
        <ReactMarkdown source={ input } />
      </div>
    );
  }
}

export default MarkdownEditor;

/*
  use https://www.npmjs.com/package/react-markdown
  use markdown to edit article.
*/
