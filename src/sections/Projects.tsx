import FadeIn from '../components/FadeIn'
import TiltCard from '../components/TiltCard'

import project1 from '../assets/projects/project1.png'
import project2 from '../assets/projects/project2.png'
import project3 from '../assets/projects/project3.png'

const projects = [
  {
    title: 'Betting Platform Systems',

    description:
      'Reusable validation logic, dynamic forms and scalable frontend architecture.',

    image: project1,

    github: 'https://github.com/',

    demo: 'https://example.com',
  },

  {
    title: 'Web3 Integration',

    description:
      'Wallet connection systems using Wagmi and Web3Modal.',

    image: project2,

    github: 'https://github.com/',

    demo: 'https://example.com',
  },

  {
    title: 'React SPA SEO',

    description:
      'SEO optimization for React SPA applications using react-helmet-async.',

    image: project3,

    github: 'https://github.com/',

    demo: 'https://example.com',
  },
]

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">
            Projects
          </h2>

          <div className="projects-grid">
            {projects.map((project) => (
              <TiltCard key={project.title}>
                <div className="project-card">
                  <div className="project-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                  </div>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <div className="project-buttons">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="secondary-btn">
                        GitHub
                      </button>
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="primary-btn">
                        Live Demo
                      </button>
                    </a>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default Projects