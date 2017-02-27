import { handleActions } from 'redux-actions';
import { FETCH_ARTICLES } from '../actions/index.js';

export default handleActions({
    FETCH_ARTICLES: (state, action) => {
        let payload = action.payload;

        return {...state, isFetching: false, articles: payload.articles};
    }
}, {});
