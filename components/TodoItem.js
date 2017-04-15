import React, { Component } from 'react'

class TodoItem extends Component {


  handleCheckboxChange(event){
    var test = this.props.actions.editTodo(this.props.todo._id, {isComplete: !this.props.todo.isComplete});
    console.log("test >>");
    console.log(test);
  }

  handleDelete(){
    console.log('id >> ' + this.props.todo._id)
    this.props.actions.deleteTodo(this.props.todo._id);
  }

  render () {
    return (
      <li>

        <input type="checkbox" onChange={this.handleCheckboxChange.bind(this)} checked={this.props.todo.isComplete}/>
        {this.props.todo.text}{this.props.todo.isAdding? ' - adding': ''}
        <button onClick={this.handleDelete.bind(this)}>X</button>

      </li>
    )
  }

}

export default TodoItem
