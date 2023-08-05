import axios from "axios"

export async function getAllTodos() {
  const { data } = await axios.get('http://localhost:8080/api/todo')
  return data
}