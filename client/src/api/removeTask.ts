import axios from "axios";

export async function removeTask(id: number) {
  await axios.delete(`http://localhost:8080/api/task/${id}`);
}
