import React, { Component } from 'react'
import TodoItem from './TodoItem'
import axios from 'axios';
import {List, ListItem} from 'material-ui/List';


import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

class TodoList extends Component {



  componentDidMount() {
    this.props.actions.loadTodos();
  }

  render () {

    //sort by isComplete first, then by createdAt
    this.props.todos.sort((a, b) =>{
      const timeA = new Date(a.createdAt).getTime()
      const timeB = new Date(b.createdAt).getTime()

      if(a.isComplete === b.isComplete)
          return timeA - timeB

      return a.isComplete? 1: -1
    })

    return (
      <List>
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
      </List>
    )
  }

}

export default TodoList
