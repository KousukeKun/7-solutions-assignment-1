'use client'

import { ReactNode } from 'react'
import { Grid2, Grid2Props } from '@mui/material'

interface GridContainerProps extends Grid2Props {
  children: ReactNode
}

function GridContainer({ children, ...props }: GridContainerProps) {
  return (
    <Grid2
      container
      spacing={2}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
      {...props}
    >
      {children}
    </Grid2>
  )
}

export default GridContainer
