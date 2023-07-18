import { create } from 'zustand'
import { persist } from 'zustand/middleware'

/*
 * We have a todos state. This will hold an array of our todos.
 * We have three actions: addTodo, toggleTodo, and deleteTodo.
 * - The addTodo action adds new todo to the todos state.
 * - The deleteTodo removes a todo from the array state.
 * - The toggleTodo action toggles the completed state of a todo.
 */

const useTodoStore = create(
  persist(
    set => ({
      todos: [],
      addTodo: todo =>
        set(state => ({
          todos: [
            ...state.todos,
            {
              id: Date.now(),
              todo,
              completed: false,
            },
          ],
        })),
      deleteTodo: id =>
        set(state => ({
          todos: state.todos.filter(todo => todo.id !== id),
        })),
      toggleTodo: id =>
        set(state => ({
          todos: state.todos.map(todo =>
            todo.id === id
              ? {
                  ...todo,
                  completed: !todo.completed,
                }
              : todo
          ),
        })),
    }),
    { name: 'useTodoStore' }
  )
)

export default useTodoStore
