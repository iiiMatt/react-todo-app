import { useState } from 'react'
import Todo from './Todo.js'
import TodoForm from './TodoForm.js'

const TodoList = () => {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.textValue)) {
      return
    }
    setTodos([todo, ...todos])
    console.log(todos)
  }

  const completeTodo = id => {
    let updatedTodo = todos.map(todo => {
      if (todo.id === id) todo.isComplete = !todo.isComplete
      return todo
    })
    setTodos(updatedTodo)
  }

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) return
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  }

  const removeTodo = id => {
    let updatedTodo = todos.filter(todo => id !== todo.id)
    setTodos(updatedTodo)
  }


  return (
    <div>
      <h1>What's the plan for today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  )
}

export default TodoList
