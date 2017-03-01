import { createActions } from 'redux-actions';

export const { fetchArticles } = createActions({
    FETCH_ARTICLES: async () => {
        try {
            let response = await fetch('/api/articles', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
              }
            });
            let articles = await response.json();

            return { articles }
        } catch (err) {
            console.log(err);
        }
    }
});
