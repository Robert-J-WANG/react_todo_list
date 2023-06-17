import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  //初始化状态，保存鼠标是否移入
  state={mouse:false}// 表示鼠标移入，移出
  
  // 鼠标移入，移出的回调
  handlerMouse=(flag) => {
    return () => {
      // 更新状态
      this.setState({mouse:flag})
    }
  }

  // 选框选中，取消的回调
  handlerCheck=(id) => {
    
    return (e) => {
     this.props.updateTodo(id,e.target.checked)
    }
  }

  // 删除一个ToDo的回调
  handlerDelete=(id) => {
    if(window.confirm("Are you sure you want to delete")){
      this.props.deleteTodo(id)
    }
  }
  
  render() {
    // 接收父组件List传递的数据
    const {id,name,done} = this.props
    // 获取状态数据
    const {mouse}=this.state
    return (
      // {/*给每个items添加鼠标移入移出事件 */}
      <li onMouseLeave={this.handlerMouse(false)} onMouseEnter={this.handlerMouse(true)} style={{backgroundColor:mouse?"#ddd":"white"}}>
        <label>
          {/*给复选框添加是否勾选事件 onChange*/}
          <input type="checkbox"  checked={done} onChange={this.handlerCheck(id)}/>
          <span>{name}</span>
        </label>
         {/*给 删除按钮绑定点击事件 onClick, 使用非柯里化函数的形式（对比高阶函数）   */}
        <button className="btn btn-danger" onClick={() => {
          this.handlerDelete(id)}} style={{display:mouse?'block':'none'}}>Delete</button>
			</li>
    )
  }
}
