import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {
    todoList: initialTodosList.map(todo => ({
      ...todo,
      isChecked: false,
    })),
    todoTitle: '',
    editItem: false,
  }

  handleDelete = id => {
    const {todoList} = this.state
    const updatedTodoList = todoList.filter(eachTodo => eachTodo.id !== id)

    this.setState({
      todoList: updatedTodoList,
    })
  }

  handleInputChange = event => {
    this.setState({
      todoTitle: event.target.value,
    })
  }

  addTodo = e => {
    e.preventDefault()
    const {todoTitle, todoList} = this.state

    const toDo = {
      id: todoList.length + 1,
      title: todoTitle,
      isChecked: false,
    }
    this.setState(prevState => ({
      todoList: [...prevState.todoList, toDo],
      todoTitle: '',
      editItem: false,
    }))
  }

  toggleChecked = id => {
    const {todoList} = this.state
    const updatedTodo = todoList.map(todo => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      return todo
    })
    this.setState({todoList: updatedTodo})
  }

  handleEdit = id => {
    const {todoList} = this.state
    this.setState({editItem: true})
    const filteredTodoList = todoList.filter(eachTodo => eachTodo.id !== id)
    const selectedItem = todoList.find(eachTodo => eachTodo.id === id)
    this.setState({
      todoList: filteredTodoList,
      todoTitle: selectedItem.title,
    })
    console.log('save')
  }

  render() {
    const {todoList, todoTitle, editItem, isChecked} = this.state

    return (
      <div className="app-container">
        <div className="simple-todos-container">
          <h1 className="heading">Simple Todos</h1>
          <form onSubmit={this.addTodo}>
            <div className="add-todo-container">
              <input
                type="text"
                className="newTodoTitle"
                value={todoTitle}
                onChange={this.handleInputChange}
                placeholder="add Todo Title"
              />

              <button
                type="submit"
                className={
                  editItem
                    ? 'btn btn-block btn-success mt-3'
                    : 'btn btn-block btn-primary mt-3 text-uppercase'
                }
              >
                {editItem ? 'edit item' : 'add item'}
              </button>
            </div>
          </form>
          <ul className="todo-list">
            {todoList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
                isChecked={isChecked}
                toggleChecked={this.toggleChecked}
                editItem={editItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
