import React from "react";
import { useHistory } from "react-router-dom";
import {
  CardContainerLayout,
  CardLayoutWithBorderSpaceAround,
  CustomParagraph,
} from "../shared/GeneralCard";
import { PortisInstance } from "../../portis/PortisInstance";
import { Web3Consumer } from "web3-react";
import { PUBLISHER_DASHBOARD_ROUTE_WITH_PARAM, PUBLISHER_GA_CONNECT_ROUTE } from "../../routes-config";
import {
  ParagraphButton,
  CardLayoutWithBorder,
  DoubleButtonsContainerFilledHeight,
} from "../shared/GeneralCard";


export const SignUpFallback = () => {
  const history = useHistory();
  return (
    <CardContainerLayout>
      <Web3Consumer>
        {(context) => {
          const { active } = context;
          if (!active) {
            return (
              <CardLayoutWithBorderSpaceAround>
                <CustomParagraph
                  paragraphColor={"#959090"}
                  paragraphFontSize={22}
                  paragraphFontWeight={900}
                >
                  Sign up if you want to access our dashboards to create your
                  referral campaign!
                </CustomParagraph>
                <div>
                  <PortisInstance />
                </div>
              </CardLayoutWithBorderSpaceAround>
            );
          } else {
            return (
              <CardLayoutWithBorder>
                <DoubleButtonsContainerFilledHeight>
                  <div>
                    <ParagraphButton
                      buttonColor={"#7838D5"}
                      buttonFontWeight={900}
                      buttonFontSize={24}
                      onClick={() => history.push(PUBLISHER_GA_CONNECT_ROUTE)}
                    >
                      Create +
                    </ParagraphButton>
                    <CustomParagraph
                      paragraphFontSize={22}
                      paragraphColor={"#696868"}
                    >
                      reward per sale (commission)
                    </CustomParagraph>
                  </div>

                  <div>
                    <ParagraphButton
                      buttonColor={"#4C83D4"}
                      buttonFontWeight={900}
                      buttonFontSize={24}
                      onClick={() =>
                        history.push(`${PUBLISHER_DASHBOARD_ROUTE_WITH_PARAM}/clicks`)
                      }
                    >
                      Create +
                    </ParagraphButton>
                    <CustomParagraph
                      paragraphFontSize={22}
                      paragraphColor={"#696868"}
                    >
                      reward per click (traffic)
                    </CustomParagraph>
                  </div>
                </DoubleButtonsContainerFilledHeight>
              </CardLayoutWithBorder>
            );
          }
        }}
      </Web3Consumer>
    </CardContainerLayout>
  );
};
