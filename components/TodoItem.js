import React, { Component } from 'react'
import dateFormat from 'dateformat'

import {ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';

const styles = {
  primaryTextComplete: {
    'color': 'grey',
    'textDecoration': 'line-through'
  },
  listItem: {
    minWidth: '270px'
  }
};

class TodoItem extends Component {


  handleCheckboxChange(event){
    var test = this.props.actions.editTodo(this.props.todo, {isComplete: !this.props.todo.isComplete});
    console.log(test);
  }

  handleDelete(){
    this.props.actions.deleteTodo(this.props.todo);
  }

  render () {

    let date = new Date(this.props.todo.createdAt)
    let formatedDate = !isNaN(date)? dateFormat(date, 'dd/mm/yyyy') : '';

    return (

      <ListItem
        style={styles.listItem}
        primaryText={
          <div style={this.props.todo.isComplete? styles.primaryTextComplete: ''}>
            {this.props.todo.text}
          </div>
        }
        secondaryText={formatedDate}
        rightIconButton={<IconButton onTouchTap={this.handleDelete.bind(this)}><ActionDeleteForever /></IconButton>}
        leftCheckbox={<Checkbox onCheck={this.handleCheckboxChange.bind(this)} checked={this.props.todo.isComplete}/>}
      />

    )
  }

}

export default TodoItem
