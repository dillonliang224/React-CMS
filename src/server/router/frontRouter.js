import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext, match } from 'react-router';
import { store } from '../../common/stores/';
import { routes } from '../../common/routes.js';
import { fetchArticles } from '../../common/actions/articles';

import express from 'express';
const router = express.Router();

function renderFrentEndPage(html, initState) {
  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>react-ssr</title>
            <link rel="icon" href="//o4j806krb.qnssl.com/public/images/cnode_icon_32.png" type="image/x-icon">
            <script></script>
        </head>
        <body>
            <div id="container"><div>${html}</div></div>
            <script>
                window.__INITIAL_STATE__ = ${JSON.stringify(initState)}
            </script>
            <script src="/assets/app.js"></script>
        </body>
        </html>
    `
}

function frontRouter(req,res){
    console.log(routes);
    console.log(req.url);
    console.log(store);
    console.log(fetchArticles);
    match({routes:routes,location:req.url},(err,redirectLocation,renderProps)=>{
        console.log('=========go==========');
        console.log('===err: ' + err);
        console.log('===redir: ' + redirectLocation);
        console.log('===render: ' + renderProps);
        if(err){
            res.status(500).end(`server error: ${err}`)
        } else if(redirectLocation){
            res.redirect(redirectLocation.pathname+redirectLocation.search)
        } else if(renderProps){
            const store = storeApp({});
            Promise.all([
                store.dispatch(fetchArticles()),
            ])
            .then(()=>{
                const html = renderToString(
                    <Provider store={store}>
                        <RouterContext {...renderProps}/>
                    </Provider>
                )
                const finalState = store.getState();
                res.end(renderFullPage(html,finalState));
            })
        } else {
            res.status(404).end('404 not found')
        }
    })
}

router.get('*', frontRouter);
module.exports = router;

// router.get('*', function (req, res, next) {
//     res.render('index');
// });
//
// module.exports = router;
