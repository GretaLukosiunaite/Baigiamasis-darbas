import { useEffect, useState } from 'react';
import Table from '../../components/organisims/Table';
import Footer from '../../components/templates/Footer';
import Header from '../../components/templates/Header';
import { IParticipant } from '../../shared/api/types';
import { API } from '../../shared/api';
import { StyledLayoutPage } from './styles';

const Home = () => {
  const [participants, setParticipants] = useState<IParticipant[]>([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
   
    fetchParticipants();
  }, []);

  const fetchParticipants = async () => {
    try {
      const fetchedParticipantsData = await API.getParticipants();
      setParticipants(fetchedParticipantsData);
    } catch (error) {
      console.error('Error getting participants:', error);
    }
  };

  const participantAdded = (participant: IParticipant) => {
    // Add the new participant to the participants list
    setParticipants((prevParticipants) => [...prevParticipants, participant]);
    fetchParticipants();
  };

  const handleDeleteParticipant = async (participantId: string) => {
    try {
      await API.deleteParticipant(participantId);
      // Remove the deleted participant from the participants list
      setParticipants((prevParticipants) =>
        prevParticipants.filter(
          (participant) => participant._id !== participantId
        )
      );
    } catch (error) {
      console.error('Error deleting participant:', error);
    }
  };

  const handleUpdateParticipant = async (
    participantId: string,
    updatedData: IParticipant
  ) => {
    try {
      await API.updateParticipant(participantId, updatedData);
      // Update the participant in the participants list
      setParticipants((prevParticipants) =>
        prevParticipants.map((participant) =>
          participant._id === participantId ? updatedData : participant
        )
      );
    } catch (error) {
      console.error('Error updating participant:', error);
    }
  };

  const filteredParticipants = participants.filter((participant) => {
    const searchLower = searchValue.toLowerCase();
    const name = participant.name.toLowerCase();
    const lastname = participant.lastname.toLowerCase();
    const email = participant.email.toLowerCase();
    const age = participant.age.toString();

    return (
      name.includes(searchLower) ||
      lastname.includes(searchLower) ||
      email.includes(searchLower) ||
      age.includes(searchLower)
    );
  });

  return (
    <StyledLayoutPage>
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onParticipantAdded={participantAdded}
      />
      {filteredParticipants.length > 0 ? (
        <Table
          key='table'
          participants={filteredParticipants}
          onDeleteParticipant={handleDeleteParticipant}
          onUpdateParticipant={handleUpdateParticipant}
        />
      ) : (
        <p className='box'>Nėra rezultatų</p>
      )}
      <Footer />
    </StyledLayoutPage>
  );
};

export default Home;
