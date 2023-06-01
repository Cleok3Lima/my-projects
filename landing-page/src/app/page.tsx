'use client'

import './GlobalStyle.scss'
import styles from './GlobalStyle.module.scss'

import { Navbar } from '@/components/Navbar/Navbar'
import ThemeContext, { ThemeContextProvider } from '@/context/ThemeContext'
import { useContext } from 'react'

export default function Home() {
  const WrappedApp = () => {
    const { isDark } = useContext(ThemeContext)
    return (
      <div
        className={[
          styles.main,
          isDark ? styles.themeDark : styles.themeLight
        ].join(' ')}
      >
        <div>{isDark ? 'themeDark' : 'themeLight'}</div>
      </div>
    )
  }

  return (
    <>
      <ThemeContextProvider>
        <header>
          <Navbar />
        </header>
        <main>
          <WrappedApp />
        </main>
      </ThemeContextProvider>
    </>
  )
}
