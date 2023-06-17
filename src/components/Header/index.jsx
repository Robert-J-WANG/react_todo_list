import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
  /* 子组件Header传递数据给父组件App:
      1, 通过父组件使用props的方式，给子组件传递一个函数
      2，子组件调用此函数，将数据通过函数参数的形式传递给父组件
  */
 // 对接收的props，进行类型和必要性的限制
  static propTypes = {
    addTodo:PropTypes.func.isRequired,
  }

  //  键盘按键的回调
  hanlderKeyUP=(event) => {
    // 定义一个对象，对象里有两个属性keyCode，和target，然后将对象event赋值给自定的对象
    // 获取键盘按键使用 event.key
    const{keyCode, target}=event
    if(keyCode!==13)return
    if(target.value.trim() === ""){
      alert("Please enter a valid name")
      return
    }

    // 准备一个todo 对象,用于送数据
    const todoObj={
      id:nanoid(),
      name:target.value,
      done:false,}
    this.props.addTodo(todoObj)
    // 清空输入框
    target.value=""
  }

  render() {
    return (
      <div className="todo-header">
        {/* 绑定键盘事件*/}
				<input onKeyUp={this.hanlderKeyUP} type="text" placeholder="Type Your Task Name, Press 'Enter' to Comfirm"/>
			</div>
    )
  }
}
