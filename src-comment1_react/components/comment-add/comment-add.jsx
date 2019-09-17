import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class CommentAdd extends Component{
    // constructor(props){
    //     super(props);
    //     this.handleSubmit = this.handleSubmit.bind();
    // }
    // handleSubmit(){
    //
    // }

    static propTypes = {
        addComment: PropTypes.func.isRequired
    };

    state = {
        username: '',
        content : ''
    };

    //上面注释掉的 等价于 下面的箭头函数
    //箭头函数没有自己的this,用外围的this，外围的this刚好是组件对象
    handleSubmit = () => {
        //收集数据，并封装成comment对象
        const comment = this.state;
        //更新状态
        this.props.addComment(comment);
        //清除输入数据
        this.setState({
            username: '',
            content: ''
        })
    };

    handleNameChange = (event) =>{
        const username = event.target.value;
        this.setState({username});
    };

    handleContentChange = (event) =>{
        const content = event.target.value;
        this.setState({content});
    };

    render() {
        const {username,content} = this.state;
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名"
                               value={username} onChange={this.handleNameChange}/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容"
                                  value={content} onChange={this.handleContentChange}></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.handleSubmit}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
