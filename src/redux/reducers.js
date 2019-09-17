/*
包含n个reducer函数(根据老的state和action返回一个新的state)
 */
import {ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENTS} from './action-types';
import {DECREMENT, INCREMENT} from "../../src-counter4_redux_async/redux/action-types";

// const initComments = [
//     {username: 'Tom', content: 'React挺好的！'},
//     {username: 'Jack', content: 'React太难了！'}
// ];

function counter(state = 0, action) {
    console.log('counter()', state , action);
    switch (action.type) {
        case INCREMENT:
            return state + action.data;
        case DECREMENT:
            return state - action.data;
        default:
            return;state
    }
}

const initComments = [

];

function comments(state=initComments, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [action.data, ...state];
        case DELETE_COMMENT:
            return state.filter((comment, index) => index!==action.data);
        case RECEIVE_COMMENTS:
            return action.data;
        default:
            return state
    }
}

export default combineReducers({
    counter, //指定reducer对应的属性
    comments
})

// redux向外暴露的state是什么结构？
// 暴露的是对象，本例中｛counter: 2, comments: []｝