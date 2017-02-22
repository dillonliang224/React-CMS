import { combineReducers } from 'redux';

import articleReducer from './article.js';
import articlesReducer from './articles.js';

const rootReducer = combineReducers({
    article: articleReducer,
    articles: articlesReducer
});

export default rootReducer;