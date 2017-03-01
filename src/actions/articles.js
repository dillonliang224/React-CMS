import { createActions } from 'redux-actions';

export const { fetchArticles } = createActions({
    FETCH_ARTICLES: async () => {
        try {
            let response = await fetch('/api/articles');
            var articles;
            if (response.ok) {
              articles = await response.json();
            } else {
              articles = [
                  {
                      title: '20170301 test 01',
                      publish_time: 20170301
                  },
                  {
                      title: '20170301 test 02',
                      publish_time: 20170301
                  }
              ]
            }

            return { articles }
        } catch (err) {
            console.log(err);
        }
    }
});
