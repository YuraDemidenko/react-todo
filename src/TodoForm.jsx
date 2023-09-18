import { useState } from 'react'


export function TodoForm({addTodo}) {
  const [query, setQuery] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (query === "") return
    addTodo(query)
    setQuery("")
  }

  return (
    <form onSubmit={handleSubmit} className="inputBox" id='todo'>
      <input type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder='some words'
        className='todoInput' />
      <button >+</button>
    </form>
  )
}