import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  
  // 全选checkbox的回调
  handleCheckAll=(event) => {
    this.props.checkAllTodos(event.target.checked);
  }
  // 清除全部完成的回调
  handleClearAllDone=() => {
    this.props.clearAllDone()
  }
  
  render() {
    // 接收父组件传递过来的pros
    const{todos}=this.props;
    // reduce 函数传递2个值，一个是回调函数，另一个是统计时的初始值，这里为0
    // const done=todos.reduce((pre,todo) => {
    //   return pre+(todo.done?1:0)
    // },0)
    // 回调函数只有一句代码，是可简写为
    const doneCount=todos.reduce((pre,todo) => 
      pre+(todo.done?1:0),0) //return和花括号都省略
    const total =todos.length;

    return (
    <div className="todo-footer">
            <label>
                <input type="checkbox" onChange={this.handleCheckAll} checked={(doneCount===total)&&(total!==0)?true:false}/>
            </label>
            <span>
                <span>Done {doneCount}</span> / All {total}
            </span>
            <button  className="btn btn-danger" onClick={this.handleClearAllDone}>Delete All Done Tasks</button>
    </div>
      
    )
  }
}
