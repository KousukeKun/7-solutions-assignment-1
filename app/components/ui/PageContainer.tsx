'use client'

import { useState, useEffect, ReactNode } from 'react'
import { Container, ContainerProps } from '@mui/material'

interface PageContainerProps extends ContainerProps {
  children: ReactNode
}

function PageContainer({ children, ...props }: PageContainerProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return <div>{children}</div>
  return <Container {...props}>{children}</Container>
}

export default PageContainer
