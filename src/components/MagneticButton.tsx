import type {
  ReactNode,
  MouseEvent,
} from 'react'

interface Props {
  children: ReactNode
  className: string
}

const MagneticButton = ({
  children,
  className,
}: Props) => {
  const handleMouseMove = (
    e: MouseEvent<HTMLButtonElement>,
  ) => {
    const button = e.currentTarget

    const rect = button.getBoundingClientRect()

    const x =
      e.clientX - rect.left - rect.width / 2

    const y =
      e.clientY - rect.top - rect.height / 2

    button.style.transform = `
      translate(${x * 0.18}px, ${y * 0.18}px)
    `
  }

  const handleMouseLeave = (
    e: MouseEvent<HTMLButtonElement>,
  ) => {
    e.currentTarget.style.transform =
      'translate(0px, 0px)'
  }

  return (
    <button
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  )
}

export default MagneticButton