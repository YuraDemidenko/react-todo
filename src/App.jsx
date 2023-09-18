import { useEffect, useState } from 'react'
import { TodoForm } from './TodoForm'
import './App.css'
import { TodoList } from './TodoList'

function App() {
  const [todos, setTodo] = useState(() => {
    const localValue = localStorage.getItem("Item")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("Item", JSON.stringify(todos))
  }, [todos])

  function handleSubmit(query) {
    setTodo(currentTodos => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: query,
          complited: false
        }
      ]
    })
  }

  function toggleTodo(id, complited) {
    setTodo(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, complited }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodo(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <div className="container">
        <div className="addTodoBox">
          <h1 className='title'>To Do List</h1>
          <TodoForm addTodo={handleSubmit} />
          {todos.length === 0 && "No Todos"}

          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </div>

      </div>

    </>
  )
}

export default App
