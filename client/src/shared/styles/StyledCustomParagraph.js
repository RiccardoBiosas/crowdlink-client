import styled from 'styled-components';

const StyledCustomParagraph = styled.p`
  color: ${(props) => props.paragraphColor};
  margin: ${(props) => props.paragraphMargin};
  font-size: ${(props) => props.paragraphFontSize}px;
  font-weight: ${(props) => props.paragraphFontWeight};
  width: ${(props) => `${props.paragraphWidth}`};
  line-height ${(props) => `${props.paragraphLineHeight}`};
  border: ${(props) => `${props.paragraphBorder}`};
  padding: ${(props) => props.paragraphPadding};
  text-decoration-line: ${(props) => props.paragraphTextDecoration}

`;

export default StyledCustomParagraph;
