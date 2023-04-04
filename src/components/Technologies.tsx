import { FaReact, FaPython, FaNodeJs } from 'react-icons/fa'
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
} from 'react-icons/si'

export default function Technologies() {
  return (
    <header className="px-6" id="about">
      <div className="max-w-4xl mx-auto my-32 flex flex-col items-center gap-14 font-poppins">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Some technologies I use
        </h1>
        <div className="flex w-full justify-evenly font-robotomono flex-wrap">
          <div className="flex flex-col gap-2 m-4 items-center">
            <SiTypescript size={50} />
            Typescript
          </div>
          <div className="flex flex-col gap-2 m-4 items-center">
            <FaPython size={50} />
            Python
          </div>
          <div className="flex flex-col gap-2 m-4 items-center">
            <FaReact size={50} />
            React
          </div>
          <div className="flex flex-col gap-2 m-4 items-center">
            <SiMongodb size={50} />
            MongoDB
          </div>
          <div className="flex flex-col gap-2 m-4 items-center">
            <SiPostgresql size={50} />
            PostgreSQL
          </div>
          <div className="flex flex-col gap-2 m-4 items-center">
            <FaNodeJs size={50} />
            NodeJS
          </div>
          <div className="flex flex-col gap-2 m-4 items-center">
            <SiNextdotjs size={50} />
            NextJS
          </div>
        </div>
      </div>
    </header>
  )
}
