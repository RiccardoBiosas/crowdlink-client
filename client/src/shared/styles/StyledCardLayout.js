import styled from 'styled-components';

const StyledCardLayout = styled.div`
  height: ${({ cardLayoutHeight }) => cardLayoutHeight || '100vh'};
  ${({ cardLayoutPadding }) => cardLayoutPadding && `padding: ${cardLayoutPadding};`}
  ${({ cardLayoutMargin }) => cardLayoutMargin && `margin: ${cardLayoutMargin};`}
  background-color: ${({ cardLayoutBackgroundColor }) => cardLayoutBackgroundColor || '#23153C'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default StyledCardLayout;
