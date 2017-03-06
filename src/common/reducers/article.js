import { handleActions } from 'redux-actions';

import { fetchArticle } from '../actions/index.js';

export default handleActions({
  FETCH_ARTICLE: (state, action) => {
    let payload = action.payload;

    return payload.article;
  }
  // ,
  // DELETE_ARTICLE: (state, action) => {
  //   let payload = action.payload;
  //   return payload.text;
  // }
}, {});
