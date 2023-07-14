import React, { useEffect } from 'react';


interface IModalProps {
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal = ({ onClose, isOpen, children }: IModalProps) => {
  useEffect(() => {
    function closeModal() {
      onClose();
    }

    function handleModalCloseClick(event: MouseEvent) {
      const target = (event.target as HTMLElement).closest('.modal');
      if (target) {
        closeModal();
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.keyCode === 27) {
        closeModal();
      }
    }

    [...document.querySelectorAll('.modal-close, .modal-background')].forEach((close) => {
      close.addEventListener('click', handleModalCloseClick as EventListener);
    });

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      [...document.querySelectorAll('.modal-close, .modal-background')].forEach((close) => {
        close.removeEventListener('click', handleModalCloseClick as EventListener);
      });
      
      document.removeEventListener('keydown', handleKeyDown as EventListener);
    };
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div id='modal-js-example' className='modal is-active'>
      <div className='modal-background'></div>

      <div className='modal-content'>
        <div className='box'>{children}</div>
      </div>

      <button className='modal-close is-large' aria-label='close'></button>
    </div>
  );
};

export default Modal;
