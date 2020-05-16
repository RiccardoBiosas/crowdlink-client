import React from "react";
import { useHistory } from "react-router-dom";
import { PUBLISHER_WORKFLOW_ROUTE } from "../routes-config";
import {
  CardContainerLayout,
  CardLayout,
  DoubleButtonsContainer,
  ParagraphButton,
  CustomParagraph,
  CustomH1
} from "./shared/GeneralCard";

export const PublisherHomepage = () => {
  const history = useHistory();

  return (
    <CardContainerLayout>
      <CardLayout>
        <div>
          <CustomH1 h1FontSize={38} h1Width={30}> Create a referral campaign within minutes</CustomH1>
          <CustomParagraph paragraphFontSize={24} paragraphMargin={'32px 0 0 0'} paragraphColor={"#959090"}>
            set a commission per sale from links, and let the rest be history
          </CustomParagraph>
        </div>
        <DoubleButtonsContainer>
          <ParagraphButton
            buttonColor={"#7838D5"}
            buttonFontWeight={900}
            buttonFontSize={24}
            onClick={() => history.push(PUBLISHER_WORKFLOW_ROUTE)}
          >
            Get Started
          </ParagraphButton>

          <ParagraphButton
            buttonColor={"#959090"}
            paragraphFontSize={22}           
            onClick={() => history.push("/marketer")}
          >
            I am a marketer >
          </ParagraphButton>
        </DoubleButtonsContainer>
      </CardLayout>
    </CardContainerLayout>
  );
};
