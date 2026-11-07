import FadeIn from '../components/FadeIn'

const educationList = [
  {
    year: '2016 - 2022',

    title: 'National Polytechnic University of Armenia',

    description:
      'Bachelor Degree — Information Sciences and Computing Technologies - Banking automation',

    link: 'https://polytech.am/',
  },

  {
    year: '2022 - 2024',

    title: 'National Polytechnic University of Armenia',

    description:
      'Master Degree — Information Sciences and Computing Technologies - Business Automation',

    link: 'https://polytech.am/',
  },

  {
    year: '2024',

    title: 'Armenian Code Academy',

    description:
      '.Net(Core) and Asp.Net(Core) advanced course',

    link: 'https://aca.am/',
  },

  {
    year: '2021',

    title: 'SoftConstruct',

    description:
      'Courses of C#, .Net, Asp.Net and Data Engineering',

    link: 'https://www.softconstruct.com/',
  },

  {
    year: '2025',

    title: 'Microsoft',

    description:
      'Courses of Foundational C#',

    link: 'https://learn.microsoft.com/',
  },
]

const Education = () => {
  return (
    <section id="education">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">
            Education
          </h2>

          <div className="timeline">
            {educationList.map((item) => (
              <div
                key={item.title + item.year}
                className="timeline-item"
              >
                <div className="timeline-dot" />

                <div className="timeline-content">
                  <span className="timeline-year">
                    {item.year}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                  <div className="education-buttons">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="primary-btn">
                        Open Website
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default Education