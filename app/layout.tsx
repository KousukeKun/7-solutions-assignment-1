import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Auto Delete Todo List',
  description: '7 Solutions Frontend Assignemnt - Auto Delete Todo List',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
