import { useRef, useEffect } from 'react'
// eslint-disable-next-line import/no-unresolved, import/extensions
import { useStore } from '@/lib/fastContext'

export default function Modal() {
  const modalRef = useRef(null)
  const modalOverlayRef = useRef(null)
  const [modalContent, setModalContent] = useStore('modalContent')
  // When clicking the modal overlay, close the modal and clear the modal content.
  const handleModalClick = (e) => {
    if (e.target === modalOverlayRef.current) {
      setModalContent(null)
    }
  }

  /**
   * Handles the modal. If the modal is open, it will display the modal and overlay.
   * It will also set the overflow property on the body element to prevent scrolling
   * and set the event listener to be able to close the modal.
   */
  useEffect(() => {
    if (!modalRef.current) return

    if (modalContent) {
      modalRef.current.style.display = 'block'
      // Set the modal to the current scroll position to always be in view and centered
      modalRef.current.style.top = `${window.scrollY}px`
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'
      window.addEventListener('click', handleModalClick)
    } else {
      modalRef.current.style.display = 'none'
      document.getElementsByTagName('body')[0].style.overflow = 'auto'
      window.removeEventListener('click', handleModalClick)
    }
    // Need to specify the cleanup function to remove the event listener
    // eslint-disable-next-line consistent-return
    return () => window.removeEventListener('click', handleModalClick)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalRef, modalContent])

  return (
    <div ref={modalRef} className="modal">
      <div ref={modalOverlayRef} className="modal-overlay">
        <div className="modal-content">{modalContent}</div>
      </div>
    </div>
  )
}
