import React, { useState } from 'react';
import TableRow from '../../molecules/TableRow';
import {
  StyledHeadlineContainer,
  StyledHeadlineRow,
  StyledTable,
} from '../../molecules/TableRow/styles';

const Table = () => {
  const [searchValue, setSearchValue] = useState('');

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
