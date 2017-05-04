import axios from 'axios';

let todosUrl = 'http://localhost:3000/api/todos';

let actions = {


  addTodo: function(newTodo){
    return dispatch => {
      newTodo.createdAt = new Date()

      dispatch(actions.addTodoToState(newTodo))
      dispatch(actions.addTodoToDb(newTodo))
    }
  },

  addTodoToState: function(newTodo){
    return {
      type: 'ADD_TODO',
      newTodo: newTodo
    }
  },

  addTodoToDb: function(newTodo){
    return dispatch => {

      return axios.post(todosUrl, newTodo)
      .then(res => {
        console.log(res)
        dispatch(actions.updateTodoId(newTodo, res.data.todo._id))
      })
      .catch(err => { console.error(err) });
    }

  },

  updateTodoId: function(todo, id){
    return {
      type: 'UPDATE_TODO_ID',
      todo: todo,
      id: id
    }
  },

  editTodo: function(todo, params){

    axios.put(todosUrl + '/' + todo._id, params)
    .then(res => { console.log(res) })
    .catch(err => { console.error(err) })

    return {
      type: 'EDIT_TODO',
      todo: todo,
      params: params
    }
  },

  deleteTodo: function(todo){

    axios.delete(todosUrl + '/' + todo._id)
    .then(res => { console.log(res) })
    .catch(err => { console.error(err) })

    return {
      type: 'DELETE_TODO',
      todo: todo
    }
  },

  loadTodos: function(){
      return (dispatch) => {
        return axios.get(todosUrl)
        .then(res => {
          dispatch(actions.updateTodos(res.data))
        })
      }
  },

  updateTodos: function(newTodos){
    return {
      type: 'UPDATE_TODOS',
      newTodos: newTodos
    }
  }
}

export default actions
