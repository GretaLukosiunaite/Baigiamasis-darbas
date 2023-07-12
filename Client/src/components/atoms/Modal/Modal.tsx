import React, { useEffect, useState } from 'react';
// import { StyledModalContentWrapper } from './styles';

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

    function handleModalCloseClick(event) {
      const $target = event.target.closest('.modal');
      closeModal($target);
    }

    function handleKeyDown(event) {
      if (event.keyCode === 27) {
        closeAllModals();
      }
    }

    document
      .querySelectorAll('.modal-close, .modal-background')
      .forEach(($close) => {
        $close.addEventListener('click', handleModalCloseClick);
      });

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document
        .querySelectorAll('.modal-close, .modal-background')
        .forEach(($close) => {
          $close.removeEventListener('click', handleModalCloseClick);
        });

      document.removeEventListener('keydown', handleKeyDown);
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
