import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

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

        <TextField
          hintText="Digite um novo afazer aqui"
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
        />
        <FlatButton
          type="submit"
          label="Adicionar"
          primary={true}
        />

      </form>
    )
  }

}

export default TodoInput
