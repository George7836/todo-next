import axios from "axios";

export async function getAllTodos() {
  const { data } = await axios.get("http://localhost:8080/api/task");
  const copy = [...data];
  copy.sort((a, b) => a.id - b.id);
  return copy;
}
