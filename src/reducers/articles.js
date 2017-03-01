import { handleActions } from 'redux-actions';
import { fetchArticles } from '../actions/index.js';

export default handleActions({
    FETCH_ARTICLES: (state, action) => {
        let payload = action.payload;

        return {...state, isFetching: false, articles: payload.articles};
    }
}, {});
