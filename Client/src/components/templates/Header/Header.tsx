import { useState } from 'react';
import Button from '../../atoms/Button';
import { StyledHeader } from './styles';
import Modal from '../../atoms/Modal';
import Form from '../../molecules/Form';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledHeader>
      <Button
        text='Pridėti naują'
        action={handleButtonClick}
        className='is-responsive is-primary modal-trigger'
      />
      {isModalOpen && (
        <Modal onClose={handleCloseModal} isOpen={isModalOpen}>
          <Form />
        </Modal>
      )}
    </StyledHeader>
  );
};

export default Header;
