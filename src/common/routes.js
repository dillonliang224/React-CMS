import React from 'react';
import { Route, IndexRoute } from 'react-router';

import ArticleList from './components/ArticleList';
import Home from './components/Home';
import Article from './components/Article';
import Profile from './components/Profile';
import EditArticle from './components/EditArticle';

const routes = (
  <Route path='/' component={ Home }>
    <IndexRoute component={ ArticleList } />
    <Route path='/p/:id' component={ Article } />
    <Route path='/curriculum-vitae' component={ Profile } />
    <Route path='/edit-article' component={ EditArticle } />
  </Route>
);

export default routes;
