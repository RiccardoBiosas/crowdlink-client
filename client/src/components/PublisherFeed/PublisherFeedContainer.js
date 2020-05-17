import React from "react";
import { useHistory } from "react-router-dom";
import { ParagraphButton, CustomParagraph } from "../shared/GeneralCard";
import {
  CampaignContainerLayout,
  CampaignContainer,
  CampaignContainerComponent,
  CampaignContainerDataContainer,
  ToTheLeftFlexContainer,
} from "../shared/feed/styles";
import { PUBLISHER_WITHDRAW_ROUTE_WITH_PARAM } from "../../routes-config";

export const PublisherFeedContainer = () => {
  const history = useHistory();
  let website = "twitter"; //hardcoded for testing

  return (
    <CampaignContainerLayout>
      <ToTheLeftFlexContainer>
        <ParagraphButton
          buttonColor={"#4C83D4"}
          buttonFontSize={20}
          buttonFontWeight={600}
        >
          Create +
        </ParagraphButton>
      </ToTheLeftFlexContainer>
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
              my website
            </CustomParagraph>
          </CampaignContainerDataContainer>
          <CampaignContainerDataContainer>
            <CustomParagraph
              paragraphColor={"#1E1E1E"}
              paragraphFontSize={18}
              paragraphWidth={"32%"}
            >
              Reward per sale
            </CustomParagraph>
            <CustomParagraph paragraphColor={"#959090"} paragraphFontSize={18}>
              reward$$
            </CustomParagraph>
          </CampaignContainerDataContainer>
          <CampaignContainerDataContainer>
            <ParagraphButton
              buttonColor={"#1E1E1E"}
              buttonFontSize={18}
              buttonFontWeight={400}
              buttonWidth={"32%"}
            >
              Remaining budget
            </ParagraphButton>
            <CustomParagraph paragraphColor={"#959090"} paragraphFontSize={18}>
              $$
            </CustomParagraph>
          </CampaignContainerDataContainer>
        </CampaignContainerComponent>
        <CampaignContainerComponent componentFlex={1}>
          <ParagraphButton
            buttonColor={"#7838D5"}
            buttonFontSize={20}
            buttonFontWeight={600}
            onClick={() =>
              history.push(`${PUBLISHER_WITHDRAW_ROUTE_WITH_PARAM}/${website}`)
            }
          >
            withdraw >
          </ParagraphButton>
        </CampaignContainerComponent>
      </CampaignContainer>
    </CampaignContainerLayout>
  );
};
