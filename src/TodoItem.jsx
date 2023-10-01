
export function TodoItem({complited, id, title, toggleTodo, deleteTodo}) {
  return (
    <div className="item">
      <label className="checkWrapper">
        <input type="checkbox" checked={complited} className='checkbox'
        onChange={e => toggleTodo(id, e.target.checked)}
        />
        <span className="fake"></span>
      </label>
      <div className="todoText">{title}</div>
      <button onClick={() => deleteTodo(id)} className='deliteBtn'></button>
    </div>
  )
}