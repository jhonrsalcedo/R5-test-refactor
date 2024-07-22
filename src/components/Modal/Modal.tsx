import React from 'react'
import ReactDOM from 'react-dom'
import './modal.css'

interface ModalProps {
  isOpen: boolean
  onClose: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div className='modal-overlay'>
      <div className='modal-content'>
        <button className='modal-close' onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')!
  )
}

export default Modal
