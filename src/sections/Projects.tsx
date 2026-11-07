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
import project11 from '../assets/projects/project11.png'
import project12 from '../assets/projects/project12.png'
import project13 from '../assets/projects/project13.png'
import project14 from '../assets/projects/project14.png'
import project15 from '../assets/projects/project15.png'
import project16 from '../assets/projects/project16.png'
import project17 from '../assets/projects/project17.png'


const projects = [
  {
    title: 'Smart Home Automation System',

    image: project9,

    description:
      'Full-stack smart home management system with device, room and home management, REST API integration and database persistence.',

    github:
      'https://github.com/KarlosHakobyan/Smart_Home_Project',

    demo:
      'https://karloshakobyan.github.io/Smart_Home_Project/',
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

    demo:
      'https://karloshakobyan.github.io/Restaurant_Reservation_System/',
  },

  {
    title: 'IT Faculty Page on the NPUA Website',

    image: project4,

    description:
      'Multi-page educational website developed with HTML, CSS and JavaScript. Includes dedicated pages for Information Systems and Artificial Intelligence systems with custom styling, navigation and visual assets.',

    github:
      'https://github.com/KarlosHakobyan/NPUA_WebPage',
    
    demo:
      'https://karloshakobyan.github.io/NPUA_WebPage/Politex',
  },

{
    title: 'E-Library',

    image: 'project18',

    description:
      'A console-based Electronic Library Management System developed in C# as a practical project to master Object-Oriented Programming (OOP) principles.',

    github:
      'https://github.com/KarlosHakobyan/E_Library',
    demo:
      'https://karloshakobyan.github.io/E_Library/',
  },

{
    title: 'Exceptions Practice',

    image: 'project19',

    description:
      'A console application demonstrating custom exceptions, business logic validation, and robust error handling using try-catch-finally blocks in C#.This project simulates a simplified bank transfer system where users can withdraw, deposit, and transfer funds between bank accounts. It highlights best practices for exception handling in object-oriented programming.',

    github:
      'https://github.com/KarlosHakobyan/Exceptions_Practice',
    demo:
      'https://karloshakobyan.github.io/Exceptions_Practice/',
  },

{
    title: 'Collections Practice',

    image: 'project20',

    description:
      'A comprehensive C# practice repository demonstrating the implementation and usage of core .NET fundamentals, generic collections, standard interfaces (IEnumerable, IComparable, ICloneable), custom dictionary structures, and linear collections (Queue and Stack).',

    github:
      'https://github.com/KarlosHakobyan/Collections_Practice',
    demo:
      'https://karloshakobyan.github.io/Collections_Practice/',
  },

  {
    title: 'Delegates Practice',

    image: 'project21',

    description:
      'Console application demonstrating the core concepts of delegates, multicast delegates, and built-in generic delegate types (Action and Func) in C#.',

    github:
      'https://github.com/KarlosHakobyan/Delegates_Practice',
    demo:
      'https://karloshakobyan.github.io/Delegates_Practice/',
  },

  {
    title: 'Streams Practice',

    image: 'project22',

    description:
      'A simple C# console application demonstrating fundamental concepts of working with files, StreamWriter, FileStream, and StreamReader in .NET.',

    github:
      'https://github.com/KarlosHakobyan/Streams_Practice',
    demo:
      'https://karloshakobyan.github.io/Streams_Practice/',
  },


  {
    title: 'Dependency Injection Practice',

    image: 'project23',

    description:
      'This project demonstrates the fundamentals of Dependency Injection (DI) in C# using the built-in Microsoft.Extensions.DependencyInjection library. The application simulates an order payment process and allows users to choose between different payment methods. Dependencies are registered in the DI container and injected into services through constructors.',

    github:
      'https://github.com/KarlosHakobyan/DependencyInjections_Practice',
    demo:
      'https://karloshakobyan.github.io/DependencyInjections_Practice/',
  },


  {
    title: 'LINQ Practice',

    image: 'project24',

    description:
      'A practical C# project focused on learning and practicing LINQ (Language Integrated Query), lambda expressions, and collection manipulation. This project contains hands-on exercises for working with collections of objects using LINQ. It uses a student management scenario to demonstrate filtering, sorting, projection, aggregation, grouping, and querying data. The goal is to understand how to write clean, readable, and efficient C# code using LINQ.',

    github:
      'https://github.com/KarlosHakobyan/LINQ_Practice',
    demo:
      'https://karloshakobyan.github.io/LINQ_Practice/',
  },

   {
    title: 'File Practice',

    image: 'project25',

    description:
      'This project demonstrates how to work with files in C#, including creating, reading, writing, copying, moving, deleting files, and retrieving file information.',

    github:
      'https://github.com/KarlosHakobyan/File_Practice',
    demo:
      'https://karloshakobyan.github.io/File_Practice/',
  },

   {
    title: 'Serializers Practice',

    image: 'project26',

    description:
      'A C# console application that demonstrates JSON and XML serialization and deserialization using reusable helper classes. Collects student information from console input. Saves a Student object as either JSON or XML. Loads the saved data back into a Student object. Provides reusable generic helper methods for serialization and deserialization. Supports synchronous file operations and asynchronous file operations in the helper classes. Formats JSON output for readability and XML output with indentation.',

    github:
      'https://github.com/KarlosHakobyan/Serializers_Practice',
    demo:
      'https://karloshakobyan.github.io/Serializers_Practice/',
  },

{
    title: 'Parallel Practice',

    image: 'project27',

    description:
      'A C# console application demonstrating asynchronous programming, parallel execution, and multithreading using Task, async/await, and the Parallel class.',

    github:
      'https://github.com/KarlosHakobyan/ParallelProgramming_Practice',
    demo:
      'https://karloshakobyan.github.io/ParallelProgramming_Practice/',
  },

{
    title: 'Sorting Algorithms Practice',

    image: 'project28',

    description:
      'A C# console application that demonstrates and visualizes six popular sorting algorithms. Each algorithm sorts a randomly generated array and displays the sorting process step by step directly in the console.',

    github:
      'https://github.com/KarlosHakobyan/SortingAlgorithms_Practice',
    demo:
      'https://karloshakobyan.github.io/SortingAlgorithms_Practice/',
  },

  {
  title: 'Red-Black Tree Visualizer',

  image: project11,

  description:
    'An interactive, high-performance web application for visualizing the step-by-step construction, balancing, and restructuring of Red-Black Trees. Built with pure vanilla HTML, CSS, JavaScript, and SVG rendering.',

  github:
    'https://github.com/KarlosHakobyan/Red_and_Black',

  demo: 'https://karloshakobyan.github.io/Red_and_Black/',
  },

  {
  title: 'Bubble Sort Visualizer',

  image: project12,

  description:
    'A lightweight web app built to visualize the Bubble Sort algorithm step-by-step in real time. Built with pure vanilla HTML, CSS and JavaScript.',

  github:
    'https://github.com/KarlosHakobyan/Bubble_Sort_Visualizer',

  demo: 'https://karloshakobyan.github.io/Bubble_Sort_Visualizer/',
  },

  {
  title: 'Selection Sort Visualizer',

  image: project13,

  description:
    'An interactive, web-based tool designed to visualize the Selection Sort algorithm step-by-step in real time. This project helps developers and computer science students visually understand how element comparisons and swaps occur during the sorting process.',

  github:
    'https://github.com/KarlosHakobyan/Selection_Sort_Visualizer',

  demo: 'https://karloshakobyan.github.io/Selection_Sort_Visualizer/',
  },

  {
  title: 'Heap Sort Visualizer',

  image: project14,

  description:
    'An interactive, feature-rich web application designed to visualize and explore the Heap Sort algorithm in real time. Built with vanilla JavaScript, HTML5, and modern CSS, it features a sleek glassmorphism UI with dark/light mode support, custom dataset importing, heapify and swap step tracking, a real-time zoom mode, and a sorted sequence preview.',

  github:
    'https://github.com/KarlosHakobyan/Heap_Sort_Visualizer',

  demo: 'https://karloshakobyan.github.io/Heap_Sort_Visualizer/',
  },

  {
  title: 'Insertion Sort Visualizer',

  image: project15,

  description:
    'An interactive web application designed to visualize and explore the Insertion Sort algorithm in real time. Built with vanilla JavaScript, HTML5, and modern CSS, it features a sleek UI with dark/light mode support, custom dataset importing, step-by-step sorting tracking, and an innovative zoom mode for large arrays.',

  github:
    'https://github.com/KarlosHakobyan/Insertion_Sort_Visualizer',

  demo: 'https://karloshakobyan.github.io/Insertion_Sort_Visualizer/',
  },

  {
  title: 'Quick Sort Visualizer',

  image: project16,

  description:
    'An interactive web application designed to visualize and explore the Quick Sort algorithm in real time. Built with vanilla JavaScript, HTML5, and modern CSS, it features a sleek glassmorphism UI with dark/light mode support, custom dataset importing, pivot tracking, step-by-step sorting, and an innovative zoom mode for large arrays',

  github:
    'https://github.com/KarlosHakobyan/Quick_Sort_Visualizer',

  demo: 'https://karloshakobyan.github.io/Quick_Sort_Visualizer/',
  },

  {
  title: 'Merge Sort Visualizer',

  image: project17,

  description:
    'An interactive web application designed to visualize and explore the Merge Sort algorithm in real time. Built with vanilla JavaScript, HTML5, and modern CSS, it features a sleek glassmorphism UI with dark/light mode support, custom dataset importing, divide-and-conquer step tracking, a real-time zoom mode, and a sorted sequence preview.',

  github:
    'https://github.com/KarlosHakobyan/Merge_Sort_Visualizer',

  demo: 'https://karloshakobyan.github.io/Merge_Sort_Visualizer/',
  },

  {
    title: 'ProBet Analyzer & Odds Calculator',

    image: 'project29',

    description:
      'A high-performance, client-side web application designed for sports bettors and analysts to calculate bookmaker margins, convert odds formats, and evaluate mathematical probabilities in real-time. Built with pure HTML5, modern CSS3, and vanilla JavaScript.',

    github:
      'https://github.com/KarlosHakobyan/BettingCalculator',
    demo:
      'https://karloshakobyan.github.io/BettingCalculator/',
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
    'A classic 1990s-style street shell game built with pure HTML5, CSS3, and JavaScript. Track the red ball hidden under moving brass cups, place your bets, and test your speed and focus!',

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

    demo: 
      'https://karloshakobyan.github.io/SmartParking/',
  },

  {
    title: 'University Program',

    description:
      'Multi-project .NET application built with a layered architecture. The solution includes ASP.NET Core API, business logic, data and domain layers, MVC and Blazor applications, console tools and dedicated test projects.',

    github:
      'https://github.com/KarlosHakobyan/UniversityProgram.Api',

    demo:
      'https://karloshakobyan.github.io/UniversityProgram.Api/',
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
