import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-gray-300 text-gray-600">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
