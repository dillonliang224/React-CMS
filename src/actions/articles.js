import { createActions } from 'redux-actions';
import fetch from 'isomorphic-fetch';

export const { fetchArticles } = createActions({
    FETCH_ARTICLES: async () => {
        try {
            let response = await fetch('/api/getArticles');
            let articles = await response.json();

            return { articles }
        } catch (err) {
            console.log(err);
        }
    }
});