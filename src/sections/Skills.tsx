import FadeIn from '../components/FadeIn'

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
  'Data Architecture'
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

const Skills = () => {
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
                {professionalSkills.map((skill) => (
                  <div
                    key={skill}
                    className="skill-item"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="project-card">
              <h3>
                Soft Skills
              </h3>

              <div className="skills-list">
                {softSkills.map((skill) => (
                  <div
                    key={skill}
                    className="skill-item"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default Skills