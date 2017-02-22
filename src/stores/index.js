import { createStore, applyMiddleware } from 'redux';
// 异步操作
import promiseMiddleware from 'redux-promise';
// 记录日志
import createLogger from 'redux-logger';

import rootReducer from '../reducers/index.js'
// 获取日志中间件
const loggerMiddleware = createLogger();

// TODO: applyMiddleware ()()
const createStoreWithMiddleware = applyMiddleware(
    promiseMiddleware,
    loggerMiddleware
)(createStore);

export default function store() {
    createStoreWithMiddleware(rootReducer);
}