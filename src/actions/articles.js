import { createActions } from 'redux-actions';

export const { fetchArticles } = createActions({
    FETCH_ARTICLES: async () => {
        try {
            let response = await fetch('/api/articles/', {
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }
            });
            let articles = await response.json();

            return { articles }
        } catch (err) {
            console.log(err);
        }
    }
});
