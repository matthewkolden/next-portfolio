import { useTheme } from 'next-themes'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import React, { useEffect, useState, Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import Image from 'next/image'

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
        <div className="pt-6 px-auto">
          <nav
            className="flex items-center justify-between"
            aria-label="Global"
          >
            <div className="flex items-center w-full justify-center hidden md:flex">
              <a href="#">
                <Image src="logo.svg" width="90" height="90" alt="" />
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
                <FaGithub size={30} />
              </a>

              <a
                className="hover:underline hover:text-[#776cbd]"
                href="https://www.linkedin.com/in/matthew-kolden/"
                target="_blank"
              >
                <FaLinkedin size={30} />
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
