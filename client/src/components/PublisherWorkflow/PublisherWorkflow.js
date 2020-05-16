import React from "react";
import { useHistory } from "react-router-dom";
import { PUBLISHER_SIGN_UP_ROUTE } from "../../routes-config";
import {
  CardContainerLayout,
  ParagraphButton,
  CustomParagraph,
  CardLayoutWithBorder,
  CustomH1,
  DoubleButtonsContainerFilledHeight,
  CloseButtonContainer
} from "../shared/GeneralCard";

export const REWARD_PER_SALE_WORKFLOW = "PAY_PER_SALE";
export const REWARD_PER_CLICK_WORKFLOW = "PAY_PER_CLICK";

export const PublisherWorkflow = () => {
  const history = useHistory();

  return (
    <CardContainerLayout>
      <CardLayoutWithBorder>
      <CloseButtonContainer>
          <ParagraphButton buttonMargin={'6px 12px 0 0'} buttonFontSize={20} buttonFontWeight={900} buttonColor={"#959090"} onClick={() => history.push('/')}>x</ParagraphButton>
        </CloseButtonContainer>
        <div>
          <CustomH1 h1FontSize={38}>I want my referral link to:</CustomH1>
        </div>
        <DoubleButtonsContainerFilledHeight>
          <div>
            <ParagraphButton
              buttonColor={"#7838D5"}
              buttonFontWeight={900}
              buttonFontSize={24}
              onClick={() =>
                history.push({
                  pathname: PUBLISHER_SIGN_UP_ROUTE,
                  workflow: REWARD_PER_SALE_WORKFLOW,
                })
              }
            >
              Create +
            </ParagraphButton>
            <CustomParagraph paragraphFontSize={22} paragraphColor={"#696868"}>
              reward per sale (commission)
            </CustomParagraph>
          </div>

          <div>
            <ParagraphButton
              buttonColor={"#4C83D4"}
              buttonFontWeight={900}
              buttonFontSize={24}
              onClick={() =>
                history.push({
                  pathname: PUBLISHER_SIGN_UP_ROUTE,
                  workflow: PUBLISHER_SIGN_UP_ROUTE,
                })
              }
            >
              Create +
            </ParagraphButton>
            <CustomParagraph paragraphFontSize={22} paragraphColor={"#696868"}>
              reward per click (traffic)
            </CustomParagraph>
          </div>
        </DoubleButtonsContainerFilledHeight>
      </CardLayoutWithBorder>
    </CardContainerLayout>
  );
};
