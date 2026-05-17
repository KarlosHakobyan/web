interface Props {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu = ({
  isOpen,
  onClose,
}: Props) => {
  return (
    <div
      className={`mobile-menu ${
        isOpen ? 'mobile-menu-open' : ''
      }`}
    >
      <a href="#hero" onClick={onClose}>
        Home
      </a>

      <a href="#about" onClick={onClose}>
        About
      </a>

      <a href="#skills" onClick={onClose}>
        Skills
      </a>

      <a href="#projects" onClick={onClose}>
        Projects
      </a>

      <a href="#education" onClick={onClose}>
        Education
      </a>

      <a href="#certificates" onClick={onClose}>
        Certificates
      </a>

      <a href="#contact" onClick={onClose}>
        Contacts
      </a>
    </div>
  )
}

export default MobileMenu