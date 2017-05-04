
let currReactId = 0

function getTodoReactId(){
  return currReactId++
}

let todoReducer = function(todos = [], action){
  switch(action.type){

    case 'ADD_TODO':
      action.newTodo.reactId = getTodoReactId()
      return [...todos, action.newTodo]

    case 'EDIT_TODO':
      return todos.map((todo) => {
        return todo.reactId === action.todo.reactId ?
          Object.assign({}, todo, action.params) :
          todo
      })

    case 'UPDATE_TODO_ID':
      return todos.map((todo) => {
        if(todo.reactId === action.todo.reactId){
          todo._id = action.id
        }
        return todo
      })

    case 'DELETE_TODO':
      return todos.filter((todo) => {
        return todo._id !== action.todo._id
      })

    case 'UPDATE_TODOS':
      return action.newTodos.map((todo) =>{
        todo.reactId = getTodoReactId()
        return todo
      })



    default: return todos;
  }
}

export default todoReducer
