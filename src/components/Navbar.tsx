import { useState } from 'react'

import { HiMenuAlt3 } from 'react-icons/hi'

import MobileMenu from './MobileMenu'
import heroImage from '../../public/images/hero.png'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

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
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#certificates">Certificates</a>
            <a href="#contact">Contacts</a>
          </div>
          <ThemeToggle /> 
          <button
            className="burger-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </nav>

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
}

export default Navbar