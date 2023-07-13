import React, { useEffect, useState } from 'react';
import { IParticipant } from '../../../shared/api/types';
import { API } from '../../../shared/api';
import Button from '../../atoms/Button';
import { StyledDataContainer, StyledTableRow } from './styles';
import Modal from '../../atoms/Modal';

const TableRow = () => {
  const [participants, setParticipants] = useState<IParticipant[]>([]);
  const [deletedParticipantId, setDeletedParticipantId] = useState('');
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);

  const [isEditing, setIsEditing] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetchParticipants();
  }, [isEditing]);

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

  const handleDeleteSuccessModalClose = () => {
    setSuccess(false);
  };

  // const generatePagination = () => {
  //   const totalPages = Math.ceil(participants.length / itemsPerPage);
  //   const paginationButtons = [];

  //   for (let i = 1; i <= totalPages; i++) {
  //     paginationButtons.push(
  //       <Button
  //         key={i}
  //         text={i.toString()}
  //         action={() => setCurrentPage(i)}
  //         className={currentPage === i ? 'active' : ''}
  //       />
  //     );
  //   }

  //   return paginationButtons;
  // };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, participants.length);
  const visibleParticipants = participants.slice(startIndex, endIndex);

  const generatePagination = () => {
    return Array(Math.ceil(participants.length / itemsPerPage))
      .fill(0)
      .map((_, i) => i + 1)
      .filter((x, _, arr) => {
        if (x === 1) {
          return x;
        } else if (x === currentPage) {
          return x;
        } else if (
          x - 1 === currentPage ||
          x - 2 === currentPage ||
          x + 1 === currentPage ||
          x + 2 === currentPage
        ) {
          return x;
        } else if (x === arr.length) {
          return x;
        }
      })
      .map((x) => (
        <Button
          key={x}
          text={x.toString()}
          action={() => setCurrentPage(x)}
          className={currentPage === x ? 'active is-primary' : ''}
        >
          {x}
        </Button>
      ));
  };

  const filteredParticipants = participants.filter((participant) => {
    const searchLower = searchValue.toLowerCase();
    const name = participant.name.toLowerCase();
    const lastname = participant.lastname.toLowerCase();
    const email = participant.email.toLowerCase();
    const age = participant.age.toString();

    return (
      name.toLowerCase().includes(searchLower) ||
      lastname.toLowerCase().includes(searchLower)  ||
      email.includes(searchLower) ||
      age.includes(searchLower)
    );
  });

  return (
    <div>
      {visibleParticipants.map((participant) => (
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
                  className='is-responsive is-primary'
                />
              </div>
            ) : (
              <div>
                {isEditing.includes(participant._id) ? (
                  <>
                    <Button
                      text='Išsaugoti'
                      action={() => handleSaveParticipant(participant._id)}
                      className='is-responsive is-primary'
                    />
                    <Button
                      text='Atšaukti'
                      action={() =>
                        handleCancelEditParticipant(participant._id)
                      }
                      className='is-responsive is-danger is-outlined'
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

      <Modal isOpen={success} onClose={handleDeleteSuccessModalClose}>
        <div>
          <p>Vartotojas ištrintas sėkmingai!</p>
        </div>
      </Modal>

      <div>{generatePagination()}</div>
    </div>
  );
};

export default TableRow;
