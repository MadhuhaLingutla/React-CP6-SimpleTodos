// Write your code here

import './index.css'

const TodoItem = props => {
  const {Item, deleteTodo} = props
  const {id, title} = Item

  const deletefromSub = () => {
    deleteTodo(id)
  }

  return (
    <li className="to-do">
      <p className="todo-description">{title}</p>
      <button className="todo-delete" type="button" onClick={deletefromSub}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
