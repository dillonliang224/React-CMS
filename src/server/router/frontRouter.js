const renderToString = require('react-dom/server').renderToString;
const Provider = require('react-redux').Provider;
const RouterContext = require('react-router').RouterContext;
const match = require('react-router').match;
const storeApp = require('../../src/stores/index');
const routesApp = require('../../src/routes');
const fetchArticles = require('../../src/actions/articles');

function renderFrentEndPage(html, initState) {
  let scriptPath = '';
  return '<!DOCTYPE html><html><head><meta charset="utf-8"><title>React Webpack Template Title</title><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><meta name="description" content=""><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></head><body><div id="app">${html}</div><script>__REACT_DEVTOOLS_GLOBAL_HOOK__ = parent.__REACT_DEVTOOLS_GLOBAL_HOOK__</script><script>window.__INITIAL_STATE__ = ${JSON.stringify(initState)}</script><script type="text/javascript" src="/assets/app.js"></script></body></html>';
}

module.exports.frontRouter = function (req, res) {
  match({routes:routesApp,location:req.url}, function (err,redirectLocation,renderProps) {
    if(err){
      res.status(500).end(`server error: ${err}`)
    } else if(redirectLocation){
      res.redirect(redirectLocation.pathname+redirectLocation.search)
    } else if(renderProps){
      const store = storeApp({});
      Promise.all([
          store.dispatch(fetchArticles())
      ])
      .then(function() {
        const html = renderToString('<Provider store={store}><RouterContext {...renderProps}/></Provider>')
        const finalState = store.getState();
        res.end(renderFullPage(html,finalState));
      })
    } else {
      res.status(404).end('404 not found')
    }
  })
};

// module.exports frontRouter(req, res) {
//   match({routes:routesApp,location:req.url},(err,redirectLocation,renderProps)=>{
//     if(err){
//       res.status(500).end(`server error: ${err}`)
//     } else if(redirectLocation){
//       res.redirect(redirectLocation.pathname+redirectLocation.search)
//     } else if(renderProps){
//       const store = storeApp({});
//       Promise.all([
//           store.dispatch(fetchArticles())
//       ])
//       .then(()=>{
//           const html = renderToString(
//               <Provider store={store}>
//                   <RouterContext {...renderProps}/>
//               </Provider>
//           )
//           const finalState = store.getState();
//           res.end(renderFullPage(html,finalState));
//       })
//     } else {
//       res.status(404).end('404 not found')
//     }
//   })
// }
