import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ArticleList from './components/ArticleList';
import Home from './components/Home';
import Article from './components/Article';
import Profile from './components/Profile';

const routes = (
  <Route path='/' component={ Home }>
    <IndexRoute component={ ArticleList } />
    <Route path='/p/:articleId' component={ Article } />
    <Route path='/curriculum_vitae' component={ Profile } />
  </Route>
);

export default routes;
