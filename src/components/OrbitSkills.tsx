import {
  FaReact,
} from 'react-icons/fa'

import {
  SiSharp,
  SiDotnet,
  SiTypescript,
  SiWeb3Dotjs,
  SiJavascript,
  SiMongodb,
} from 'react-icons/si'

const skills = [
  {
    name: 'C#',
    icon: <SiSharp />,
  },

  {
    name: '.NET Core',
    icon: <SiDotnet />,
  },

  {
    name: 'ASP.NET Core',
    icon: <SiDotnet />,
  },

  {
    name: 'MSSQL',
    icon: <SiMongodb />,
  },

  {
    name: 'React',
    icon: <FaReact />,
  },

  {
    name: 'TypeScript',
    icon: <SiTypescript />,
  },

  {
    name: 'JavaScript',
    icon: <SiJavascript />,
  },

  {
    name: 'Web3',
    icon: <SiWeb3Dotjs />,
  },
]

const OrbitSkills = () => {
  return (
    <div className="orbit-wrapper">
      <div className="orbit-center-ring" />

      <div className="orbit-center">
        <img
          src="/images/me.png"
          alt="Karlos"
          className="orbit-photo"
        />
      </div>

      <div className="orbit-ring">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`orbit-item orbit-item-${index + 1}`}
          >
            <span className="orbit-icon">
              {skill.icon}
            </span>

            <span>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrbitSkills