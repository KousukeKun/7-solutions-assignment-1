import AutoDeleteTodoList from './components/AutoDeleteTodoList'
import { TodoList as TodoListItems } from './const'

export default function Home() {
  return (
    <>
      <AutoDeleteTodoList data={TodoListItems} />
    </>
  )
}
