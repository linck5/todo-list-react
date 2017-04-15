import axios from 'axios';

let todosUrl = 'http://localhost:3000/api/todos';

let actions = {

  addTodo: function(newTodo){
    return (dispatch) => {
      return axios.post(todosUrl, newTodo)
      .then(function (response) {
        dispatch(actions.loadTodos());
      })
      .catch(err => {
        console.error(err);
      });
    }
  },

  editTodo: function(id, params){
    return (dispatch) => {
      return axios.put(todosUrl + '/' + id, params)
      .then(res => {
        dispatch(actions.loadTodos());
      })
    }
  },

  deleteTodo: function(id){
    return (dispatch) => {
      return axios.delete(todosUrl + '/' + id)
      .then(res => {
        dispatch(actions.loadTodos());
      })
    }
  },

  loadTodos: function(){
      return (dispatch) => {
        return axios.get(todosUrl)
        .then(res => {
          dispatch(actions.updateTodos(res.data));
        })
      }
  },

  updateTodos: function(newTodos){
    return {
      type: 'UPDATE_TODOS',
      newTodos: newTodos
    }
  },

  createNewUserId: function(){
    return {
      type: 'CREATE_USER_ID',
      id: Math.floor(Math.random()*1000)
    }
  }
}

export default actions;
