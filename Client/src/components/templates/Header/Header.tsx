import { useState } from 'react';
import Button from '../../atoms/Button';
import { StyledHeader } from './styles';
import Modal from '../../atoms/Modal';
import Form from '../../molecules/Form';
import InputSearch from '../../atoms/InputSearch';
import ICONS from '../../../assets/icons';
import { IParticipant } from '../../../shared/api/types';

interface ISearchProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>> | (() => void);
}

const Header = ({ searchValue, setSearchValue }: ISearchProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleParticipantAdded = (participant: IParticipant) => {
    setIsModalOpen(false); // Close the modal after participant is added
    // You can perform any other logic here, if needed
  };
  return (
    <StyledHeader>
      <InputSearch
        type={'text'}
        value={searchValue}
        setValue={setSearchValue}
        icon={ICONS.search}
        placeholder='Search'
        className={'is-primary is-success'}
      />
      <Button
        text='Pridėti naują'
        action={handleButtonClick}
        className='is-responsive is-primary modal-trigger'
      />
      {isModalOpen && (
        <Modal onClose={handleCloseModal} isOpen={isModalOpen}>
          <Form onParticipantAdded={handleParticipantAdded} />
        </Modal>
      )}
    </StyledHeader>
  );
};

export default Header;
