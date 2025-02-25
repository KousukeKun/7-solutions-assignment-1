'use client'

import { TodoItem } from '@/app/const';
import Box from '@mui/material/Box';
import ButtonStack from './ButtonStack';

type AllTodoColumnProps = {
  todoList: TodoItem[]
  onClickBtn?: (item: TodoItem) => void
}

function AllTodoColumn(props: AllTodoColumnProps) {
  const { todoList, onClickBtn } = props;

  return (
    <Box
      sx={{
        border: '1px solid #CCC',
        height: '100%',
      }}
    >
      <ButtonStack
        todoList={todoList}
        onClickBtn={onClickBtn}
      />
    </Box>
  );
}

export default AllTodoColumn;
