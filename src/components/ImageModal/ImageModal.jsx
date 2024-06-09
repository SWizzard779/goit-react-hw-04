import css from './ImageModal.module.css';
import Modal from 'react-modal';

export default function ImageModal({
  isOpen,
  onRequestClose,
  modalImageUrl,
  modalImageAlt,
}) {
  Modal.setAppElement('#root');
  return (
    <Modal
      className={css.modal}
      overlayClassName={css.overlay}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal image"
    >
      <img
        src={modalImageUrl}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        alt={modalImageAlt}
      />
    </Modal>
  );
}