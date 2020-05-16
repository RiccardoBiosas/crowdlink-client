import React from "react";
import { ParagraphButton, CustomParagraph } from "../shared/GeneralCard";
import {
  CampaignContainerLayout,
  CampaignContainer,
  CampaignContainerComponent,
  CampaignContainerDataContainer,
} from "./styles";

export const PublisherFeedContainer = () => {
  return (
    <CampaignContainerLayout>
      <div>
        <ParagraphButton>Create +</ParagraphButton>
      </div>
      <CampaignContainer>
        <CampaignContainerComponent
          containerMargin={"0 0 0 18px"}
          componentFlex={3}
        >
          <CampaignContainerDataContainer>
            <CustomParagraph paragraphColor={"#1E1E1E"} paragraphFontSize={18} paragraphWidth={'32%'}>
              Campaign's Website
            </CustomParagraph>
            <CustomParagraph paragraphColor={"#959090"} paragraphFontSize={18}>my website</CustomParagraph>
          </CampaignContainerDataContainer>
          <CampaignContainerDataContainer>
            <CustomParagraph paragraphColor={"#1E1E1E"} paragraphFontSize={18} paragraphWidth={'32%'}>
              Reward per sale
            </CustomParagraph>
            <CustomParagraph paragraphColor={"#959090"} paragraphFontSize={18}>reward$$</CustomParagraph>
          </CampaignContainerDataContainer>
          <CampaignContainerDataContainer>
            <ParagraphButton buttonColor={"#1E1E1E"} buttonFontSize={18} buttonFontWeight={400} buttonWidth={'32%'}>
              Remaining budget
            </ParagraphButton>
            <CustomParagraph paragraphColor={"#959090"} paragraphFontSize={18}>$$</CustomParagraph>
          </CampaignContainerDataContainer>
        </CampaignContainerComponent>
        <CampaignContainerComponent componentFlex={1}>
          <ParagraphButton>withdraw</ParagraphButton>
        </CampaignContainerComponent>
      </CampaignContainer>
    </CampaignContainerLayout>
  );
};
