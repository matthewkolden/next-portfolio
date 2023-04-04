import { useTheme } from 'next-themes'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import React, { useEffect, useState, Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const routes = ['about', 'projects', 'contact']

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <Popover
        className={'sticky z-50 top-0 w-full backdrop-blur-sm font-robotomono'}
      >
        <div className="pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center justify-between"
            aria-label="Global"
          >
            <div className="flex items-center w-full justify-center hidden md:flex">
              <a href="#">
                <svg
                  aria-label="Daily Dev Tips logo"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="24"
                >
                  <path
                    d="M 13.073 23.977 L 10.214 23.147 C 9.914 23.063 9.746 22.748 9.83 22.448 L 16.228 0.406 C 16.312 0.106 16.626 -0.063 16.926 0.022 L 19.785 0.851 C 20.085 0.936 20.254 1.25 20.17 1.55 L 13.772 23.592 C 13.683 23.892 13.373 24.066 13.073 23.977 Z"
                    fill="rgb(119,108,189)"
                  ></path>
                  <path
                    d="M 9.769 16.542 C 9.985 16.312 9.971 15.946 9.732 15.735 L 5.485 11.999 L 9.732 8.263 C 9.971 8.052 9.989 7.686 9.769 7.457 L 7.73 5.281 C 7.519 5.056 7.163 5.042 6.933 5.258 L 0.179 11.587 C -0.06 11.807 -0.06 12.187 0.179 12.407 L 6.933 18.74 C 7.163 18.956 7.519 18.947 7.73 18.717 Z"
                    fill="rgb(119,108,189)"
                  ></path>
                  <path
                    d="M 23.066 18.745 L 29.821 12.412 C 30.06 12.191 30.06 11.812 29.821 11.591 L 23.066 5.253 C 22.841 5.042 22.485 5.052 22.27 5.277 L 20.231 7.452 C 20.015 7.682 20.029 8.047 20.268 8.258 L 24.515 11.999 L 20.268 15.735 C 20.029 15.946 20.01 16.312 20.231 16.542 L 22.27 18.717 C 22.48 18.947 22.837 18.956 23.066 18.745 Z"
                    fill="rgb(119,108,189)"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="flex items-center gap-4 w-full md:justify-center justify-start">
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
              <a
                className="hover:underline hover:text-[#776cbd]"
                href="https://github.com/matthewkolden"
                target="_blank"
              >
                <FaGithub size={25} />
              </a>

              <a
                className="hover:underline hover:text-[#776cbd]"
                href="https://www.linkedin.com/in/matthew-kolden/"
                target="_blank"
              >
                <FaLinkedin size={25} />
              </a>
            </div>
            <div className="-mr-2 flex items-center w-full md:hidden md:justify-center justify-end">
              <Popover.Button
                className={`rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100`}
              >
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="w-full hidden md:block md:ml-10 md:space-x-8">
              {routes.map((route) => {
                return (
                  <a
                    href={`#${route.toLowerCase()}`}
                    key={route}
                    className="hover:underline hover:text-[#776cbd]"
                    onClick={(event) => {
                      event.preventDefault()
                      const section = document.getElementById(
                        route.toLowerCase()
                      )
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                  >
                    /{route}
                  </a>
                )
              })}
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div
              className={`rounded-sm shadow-md z-[100] bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 overflow-hidden`}
            >
              <div className="px-5 pt-4 flex items-center justify-between">
                <div className="-mr-2">
                  <Popover.Button
                    className={`rounded-sm p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100`}
                  >
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
                {routes.map((route) => {
                  return (
                    <a
                      href={`#${route.toLowerCase()}`}
                      key={route}
                      className="rounded-sm p-2 inline-flex items-center hover:underline hover:text-[#776cbd] justify-center"
                      onClick={(event) => {
                        event.preventDefault()
                        const section = document.getElementById(
                          route.toLowerCase()
                        )
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                    >
                      /{route}
                    </a>
                  )
                })}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  )
}
