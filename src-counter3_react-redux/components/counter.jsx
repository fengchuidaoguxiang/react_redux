import React,{Component} from 'react';
import Proptypes from 'prop-types';


// import * as actions from '../redux/actions';
import {increment, decrement} from '../redux/actions';

// import {increment, decrement} from '../redux/actions';


export default class Counter extends Component{

    static propTypes = {
        count: Proptypes.number.isRequired,
        increment: Proptypes.func.isRequired,
        decrement: Proptypes.func.isRequired
    };

    increment = () =>{
        // 1. 得到选择增加数量
        const number = this.select.value * 1;
        // // 2. 得到原本的count状态
        // const count = this.state.count;
        // // 3. 更新状态
        // this.setState({count: count + number});
        //2. 调用store的方法更新状态
        // this.props.store.dispatch({type: INCREMENT, data: number});
        // this.props.store.dispatch(actions.increment(number));
        this.props.increment(number);
    };

    decrement = () =>{
        // 1. 得到选择增加数量
        const number = this.select.value*1;
        // // 2. 得到原本的count状态
        // const count = this.state.count;
        // // 3. 更新状态
        // this.setState({count: count - number});
        // 2. 调用store的方法更新状态
        // this.props.store.dispatch({type: DECREMENT, data: number});
        // this.props.store.dispatch(actions.decrement());
        this.props.decrement(number);
    };

    incrementIfOdd = () =>{
        // 1. 得到选择增加数量
        const number = this.select.value*1;
        // 2. 得到原本的count状态
        // const count = this.state.count;
        // const count = this.props.store.getState();
        const count = this.props.count;
        //判断，满足条件才更新状态
        if(count % 2 === 1){
            // // 3. 更新状态
            // this.setState({count: count + number});
            // 3. 调用store的方法更新状态
            // this.props.store.dispatch({type: INCREMENT, data: number});
            // this.props.store.dispatch(actions.increment(number));
            this.props.increment(number);
        }

    };

    incrementAsync = () =>{
        // 1. 得到选择增加数量
        const number = this.select.value*1;
        // // 2. 得到原本的count状态
        // const count = this.state.count;
        // 启动延时定时器
        setTimeout(()=>{
            // // 3. 更新状态
            // this.setState({count: count + number});
            // 3. 调用store的方法更新状态
            // this.props.store.dispatch({type: INCREMENT, data: number});
            // this.props.store.dispatch(actions.increment(number));
            this.props.increment(number);
        }, 1000);
    };

    render() {
        // const {count} = this.state;
        // const count = this.props.store.getState();
        const {count} = this.props;
        //debugger;
        return (
            <div>
                <p>click {count} times</p>
                <div>
                    <select ref={select => this.select = select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>&nbsp;
                    <button onClick={this.increment}>+</button>&nbsp;
                    <button onClick={this.decrement}>-</button>&nbsp;
                    <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
                    <button onClick={this.incrementAsync}>increment async</button>&nbsp;
                </div>
            </div>
        )
    }
}

