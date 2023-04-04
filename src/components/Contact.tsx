import SectionHeader from './SectionHeader'
import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault()
    const mailtoLink = `mailto:matthewkolden.dev@gmail.com?subject=Contact form submission&body=Name:${name}%0D%0AEmail:${email}%0D%0AMessage:${message}`
    window.open(mailtoLink, '_blank')
  }

  return (
    <section id="contact" className="px-6 font-poppins">
      <div className="max-w-4xl mx-auto py-12">
        <SectionHeader title="Contact" href="#" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <header className="">
              <h1 className="font-semibold text-2xl">
                Get in touch, let's talk.
              </h1>
              <p className="font-light text-base mt-2">
                Fill in the details and I'll get back to you as soon as I can.
              </p>
            </header>
            <div className="icons-container inline-flex flex-col my-20">
              <div className="flex flex-row items-center space-x-6 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telephone-fill h-4 w-4 text-[#776cbd]"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
                <p className="font-light text-sm">(360) 440 7298</p>
              </div>
              <div className="flex flex-row items-center space-x-6 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill h-4 w-4 text-[#776cbd]"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
                <p className="font-light text-sm">
                  matthewkolden.dev@gmail.com
                </p>
              </div>
            </div>
          </div>
          <form className="form px-4 flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="name" className="text-sm mx-4">
              {' '}
              Your Name
            </label>
            <input
              type="text"
              className="rounded-sm py-2 bg-white dark:bg-gray-800 mt-2 px-1 mx-4 focus:ring-2 focus:border-none border"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <label htmlFor="email" className="text-sm mx-4 mt-4">
              Email
            </label>
            <input
              type="text"
              className="rounded-sm py-2 bg-white dark:bg-gray-800 mt-2 px-1 mx-4 border"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="message" className="text-sm mx-4 mt-4">
              Message
            </label>
            <textarea
              rows={4}
              className="rounded-sm py-2 bg-white dark:bg-gray-800 mt-2 px-1 mx-4 border"
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
            <button
              type="submit"
              className="w-1/2 mx-4 mt-4  py-2 text-xs font-robotomono bg-[#776cbd] hover:bg-[#9289ca] text-white px-6 text-lg rounded-sm font-semibold self-center"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
