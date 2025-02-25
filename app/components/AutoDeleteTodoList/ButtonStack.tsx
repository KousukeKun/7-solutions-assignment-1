'use client'

import { TodoItem } from '@/app/const'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

type ButtonStackProps = {
  todoList: TodoItem[]
  onClickBtn?: (item: TodoItem) => void
}

function ButtonStack(props: ButtonStackProps) {
  const { todoList, onClickBtn } = props

  if (todoList.length === 0) {
    return <></>
  }

  return (
    <Box
      sx={{
        width: '80%',
        margin: 'auto',
        padding: '10px 0',
      }}
    >
      <Stack spacing={1}>
        {todoList.map((item, index) => (
          <Button
            key={`list-item-${index}`}
            variant="outlined"
            sx={{
              textTransform: 'capitalize',
            }}
            onClick={() => onClickBtn && onClickBtn(item)}
          >
            {item.name}
          </Button>
        ))}
      </Stack>
    </Box>
  )
}

export default ButtonStack
