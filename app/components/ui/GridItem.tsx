'use client'

import { ReactNode } from 'react'
import { Grid2, Grid2Props } from '@mui/material'

interface GridItemProps extends Grid2Props {
  children: ReactNode
}

function GridItem({ children, ...props }: GridItemProps) {
  return (
    <Grid2
      sx={{
        flex: 1,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
      }}
      {...props}
    >
      {children}
    </Grid2>
  )
}

export default GridItem
