import './index.css'

const TodoItem = props => {
  const {
    todoDetails,
    handleDelete,
    handleEdit,
    toggleChecked,
    isChecked,
    editItem,
  } = props
  const {id, title} = todoDetails

  const onDeleteTodo = () => {
    handleDelete(id)
  }
  const handleToggle = () => {
    toggleChecked(id)
  }

  const onEditTodo = () => {
    handleEdit(id)
  }

  return (
    <li className="todo-item">
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleToggle} />

        <p className="title">{title}</p>

        <div className="todo-icon">
          {editItem ? (
            <button type="button" onClick={onEditTodo}>
              Save
            </button>
          ) : (
            <button type="button" onClick={onEditTodo}>
              Edit
            </button>
          )}

          <button type="button" onClick={onDeleteTodo}>
            Delete
          </button>
        </div>
      </label>
    </li>
  )
}

export default TodoItem
