import styled from 'styled-components';
import StyledColumnWrapper from './styles/StyledColumnWrapper';

// export const StyledCardLayout = styled.div`
//   height: ${({ cardLayoutHeight }) => cardLayoutHeight || '100vh'};
//   ${({ cardLayoutPadding }) => cardLayoutPadding && `padding: ${cardLayoutPadding};`}
//   background-color: ${({ cardLayoutBackgroundColor }) => cardLayoutBackgroundColor || '#23153C'};
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// export const StyledCardWrapper = styled.div`
//   height: ${({ cardWrapperHeight }) => cardWrapperHeight || '90vh'};
//   width: ${({ cardWrapperWidth }) => cardWrapperWidth || 'inherit'};
//   border-radius: ${({ cardDropdownOpen }) => (cardDropdownOpen ? '10px 10px 0px 0px' : '10px')};
//   ${({ cardWrapperMargin }) => cardWrapperMargin && `margin: ${cardWrapperMargin};`}
//   ${({ cardWrapperBoxShadow }) => cardWrapperBoxShadow && `box-shadow: ${cardWrapperBoxShadow};`}
//   ${({ cardWrapperBackground }) => cardWrapperBackground && `background: ${cardWrapperBackground};`}
//   display: flex;
//   flex-direction: ${({ cardWrapperFlexDirection }) => cardWrapperFlexDirection || 'column'};
//   align-items: ${({ cardWrapperAlign }) => cardWrapperAlign || 'center'};
//   justify-content: ${({ cardWrapperJustify }) => cardWrapperJustify || 'center'};
// `;

// export const StyledColumnWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: ${(props) => (props.columnWrapperHeight ? props.columnWrapperHeight : 'inherit')};
//   flex ${(props) => props.containerFlex || ''};
//   width: ${(props) => (props.columnWrapperWidth ? props.columnWrapperWidth : '30vw')};
//   justify-content: ${(props) => props.containerJustify || 'flex-start'};
//   margin: ${(props) => props.columnWrapperMargin};
//   align-items: ${(props) =>
//     props.horizontalAlign === 'center'
//       ? 'center'
//       : props.horizontalAlign === 'right'
//       ? 'flex-end'
//       : 'flex-start'};
// `;

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

export const StyledParagraphButton = styled.button`
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

export const StyledCustomParagraph = styled.p`
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

export const StyledColumnWrapperFilledHeight = styled(StyledColumnWrapper)`
  flex: 1;
  justify-content: space-around;
`;
