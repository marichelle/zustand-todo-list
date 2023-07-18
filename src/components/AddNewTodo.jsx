import { useState } from 'react'
import useTodoStore from '../hooks/useTodoStore'

const AddNewTodo = () => {
  const [text, setText] = useState('')
  const addTodo = useTodoStore(state => state.addTodo)

  const handleSubmit = e => {
    e.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex mt-4">
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-700"
          placeholder="Add Todo"
        />
        <button
          type="submit"
          className="flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500"
        >
          Add
        </button>
      </div>
    </form>
  )
}

export default AddNewTodo
