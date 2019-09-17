import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {counter} from './reducers';


//生成一个store对象
const store = createStore(
    counter,
    composeWithDevTools(applyMiddleware(thunk)) // 应用上异步中间件
); // 内部会第1次调用reducer函数，得到初始状态
// console.log(store, store.getState());

export default store;