import AddNewTodo from './components/AddNewTodo'
import DisplayTodos from './components/DisplayTodos'

function App() {
  return (
    <main className="text-gray-700">
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-3xl font-bold">Zustand Todo List</h1>
            <AddNewTodo />
          </div>
          <DisplayTodos />
        </div>
      </div>
    </main>
  )
}

export default App
