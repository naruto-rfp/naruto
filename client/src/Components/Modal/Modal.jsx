import { useRef, useEffect } from 'react'
import { useStore } from '../../lib/fastContext'
import './modal.css'

export default function Modal() {
  const modalRef = useRef(null)
  const modalOverlayRef = useRef(null)
  const modalContentRef = useRef(null)
  const [modal, setModal] = useStore('modal')
  // When clicking the modal overlay, close the modal and clear the modal content.
  const handleModalClick = (e) => {
    if (e.target === modalOverlayRef.current) {
      setModal({
        ...modal,
        content: null,
      })
    }
  }

  /**
   * Handles the modal. If the modal is open, it will display the modal and overlay.
   * It will also set the overflow property on the body element to prevent scrolling
   * and set the event listener to be able to close the modal.
   */
  useEffect(() => {
    if (!modalRef.current) return

    if (modal.content) {
      modalRef.current.style.display = 'flex'
      // Set the modal to the current scroll position to always be in view and centered
      modalRef.current.style.top = `${window.scrollY}px`

      if (modal.scrollLock) {
        document.getElementsByTagName('body')[0].style.overflow = 'hidden'
      }

      window.addEventListener('click', handleModalClick)
    } else {
      modalRef.current.style.display = 'none'
      // Resets scroll lock, if it was set
      document.getElementsByTagName('body')[0].style.overflow = 'auto'
      window.removeEventListener('click', handleModalClick)
    }
    // Need to specify the cleanup function to remove the event listener
    // eslint-disable-next-line consistent-return
    return () => window.removeEventListener('click', handleModalClick)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalRef, modal.content])

  return (
    <div ref={modalRef} className="modal">
      <div
        ref={modalOverlayRef}
        className={`modal-overlay ${
          !modal.overlay ? '' : 'bg-[rgba(0,0,0,0.05)] backdrop-blur-[2px]'
        }`}
      >
        <div ref={modalContentRef} className="modal-content">
          {modal.content}
        </div>
      </div>
    </div>
  )
}
