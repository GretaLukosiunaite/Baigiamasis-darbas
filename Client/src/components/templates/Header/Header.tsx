import { useState } from 'react';
import Button from '../../atoms/Button';
import { StyledHeader } from './styles';
import Modal from '../../atoms/Modal';
import Form from '../../molecules/Form';
import InputSearch from '../../atoms/InputSearch';
import ICONS from '../../../assets/icons';
import { IParticipant } from '../../../shared/api/types';

interface IHeaderAndSearchProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  onParticipantAdded: (participant: IParticipant) => void;
}

const Header = ({ searchValue, setSearchValue, onParticipantAdded }: IHeaderAndSearchProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const buttonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledHeader>
      <InputSearch
        type={'text'}
        value={searchValue}
        setValue={setSearchValue}
        icon={ICONS.search}
        placeholder='Paieška'
        className={'is-primary is-success'}
      />
      <Button
        text='Pridėti naują'
        action={buttonClick}
        className='is-primary modal-trigger'
      />
      {isModalOpen && (
        <Modal onClose={closeModal} isOpen={isModalOpen}>
          <Form onParticipantAdded={onParticipantAdded}/>
        </Modal>
      )}
    </StyledHeader>
  );
};

export default Header;
