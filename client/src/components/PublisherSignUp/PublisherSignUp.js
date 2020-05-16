import React, { Fragment } from "react";
import { Web3Consumer } from "web3-react";
import { useHistory, useLocation } from "react-router-dom";
import {
  SignUpCard,
} from "../shared/PublisherWizard/styles";
import { ConnectorsInstance } from "../../connectors/connectorsInstance";
import { PortisInstance } from "../../portis/PortisInstance";
import { GlobalButton } from "../shared/styles";
import {
  CustomParagraph,
  CardContainerLayout,
  CloseButtonContainer,
  ParagraphButton,
} from "../shared/GeneralCard";
import {
  PUBLISHER_DASHBOARD_PAY_PER_SALE_ROUTE,
  PUBLISHER_DASHBOARD_PER_PER_CLICK_ROUTE,
  PUBLISHER_GA_CONNECT,
} from "../../routes-config";
import { REWARD_PER_SALE_WORKFLOW } from "../PublisherWorkflow/PublisherWorkflow";
import ArrowDown from "../../assets/arrow-down.png";

export const PublisherSignUp = () => {
  // const context = useWeb3Context();
  const history = useHistory();
  const location = useLocation();

  const { workflow } = location;

  console.log(workflow);

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
                  onClick={() =>
                    history.push(
                      workflow === REWARD_PER_SALE_WORKFLOW
                        ? PUBLISHER_GA_CONNECT
                        : PUBLISHER_DASHBOARD_PER_PER_CLICK_ROUTE
                    )
                  }
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
                {workflow === REWARD_PER_SALE_WORKFLOW ? (
                  <Fragment>
                    <div>
                      <CustomParagraph
                        paragraphColor={"#959090"}
                        paragraphFontSize={22}
                        paragraphFontWeight={600}
                      >
                        Connect Google Analytics
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
                        Place URL and % of commission per sale{" "}
                      </CustomParagraph>
                    </div>
                    <div>
                      <img src={ArrowDown} />
                    </div>
                  </Fragment>
                ) : (
                  <Fragment>
                    <div>
                      <CustomParagraph
                        paragraphColor={"#959090"}
                        paragraphFontSize={22}
                        paragraphFontWeight={600}
                      >
                        Place URL and % reward per click
                      </CustomParagraph>
                    </div>
                    <div>
                      <img src={ArrowDown} />
                    </div>
                  </Fragment>
                )}
                <CustomParagraph
                  paragraphColor={"#959090"}
                  paragraphFontSize={22}
                  paragraphFontWeight={600}
                >
                  Deposit commission payout. Withdraw any time.
                </CustomParagraph>
                <PortisInstance />
              </Fragment>
            );
          }}
        </Web3Consumer>
      </SignUpCard>
    </CardContainerLayout>
  );
};
