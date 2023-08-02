import Header from "@/components/Header";
import TodoList from "@/components/TodoList";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <>
      <Header/>
      <Container 
        maxWidth='lg' 
        sx={{ display: 'flex', justifyContent: 'center' }}>
        <TodoList/>
      </Container>
    </>
  )
}
