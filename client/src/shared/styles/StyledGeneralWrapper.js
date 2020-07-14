import styled from 'styled-components';

const StyledGeneralWrapper = styled.div`
${({ wrapperHeight }) => wrapperHeight && `height: ${wrapperHeight};`}
  ${({ wrapperWidth }) => wrapperWidth && `width: ${wrapperWidth};`}
  ${({ wrapperFlex }) => wrapperFlex && `display: flex;`}
  ${({ wrapperFlexDirection }) =>
    wrapperFlexDirection && `flex-direction: ${wrapperFlexDirection};`}
  ${({ wrapperJustify }) => wrapperJustify && `justify-content: ${wrapperJustify}`};
  ${({ wrapperAlign }) => wrapperAlign && `align-items: ${wrapperAlign}`};
  ${({ wrapperMargin }) => wrapperMargin && `margin: ${wrapperMargin}`};

`;

export default StyledGeneralWrapper;
