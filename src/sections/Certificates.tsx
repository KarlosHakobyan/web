import { useState } from 'react'

import FadeIn from '../components/FadeIn'
import TiltCard from '../components/TiltCard'
import CertificateModal from '../components/CertificateModal'

import cert1 from '../assets/certificates/cert1.png'
import cert2 from '../assets/certificates/cert2.png'
import cert3 from '../assets/certificates/cert3.png'
import cert4 from '../assets/certificates/cert4.png'

const certificates = [
  {
    title: 'C# Profession',
    image: cert1,
  },

  {
    title: 'Foundational C#',
    image: cert2,
  },

  {
    title: 'Financial literacy',
    image: cert3,
  },

  {
    title: 'Foundational C#',
    image: cert4,
  },
]

const Certificates = () => {
  const [selected, setSelected] = useState<
    null | {
      title: string
      image: string
    }
  >(null)

  return (
    <section id="certificates">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">
            Certificates
          </h2>

          <div className="certificates-grid">
            {certificates.map((certificate) => (
              <TiltCard key={certificate.title}>
                <div
                  className="certificate-card"
                  onClick={() =>
                    setSelected(certificate)
                  }
                >
                  <div className="certificate-image-wrapper">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="certificate-image"
                    />
                  </div>

                  <h3>
                    {certificate.title}
                  </h3>
                </div>
              </TiltCard>
            ))}
          </div>
        </FadeIn>
      </div>

      {selected && (
        <CertificateModal
          image={selected.image}
          title={selected.title}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  )
}

export default Certificates