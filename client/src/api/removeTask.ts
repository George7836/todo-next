require("dotenv").config();
import axios from "axios";

export async function removeTask(id: number) {
  await axios.delete(`http://${process.env.NEXT_PUBLIC_HOST}/api/task/${id}`);
}
