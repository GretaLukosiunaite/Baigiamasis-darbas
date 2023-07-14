import { styled } from 'styled-components';

export const StyledTableWrapper = styled.div`
   display: flex;
   flex-direction: column;
  justify-content: flex-start;
  overflow: auto;
  max-width: 1280px;
  width: 100%;

  @media (min-width: 1024px) {
    justify-content: center;
  }
`;

export const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;

  justify-content: center;
  width: 100%;
  gap: 3px;
`;
