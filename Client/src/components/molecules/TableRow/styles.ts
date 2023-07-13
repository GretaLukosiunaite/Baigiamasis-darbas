import { styled } from 'styled-components';

export const StyledTableRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 0.75em 0 0.75em;

  width: 100%;

  & > * {
    border-bottom: 1px solid #dbdbdb;
  }

  @media (min-width: 768px) {
    position: static;
  }
`;

export const StyledPage = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 0.25rem;

  @media (min-width: 650px) {
    justify-content: center;
  }
`;

export const StyledDataContainer = styled.div`
  flex-grow: 1;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  height: 64px;
  justify-content: center;

  h6 {
    font-weight: 700;
    font-size: 1rem;
    line-height: 150%;
    letter-spacing: 0.1px;
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 100%;
    letter-spacing: 0.25px;
    white-space: initial;
    word-wrap: break-word;
  }

  input{
    margin-right: 0.5em;
  }

  &:nth-child(1) {
    min-width: 110px;
  }

  &:nth-child(2) {
    min-width: 180px;
  }

  &:nth-child(3) {
    min-width: 300px;
  }

  &:nth-child(4) {
    min-width: 60px;
  }

  &:nth-child(5) {
    min-width: 200px;
  }

  @media (min-width: 996px) {
    width: 300px;
    p {
      padding-right: 0.5em;
    }
  }
`;

export const StyledButtonaContainer = styled.div`
  width: 220px;
  gap: 0.5em;
  display: flex;
  padding: 0.5em 0.75em;
`;


export const StyledDeleteDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 0.25rem;

p{
  padding-right: 0;
}
`

export const StyledDeleteButtonsWrapper = styled.div`
display: flex;
gap: 0.5rem;
`