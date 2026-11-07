import { useEffect } from 'react'

interface SkillModalProps {
  skill: {
    name: string
    category: string
    description: string
    level: number
    details: string[]
  } | null

  onClose: () => void
}

const SkillModal = ({
  skill,
  onClose,
}: SkillModalProps) => {
  useEffect(() => {
    if (!skill) {
      return
    }

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener(
      'keydown',
      handleKeyDown,
    )

    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown,
      )

      document.body.style.overflow = ''
    }
  }, [skill, onClose])

  if (!skill) {
    return null
  }

  return (
    <div
      className="skill-modal-overlay"
      onClick={onClose}
    >
      <div
        className="skill-modal"
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <div className="skill-modal-top">
          <span>
            SYSTEM / SKILL ANALYSIS
          </span>

          <button
            type="button"
            className="skill-modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="skill-modal-line" />

        <div className="skill-modal-header">
          <div className="skill-modal-icon">
            ✦
          </div>

          <div>
            <span className="skill-modal-category">
              {skill.category}
            </span>

            <h2>
              {skill.name}
            </h2>
          </div>
        </div>

        <p className="skill-modal-description">
          {skill.description}
        </p>

        <div className="skill-modal-experience">
          <div className="skill-modal-experience-header">
            <span>
              EXPERIENCE
            </span>

            <span>
              {skill.level}%
            </span>
          </div>

          <div className="skill-progress">
            <div
              className="skill-progress-value"
              style={{
                width: `${skill.level}%`,
              }}
            />
          </div>
        </div>

        <div className="skill-modal-details">
          {skill.details.map(
            (detail) => (
              <div
                key={detail}
                className="skill-detail"
              >
                <span className="skill-detail-dot">
                  ›
                </span>

                <span>
                  {detail}
                </span>
              </div>
            ),
          )}
        </div>

        <div className="skill-modal-footer">
          <span>
            ESC
          </span>

          <span>
            CLOSE SYSTEM
          </span>
        </div>
      </div>
    </div>
  )
}

export default SkillModal