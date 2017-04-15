import React, { Component } from 'react'
import TodoItem from './TodoItem'
import axios from 'axios';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = { data: [] };
  }


  componentDidMount() {
    this.props.actions.loadTodos();
  }

  render () {
    return (
      <ul>
        {
          this.props.todos.map((todo) => {
            return (
              <TodoItem
                key={todo._id}
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
