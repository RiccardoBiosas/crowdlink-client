import styled from 'styled-components';
import StyledCardWrapper from './StyledCardWrapper';

// export const StyledCampaignLayout = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding-top: 4rem;
//   background-color: ${(props) =>
//     props.cardContainerBackgroundColor ? props.cardContainerBackgroundColor : '#23153C'};
// `;

// export const StyledCampaignWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   width: 80vw;
//   height: 180px;
//   background: #ffffff 0% 0% no-repeat padding-box;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//   border-radius: ${(props) => (props.dropdownOpen ? '10px 10px 0px 0px' : '10px')};
//   margin: ${(props) => props.containerMargin};
// `;

// export const StyledToTheLeftFlexContainer = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   width: 80vw;
// `;

// export const StyledCampaignLayoutData = styled.div`
//   display: flex;
//   width: 100%;
// `;

// export const StyledBasicLayout = styled.div`
//   width: ${(props) => props.containerWidth};
// `;

const StyledDropdownCampaignLayout = styled.div`
  display: flex;
  align-items: center;
  width: 80vw;
  height: 180px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: ${(props) => (props.dropdownOpen ? '10px 10px 0px 0px' : '10px')};
  ${({ dropdownCampaignMargin }) => dropdownCampaignMargin && `margin: ${dropdownCampaignMargin};`}
  border-radius: 0px 0px 10px 10px;
  border-top: none;
`;

export default StyledDropdownCampaignLayout;

// export const StyledCampaignLayoutComponent = styled.div`
//   height: 100%;
//   flex: ${(props) => props.componentFlex};
//   height: ${(props) => props.containerHeight};
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   margin: ${(props) => props.containerMargin};
// `;
