import type { ReactNode, MouseEvent } from 'react'

interface Props {
  children: ReactNode
}

const TiltCard = ({ children }: Props) => {
  const handleMouseMove = (
    e: MouseEvent<HTMLDivElement>,
  ) => {
    const card = e.currentTarget

    const rect = card.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 18
    const rotateY = (centerX - x) / 18

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-10px)
    `
  }

  const handleMouseLeave = (
    e: MouseEvent<HTMLDivElement>,
  ) => {
    e.currentTarget.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <div
      className="tilt-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}

export default TiltCard