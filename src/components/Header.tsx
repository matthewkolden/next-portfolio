import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const routes = ['about', 'projects', 'contact']

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="px-6 md:px-0 container mx-auto flex justify-between h-24 w-screen items-center sticky top-0 z-50 backdrop-filter backdrop-blur-lg">
      <a href="#">
        <svg
          aria-label="Daily Dev Tips logo"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="24"
        >
          <path
            d="M 13.073 23.977 L 10.214 23.147 C 9.914 23.063 9.746 22.748 9.83 22.448 L 16.228 0.406 C 16.312 0.106 16.626 -0.063 16.926 0.022 L 19.785 0.851 C 20.085 0.936 20.254 1.25 20.17 1.55 L 13.772 23.592 C 13.683 23.892 13.373 24.066 13.073 23.977 Z"
            fill="rgb(255,188,61)"
          ></path>
          <path
            d="M 9.769 16.542 C 9.985 16.312 9.971 15.946 9.732 15.735 L 5.485 11.999 L 9.732 8.263 C 9.971 8.052 9.989 7.686 9.769 7.457 L 7.73 5.281 C 7.519 5.056 7.163 5.042 6.933 5.258 L 0.179 11.587 C -0.06 11.807 -0.06 12.187 0.179 12.407 L 6.933 18.74 C 7.163 18.956 7.519 18.947 7.73 18.717 Z"
            fill="rgb(218,0,96)"
          ></path>
          <path
            d="M 23.066 18.745 L 29.821 12.412 C 30.06 12.191 30.06 11.812 29.821 11.591 L 23.066 5.253 C 22.841 5.042 22.485 5.052 22.27 5.277 L 20.231 7.452 C 20.015 7.682 20.029 8.047 20.268 8.258 L 24.515 11.999 L 20.268 15.735 C 20.029 15.946 20.01 16.312 20.231 16.542 L 22.27 18.717 C 22.48 18.947 22.837 18.956 23.066 18.745 Z"
            fill="rgb(0,185,232)"
          ></path>
        </svg>
      </a>

      <nav>
        <ul className="flex gap-6 font-medium font-robotomono items-center">
          {routes.map((route) => {
            return (
              <li key={route} className="hover:underline hover:text-red-400">
                <a
                  href={`#${route.toLowerCase()}`}
                  onClick={(event) => {
                    event.preventDefault()
                    const section = document.getElementById(route.toLowerCase())
                    section.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  /{route}
                </a>
              </li>
            )
          })}
          <li>
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="w-10 h-10 p-3 rounded focus:outline-none"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {mounted && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
                >
                  {theme === 'dark' ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  )}
                </svg>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
