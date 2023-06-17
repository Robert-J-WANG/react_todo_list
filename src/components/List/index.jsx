import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

  // 对接收的props，进行类型和必要性的限制
  static propTypes = {
    todolists:PropTypes.array.isRequired,
    updateTodo:PropTypes.func.isRequired,
  }

  
  render() {
    /*父组件App把存储在state里的动态数据，通过设置props的方式，传递给子组件List*/
    // 子组件List获取属性props的数据
    const {todolists, updateTodo, deleteTodo} =this.props

    return (
      <ul className="todo-main">
        {/*把属性数据遍历获取所有数据*/}
        {/*在jsx文件在写JS代码，需要加花括号包裹一下*/}
        {
          todolists.map((todolist) => {
            {/*组件List通过设置属性props，将数据传递给他的字组件Item*/}
            {/*传递所有的props，使用{...todolist}*/}
            return <Item  key={todolist.id} {...todolist} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
          })
        }
			</ul>
    )
  }
}
