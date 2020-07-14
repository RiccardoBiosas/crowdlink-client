import React from 'react';
import { useHistory } from 'react-router-dom';
import { useWeb3Context } from 'web3-react';
import {
  PUBLISHER_SIGN_UP_ROUTE,
  PUBLISHER_FEED_ROUTE,
  PUBLISHER_DASHBOARD_ROUTE_WITH_PARAM,
  PUBLISHER_GA_CONNECT_ROUTE,
} from '../../routes-config';
import {
  StyledParagraphButton,
  StyledCustomParagraph,
  StyledCustomH2,
} from '../../shared/GeneralCard';
import StyledGeneralWrapper from '../../shared/styles/StyledGeneralWrapper';

import StyledCardLayout from '../../shared/styles/StyledCardLayout';
import StyledColumnWrapper from '../../shared/styles/StyledColumnWrapper';
import CardLayout from '../../shared/layout/CardLayout';

// move to constant.js
export const REWARD_PER_SALE_WORKFLOW = 'PAY_PER_SALE';
export const REWARD_PER_CLICK_WORKFLOW = 'PAY_PER_CLICK';

const PublisherWorkflow = () => {
  const history = useHistory();
  const { active } = useWeb3Context();

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
        {/* <CardSubContainer subContainerHeight="100%" justify="space-around" align="flex-start"> */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <StyledCustomH2 h2FontWeight={600} h2FontSize={26}>
            I want my referral link to:
          </StyledCustomH2>
        </div>

        <StyledColumnWrapper columnWrapperFlexSize="2" columnWrapperJustify="space-around">
          <div>
            <StyledParagraphButton
              buttonColor="#7838D5"
              buttonFontWeight={900}
              buttonFontSize={24}
              onClick={() =>
                history.push({
                  pathname: active ? PUBLISHER_GA_CONNECT_ROUTE : PUBLISHER_SIGN_UP_ROUTE,
                  workflow: REWARD_PER_SALE_WORKFLOW,
                })
              }
            >
              Create +
            </StyledParagraphButton>
            <StyledCustomParagraph paragraphFontSize={20} paragraphColor="#696868">
              reward per sale (commission)
            </StyledCustomParagraph>
          </div>

          <div>
            <StyledParagraphButton
              buttonColor="#4C83D4"
              buttonFontWeight={900}
              buttonFontSize={24}
              onClick={() =>
                history.push({
                  pathname: active
                    ? `${PUBLISHER_DASHBOARD_ROUTE_WITH_PARAM}/clicks`
                    : PUBLISHER_SIGN_UP_ROUTE,
                  workflow: PUBLISHER_SIGN_UP_ROUTE,
                })
              }
            >
              Create +
            </StyledParagraphButton>
            <StyledCustomParagraph paragraphFontSize={20} paragraphColor="#696868">
              reward per click (traffic)
            </StyledCustomParagraph>
          </div>
        </StyledColumnWrapper>

        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <StyledCustomParagraph paragraphColor="#696868" paragraphFontSize={20}>
            Already created a campaign? Go to
            <StyledParagraphButton
              buttonColor="#4C83D4"
              buttonMargin="0 0 0 6px"
              onClick={() => history.push(PUBLISHER_FEED_ROUTE)}
            >
              dashboard
            </StyledParagraphButton>
          </StyledCustomParagraph>
        </div>
        {/* </CardSubContainer> */}
      </CardLayout>
    </StyledCardLayout>
  );
};

export default PublisherWorkflow;
