import { handleActions } from 'redux-actions';
import { fetchArticles } from '../actions/index.js';

export default handleActions({
    FETCH_ARTICLES: (state, action) => {
        let payload = action.payload;
        console.log('dillon: in articles.js reducer: ' + payload.articles);

        return {...state, isFetching: true, articles: payload.articles};
    }
}, {});
