import SectionHeader from './SectionHeader'
import ProjectItem from './ProjectItem'
import LazyShow from './LazyShow'

export default function Projects() {
  const projects = [
    {
      title: 'TraderNest',
      image: '/damafescreenshot.png',
      alt: 'tradernest screenshot',
      description:
        'An online portfolio that lets users to create and edit a portfolio of stocks. Make using MERN stack, Finnhub API, and MaterialUI',
      github: 'https://github.com/matthewkolden/trader-nest',
      live: 'https://trader-nest.netlify.app/',
    },
    {
      title: 'DaMaFe Movies',
      image: '/damafescreenshot.png',
      alt: 'damafe movies screenshot',
      description:
        'An online movie review platform that enables users to create, read, update, and delete movie reviews built with MongoDB, Express, TailWind, JavaScript, brcryptjs, and JSX.',
      github: 'https://github.com/matthewkolden/movie-app',
      live: 'https://damafe-movies.netlify.app/',
    },
    {
      title: 'Chatbox',
      image: '/chatboxscreenshot.png',
      alt: 'chatbox screenshot',
      description:
        'A CRUD application built using Node.js, Express, Socket.io, Passport, Bcrypt, and MongoDB that allows users to create and manage chat rooms.',
      github: 'https://github.com/matthewkolden/chat-box',
      live: 'https://chat-box-live.herokuapp.com/',
    },
    {
      title: 'The Typing Game',
      image: '/typinggamescreenshot.png',
      alt: 'typing game screenshot',
      description:
        'A fun way to test myself (and others) on their typing speed, built using the Random Quotes API. Your words per minute will be tracked along as you play, so try to get the highest score you can.',
      github: 'https://github.com/matthewkolden/typing-game',
      live: 'https://matthewkolden.github.io/typing-game/',
    },
  ]

  return (
    <section
      className={'bg-[#F1F1F1] dark:bg-gray-900 px-6 font-poppins'}
      id="projects"
    >
      <div className="max-w-4xl mx-auto py-12 font-robotomono">
        <SectionHeader title="Projects" href="#" />
        <div className="flex flex-col">
          {projects.map((project, index) => {
            return (
              <LazyShow key={index}>
                <ProjectItem
                  title={project.title}
                  image={project.image}
                  alt={project.alt}
                  description={project.description}
                  github={project.github}
                  live={project.live}
                  index={index}
                />
              </LazyShow>
            )
          })}
        </div>
      </div>
    </section>
  )
}
