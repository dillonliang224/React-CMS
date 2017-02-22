import { handleActions } from 'redux-actions';

import { FETCH_ARTICLES } from '../actions/index.js';

export default handleActions({
    FETCH_ARTICLES: (state, action) => {
        let payload = action.payload;

        return Object.assign({}, state, {
            [payload.dillon]: {
                isFecting: true,
                //articles: payload.articles
                articles: [
                    {
                        title: 'i love you',
                        publish_time: 11111
                    },
                    {
                        title: 'game over',
                        publish_time: 22222
                    }
                ]
            }
        });
    }
}, {});