import React from "react";
import {useHistory} from 'react-router-dom'
import { ParagraphButton, CustomParagraph } from "../shared/GeneralCard";
import {
  CampaignContainerLayout,
  CampaignContainer,
  CampaignContainerComponent,
  CampaignContainerDataContainer,
} from "../shared/feed/styles";

export const MarketerFeedContainer = () => {
  const history = useHistory()
  return (
    <CampaignContainerLayout>

      <CampaignContainer>
        <CampaignContainerComponent
          containerMargin={"0 0 0 18px"}
          componentFlex={3}
        >
          <CampaignContainerDataContainer>
            <CustomParagraph
              paragraphColor={"#1E1E1E"}
              paragraphFontSize={18}
              paragraphWidth={"32%"}
            >
              Campaign's Website
            </CustomParagraph>
            <CustomParagraph paragraphColor={"#959090"} paragraphFontSize={18}>
              campaign's website
            </CustomParagraph>
          </CampaignContainerDataContainer>
          <CampaignContainerDataContainer>
            <CustomParagraph
              paragraphColor={"#1E1E1E"}
              paragraphFontSize={18}
              paragraphWidth={"32%"}
            >
              Reward
            </CustomParagraph>
            <CustomParagraph paragraphColor={"#959090"} paragraphFontSize={18}>
              reward$$
            </CustomParagraph>
          </CampaignContainerDataContainer>
          <CampaignContainerDataContainer>
          <CustomParagraph
              paragraphColor={"#1E1E1E"}
              paragraphFontSize={18}
              paragraphWidth={"32%"}
            >
              My unique referral link:
            </CustomParagraph>
            <CustomParagraph paragraphColor={"#959090"} paragraphFontSize={18}>
              ...
            </CustomParagraph>
          </CampaignContainerDataContainer>
        </CampaignContainerComponent>
        <CampaignContainerComponent componentFlex={1}>
          <ParagraphButton
            buttonColor={"#4C83D4"}
            buttonFontSize={20}
            buttonFontWeight={600}
          >
            Create Link +
          </ParagraphButton>
        </CampaignContainerComponent>
      </CampaignContainer>
    </CampaignContainerLayout>
  );
};
