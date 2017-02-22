import { createActions } from 'redux-actions';

export const { fetchArticles } = createActions({
    FETCH_ARTICLES: async (dillon = 'all') => {
        try {
            let response = await fetch('/api/getArticles/${dillon}');
            let articles = await response.json();
            return { dillon, articles }
        } catch (err) {
            console.log(err);
        }
    }
});