import React from "react";
import { useHistory } from "react-router-dom";
import { GlobalButton } from "./shared/styles";
import {
  CardContainerLayout,
  CustomParagraph,
  CardLayout,
  DoubleButtonsContainer,
  ParagraphButton,
  CustomH1,
} from "./shared/GeneralCard";
import { MARKETER_SIGN_UP_ROUTE } from "../routes-config";

export const MarketerHomepage = () => {
  const history = useHistory();

  return (
    <CardContainerLayout>
      <CardLayout>
        <div>
          <CustomH1 h1FontSize={38} h1Width={30}> Join a referral a campaign today</CustomH1>
          <CustomParagraph
            paragraphFontSize={26}
            paragraphMargin={"32px 0 0 0"}
            paragraphColor={"#959090"}
          >
            earn commission for every sale coming from your referral link
          </CustomParagraph>
        </div>
        <DoubleButtonsContainer>
          <ParagraphButton
            buttonColor={"#4C83D4"}
            buttonFontWeight={900}
            buttonFontSize={24}
            onClick={() => history.push(MARKETER_SIGN_UP_ROUTE)}
          >
            Get Started
          </ParagraphButton>

          <ParagraphButton
            paragraphFontSize={22}
            buttonColor={"#959090"}
            onClick={() => history.push("/")}
          >
            I am a creator >
          </ParagraphButton>
        </DoubleButtonsContainer>
      </CardLayout>
    </CardContainerLayout>
  );
};
