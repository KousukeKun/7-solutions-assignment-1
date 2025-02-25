'use client'

import { useState, useCallback } from 'react'
import Container from '../ui/PageContainer'
import GridContainer from '../ui/GridContainer'
import GridItem from '../ui/GridItem'
import { Category, TodoItem } from '../../const'
import { getCategoriesFromTodoList } from '../../helpers'
import AllTodoColumn from './AllTodoColumn'
import CategoryTodoColumn from './CategoryTodoColumn'
import remove from 'lodash/remove'

type AutoDeleteTodoListProps = {
  data: TodoItem[]
}

const getCategoryTodoInitState = (categories: Category[]) => {
  const initCategories: Record<Category, TodoItem[]> = Object.fromEntries(
    categories.map((category) => [category, []])
  ) as unknown as Record<Category, TodoItem[]>

  return initCategories
}

function AutoDeleteTodoList(props: AutoDeleteTodoListProps) {
  const { data } = props

  if (!data) {
    return <></>
  }

  const categories = getCategoriesFromTodoList(data)
  const initCategoryTodo = getCategoryTodoInitState(categories)

  const [allTodoList, setAllTodoList] = useState<TodoItem[]>(data)
  const [categoryTodoList, setCategoryTodoList] =
    useState<Record<Category, TodoItem[]>>(initCategoryTodo)

  const moveToCategoryTodoList = useCallback((item: TodoItem) => {
    const categoryName = item.type

    // Remove the item out from allTodoList
    setAllTodoList((prevAllTodoList) => {
      const allTodo = [...prevAllTodoList]
      remove(allTodo, (todo) => todo.name === item.name)

      return allTodo
    })

    // Add the item to categoryTodoList
    setCategoryTodoList((prevCategoryTodoList) => {
      const categoryTodo = [...prevCategoryTodoList[categoryName], item]
      return {
        ...prevCategoryTodoList,
        [categoryName]: categoryTodo,
      }
    })
  }, [])

  const moveBackToAllTodoList = useCallback((item: TodoItem) => {
    const categoryName = item.type

    // Remove the item out from categoryTodoList
    setCategoryTodoList((prevCategoryTodoList) => {
      const categoryTodo = [...prevCategoryTodoList[categoryName]]
      remove(categoryTodo, (todo) => todo.name === item.name)

      return {
        ...prevCategoryTodoList,
        [categoryName]: categoryTodo,
      }
    })

    // Add the item to allTodoList
    setAllTodoList((prevAllTodoList) => {
      // This condition has been added to prevent adding the duplicate item
      // (It can be happened when we had triggered handleOnClickCategoryBtn() function before ...)
      if (
        prevAllTodoList.some(
          (todo) => todo.type === item.type && todo.name === item.name
        )
      ) {
        return prevAllTodoList
      }

      return [...prevAllTodoList, item]
    })
  }, [])

  const handleOnClickAllListBtn = (item: TodoItem) => {
    moveToCategoryTodoList(item)

    // After 5s, Move the item back to AllTodoList
    setTimeout(() => {
      moveBackToAllTodoList(item)
    }, 5000)
  }

  const handleOnClickCategoryBtn = (item: TodoItem) => {
    moveBackToAllTodoList(item)
  }

  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: '24px',
      }}
    >
      <GridContainer>
        <GridItem>
          <AllTodoColumn
            todoList={allTodoList}
            onClickBtn={handleOnClickAllListBtn}
          />
        </GridItem>
        {categories.length > 0 &&
          categories.map((category) => (
            <GridItem key={`grid-category-${category}`}>
              <CategoryTodoColumn
                category={category}
                todoList={categoryTodoList[category]}
                onClickBtn={handleOnClickCategoryBtn}
              />
            </GridItem>
          ))}
      </GridContainer>
    </Container>
  )
}

export default AutoDeleteTodoList
