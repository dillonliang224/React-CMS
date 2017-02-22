import { createActions } from 'redux-actions';

export const { fetchArticle } = createActions({
    FETCH_ARTICLE: async (articleId) => {
        try {
            let response = await fetch('/api/getArticle?articleId=${articleId}');
            let article = await response.json();
            return { article }
        } catch (err) {
            console.log(err);
        }
    }
});