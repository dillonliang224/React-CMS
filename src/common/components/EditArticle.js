import React from 'react';
import { Input, Button, message } from 'antd';
import { MarkdownEditor, MarkdownEditorContentStore } from 'react-markdown-editor';

class EditArticle extends React.Component {
  constructor(props) {
    super(props);
  }

  publishArticle() {
    message.success('publish article successfully');
  }

  getContent(content) {
    console.log(content);
  }

  render() {
    return (
      <div className='mod-edit-article'>
        <Button type='primary' onClick={ this.publishArticle }>Publish</Button>
        <div className='title'><label>标题：</label><Input placeholder='title' /></div>
        <MarkdownEditor initialContent='Please add your article with markdown here' iconsSet='font-awesome' onContentChange={ this.getContent }/>
      </div>
    );
  }
}

EditArticle.displayName = 'EditArticle';

export default EditArticle;

/*
  use https://www.npmjs.com/package/react-markdown-editor
  use markdown to edit article.
*/
