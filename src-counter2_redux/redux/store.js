import {createStore} from 'redux';

import {counter} from './reducers';


//生成一个store对象
const store = createStore(counter); // 内部会第1次调用reducer函数，得到初始状态
console.log(store, store.getState());


export default store;