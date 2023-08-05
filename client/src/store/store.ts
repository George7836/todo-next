import { getAllTodos } from "@/api/getAllTodos";
import { Todo } from "@/types/types";
import { create } from "zustand";

interface TodosState {
  todos: Todo[]
  filteredTodos: Todo[]
  searchValue: string
  filterTodos: () => void
  setSearchValue: (text: string) => void
  getTodos: () => void
}

export const useTodos = create<TodosState>()((set) => ({
  todos: [],
  filteredTodos: [],
  searchValue: '',
  getTodos: async () => {
    const data = await getAllTodos()
    return set({todos: [...data]})
  }, 
  filterTodos: () => set((state) => ({filteredTodos: state.searchValue 
    ? state.todos.filter((todo) => todo.content.toLowerCase().includes(state.searchValue.toLowerCase()))
    : [...state.todos]
  })),
  setSearchValue: (text) => set(() => ({searchValue: text})),
}))