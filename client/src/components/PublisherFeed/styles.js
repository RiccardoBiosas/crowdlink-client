import styled from "styled-components";

export const CampaignContainerLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CampaignContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80vw;
  height: 22vh;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const CampaignContainerComponent = styled.div`
  height: 100%;
  flex: ${(props) => props.componentFlex};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${props => props.containerMargin};
`;

export const CampaignContainerDataContainer = styled.div`
display: flex;
width: 100%;
`
