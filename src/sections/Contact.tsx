import FadeIn from '../components/FadeIn'

const contacts = [
  {
    title: 'Email',
    value: 'karloshakobyan99@gmail.com',
  },

  {
    title: 'Phone number',
    value: '+374 55 983 883',
  },

  {
    title: 'GitHub',
    value: 'github.com/KarlosHakobyan',
    link: 'https://github.com/KarlosHakobyan',
  },

  {
    title: 'LinkedIn',
    value: 'linkedin.com/in/karlos-hakobyan',
    link: 'https://linkedin.com/karlos-hakobyan',
  },

  {
    title: 'Facebook',
    value: 'facebook.com/KarlosHakobyan',
    link: 'https://facebook.com/KarlosHakobyan',
  },

  {
    title: 'Instagram',
    value: 'instagram.com/_.h_yan_777._',
    link: 'https://instagram.com/_.h_yan_777._',
  },
]

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">
            Contacts
          </h2>
        </FadeIn>

        <div className="projects-grid">
          {contacts.map((contact) => (
            <FadeIn key={contact.title}>
              <div className="project-card">
                <h3>
                  {contact.title}
                </h3>

                <p>
                  {contact.value}
                </p>

                {contact.link && (
                  <div className="project-buttons">
                    <a
                      href={contact.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="primary-btn">
                        Open Website
                      </button>
                    </a>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact