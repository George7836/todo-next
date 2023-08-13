require("dotenv").config();
import axios from "axios";

export async function getAllTodos() {
  const { data } = await axios.get(
    `http://${process.env.NEXT_PUBLIC_HOST}/api/task`
  );
  const copy = [...data];
  copy.sort((a, b) => a.id - b.id);
  return copy;
}
