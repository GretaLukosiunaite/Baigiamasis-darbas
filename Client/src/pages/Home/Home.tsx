import { SetStateAction, useEffect, useState } from 'react';
import Table from '../../components/organisims/Table';
import Footer from '../../components/templates/Footer';
import Header from '../../components/templates/Header';
import { IParticipant } from '../../shared/api/types';
import { API } from '../../shared/api';

const Home = () => {
  const [participants, setParticipants] = useState<IParticipant[]>([]);
  const [searchValue, setSearchValue] = useState('');
  

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const fetchedParticipants = await API.getParticipants();
        setParticipants(fetchedParticipants);
      } catch (error) {
        console.error('Error fetching participants:', error);
      }
    };

    fetchParticipants();
  }, []);

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
    <div>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      {filteredParticipants.length > 0 ? (
        <Table participants={filteredParticipants} />
      ) : (
        <p>Nėra rezultatų</p>
      )}
      <Footer />
    </div>
  );
};

export default Home;
