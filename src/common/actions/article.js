import { createActions } from 'redux-actions';

export const { fetchArticle } = createActions({
  FETCH_ARTICLE: async (articleId = {}) => {
    try {
      let response = await fetch('/api/article/' + articleId, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          }
      });
      let article = await response.json();
      return { article }
    } catch (err) {
      console.log(err);
    }
  }
  // ,
  // DELETE_ARTICLE: async (articleId) => {
  //   try {
  //     let response = await fetch('/api/article/' + articleId, {
  //       method: 'DELETE'
  //     });
  //
  //     return response.ok ? 'Delete Article Successfully' : 'Delete Article Error';
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
});
