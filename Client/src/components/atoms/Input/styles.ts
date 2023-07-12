import { styled } from 'styled-components';

export const StyledInputWrapper = styled.div`
  display: flex;
  align-items: center;

  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.palette.secondary.main};
  border-radius: 0.375em;

  padding: calc(0.5em - 1px) calc(0.75em - 1px);
`;

export const StyledIcon = styled.span`
  color: #d0d0d0;
`;

export const StyledInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding-left: calc(0.75em - 1px);

  font-size: 1em;
  line-height: 1.5;
  color: ${(props) => props.theme.palette.secondary.dark.main};

  &::placeholder {
    color: #d0d0d0;
  }
`;