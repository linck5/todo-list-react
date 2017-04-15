

function getId(todos){
  return todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1;
}

let todoReducer = function(todos = [], action){
  switch(action.type){

    case 'ADD_TODO':

      let newTodo = {
        text: action.text,
        isComplete: false,
        isAdding: true
      };


      return [...todos, newTodo]

    case 'TOGGLE_TODO':
      console.log("ON TOGGLE TODO>>>>")

      return todos.map((todo) => {
        return todo._id === action.id ?
          Object.assign({}, todo, {completed: !todo.completed}) :
          todo
      })

    case 'EDIT_TODO':
      return todos.map((todo) => {
        return todo.id === action.id ?
          Object.assign({}, todo, action.params) :
          todo
      })

    case 'DELETE_TODO':
      return todos.filter((todo) => {
        return todo.id !== action.id
      })

    case 'UPDATE_TODOS':
      return action.newTodos



    default: return todos;
  }
}

export default todoReducer
