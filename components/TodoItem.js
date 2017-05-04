import React, { Component } from 'react'
import dateFormat from 'dateformat'

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
      <li>

        <input type="checkbox" onChange={this.handleCheckboxChange.bind(this)} checked={this.props.todo.isComplete}/>
        {this.props.todo.text}
         - date: {formatedDate}
        <button onClick={this.handleDelete.bind(this)}>X</button>

      </li>
    )
  }

}

export default TodoItem
