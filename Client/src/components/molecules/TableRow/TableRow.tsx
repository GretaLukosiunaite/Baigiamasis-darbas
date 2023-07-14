import  { useState } from 'react';
import { IParticipant } from '../../../shared/api/types';
import Button from '../../atoms/Button';
import {
  StyledButtonaContainer,
  StyledDataContainer,
  StyledDeleteButtonsWrapper,
  StyledDeleteDiv,
  StyledTableRow,
} from './styles';
import Modal from '../../atoms/Modal';
import { StyledPTag } from '../Form/styles';

interface ITableRowProps {
  participants: IParticipant[];
  onDeleteParticipant: (participantId: string) => void;
  onUpdateParticipant: (
    participantId: string,
    updatedData: IParticipant
  ) => void;
}

const TableRow = ({
  participants,
  onDeleteParticipant,
  onUpdateParticipant,
}: ITableRowProps) => {
  const [deletedParticipantId, setDeletedParticipantId] = useState('');
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);
  const [isEditing, setIsEditing] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);

  const handleConfirmDeleteParticipant = (participantId: string) => {
    setDeletedParticipantId(participantId);
    setIsDeleteConfirmationVisible(true);
  };

  const handleDeleteParticipant = async (participantId: string) => {
    try {
      await onDeleteParticipant(participantId);
      setIsDeleteConfirmationVisible(false);
      setDeletedParticipantId('');
      setSuccess(true);
    } catch (error) {
      console.error('Error deleting participant:', error);
    }
  };

  const handleCancelDeleteParticipant = () => {
    setIsDeleteConfirmationVisible(false);
    setDeletedParticipantId('');
  };

  const handleEditParticipant = (participantId: string) => {
    setIsEditing((prevEditing) => [...prevEditing, participantId]);
  };

  const handleSaveParticipant = (participantId: string) => {
    const updatedParticipantData: IParticipant | undefined = participants.find(
      (participant) => participant._id === participantId
    );

    onUpdateParticipant(participantId, updatedParticipantData);

    setIsEditing((prevEditing) =>
      prevEditing.filter((id) => id !== participantId)
    );
  };

  const handleCancelEditParticipant = (participantId: string) => {
    setIsEditing((prevEditing) =>
      prevEditing.filter((id) => id !== participantId)
    );
  };

  return (
    <>
      {participants.map((participant) => (
        <StyledTableRow key={participant._id}>
          <StyledDataContainer>
            {isEditing.includes(participant._id) ? (
              <input
                type='text'
                value={participant.name}
                onChange={(e) => {
                  const updatedData = { ...participant, name: e.target.value };
                  onUpdateParticipant(participant._id, updatedData);
                }}
              />
            ) : (
              <p>{participant.name}</p>
            )}
          </StyledDataContainer>

          <StyledDataContainer>
            {isEditing.includes(participant._id) ? (
              <input
                type='text'
                value={participant.lastname}
                onChange={(e) => {
                  const updatedData = {
                    ...participant,
                    lastname: e.target.value,
                  };
                  onUpdateParticipant(participant._id, updatedData);
                }}
              />
            ) : (
              <p>{participant.lastname}</p>
            )}
          </StyledDataContainer>

          <StyledDataContainer>
            {isEditing.includes(participant._id) ? (
              <input
                type='text'
                value={participant.email}
                onChange={(e) => {
                  const updatedData = { ...participant, email: e.target.value };
                  onUpdateParticipant(participant._id, updatedData);
                }}
              />
            ) : (
              <p>{participant.email}</p>
            )}
          </StyledDataContainer>

          <StyledDataContainer>
            {isEditing.includes(participant._id) ? (
              <input
                type='text'
                value={participant.age}
                onChange={(e) => {
                  const updatedData = { ...participant, age: e.target.value };
                  onUpdateParticipant(participant._id, updatedData);
                }}
              />
            ) : (
              <p>{participant.age}</p>
            )}
          </StyledDataContainer>

          <StyledDataContainer>
            {isDeleteConfirmationVisible &&
            participant._id === deletedParticipantId ? (
              <StyledDeleteDiv>
                <p>Ar tikrai norite ištrinti?</p>
                <StyledDeleteButtonsWrapper>
                  <Button
                    text='Taip'
                    action={() => handleDeleteParticipant(participant._id)}
                    className='is-danger is-outlined'
                  />
                  <Button
                    text='Atšaukti'
                    action={handleCancelDeleteParticipant}
                    className='is-primary'
                  />
                </StyledDeleteButtonsWrapper>
              </StyledDeleteDiv>
            ) : (
              <div>
                {isEditing.includes(participant._id) ? (
                  <StyledButtonaContainer>
                    <Button
                      text='Išsaugoti'
                      action={() => handleSaveParticipant(participant._id)}
                      className='is-primary'
                    />
                    <Button
                      text='Atšaukti'
                      action={() =>
                        handleCancelEditParticipant(participant._id)
                      }
                      className='is-danger is-outlined'
                    />
                  </StyledButtonaContainer>
                ) : (
                  <StyledButtonaContainer>
                    <Button
                      text='Redaguoti'
                      action={() => handleEditParticipant(participant._id)}
                      className='is-primary is-outlined'
                    />
                    <Button
                      text='Ištrinti'
                      action={() =>
                        handleConfirmDeleteParticipant(participant._id)
                      }
                      className='is-danger is-outlined'
                    />
                  </StyledButtonaContainer>
                )}
              </div>
            )}
          </StyledDataContainer>
        </StyledTableRow>
      ))}

      <Modal isOpen={success} onClose={() => setSuccess(false)}>
        <div>
          <StyledPTag>Vartotojas ištrintas sėkmingai!</StyledPTag>
        </div>
      </Modal>
    </>
  );
};

export default TableRow;
