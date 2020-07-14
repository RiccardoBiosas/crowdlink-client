import styled from 'styled-components';

export const StyledCustomH1 = styled.h1`
  color: ${(props) => props.h1Color};
  font-size: ${(props) => props.h1FontSize}px;
  width: ${(props) => props.h1Width}vw;
  font-weight: ${(props) => props.h1FontWeight};
  line-height: ${(props) => props.h1LineHeight};
`;

export const StyledCustomH2 = styled.h2`
  color: ${(props) => props.h2Color};
  font-size: ${(props) => props.h2FontSize}px;
  width: ${(props) => props.h2Width}vw;
  font-weight: ${(props) => props.h2FontWeight};
`;
