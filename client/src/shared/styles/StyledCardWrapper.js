import styled from 'styled-components';

const StyledCardWrapper = styled.div`
  height: ${({ cardWrapperHeight }) => cardWrapperHeight || '90vh'};
  width: ${({ cardWrapperWidth }) => cardWrapperWidth || 'inherit'};
  border-radius: ${({ cardDropdownOpen }) => (cardDropdownOpen ? '10px 10px 0px 0px' : '10px')};
  ${({ cardWrapperMargin }) => cardWrapperMargin && `margin: ${cardWrapperMargin};`}
  ${({ cardWrapperBoxShadow }) => cardWrapperBoxShadow && `box-shadow: ${cardWrapperBoxShadow};`}
  ${({ cardWrapperBackground }) => cardWrapperBackground && `background: ${cardWrapperBackground};`}
  display: flex;
  flex-direction: ${({ cardWrapperFlexDirection }) => cardWrapperFlexDirection || 'column'};
  align-items: ${({ cardWrapperAlign }) => cardWrapperAlign || 'center'};
  justify-content: ${({ cardWrapperJustify }) => cardWrapperJustify || 'center'};
`;

export default StyledCardWrapper;
