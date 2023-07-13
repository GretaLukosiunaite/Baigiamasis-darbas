import React, { useEffect, useState } from 'react';
import { IParticipant } from '../../../shared/api/types';
import { API } from '../../../shared/api';
import Button from '../../atoms/Button';
import {
  StyledDataContainer,
  StyledHeadlineContainer,
  StyledHeadlineRow,
  StyledTable,
  StyledTableRow,
} from './styles';
import Modal from '../../atoms/Modal';
import TableRowTest from '../../molecules/TableRow copy/TableRowTest';
import Header from '../../templates/Header';

interface IFilterProps {
  data: IParticipant[];
}

const TableTest = ({ data }: IFilterProps) => {
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

  const filteredParticipants = data.filter((participant) => {
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
        <TableRowTest participants={filteredParticipants} />
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default TableTest;
