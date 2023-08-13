require("dotenv").config();
import axios from "axios";

type updateTodoProps = {
  id: number;
  content: string;
  done: boolean;
};

export async function updateTodo({ id, content, done }: updateTodoProps) {
  await axios({
    method: "put",
    url: `http://${process.env.NEXT_PUBLIC_HOST}/api/task/${id}`,
    data: {
      id: id,
      content: content,
      done: done,
    },
  });
}
