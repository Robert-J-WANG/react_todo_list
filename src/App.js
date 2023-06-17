import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

import './App.css'

export default class App extends Component {

  // 动态数据保存在复组件App中，这样，就能给每个子组件以props的方式传递，要不，子组件Header 和List之间是兄弟关系，暂时的技术无法传递数据

  //  状态在那里，操作状态的方法就在那里

  // 初始化状态
  state = {
    todos: [
      { id: "001", name: 'Food', done: true },
      { id: "002", name: 'Shopping', done: false },
      { id: "003", name: 'Swimming', done: true },
      { id: "004", name: 'Coding', done: false },
    ]
  }

  // addTodo 用于添加一个todo，接收的参数是一个todo对象
  addTodo = (todoObj) => {
    // 获取原状态里的对象数组
    const { todos } = this.state
    // 追加一个新的对象
    const newTodos = [todoObj, ...todos]
    // 更新状态
    this.setState({ todos: newTodos });
  }

  // updateTodo 用于更新itme的状态
  updateTodo = (id, done) => {
    // 获取原状态数据
    const { todos } = this.state
    // 加工数据
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) {
        return { ...todoObj, done: done }// 复制原对象，并修改done属性值
      }
      else {
        return todoObj; //
      }
    })
    // 更新状态值
    this.setState({ todos: newTodos })
  }

  // deleteTodo 用于删除一个ToDo
  deleteTodo = (id) => {
    // 获取原状态数据
    const { todos } = this.state;
    // 过滤数组对象，返回id不等于被选中ToDo的其他对象
    const newTodos = todos.filter((todoObj) => {
      return (todoObj.id !== id)
    })
    // 更新状态
    this.setState({ todos: newTodos });
  }

  // checkAllTodos 用于全选
  checkAllTodos = (done) => {
    // 获取原来的状态
    const { todos } = this.state;
    // 加工数据
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done: done }
    })
    // 更新数据
    this.setState({ todos: newTodos })
  }
  // clearAllDone 用于全部完成的
  clearAllDone = () => {
    // 获取原来的状态
    const { todos } = this.state
    // 加工数据
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done
    })
    // 更新数据
    this.setState({ todos: newTodos })

  }
  render() {

    // 定义一个对象，对象里有1个属性todos，然后将对象this.state赋值给自定的对象
    const { todos } = this.state; // 不能写成this.state.todos

    return (
      <div>
        <h2 className="todo-title ">My Todo List</h2>
        <div className="todo-container ">
          {/*step 2， 子组件Header需要传递数据给父组件App:
                            1, 通过父组件使用props的方式，给子组件传递一个函数
                            2，子组件调用此函数，将数据通过函数参数的形式传递给父组件
                */}
          <Header addTodo={this.addTodo} />
          {/*step 1， 父组件App通过，设置props的方式，将数据传递给子组件List*/}
          <List todolists={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkAllTodos={this.checkAllTodos} clearAllDone={this.clearAllDone} />
        </div>
      </div>
    )
  }
}
