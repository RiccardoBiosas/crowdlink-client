import React from "react";
import { useHistory } from "react-router-dom";
import { GlobalButton } from "./shared/styles";
import {
  CardContainerLayout,
  CustomParagraph,
  CardSubContainer,
  ColumnContainer,
  ParagraphButton,
  CustomH1,
  CardLayoutWithHorizontalContainers
} from "./shared/GeneralCard";
import { MARKETER_SIGN_UP_ROUTE } from "../routes-config";
import { ReactComponent as CrowdLinkHomepageMarketer } from "../assets/crowdlink-homepage-marketer.svg";

export const MarketerHomepage = () => {
  const history = useHistory();

  return (
    <CardContainerLayout cardContainerBackgroundColor={"#E5E5E5"}>
      <CardLayoutWithHorizontalContainers cardLayoutHeight={'60vh'} cardLayoutWidth={"90vw"}>
        <CardSubContainer justify={"space-between"} align={"flex-start"}>
          <div>
            <CustomH1 h1FontSize={40} h1LineHeight={'54px'}>             
              Join a referral a campaign <br /> today
            </CustomH1>
            <CustomParagraph
               paragraphFontSize={26}
               paragraphMargin={"32px 0 0 0"}
               paragraphColor={"#959090"}
               paragraphLineHeight={'34px'}
            >
              earn commission for every sale <br /> coming from your referral link
            </CustomParagraph>
          </div>
          <ColumnContainer>
            <ParagraphButton
                buttonColor={"#7838D5"}
                buttonFontWeight={900}
                buttonFontSize={26}
              onClick={() => history.push(MARKETER_SIGN_UP_ROUTE)}
            >
              Get Started
            </ParagraphButton>

            <ParagraphButton
               buttonColor={"#959090"}
               paragraphFontSize={24}
               buttonMargin={'10px 0 0 0'}
              onClick={() => history.push("/")}
            >
              I am a creator >
            </ParagraphButton>
          </ColumnContainer>
        </CardSubContainer>
        <div>
          <CrowdLinkHomepageMarketer />
        </div>
      </CardLayoutWithHorizontalContainers>
    </CardContainerLayout>
  );
};
