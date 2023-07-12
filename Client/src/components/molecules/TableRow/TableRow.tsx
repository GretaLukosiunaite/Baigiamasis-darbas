import React, { useEffect, useState } from 'react';
import { IParticipant } from '../../../shared/api/types';
import { API } from '../../../shared/api';
import Button from '../../atoms/Button';
import { StyledDataContainer, StyledTableRow } from './styles';

const TableRow = () => {
  const [participants, setParticipants] = useState<IParticipant[]>([]);
  const [deletedParticipantId, setDeletedParticipantId] = useState('');
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);

  const [isEditing, setIsEditing] = useState<string[]>([]);

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

  const handleConfirmDeleteParticipant = (participantId) => {
    setDeletedParticipantId(participantId);
    setIsDeleteConfirmationVisible(true);
  };

  const handleDeleteParticipant = async (participantId) => {
    try {
      await API.deleteParticipant(participantId);
      // Fetch participants again to update the table
      fetchParticipants();
      setIsDeleteConfirmationVisible(false);
      setDeletedParticipantId('');
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

  const handleSaveParticipant = async (participantId: string) => {
    try {
      const updatedParticipantData = participants.find(
        (participant) => participant._id === participantId
      );

      // Perform validation on the edited data

      // Save the updated participant data
      await API.updateParticipant(participantId, updatedParticipantData);

      // Fetch participants again to update the table
      fetchParticipants();

      // Exit editing mode for the participant
      setIsEditing((prevEditing) =>
        prevEditing.filter((id) => id !== participantId)
      );
    } catch (error) {
      console.error('Error saving participant:', error);
    }
  };

  const handleCancelEditParticipant = (participantId: string) => {
    setIsEditing((prevEditing) =>
      prevEditing.filter((id) => id !== participantId)
    );
  };

  return (
    <div>
      {participants.map((participant) => (
        <StyledTableRow key={participant._id}>
          <StyledDataContainer>
            {isEditing.includes(participant._id) ? (
              <input
                type='text'
                value={participant.name}
                onChange={(e) => {
                  // Update the participant's name
                  setParticipants((prevParticipants) =>
                    prevParticipants.map((prevParticipant) =>
                      prevParticipant._id === participant._id
                        ? { ...prevParticipant, name: e.target.value }
                        : prevParticipant
                    )
                  );
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
                  // Update the participant's lastname
                  setParticipants((prevParticipants) =>
                    prevParticipants.map((prevParticipant) =>
                      prevParticipant._id === participant._id
                        ? { ...prevParticipant, lastname: e.target.value }
                        : prevParticipant
                    )
                  );
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
                  // Update the participant's email
                  setParticipants((prevParticipants) =>
                    prevParticipants.map((prevParticipant) =>
                      prevParticipant._id === participant._id
                        ? { ...prevParticipant, email: e.target.value }
                        : prevParticipant
                    )
                  );
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
                  // Update the participant's age
                  setParticipants((prevParticipants) =>
                    prevParticipants.map((prevParticipant) =>
                      prevParticipant._id === participant._id
                        ? { ...prevParticipant, age: e.target.value }
                        : prevParticipant
                    )
                  );
                }}
              />
            ) : (
              <p>{participant.age}</p>
            )}
          </StyledDataContainer>

          <StyledDataContainer>
            {isDeleteConfirmationVisible &&
            participant._id === deletedParticipantId ? (
              <div>
                <p>Ar tikrai norite ištrinti?</p>
                <Button
                  text='Taip'
                  action={() => handleDeleteParticipant(participant._id)}
                  className='is-responsive is-danger is-outlined'
                />
                <Button
                  text='Atšaukti'
                  action={handleCancelDeleteParticipant}
                  className='is-responsive is-primary is-outlined'
                />
              </div>
            ) : (
              <div>
                {isEditing.includes(participant._id) ? (
                  <>
                    <Button
                      text='Išsaugoti'
                      action={() => handleSaveParticipant(participant._id)}
                      className='is-responsive is-primary is-outlined'
                    />
                    <Button
                      text='Atšaukti'
                      action={() =>
                        handleCancelEditParticipant(participant._id)
                      }
                      className='is-responsive is-primary is-outlined'
                    />
                  </>
                ) : (
                  <>
                    <Button
                      text='Redaguoti'
                      action={() => handleEditParticipant(participant._id)}
                      className='is-responsive is-primary is-outlined'
                    />
                    <Button
                      text='Ištrinti'
                      action={() =>
                        handleConfirmDeleteParticipant(participant._id)
                      }
                      className='is-responsive is-danger is-outlined'
                    />
                  </>
                )}
              </div>
            )}
          </StyledDataContainer>
        </StyledTableRow>
      ))}
    </div>
  );
};

export default TableRow;
