import styled from "styled-components";

export const CampaignContainerLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
`;

export const ToTheLeftFlexContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 80vw;
`;

export const CampaignContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80vw;
  height: 22vh;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: ${props => props.dropdownOpen ? '10px 10px 0px 0px' : '10px'};
  margin: ${(props) => props.containerMargin};

`;

export const DropdownCampaignContainer = styled(CampaignContainer)`
&& {
  border-radius: 0px 0px 10px 10px;
  border-top: none;
}
`

export const CampaignContainerComponent = styled.div`
  height: 100%;
  flex: ${(props) => props.componentFlex};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${(props) => props.containerMargin};
`;

export const CampaignContainerDataContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const BasicContainer = styled.div`
  width: ${(props) => props.containerWidth};
`;
