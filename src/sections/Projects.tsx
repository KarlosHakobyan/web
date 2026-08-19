import FadeIn from '../components/FadeIn'
import TiltCard from '../components/TiltCard'

import project1 from '../assets/projects/project1.png'
import project2 from '../assets/projects/project2.png'
import project3 from '../assets/projects/project3.png'
import project4 from '../assets/projects/project4.png'
import project5 from '../assets/projects/project5.png'
import project6 from '../assets/projects/project6.png'
import project7 from '../assets/projects/project7.png'
import project8 from '../assets/projects/project8.png'
import project9 from '../assets/projects/project9.png'
import project10 from '../assets/projects/project10.png'

const projects = [
  {
    title: 'Smart Home Automation System',

    image: project9,

    description:
      'Full-stack smart home management system with device, room and home management, REST API integration and database persistence.',

    github:
      'https://github.com/KarlosHakobyan/Smart_Home_Project',
  },

  {
    title: 'Social Recommender',

    description:
      'Graph-based social recommendation system developed in Java. Models users and relationships as a graph and uses BFS traversal to discover connections and generate social recommendations.',

    image: project1,

    github:
      'https://github.com/KarlosHakobyan/SocialRecommender',

    demo:
      'https://karloshakobyan.github.io/SocialRecommender/web',
  },

  {
    title: 'Restaurant Reservation System',

    image: project8,

    description:
      'Backend restaurant reservation system with REST API and relational database architecture. Includes reservation management, stored procedures, transactions, database triggers, indexing and protection against overlapping reservations.',

    github:
      'https://github.com/KarlosHakobyan/Restaurant_Reservation_System',
  },

  {
    title: 'IT Faculty Page on the NPUA Website',

    image: project4,

    description:
      'Multi-page educational website developed with HTML, CSS and JavaScript. Includes dedicated pages for Information Systems and Artificial Intelligence systems with custom styling, navigation and visual assets.',

    github:
      'https://github.com/KarlosHakobyan/NPUA_WebPage',
      demo: 'https://karloshakobyan.github.io/NPUA_WebPage/Politex',
  },

   {
    title: 'Coin Casino',

    image: project2,

    description:
      'Real-time multiplayer 3D coin-toss game with interactive coin animations, live betting feeds, dynamic wager and multiplier calculations, and responsive gameplay UI.',

    github:
      'https://github.com/KarlosHakobyan/NPUA_WebPage',
      demo: 'https://karloshakobyan.github.io/Coin_Game/',
  },

{
  title: 'Slot Machine',

  image: project5,

  description:
    'Feature-rich browser slot machine built with pure JavaScript and HTML5 Canvas. Includes realistic reel physics, five paylines, auto-spin, dynamic chip betting, Web Audio API sound effects and a risk-based card gamble mini-game.',

  github:
    'https://github.com/KarlosHakobyan/Slot_Machine',

  demo: 'https://karloshakobyan.github.io/Slot_Machine/',
},

{
  title: 'Shell Game',

  image: project10,

  description:
    'Play the iconic 90s Street Shell Game right in your browser! Choose between 3 or 5 shells, keep your eyes on the ball, and test your focus. A simple, thrilling retro game with no downloads required.',

  github:
    'https://github.com/KarlosHakobyan/Street_Shell_Game',

  demo: 'https://karloshakobyan.github.io/Street_Shell_Game/',
},
  
{
  title: 'Dendy Tankz - Survival Mode',

  image: project3,

  description:
    'Retro 2D browser-based tank game inspired by classic NES Battle City. Features five unique stages, survival gameplay with timed enemy waves, custom physics, pause system and an interactive HUD built with HTML5 Canvas and JavaScript.',

  github:
    'https://github.com/KarlosHakobyan/TankZ_Game',

  demo: 'https://karloshakobyan.github.io/TankZ_Game/',
},

{
  title: 'Super Mario Game',

  image: project6,

  description:
    'Classic 2D side-scrolling platformer built with Vanilla JavaScript and HTML5 Canvas. Features physics and collision detection, power-ups, enemy interactions, sprint stamina, distance tracking, pause, game-over and victory states.',

  github:
    'https://github.com/KarlosHakobyan/Super_Mario_Game',

  demo: 'https://karloshakobyan.github.io/Super_Mario_Game/',
},

{
  title: 'Snake Game',

  description:
    'Classic browser-based Snake game built with HTML, CSS and JavaScript. Features real-time movement, food collection, snake growth, score tracking and collision detection with an interactive game interface.',

  image: project7,  

  github:
    'https://github.com/KarlosHakobyan/Snake_Game',

  demo: 'https://karloshakobyan.github.io/Snake_Game/',
},

{
    title: 'Smart Parking System',

    description:
      'C# desktop application for a smart parking system built with .NET and Windows Forms. Includes a graphical user interface, application configuration and a dedicated Windows installer project.',

    github:
      'https://github.com/KarlosHakobyan/SmartParking',
  },

  {
    title: 'University Program',

    description:
      'Multi-project .NET application built with a layered architecture. The solution includes ASP.NET Core API, business logic, data and domain layers, MVC and Blazor applications, console tools and dedicated test projects.',

    github:
      'https://github.com/KarlosHakobyan/UniversityProgram.Api',
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

                  {project.image && (
                    <div className="project-image-wrapper">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                      />
                    </div>
                  )}

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

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="primary-btn">
                          Live Demo
                        </button>
                      </a>
                    )}

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
