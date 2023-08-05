import axios from "axios";

type updateTodoProps = { 
  id: number 
  content: string
  done: boolean
}

export async function updateTodo({id, content, done}: updateTodoProps) {
  await axios({
    method: 'put',
    url: `http://localhost:8080/api/todo/${id}`,
    data: {
      id: id,
      content: content,
      done: done
    }
  })
}