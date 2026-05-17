import type {
  ReactNode,
  MouseEvent,
} from 'react'

interface Props {
  children: ReactNode
}

const ParallaxWrapper = ({
  children,
}: Props) => {
  const handleMove = (
    e: MouseEvent<HTMLDivElement>,
  ) => {
    const x =
      (window.innerWidth / 2 - e.clientX) / 40

    const y =
      (window.innerHeight / 2 - e.clientY) / 40

    e.currentTarget.style.transform =
      `translate(${x}px, ${y}px)`
  }

  return (
    <div
      onMouseMove={handleMove}
      className="parallax-wrapper"
    >
      {children}
    </div>
  )
}

export default ParallaxWrapper