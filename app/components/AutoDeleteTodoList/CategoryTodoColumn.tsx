'use client'

import { Category, TodoItem } from '@/app/const'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ButtonStack from './ButtonStack'
import { todo } from 'node:test'

type CategoryTodoColumnProps = {
  category: Category
  todoList: TodoItem[]
  onClickBtn?: (item: TodoItem) => void
}

function CategoryTodoColumn(props: CategoryTodoColumnProps) {
  const { category, todoList, onClickBtn } = props

  return (
    <Box
      sx={{
        border: '1px solid #CCC',
        height: '100%',
      }}
    >
      <Typography
        sx={{
          textAlign: 'center',
          padding: '10px 0',
          backgroundColor: '#F0F0F0',
        }}
      >
        {category}
      </Typography>
      <ButtonStack todoList={todoList} onClickBtn={onClickBtn} />
    </Box>
  )
}

export default CategoryTodoColumn
