import { styled } from 'styled-components';

export const StyledForm = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0.75rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 0.75rem;

    .field {
      width: 100% !important;
    }
  }
`;

export const StyledButtondiv = styled.div`
  margin-top: 0.75rem;

  @media (min-width: 600px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const StyledPTag = styled.p`
    display: flex;
    justify-content:center;
  font-weight: 700;
  font-size: 1.25rem;
  color: rgb(72, 199, 142);
`;
