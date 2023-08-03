import { Todo } from "@/types/types";
import { create } from "zustand";

interface TodosState {
  todos: Todo[]
  addTodo: (todo: Todo) => void
  removeTodo: (id: number) => void
  setDone: (id: number) => void
  setUpdated: (id: number, text: string) => void
}

export const useTodos = create<TodosState>()((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({todos: [
    {id: todo.id, text: todo.text, done: todo.done}, ...state.todos
  ]})),
  removeTodo: (id) => set((state) => ({todos: 
    state.todos.filter((todo) => {
      return todo.id !== id
    })
  })),
  setDone: (id) => set((state) => ({todos: 
    state.todos.map((todo) => {
      if(todo.id === id) {
        todo.done = !todo.done
      }
      return todo
    })
  })),
  setUpdated: (id, text) => set((state) => ({todos: 
    state.todos.map((todo) => {
      if(todo.id === id) {
        todo.text = text
      }
      return todo
    })
  }))
}))