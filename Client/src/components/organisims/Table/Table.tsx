import { useState } from 'react';
import TableRow from '../../molecules/TableRow';
import {
  StyledDataContainer,
  StyledPage,
  StyledTableRow,
} from '../../molecules/TableRow/styles';
import { StyledTable, StyledTableWrapper } from './styles';
import { IParticipant } from '../../../shared/api/types';
import Button from '../../atoms/Button';

interface ITableProps {
  participants: IParticipant[];
  onDeleteParticipant: (participantId: string) => void;
  onUpdateParticipant: (
    participantId: string,
    updatedData: IParticipant
  ) => void;
}

const Table = ({
  participants,
  onDeleteParticipant,
  onUpdateParticipant,
}: ITableProps) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

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
        />
      ));
  };

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
        <TableRow
          participants={visibleParticipants}
          onDeleteParticipant={onDeleteParticipant}
          onUpdateParticipant={onUpdateParticipant}
        />
      </StyledTable>
      <StyledPage>{generatePagination()}</StyledPage>
    </StyledTableWrapper>
  );
};

export default Table;
