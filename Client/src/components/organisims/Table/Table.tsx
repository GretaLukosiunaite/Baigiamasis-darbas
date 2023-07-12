import React, { useState } from 'react';
import TableRow from '../../molecules/TableRow';
import {
  StyledHeadlineContainer,
  StyledHeadlineRow,
  StyledTable,
} from '../../molecules/TableRow/styles';
import Modal from '../../atoms/Modal';
import { API } from '../../../shared/api';

const Table = () => {
  const [searchValue, setSearchValue] = useState('');

  // useEffect(() => {
  //   const fetchfetchParticipantsData = async () => {
  //     try {
  //       const fetchedParticipants = await API.getItems();
  //       setParticipants(fetchedParticipants);
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };
  //   fetchParticipants();
  // }, []);


  return (
    <div>
      <StyledTable>
        <StyledHeadlineRow>
          <StyledHeadlineContainer className='table-header'>
            <h6>Name</h6>
          </StyledHeadlineContainer>
          <StyledHeadlineContainer className='table-header'>
            <h6>Lastname</h6>
          </StyledHeadlineContainer>
          <StyledHeadlineContainer className='table-header'>
            <h6>Email</h6>
          </StyledHeadlineContainer>
          <StyledHeadlineContainer className='table-header'>
            <h6>Age</h6>
          </StyledHeadlineContainer>
          <StyledHeadlineContainer className='table-header'>
            <h6></h6>
          </StyledHeadlineContainer>
        </StyledHeadlineRow>
        <TableRow searchValue={searchValue} />
      </StyledTable>
    </div>
  );
};

export default Table;
