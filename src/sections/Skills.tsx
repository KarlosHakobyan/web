import { useState } from 'react'

import FadeIn from '../components/FadeIn'
import SkillModal from '../components/SkillModal'

const professionalSkills = [
  'TypeScript',
  'Web3',
  'C#',
  '.Net Core',
  'Asp.Net Core',
  'MSSQL',
  'Visual Studio',
  'Information Detecting',
  'Betting Calculation',
  'Creative Content Creating',
  'REST',
  'Data Architecture',
]

const softSkills = [
  'Leadership',
  'Communication',
  'Adaptability',
  'Quick Learning',
  'Problem Solving',
  'Attention to Detail',
  'Stress Management',
  'Creativity',
  'Team Collaboration',
  'Time Management',
  'Public speaking',
  'Goal setting',
]

const skillInfo: Record<
  string,
  {
    category: string
    description: string
    level: number
    details: string[]
  }
> = {
  TypeScript: {
    category: 'Frontend Development',
    description:
      'Strongly typed programming language used for building scalable and maintainable frontend applications.',
    level: 90,
    details: [
      'Type-safe React development',
      'Interfaces and type definitions',
      'Generics',
      'API integration',
      'Reusable components',
    ],
  },

  Web3: {
    category: 'Web3 Development',
    description:
      'Experience integrating decentralized technologies and connecting web applications with blockchain wallets.',
    level: 75,
    details: [
      'Wallet integration',
      'Wagmi',
      'Web3Modal',
      'Blockchain interaction',
      'Web3 application integration',
    ],
  },

  'C#': {
    category: 'Backend Development',
    description:
      'Object-oriented programming language used for backend, desktop and enterprise application development.',
    level: 90,
    details: [
      'Object-Oriented Programming',
      'LINQ',
      'Async / Await',
      'Exception handling',
      'Collections',
    ],
  },

  '.Net Core': {
    category: 'Backend Development',
    description:
      'Cross-platform framework for building scalable backend applications, APIs and enterprise systems.',
    level: 90,
    details: [
      'REST API development',
      'Dependency Injection',
      'Layered architecture',
      'Entity Framework',
      'Application configuration',
    ],
  },

  'Asp.Net Core': {
    category: 'Web Development',
    description:
      'Framework for building modern web applications and REST APIs with scalable backend architecture.',
    level: 88,
    details: [
      'REST APIs',
      'Controllers',
      'Middleware',
      'Dependency Injection',
      'API architecture',
    ],
  },

  MSSQL: {
    category: 'Database',
    description:
      'Relational database technology used for designing, querying and managing application data.',
    level: 82,
    details: [
      'SQL queries',
      'Stored procedures',
      'Transactions',
      'Triggers',
      'Indexing',
      'Relational database design',
    ],
  },

  'Visual Studio': {
    category: 'Development Environment',
    description:
      'Integrated development environment used for developing and debugging .NET applications.',
    level: 85,
    details: [
      '.NET development',
      'Debugging',
      'Project management',
      'NuGet packages',
      'Solution management',
    ],
  },

  'Information Detecting': {
    category: 'Data & Analysis',
    description:
      'Experience with information analysis, identifying relevant data and extracting useful information from complex datasets.',
    level: 75,
    details: [
      'Information analysis',
      'Data identification',
      'Logical analysis',
      'Pattern identification',
      'Problem analysis',
    ],
  },

  'Betting Calculation': {
    category: 'Domain Knowledge',
    description:
      'Experience working with betting-related calculations and business logic used in betting platform systems.',
    level: 85,
    details: [
      'Bet calculations',
      'Business rules',
      'Validation logic',
      'Dynamic calculations',
      'Betting platform logic',
    ],
  },

  'Creative Content Creating': {
    category: 'Creative Skills',
    description:
      'Ability to create and structure engaging digital content while combining technical and creative thinking.',
    level: 75,
    details: [
      'Creative thinking',
      'Content structure',
      'Visual presentation',
      'Idea generation',
      'Digital content',
    ],
  },

  REST: {
    category: 'API Development',
    description:
      'Architectural style used for designing HTTP-based APIs and communication between applications.',
    level: 90,
    details: [
      'REST endpoints',
      'HTTP methods',
      'Request validation',
      'HTTP status codes',
      'API integration',
    ],
  },

  'Data Architecture': {
    category: 'Architecture',
    description:
      'Designing structured data models and application data layers with focus on maintainability and scalability.',
    level: 82,
    details: [
      'Data modeling',
      'Database relationships',
      'Layered architecture',
      'Data organization',
      'Scalable data structures',
    ],
  },

  Leadership: {
    category: 'Soft Skill',
    description:
      'Ability to take responsibility, coordinate work and help a team move toward a common goal.',
    level: 85,
    details: [
      'Responsibility',
      'Decision making',
      'Team coordination',
      'Motivation',
      'Goal orientation',
    ],
  },

  Communication: {
    category: 'Soft Skill',
    description:
      'Ability to clearly communicate ideas, requirements and technical information with other people.',
    level: 88,
    details: [
      'Clear communication',
      'Technical discussions',
      'Active listening',
      'Knowledge sharing',
      'Team communication',
    ],
  },

  Adaptability: {
    category: 'Soft Skill',
    description:
      'Ability to adapt to changing requirements, technologies and working environments.',
    level: 90,
    details: [
      'Learning new technologies',
      'Changing requirements',
      'New environments',
      'Flexible approach',
      'Continuous improvement',
    ],
  },

  'Quick Learning': {
    category: 'Soft Skill',
    description:
      'Ability to quickly understand new technologies, concepts and development approaches.',
    level: 92,
    details: [
      'Fast technology adoption',
      'Self-learning',
      'Research',
      'Knowledge application',
      'Continuous learning',
    ],
  },

  'Problem Solving': {
    category: 'Soft Skill',
    description:
      'Ability to analyze problems, identify their causes and develop practical technical solutions.',
    level: 90,
    details: [
      'Root cause analysis',
      'Logical thinking',
      'Debugging',
      'Solution design',
      'Optimization',
    ],
  },

  'Attention to Detail': {
    category: 'Soft Skill',
    description:
      'Careful approach to implementation, requirements, code quality and user experience.',
    level: 90,
    details: [
      'Code quality',
      'Requirement analysis',
      'UI details',
      'Error prevention',
      'Quality control',
    ],
  },

  'Stress Management': {
    category: 'Soft Skill',
    description:
      'Ability to remain focused and productive while working under pressure and handling challenging situations.',
    level: 80,
    details: [
      'Working under pressure',
      'Prioritization',
      'Focus',
      'Calm decision making',
      'Task management',
    ],
  },

  Creativity: {
    category: 'Soft Skill',
    description:
      'Ability to approach problems from different perspectives and develop creative solutions.',
    level: 85,
    details: [
      'Creative thinking',
      'Alternative solutions',
      'Idea generation',
      'Design thinking',
      'Innovation',
    ],
  },

  'Team Collaboration': {
    category: 'Soft Skill',
    description:
      'Ability to work effectively with team members and contribute to shared project goals.',
    level: 88,
    details: [
      'Teamwork',
      'Knowledge sharing',
      'Code collaboration',
      'Communication',
      'Shared responsibility',
    ],
  },

  'Time Management': {
    category: 'Soft Skill',
    description:
      'Ability to organize tasks, prioritize work and manage development time effectively.',
    level: 85,
    details: [
      'Task prioritization',
      'Planning',
      'Deadlines',
      'Work organization',
      'Productivity',
    ],
  },

  'Public speaking': {
    category: 'Soft Skill',
    description:
      'Ability to present ideas and information clearly and confidently to an audience.',
    level: 75,
    details: [
      'Presentations',
      'Clear explanation',
      'Audience communication',
      'Technical presentation',
      'Confidence',
    ],
  },

  'Goal setting': {
    category: 'Soft Skill',
    description:
      'Ability to define clear objectives and organize actions needed to achieve them.',
    level: 85,
    details: [
      'Goal definition',
      'Planning',
      'Prioritization',
      'Progress tracking',
      'Result orientation',
    ],
  },
}

const Skills = () => {
  const [selectedSkill, setSelectedSkill] =
    useState<string | null>(null)

  const activeSkill =
    selectedSkill
      ? skillInfo[selectedSkill]
      : null

  return (
    <section id="skills">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">
            Skills
          </h2>

          <div className="projects-grid">
            <div className="project-card">
              <h3>
                Professional Skills
              </h3>

              <div className="skills-list">
                {professionalSkills.map(
                  (skill) => (
                    <button
                      key={skill}
                      type="button"
                      className="skill-item"
                      onClick={() =>
                        setSelectedSkill(skill)
                      }
                    >
                      {skill}
                    </button>
                  ),
                )}
              </div>
            </div>

            <div className="project-card">
              <h3>
                Soft Skills
              </h3>

              <div className="skills-list">
                {softSkills.map(
                  (skill) => (
                    <button
                      key={skill}
                      type="button"
                      className="skill-item"
                      onClick={() =>
                        setSelectedSkill(skill)
                      }
                    >
                      {skill}
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <SkillModal
        skill={
          selectedSkill && activeSkill
            ? {
                name: selectedSkill,
                ...activeSkill,
              }
            : null
        }
        onClose={() =>
          setSelectedSkill(null)
        }
      />
    </section>
  )
}

export default Skills