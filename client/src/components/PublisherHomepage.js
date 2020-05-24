import React from "react";
import { useHistory } from "react-router-dom";
import {
  PUBLISHER_WORKFLOW_ROUTE,
  // PUBLISHER_FEED_ROUTE,
  PTOKENS_SWAP_ROUTE,
} from "../routes-config";
import {
  HomepageCardContainerLayout,
  CardLayout,
  ColumnContainer,
  ParagraphButton,
  CustomParagraph,
  CustomH1,
  CardLayoutWithHorizontalContainers,
  CardSubContainer,
  CardContainerLayout
} from "./shared/GeneralCard";
import { GlobalButton } from "./shared/styles";
import { ReactComponent as CrowdLinkHomepagePublisher } from "../assets/crowdlink-homepage-creator.svg";

export const PublisherHomepage = () => {
  const history = useHistory();

  return (
    <CardContainerLayout cardContainerBackgroundColor={'#23153C'}>
      <CardLayoutWithHorizontalContainers
        cardLayoutHeight={"60vh"}
        cardLayoutWidth={"90vw"}
      >
        <CardSubContainer justify={"space-between"} align={"flex-start"}>
          <div>
            <CustomH1 h1FontSize={40} h1LineHeight={"54px"} h1Color={"#F8F8F8"}>
              Create a referral campaign <br /> within minutes
            </CustomH1>
            <CustomParagraph
              paragraphFontSize={26}
              paragraphMargin={"32px 0 0 0"}
              paragraphColor={"#E2E2E2"}
              paragraphLineHeight={"34px"}
            >
              set a commission per sale from links <br /> and let the rest be
              history
            </CustomParagraph>
          </div>
          {/*
          <div>
            <CustomParagraph paragraphColor={"#4C83D4"}>
              Have bitcoin but not ethereum? <br /> Swap it for pTokens and then
              you're ready to go!
            </CustomParagraph>
            <ParagraphButton
              paragraphFontSize={22}
              buttonColor={"#7838D5"}
              onClick={() => history.push(PTOKENS_SWAP_ROUTE)}
            >
              Swap
            </ParagraphButton>
          </div> */}
          <ColumnContainer>
            <GlobalButton
              buttonRadius={"50px"}
              buttonTextColor={"#4C83D4"}
              buttonFontWeight={900}
              buttonFontSize={26}
              buttonColor={"#F8F8F8"}
              buttonWidth={"220"}
              onClick={() => history.push(PUBLISHER_WORKFLOW_ROUTE)}
            >
              Get Started
            </GlobalButton>

            <ParagraphButton
              buttonColor={"#F8F8F8"}
              paragraphFontSize={26}
              buttonMargin={"10px 0 0 6px"}
              onClick={() => history.push("/marketer")}
            >
              I am a marketer >
            </ParagraphButton>
          </ColumnContainer>
        </CardSubContainer>

      <CrowdLinkHomepagePublisher />
      </CardLayoutWithHorizontalContainers>
    </CardContainerLayout>
  );
};
