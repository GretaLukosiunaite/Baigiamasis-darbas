import { styled } from 'styled-components';

export const StyledTable = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  width: 100%;
  gap: 3px;
`;

export const StyledHeadlineRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 67px 0px 27px;
  width: 100%;
  gap: 10px;
`;

export const StyledHeadlineContainer = styled.div`
  min-width: 109px;

  h6 {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 140.62%;
    letter-spacing: 0.1px;
    text-align: right;
  }

  &:nth-child(2) {
    min-width: 80px;
  }

  @media (min-width: 1090px) {
    &:nth-child(2) {
      min-width: 109px;
    }
  }
`;

export const StyledTableRow = styled.div`
  background-color: #ffffff;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.5em 0.75em;
  width: 100%;
  gap: 10px;
`;

export const StyledDataContainer = styled.div`
  min-width: 109px;
  gap: 1em;
  display: flex;
  p {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 100%;
    letter-spacing: 0.25px;
    text-align: right;
  }

  &:nth-child(1) p {
    text-align: left;
  }

  &:nth-child(2) {
    min-width: 80px;
  }

  @media (min-width: 1090px) {
    &:nth-child(2) {
      min-width: 109px;
    }
  }
`;
