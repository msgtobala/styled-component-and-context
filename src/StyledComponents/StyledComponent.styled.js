import styled from 'styled-components';

export const StyledPTag = styled.p`
  color: ${(props) => props.theme.color.p};
  font-size: 32px;

  &:hover {
    color: blue;
  }
`;

export const StyledDivTag = styled.div`
  background-color: green;

  & a {
    color: pink;
  }
`;

export const StyledCounterPTag = styled.p`
  color: ${(props) => (props.counter === 0 ? 'black' : 'red')};
`;
