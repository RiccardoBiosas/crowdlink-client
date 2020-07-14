import styled from 'styled-components';

const StyledColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ columnWrapperHeight }) => columnWrapperHeight || 'inherit'};
  ${({ columnWrapperFlexSize }) => columnWrapperFlexSize && `flex: ${columnWrapperFlexSize};`}
  width: ${({ columnWrapperWidth }) => columnWrapperWidth || '30vw'};
  justify-content: ${({ columnWrapperJustify }) => columnWrapperJustify || 'flex-start'};
  ${({ columnWrapperMargin }) => columnWrapperMargin && `margin: ${columnWrapperMargin};`}
  align-items: ${({ columnWrapperAlign }) => columnWrapperAlign || 'flex-start'};
`;

export default StyledColumnWrapper;

// export const StyledCampaignLayoutComponent = styled.div`
//   height: 100%;
//   flex: ${(props) => componentFlex};
//   height: ${(props) => containerHeight};
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   margin: ${(props) => containerMargin};
// `;
