import React from 'react';
import { Web3Consumer } from 'web3-react';
import { useHistory, useLocation } from 'react-router-dom';
import StyledGeneralButton from '../../shared/styles/StyledGeneralButton';
import { StyledCustomParagraph, StyledParagraphButton } from '../../shared/GeneralCard';
import StyledGeneralWrapper from '../../shared/styles/StyledGeneralWrapper';

import StyledCardLayout from '../../shared/styles/StyledCardLayout';

// import {
//   PUBLISHER_DASHBOARD_PAY_PER_SALE_ROUTE,
//   PUBLISHER_DASHBOARD_PER_PER_CLICK_ROUTE,
//   PUBLISHER_GA_CONNECT_ROUTE,
// } from "../../routes-config";
import {
  PUBLISHER_GA_CONNECT_ROUTE,
  PUBLISHER_DASHBOARD_ROUTE_WITH_PARAM,
} from '../../routes-config';
import { REWARD_PER_SALE_WORKFLOW } from '../PublisherWorkflow/PublisherWorkflow';
import ArrowDown from '../../assets/arrow-down.png';
import CardLayout from '../../shared/layout/CardLayout';
import OpenConnectorsModal from '../../connectors/containers/index';

const PublisherSignUp = () => {
  // const context = useWeb3Context();
  const history = useHistory();
  const location = useLocation();

  const { workflow } = location;

  return (
    <StyledCardLayout>
      <CardLayout>
        <StyledGeneralWrapper wrapperWidth="100%" wrapperFlex wrapperJustify="flex-end">
          <StyledParagraphButton
            buttonMargin="6px 12px 0 0"
            buttonFontSize={20}
            buttonFontWeight={900}
            buttonColor="#959090"
            onClick={() => history.push('/')}
          >
            x
          </StyledParagraphButton>
        </StyledGeneralWrapper>
        <Web3Consumer>
          {(context) => {
            const { active, connectorName, account, networkId } = context;
            return active ? (
              <>
                <div>
                  <StyledCustomParagraph
                    paragraphColor="#959090"
                    paragraphFontSize={24}
                    paragraphFontWeight={900}
                  >
                    Welcome!
                  </StyledCustomParagraph>
                </div>
                <div>
                  <StyledCustomParagraph
                    paragraphColor="#959090"
                    paragraphFontSize={22}
                    paragraphFontWeight={600}
                  >
                    your web3 connector:
                    {connectorName}
                  </StyledCustomParagraph>
                </div>
                <div>
                  <StyledCustomParagraph
                    paragraphColor="#959090"
                    paragraphFontSize={22}
                    paragraphFontWeight={600}
                  >
                    your public key:
                    {account}
                  </StyledCustomParagraph>
                </div>
                <div>
                  <StyledCustomParagraph
                    paragraphColor="#959090"
                    paragraphFontSize={22}
                    paragraphFontWeight={600}
                  >
                    the network id:
                    {networkId}
                  </StyledCustomParagraph>
                </div>
                <StyledGeneralButton
                  buttonWidth={200}
                  onClick={() =>
                    history.push(
                      workflow === REWARD_PER_SALE_WORKFLOW
                        ? PUBLISHER_GA_CONNECT_ROUTE
                        : `${PUBLISHER_DASHBOARD_ROUTE_WITH_PARAM}/clicks`,
                      // eslint-disable-next-line
                    )}
                >
                  Go To Dashboard
                </StyledGeneralButton>
              </>
            ) : (
              <>
                <div>
                  <StyledCustomParagraph
                    paragraphColor="#959090"
                    paragraphFontSize={22}
                    paragraphFontWeight={600}
                  >
                    Sign up with our supported web3 wallets
                  </StyledCustomParagraph>
                </div>
                <div>
                  <img src={ArrowDown} alt="scroll down" />
                </div>
                {workflow === REWARD_PER_SALE_WORKFLOW ? (
                  <>
                    <div>
                      <StyledCustomParagraph
                        paragraphColor="#959090"
                        paragraphFontSize={22}
                        paragraphFontWeight={600}
                      >
                        Connect Google Analytics
                      </StyledCustomParagraph>
                    </div>
                    <div>
                      <img src={ArrowDown} alt="scroll down" />
                    </div>
                    <div>
                      <StyledCustomParagraph
                        paragraphColor="#959090"
                        paragraphFontSize={22}
                        paragraphFontWeight={600}
                      >
                        Place URL and % of commission per sale
                      </StyledCustomParagraph>
                    </div>
                    <div>
                      <img src={ArrowDown} alt="scroll down" />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <StyledCustomParagraph
                        paragraphColor="#959090"
                        paragraphFontSize={22}
                        paragraphFontWeight={600}
                      >
                        Place URL and % reward per click
                      </StyledCustomParagraph>
                    </div>
                    <div>
                      <img src={ArrowDown} alt="scroll down" />
                    </div>
                  </>
                )}
                <div>
                  <StyledCustomParagraph
                    paragraphColor="#959090"
                    paragraphFontSize={22}
                    paragraphFontWeight={600}
                  >
                    Deposit commission payout. Withdraw any time.
                  </StyledCustomParagraph>
                </div>

                <div>
                  <OpenConnectorsModal />
                </div>
              </>
            );
          }}
        </Web3Consumer>
      </CardLayout>
    </StyledCardLayout>
  );
};

export default PublisherSignUp;
