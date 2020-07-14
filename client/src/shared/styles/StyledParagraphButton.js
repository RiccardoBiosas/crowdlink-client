import styled from 'styled-components';

const StyledParagraphButton = styled.button`
  background: none;
  border: none;
  text-align: left;
  color: ${(props) => props.buttonColor};
  font-weight: ${(props) => props.buttonFontWeight};
  font-size: ${(props) => props.buttonFontSize}px;
  margin: ${(props) => props.buttonMargin};
  width: ${(props) => `${props.buttonWidth}`};
  cursor: pointer;

  &:focus {
    outline: none;
    border: none;
  }
`;

export default StyledParagraphButton;
