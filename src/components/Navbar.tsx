import { useState } from 'react'

import { HiMenuAlt3 } from 'react-icons/hi'

import MobileMenu from './MobileMenu'
import heroImage from '../../public/images/hero.png'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault()

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: 'smooth',
      })

    window.history.replaceState(
      null,
      '',
      window.location.pathname,
    )
  }

  return (
    <>
      <nav className="navbar">
        <div className="container navbar-content">

          <div className="logo">
            <img
              src={heroImage}
              alt="Karlos"
              className="logo-image"
            />

            <span>
              Karlos
            </span>
          </div>

          <div className="nav-links">
            <a
              href="#hero"
              onClick={(e) =>
                scrollToSection(e, 'hero')
              }
            >
              Home
            </a>

            <a
              href="#about"
              onClick={(e) =>
                scrollToSection(e, 'about')
              }
            >
              About
            </a>

            <a
              href="#skills"
              onClick={(e) =>
                scrollToSection(e, 'skills')
              }
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={(e) =>
                scrollToSection(e, 'projects')
              }
            >
              Projects
            </a>

            <a
              href="#education"
              onClick={(e) =>
                scrollToSection(e, 'education')
              }
            >
              Education
            </a>

            <a
              href="#certificates"
              onClick={(e) =>
                scrollToSection(e, 'certificates')
              }
            >
              Certificates
            </a>

            <a
              href="#contact"
              onClick={(e) =>
                scrollToSection(e, 'contact')
              }
            >
              Contacts
            </a>
          </div>

          <ThemeToggle />

          <button
            className="burger-btn"
            onClick={() =>
              setIsOpen(!isOpen)
            }
          >
            <HiMenuAlt3 />
          </button>

        </div>
      </nav>

      <MobileMenu
        isOpen={isOpen}
        onClose={() =>
          setIsOpen(false)
        }
      />
    </>
  )
}

export default Navbar