require("dotenv").config();
import axios from "axios";

export async function addNewTask(content: string, done: boolean) {
  await axios({
    method: "post",
    url: `http://${process.env.NEXT_PUBLIC_HOST}/api/task`,
    data: {
      content: content,
      done: done,
    },
  });
}
