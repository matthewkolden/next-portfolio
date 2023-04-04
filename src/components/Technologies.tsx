import { FaReact, FaPython, FaNodeJs } from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiPostgresql, SiNextdotjs } from 'react-icons/si'

export default function Technologies() {
  return (
    <header className="px-6" id="about">
      <div className="max-w-4xl mx-auto my-64 flex flex-col items-center gap-14 font-poppins">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Some technologies I use
          </h1>
          <div className="flex w-full justify-between font-robotomono">
            <div className="flex flex-col gap-2 items-center">
            <SiTypescript size={70}/>
              Typescript
            </div>
            <div className="flex flex-col gap-2 items-center">
              <FaPython size={70}/>
              Python
            </div>
            <div className="flex flex-col gap-2 items-center">
              <FaReact size={70}/>
              React
            </div>
            <div className="flex flex-col gap-2 items-center">
              <SiMongodb size={70}/>
              MongoDB
            </div>
            <div className="flex flex-col gap-2 items-center">
              <SiPostgresql size={70}/>
              PostgreSQL
            </div>
            <div className="flex flex-col gap-2 items-center">
              <FaNodeJs size={70}/>
              NodeJS
            </div>
            <div className="flex flex-col gap-2 items-center">
              <SiNextdotjs size={70}/>
              NextJS
            </div>
          </div>
      </div>
    </header>
  );
}