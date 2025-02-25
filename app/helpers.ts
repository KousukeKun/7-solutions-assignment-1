import { Category, TodoItem } from './const'

export function getNamesFromTodoList(todoList: TodoItem[]): string[] {
  return todoList.map((todo) => todo.name)
}

export function getCategoriesFromTodoList(todoList: TodoItem[]): Category[] {
  const categoryArr = todoList.map((todo) => todo.type)

  return [...new Set(categoryArr)]
}
