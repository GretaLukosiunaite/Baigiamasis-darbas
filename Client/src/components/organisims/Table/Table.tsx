import React, { useState } from 'react';
import TableRow from '../../molecules/TableRow';
import {
  StyledDataContainer,
  StyledTableRow,
} from '../../molecules/TableRow/styles';
import { StyledTable, StyledTableWrapper } from './styles';

const Table = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <StyledTableWrapper className='box'>
      <StyledTable className='field'>
        <StyledTableRow>
          <StyledDataContainer>
            <h6>Vardas</h6>
          </StyledDataContainer>
          <StyledDataContainer>
            <h6>Pavardė</h6>
          </StyledDataContainer>
          <StyledDataContainer>
            <h6>El. paštas</h6>
          </StyledDataContainer>
          <StyledDataContainer>
            <h6>Amžius</h6>
          </StyledDataContainer>
          <StyledDataContainer>
            <h6></h6>
          </StyledDataContainer>
        </StyledTableRow>
        <TableRow searchValue={searchValue} />
      </StyledTable>
    </StyledTableWrapper>
  );
};

export default Table;
