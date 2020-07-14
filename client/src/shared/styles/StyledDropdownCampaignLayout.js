import styled from 'styled-components';

const StyledDropdownCampaignLayout = styled.div`
  display: flex;
  align-items: center;
  width: 80vw;
  height: 180px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: ${({ dropdownOpen }) => (dropdownOpen ? '10px 10px 0px 0px' : '10px')};
  ${({ dropdownCampaignMargin }) => dropdownCampaignMargin && `margin: ${dropdownCampaignMargin};`}
  border-radius: 0px 0px 10px 10px;
  border-top: none;
`;

export default StyledDropdownCampaignLayout;
