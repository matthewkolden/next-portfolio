import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'

interface Props {
  title: string
  image: string
  alt: string
  description: string
  github: string
  live: string
  index: number
}

export default function ProjectItem({
  title,
  image,
  alt,
  description,
  github,
  live,
  index,
}: Props) {
  const isEven = index % 2 === 0
  const articleClasses = `static flex items-center flex-col py-6 ${
    isEven ? 'md:flex-row-reverse' : ''
  } md:flex-row`

  return (
    <article className={articleClasses}>
      <span className="m-5 inline-block before:w-full before:aspect-video before:-right-1.5 before:top-1.5 before:block before:absolute before:bg-[#776cbd] relative z-0 md:ml-[-3rem]">
        <Image
          src={image}
          alt={alt}
          width={600}
          height={500}
          className="relative transform hover:scale-125 transition duration-2000 ease-out"
        />
      </span>
      <div className="flex flex-col items-end justify-between gap-4 px-6 py-4 max-w-md z-10 bg-white dark:bg-gray-800 rounded-sm shadow-lg md:ml-[-3rem] border">
        <h3 className="text-gray-600 my-4 block">{title}</h3>
        <p className="">{description}</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-[#776cbd]" href={live} target="_blank">
            Live
          </a>
          <a className="hover:text-[#776cbd]" href={github} target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>
    </article>
  )
}
