import React from "react";
import { useHistory } from "react-router-dom";
import {
  PUBLISHER_WORKFLOW_ROUTE,
  PUBLISHER_FEED_ROUTE,
  PTOKENS_SWAP_ROUTE,
} from "../routes-config";
import {
  CardContainerLayout,
  CardLayout,
  ColumnContainer,
  ParagraphButton,
  CustomParagraph,
  CustomH1,
  CardLayoutWithHorizontalContainers,
  CardSubContainer,
} from "./shared/GeneralCard";
import { ReactComponent as CrowdLinkHomepagePublisher } from "../assets/crowdlink-homepage-creator.svg";

export const PublisherHomepage = () => {
  const history = useHistory();

  return (
    <CardContainerLayout cardContainerBackgroundColor={"#E5E5E5"}>
      <CardLayoutWithHorizontalContainers cardLayoutHeight={'60vh'} cardLayoutWidth={"90vw"}>
        <CardSubContainer justify={"space-between"} align={"flex-start"}>
          <div>
            <CustomH1 h1FontSize={40} h1LineHeight={"54px"}>
              Create a referral campaign <br /> within minutes
            </CustomH1>
            <CustomParagraph
              paragraphFontSize={26}
              paragraphMargin={"32px 0 0 0"}
              paragraphColor={"#959090"}
              paragraphLineHeight={"34px"}
            >
              set a commission per sale from links <br /> and let the rest be
              history
            </CustomParagraph>
          </div>

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
          </div>
          <ColumnContainer>
            <ParagraphButton
              buttonColor={"#4C83D4"}
              buttonFontWeight={900}
              buttonFontSize={26}
              onClick={() => history.push(PUBLISHER_WORKFLOW_ROUTE)}
            >
              Get Started
            </ParagraphButton>

            <ParagraphButton
              buttonColor={"#959090"}
              paragraphFontSize={24}
              buttonMargin={"10px 0 0 0"}
              onClick={() => history.push("/marketer")}
            >
              I am a marketer >
            </ParagraphButton>
          </ColumnContainer>
        </CardSubContainer>

        <div>
          <CrowdLinkHomepagePublisher />
        </div>
      </CardLayoutWithHorizontalContainers>
    </CardContainerLayout>
  );
};
