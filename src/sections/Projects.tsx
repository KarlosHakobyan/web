import FadeIn from '../components/FadeIn'
import TiltCard from '../components/TiltCard'

//import project1 from '../assets/projects/project1.png'
//import project2 from '../assets/projects/project2.png'
//import project3 from '../assets/projects/project3.png'

const projects = [
  {
    title: 'Smart Home Automation System',

    description:
    'Full-stack smart home management system with device, room and home management, REST API integration and database persistence.',                                                                         

   

    github:
    'https://github.com/KarlosHakobyan/Smart_Home_Project',
  },

{
    title: 'Social Recommender',

    description:
      'Graph-based social recommendation system developed in Java. Models users and relationships as a graph and uses BFS traversal to discover connections and generate social recommendations.',                                            

    

    github:
      'https://github.com/KarlosHakobyan/SocialRecommender',

    demo: '',
  },

{
  title: 'Restaurant Reservation System',

  description:
    'Backend restaurant reservation system with REST API and relational database architecture. Includes reservation management, stored procedures, transactions, database triggers, indexing and protection against overlapping reservations.',

  

  github:
    'https://github.com/KarlosHakobyan/Restaurant_Reservation_System',

  demo: '',
},

{
  title: 'Smart Parking System',

  description:
    'C# desktop application for a smart parking system built with .NET and Windows Forms. Includes a graphical user interface, application configuration and a dedicated Windows installer project.',

  

  github:
    'https://github.com/KarlosHakobyan/SmartParking',

  demo: '',
},

{
  title: 'University Program',

  description:
    'Multi-project .NET application built with a layered architecture. The solution includes ASP.NET Core API, business logic, data and domain layers, MVC and Blazor applications, console tools and dedicated test projects.',

  //image: project5,

  github:
    'https://github.com/KarlosHakobyan/UniversityProgram.Api',

  demo: '',
},

{
  title: 'IT Faculty Page on the NPUA Website',

  description:
    'Multi-page educational website developed with HTML, CSS and JavaScript. Includes dedicated pages for Information Systems and Artificial Intelligence systems with custom styling, navigation and visual assets.',

  //image: project6,

  github:
    'https://github.com/KarlosHakobyan/NPUA_WebPage',

  demo: '',
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
                      //src={project.image}
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
                      <button className="primary-btn">
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