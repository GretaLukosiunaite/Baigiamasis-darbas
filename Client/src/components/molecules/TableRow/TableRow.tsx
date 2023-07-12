import React, { useEffect, useState } from 'react';
import { IParticipant } from '../../../shared/api/types';
import { API } from '../../../shared/api';
import Button from '../../atoms/Button';
import { StyledDataContainer, StyledTableRow } from './styles';

const TableRow = () => {
  const [participants, setParticipants] = useState<IParticipant[]>([]);
  const [deletedParticipantId, setDeletedParticipantId] = useState(null);

  useEffect(() => {
    fetchParticipants();
  }, []);

  const fetchParticipants = async () => {
    try {
      const fetchedParticipants = await API.getParticipants();
      setParticipants(fetchedParticipants);
    } catch (error) {
      console.error('Error fetching participants:', error);
    }
  };

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const deleteParticipant = async () => {
      try {
        await API.deleteParticipant(deletedParticipantId);
        // Fetch participants again to update the table
        fetchParticipants();
        setDeletedParticipantId(null); // Reset deletedParticipantId
      } catch (error) {
        console.error('Error deleting participant:', error);
      }
    };

    if (deletedParticipantId) {
      deleteParticipant();
    }
  }, [deletedParticipantId]);

  const handleConfirmDeleteParticipant = (participantId) => {
    if (window.confirm('Are you sure you want to delete this participant?')) {
      handleDeleteParticipant(participantId);
    }
  };

  const handleDeleteParticipant = async (participantId) => {
    try {
      await API.deleteParticipant(participantId);
      // Fetch participants again to update the table
      fetchParticipants();
    } catch (error) {
      console.error('Error deleting participant:', error);
    }
  };

  return (
    <div>
      {participants.map((participant) => (
        <StyledTableRow key={participant._id}>
          <StyledDataContainer>
            <p>{participant.name}</p>
          </StyledDataContainer>

          <StyledDataContainer>
            <p> {participant.lastname}</p>
          </StyledDataContainer>

          <StyledDataContainer>
            <p>{participant.email}</p>
          </StyledDataContainer>

          <StyledDataContainer>
            <p>{participant.age}</p>
          </StyledDataContainer>
          <StyledDataContainer>
            <Button
              text='Redaguoti'
              action={handleButtonClick}
              className='is-responsive is-primary is-outlined'
            />
            <Button
              text='Ištrinti'
              action={() => handleConfirmDeleteParticipant(participant._id)}
              className='is-responsive is-danger is-outlined'
            />
          </StyledDataContainer>
        </StyledTableRow>
      ))}
    </div>
  );
};

export default TableRow;
