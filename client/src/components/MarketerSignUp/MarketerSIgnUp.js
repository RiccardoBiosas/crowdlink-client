import React, { Fragment } from "react";
import { Web3Consumer } from "web3-react";
import { useHistory } from "react-router-dom";
import { SignUpCard } from "../shared/PublisherWizard/styles";
import { PortisInstance } from "../../portis/PortisInstance";
import { GlobalButton } from "../shared/styles";
import {
  CustomParagraph,
  CardContainerLayout,
  CloseButtonContainer,
  ParagraphButton,
} from "../shared/GeneralCard";
import { MARKETER_FEED_ROUTE } from "../../routes-config";
import ArrowDown from "../../assets/arrow-down.png";

export const MarketerSignUp = () => {
  const history = useHistory();

  return (
    <CardContainerLayout>
      <SignUpCard>
        <CloseButtonContainer>
          <ParagraphButton
            buttonMargin={"6px 12px 0 0"}
            buttonFontSize={20}
            buttonFontWeight={900}
            buttonColor={"#959090"}
            onClick={() => history.push("/")}
          >
            x
          </ParagraphButton>
        </CloseButtonContainer>
        <Web3Consumer>
          {(context) => {
            const { active, connectorName, account, networkId } = context;
            return active ? (
              <Fragment>
                <div>
                  <CustomParagraph
                    paragraphColor={"#959090"}
                    paragraphFontSize={24}
                    paragraphFontWeight={900}
                  >
                    Welcome!
                  </CustomParagraph>
                </div>
                <div>
                  <CustomParagraph
                    paragraphColor={"#959090"}
                    paragraphFontSize={22}
                    paragraphFontWeight={600}
                  >
                    your web3 connector: {connectorName}
                  </CustomParagraph>
                </div>
                <div>
                  <CustomParagraph
                    paragraphColor={"#959090"}
                    paragraphFontSize={22}
                    paragraphFontWeight={600}
                  >
                    your public key: {account}
                  </CustomParagraph>
                </div>
                <div>
                  <CustomParagraph
                    paragraphColor={"#959090"}
                    paragraphFontSize={22}
                    paragraphFontWeight={600}
                  >
                    the network id: {networkId}
                  </CustomParagraph>
                </div>
                <GlobalButton
                  buttonWidth={200}
                  onClick={() => history.push(MARKETER_FEED_ROUTE)}
                >
                  Go To Dashboard
                </GlobalButton>
              </Fragment>
            ) : (
              <Fragment>
                <div>
                  <CustomParagraph
                    paragraphColor={"#959090"}
                    paragraphFontSize={22}
                    paragraphFontWeight={600}
                  >
                    Sign up with Portis
                  </CustomParagraph>
                </div>
                <div>
                  <img src={ArrowDown} />
                </div>
                <div>
                  <CustomParagraph
                    paragraphColor={"#959090"}
                    paragraphFontSize={22}
                    paragraphFontWeight={600}
                  >
                    You will receive funds via Portis Wallet
                  </CustomParagraph>
                </div>
                <div>
                  <img src={ArrowDown} />
                </div>
                <div>
                  <CustomParagraph
                    paragraphColor={"#959090"}
                    paragraphFontSize={22}
                    paragraphFontWeight={600}
                  >
                    Referral links connected instantly to your account{" "}
                  </CustomParagraph>
                </div>
                <div>
                  <img src={ArrowDown} />
                </div>

                <PortisInstance />
              </Fragment>
            );
          }}
        </Web3Consumer>
      </SignUpCard>
    </CardContainerLayout>
  );
};
