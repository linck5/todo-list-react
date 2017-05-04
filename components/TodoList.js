import React, { Component } from 'react'
import TodoItem from './TodoItem'
import axios from 'axios';

class TodoList extends Component {



  componentDidMount() {
    this.props.actions.loadTodos();
  }

  render () {

    if(this.props.todos === undefined) return null


      //sort by isComplete first, then by createdAt
      this.props.todos.sort((a, b) =>{
        const timeA = new Date(a.createdAt).getTime()
        const timeB = new Date(b.createdAt).getTime()

        if(a.isComplete === b.isComplete)
            return timeA - timeB

        return a.isComplete? 1: -1
      })

    return (
      <ul>
        {
          this.props.todos.map((todo) => {
            return (
              <TodoItem
                key={todo.reactId}
                todo={todo}
                actions={this.props.actions}
              />
            )
          })
        }
      </ul>
    )
  }

}

export default TodoList
