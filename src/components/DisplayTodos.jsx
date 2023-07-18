import useTodoStore from '../hooks/useTodoStore'

const DisplayTodos = () => {
  const { todos, deleteTodo, toggleTodo } = useTodoStore(state => ({
    todos: state.todos,
    deleteTodo: state.deleteTodo,
    toggleTodo: state.toggleTodo,
  }))

  return (
    <ul>
      {todos.map(({ id, todo, completed }) => (
        <li className="flex mb-4 items-center" key={id}>
          <p
            className={`w-full ${
              completed ? 'line-through text-green-500' : 'text-gray-700'
            }`}
          >
            {todo}
          </p>
          <button
            className={`flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white ${
              completed
                ? 'text-green-500 border-green-500 hover:bg-green-500'
                : 'text-gray-500 border-gray-500 hover:bg-gray-500'
            }`}
            onClick={() => toggleTodo(id)}
          >
            {completed ? 'Undo' : 'Done'}
          </button>
          <button
            className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500"
            onClick={() => deleteTodo(id)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  )
}

export default DisplayTodos
