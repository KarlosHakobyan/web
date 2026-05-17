interface Props {
  image: string
  title: string
  onClose: () => void
}

const CertificateModal = ({
  image,
  title,
  onClose,
}: Props) => {
  return (
    <div
      className="certificate-modal-overlay"
      onClick={onClose}
    >
      <div
        className="certificate-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt={title}
          className="certificate-modal-image"
        />

        <h3>
          {title}
        </h3>

        <button
          className="primary-btn"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default CertificateModal