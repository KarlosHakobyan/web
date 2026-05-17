import { HiOutlineDownload } from 'react-icons/hi'

import MagneticButton from '../components/MagneticButton'
import OrbitSkills from '../components/OrbitSkills'
import ParallaxWrapper from '../components/ParallaxWrapper'
import RevealText from '../components/RevealText'

const Hero = () => {
  return (
    <section id="hero">
      <div className="container hero-content">
        <div className="hero-left">
          <RevealText>
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Available for work
            </div>
          </RevealText>

          <RevealText>
            <h1 className="hero-title">
              Karlos
              <br />
              Hakobyan
            </h1>
          </RevealText>

          <RevealText>
            <p className="hero-subtitle">
              Software Engineer
            </p>
          </RevealText>

          <RevealText>
            <p className="hero-description">
              Designing and developing scalable backend systems with C#, .Net Core, ASP.NET Core and MSSQL. Passionate about clean architecture, API development, performance optimization and building reliable enterprise-grade solutions.
            </p>
          </RevealText>

          <RevealText>
            <div className="hero-buttons">
              <a
                href="./CV1_Karlos_Hakobyan.pdf"
                download
                className="download-link"
              >
                <MagneticButton className="primary-btn">
                  <>
                    <HiOutlineDownload />

                    <span>
                      Download CV
                    </span>
                  </>
                </MagneticButton>
              </a>
            </div>
          </RevealText>
        </div>

        <div className="hero-right">
          <ParallaxWrapper>
            <OrbitSkills />
          </ParallaxWrapper>
        </div>
      </div>
    </section>
  )
}

export default Hero