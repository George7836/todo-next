import axios from "axios";

export async function addNewTask(content: string, done: boolean) {
  await axios({
    method: 'post',
    url: 'http://localhost:8080/api/todo',
    data: {
      content: content,
      done: done
    }
  })
}