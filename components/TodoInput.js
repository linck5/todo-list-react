import React, { Component } from 'react'

class TodoInput extends Component {

  constructor(props, context){
    super(props, context);
    this.state = {
      inputText: ""
    };
  }

  handleChange(event){
    this.setState({
      inputText: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({
      inputText: ""
    })

    let newTodo = {
      text: this.state.inputText,
      isComplete: false
    };

    this.props.addTodo(newTodo);
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder="Type in your todo..."
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
        />
        <input type="submit"/>
      </form>
    )
  }

}

export default TodoInput
