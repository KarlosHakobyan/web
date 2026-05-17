import FadeIn from '../components/FadeIn'
import Stats from '../components/Stats'

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">
            About Me
          </h2>

          <p className="section-text">
            I am self-motivated person with strong organizational skills,
             always looking to learn new skills, take on extra responsibilities
             and grow professionally. I'm seeking a position in a company 
             where I can make the best of my potential, learn new skills, 
             expand my knowledge and help the company to meet and surpass its goals.
             <Stats />
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

export default About




   